---
title: Beschleunigte Navigation mit Link prefetching
shortDescription: 'Wie man rel="prefetch" durch Interaktionen wie bspw. mouseover oder focus optimieren kann'
metaDescription: 'Entwicklung eines JS-Packages zur Optimierung des Ladens von Ressourcen mit rel=prefetch durch Interaktionen wie mouseover oder focus.'
date: 2021-10-04
layout: blog/post.njk
includeToc: true
tags:  ['JavaScript', 'TypeScript', 'Blog']
permalink: /blog/beschleunigte-navigation-mit-addPrefetchLink/
type: article
jsFiles: [
  'theme-switch',
  'index',
  'post',
]
styleSheets: [
  'index',
  'blog-post',
  'components/toc-observer',
  'components/theme-switch',
  'prism-a11y-rework'
]
---
Prefetching beschreibt einen Prozess, welcher eventuell benötigte Inhalte vorlädt, um diese schneller aufrufen zu können. Das kann beispielsweise so aussehen: `<link rel="prefetch" href="/img/catsarecute.jpg" />`. Browser werden diese Ressource dann herunterladen und zwischenspeichern (allerdings nur im [Idle](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#how_is_browser_idle_time_determined)).

Alle Links einer Seite für das Prefetching hinzuzufügen ist natürlich wenig sinnvoll.
Um das zu optimieren ist mein Ansatz, Links nur auf eine Interaktion hin zu prefetchen - also beispielsweise das Zeigen mit der Maus oder das Fokussieren mit einer Tastatur. Inspiration habe ich mir hierbei durch das von Google entwickelte [Quicklink](https://getquick.link/) geholt. Der entscheidende Unterschied zu meiner Lösung ist, dass Quicklink alle Links im sichtbaren Bereichen vorlädt (wenn der Browser im Idle ist) und nicht durch eine Interaktion.

Links zu meiner Lösung _addPrefetchLink_:
- [Demo (Codepen)](https://codepen.io/TonySpegel/full/PojrqZb)
- [NPM](https://www.npmjs.com/package/add-prefetch-link)
- [GitHub](https://github.com/TonySpegel/addPrefetchLink)

## Anforderungen

- Links welche ein `mailto:` oder `tel:` enthalten, sollen nicht prefetched werden
- Ist ein Datensparmodus aktiv oder ist die Verbindung zu langsam, sollen keine Links prefetched werden
- Pro Link darf nur eine Interaktion das Prefetching auslösen

## Die richtigen Links selektieren


Da es bei E-Mail Links, Telefonnummern oder Linkf auf aktuellen Seite keinen Sinn ergibt, diese zu prefetchen, sollten diese ignoriert werden. Ich nutze dazu einfach einen CSS Selektor welche alle Links selektiert, deren href-Attribut nicht mit dem entsprechenden Prefix beginnt:
```javascript
/* JavaScript */
const links = document.querySelectorAll(
  'a:not([href^="mailto:"]):not([href^="tel:"]):not([href^="#"])',
);

document
  .querySelectorAll(links)
  .forEach((link) => {});
```
Man könnte natürlich auch ein Array erstellen und dieses entsprechend filtern.

## Links prefetchen
Als erstes definiere ich eine Funktion welche Links zum `<head>` hinzufügen soll, als einzigen Parameter ein Event erwartet und als Rückgabetyp zunächst `void` definiert:
```typescript
/* TypeScript */
const addToHead =
  (event: Event): void => {}
```
`event` nutzt schließlich dessen Property `target` als Referenz auf das Objekt (hier ein Link) welches das Event ausgelöst hat.

### Datensparmodus und langsame Verbindungen berücksichtigen
Um zu prüfen, ob entweder ein Datensparmodus aktiv oder die Verbindung zu langsam ist reichen diese beiden Bedingungen:
```typescript
/* TypeScript */
const addToHead =
  (event: Event): void | Error => {
    if (navigator.connection) {
      const connection = navigator.connection;
      /**
       * Check if a data saver is running
       */
      if (connection.saveData) {
        return new Error('Prefetch is not available when using Data Saver');
      }
      /**
       * Check for slow connections, don't
       * prefetch on 2g or slower.
       * effectiveType can be: slow-2g, 2g, 3g, or 4g
       */
      if (connection.effectiveType.includes('2g')) {
        return new Error('Prefetch is not available on slow connections');
      }
    }
}
```
Allerdings besitzt nicht jeder Browser Informationen über dessen Verbindungstyp so dass hier zuerst über `navigator.connection`
auf das Vorhandensein hin geprüft wird. Die hier geworfenen Fehler werden nicht verwendet oder angezeigt um nicht unnötig zu stören - es soll vor allem einfach nicht prefetched werden.

TypeScript wirft hier zunächst einen Fehler, da es die beiden Properties `saveData` und `effectiveType` nicht kennt. Um das zu beheben, habe ich das entsprechende Interface erweitert:
```typescript
/* TypeScript */
export {};

declare global {
  interface NetworkInformation {
    saveData: boolean;
    effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  }
}
```

### Links prefetchen
Das eigentliche Prefetching ist unspektakulär. Es wird ein Link-Element erzeugt, dessen `href`- auf einen Link
und das `rel`-Attribut auf `prefetch` gesetzt und schließlich zum `<head>` hinzugefügt:
```typescript
const addToHead = (event: Event): void | Error => {
  // (...) previous code

  if (event.target !== null) {
    const link = document.createElement('link');

    link.href = (<HTMLAnchorElement>event.target).href;
    link.rel = 'prefetch';

    document.head.appendChild(link);
  }
};
```

## Eine Interaktion pro Link
Um unnötige Netzwerkanfragen zu vermeiden, soll nur eine Interaktion pro Link das Prefetching auslösen.
Wurde ein Link beispielsweise mit der Tastatur fokussiert, soll ein Hovern mit der Maus keinen weiteren Vorgang auslösen.
Ein Event an sich nur ein einziges Mal auslösen ist einfach:

```javascript
element.addEventListener(
  'click',
  () => {},
  { once: true }
);
```
Pro Element nur ein einziges Event auszulösen ist etwas komplizierter.
Vorbereitend wird wieder eine leere Funktion erstellt. Diese erwartet einen Link und ein Array an Events - hier vorbelegt mit `mouseover` und `focus`.
```typescript
/* TypeScript */
export const addPrefetchLink = (
  link: HTMLAnchorElement,
  userEvents: ReadonlyArray<keyof HTMLElementEventMap> = [
    'mouseover',
    'focus',
  ],
) => {}
```
Der Rest des Codes wird in zwei Teile unterteilt, einen der EventListener entfernt und das hinzufügen zum `<head>` übernimmt und einen welcher EventListener hinzufügt.
```typescript
/* TypeScript */
export const addPrefetchLink = (
  link: HTMLAnchorElement,
  userEvents: ReadonlyArray<keyof HTMLElementEventMap> = [
    'mouseover',
    'focus',
  ],
) => {
  const handler = (event: Event) => {
    // Remove listeners
    userEvents.forEach((userEvent) =>
      link.removeEventListener(userEvent, handler),
    );
    addToHead(event);
  };

  // Register listeners
  userEvents.forEach((userEvent) =>
    link.addEventListener(userEvent, handler),
  );
};
```

Die hier als `handler` benannte Funktion entfernt zunächst alle auf einen Link gebundenen Events und fügt dann den Link via `addToHead` hinzu. Fertig! Wobei da eine Sache noch bleibt: sollte ein Link öfters vorhanden sein, wird dieser dennoch ein weiteres mal hinzugefügt. Lösen könnte man das wohl mit einem `Set` - das kommt (vielleicht) in einem Update.

## Fazit
Neben der Herausforderung keine unnötigen Netzwerkanfragen auszulösen, war das Ganze
auch ein erster erfolgreicher Versuch ein NPM-Modul zu schreiben und zu veröffentlichen.
Wichtige Felder die zur Veröffentlichung benötigt werden, sind: `main`, `type` sowie `files` in der package.json.
Weitere Details zum Projekt auf Github.
Da es mein erstes NPM-Modul ist, freue ich mich natürlich besonders über Feedback <a class="text-link" target="_blank" rel="noopener noreferrer" href="mailto:tony.spegel@gmail.com" title="E-Mail schreiben">tony.spegel@gmail.com</a>
