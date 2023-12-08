---
title: Table of Contents Component
shortDescription: 'Links in einem Inhaltsverzeichnis dynamisch hervorheben'
metaDescription: 'Eine Web Component, die CSS-Klassen zu Links in einem Inhaltsverzeichnis hinzufügen/entfernen kann, je nach Sichtbarkeit der zugehörigen Elemente im Viewport. Geschrieben mit Lit und TypeScript.'
date: 2023-04-28
layout: blog/post.njk
type: article
includeToc: true
draft: false
tags:  ['Lit', 'Web Components', 'TypeScript', 'Blog']
socialImage: '/img/social-images/2023/toc-observer-demo.jpg'
permalink: /blog/toc-observer/
jsFiles: [
  'index',
  'post',
  'theme-switch'
]
styleSheets: [
  'index',
  'blog-post',
  'components/toc-observer',
  'components/theme-switch',
  'prism-a11y-rework'
]
eleventyImport:
  collections: ["post"]
---
Eine Table of Contents (<abbr>TOC</abbr>) stellt ein Inhaltsverzeichnis dar und findet sich häufig in Blogs oder Artikeln wieder. Für meinen Blog (und alle die es nutzen möchten), habe ich eine Component entwickelt, welche Links in einem TOC dynamisch hervorheben kann, sobald die dazugehörigen Überschriften oder Abschnitte sichtbar werden. Eine Demo könnt ihr mobil im Header unter "Inhalt" oder neben dem Post an der Seite sehen.

Links zum Download gibt es hier: [GitHub](https://github.com/TonySpegel/toc-observer), [NPM](https://www.npmjs.com/package/toc-observer-component).
<div class="disclaimer">
  <span>Hinweis</span>
  <p>
    Dieser Post geht davon aus, dass ihr euch schon ein wenig mit Web Components beschäftigt habt - wenn nicht, ist das aber auch in Ordnung.
    Hier ein paar Links:
  </p>

- [MDN Web Docs: Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [lit.dev: What is Lit?](https://lit.dev/docs/)
- [Learn HTML!: Template, slot, and shadow](https://web.dev/learn/html/template/)
</div>

## Überlegungen zur Funktionsweise

"Live"-Inhaltsverzeichnisse, wie zuvor beschrieben gibt es einige - unterscheiden kann man diese vor allem darin, ob diese Abschnitte oder Überschriften hervorheben.

<figure style="max-inline-size: 620px">
  <img
    src="/img/2023/toc-observer/mdn-web-docs--toc-example.webp"
    width="1055"
    height="618"
    alt="Beispielhaftes Inhaltsverzeichnis mit Textabschnitt des Artikels 'Web Components' von MDN Web Docs"
    class="sample-img"
  >
  <figcaption>
    Beispielhaftes
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
      target="_blank"
      rel="noopener noreferrer"
    >Inhaltsverzeichnis</a> von MDN Web Docs
  </figcaption>
</figure>

Hier am Beispiel der MDN Web Docs kann man sehen, dass der Menüpunkt "Concepts and usage" weiterhin hervorgehoben wird, obwohl von diesem Abschnitt nur noch eine Zeile lesbar ist und der Abschnitt "Guides" bereits einen viel größeren Platz einnimmt. Ich habe mich dann gefragt, was diese Art des Inhaltsverzeichnisses überhaupt darstellen oder aussagen möchte. Denn wenn die beiden Abschnitte gleich viel Platz einnehmen würden, wäre immer noch "Concepts and usage" hervorgehoben. Aber geht es darum, was man gerade liest oder wo man sich im Post befindet? Insbesondere was man gerade liest, lässt sich ja nicht wirklich sagen. Nach etwas Recherche bin ich dann auf diesen [Post](https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/) von [Bramus Van Damme](https://www.bram.us/about/) gestoßen - dieser schlägt folgendes, vereinfachtes Markup vor:

```html
<section id="beschreibung">
  <h2>Beschreibung</h2>
  <p>…</p>
</section>
```
Also Abschnitte mit ID mit darauf folgender Überschrift. Auf diese Art werden später ganze Abschnitte erfasst und somit potentiell auch mehrere Links im TOC hervorgehoben. Das ist, wie ich finde, eine genauere Darstellung dessen was gerade auf der Seite angezeigt wird bzw. wo man sich gerade befindet. Weswegen diese Struktur aber für mich auch problematisch wurde, führe ich später noch genauer aus. Für diese Component gilt beispielhaft das folgende Markup:

```html
<toc-observer>
  <ul slot="toc">
    <li>
      <a href="#beschreibung">Beschreibung</a>
      <ul>
        <li>
          <a href="#lebensweise">Lebensweise</a>
        </li>
        <li><a href="#nahrung">Nahrung</a></li>
      </ul>
    </li>
  </ul>
</toc-observer>
```
Hierbei besonders wichtig ist, dass zum einen ein `ul` mit `slot="toc"` vorhanden ist und zum anderen Links zu diesen passenden Abschnitten oder Überschriften enthalten sind. Die Ordnung dieser Überschriften ist dabei nicht von Relevanz.

## IntersectionObserver & Datenstruktur

Dieses "Live"-Inhaltsverzeichnis wird häufig mit dem so genannten "ScrollSpy"-Feature in Verbindung gebracht und heutzutage mit dem [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) realisiert. Diese API ist in der Lage, dass Überschneiden von Elementen mit einem Elternelement oder des Dokuments zu überwachen und bietet somit genau das - was für diese Component benötigt wird.

Die hier entstehende Component ist verhältnismäßig kompakt, enthält kein eigenes Styling und arbeitet vor allem (imperativ) mit dem `Slot`-Element.

```typescript
import {LitElement, html} from 'lit';
import {
  customElement,
  queryAssignedElements,
} from 'lit/decorators.js';

@customElement('toc-observer')
export class TocObserver extends LitElement {
  /**
   * Converts '_tocList' into a getter that returns the assignedElements of the given slot.
   * Provides a declarative way to use HTMLSlotElement.assignedElements
   */
  @queryAssignedElements({slot: 'toc'})
  private _tocList?: Array<HTMLUListElement>;
  /**
   * Receive any items within '_tocList' if present
   */
  private get _tocListItems(): HTMLAnchorElement[] | null {
    return this._tocList?.length
      ? [...this._tocList[0].querySelectorAll<HTMLAnchorElement>('[href^="#"]')]
      : null;
  }
```

Wie zuvor demonstriert, wird das Inhaltsverzeichnis von "außen" über eine mit dem Slot-Attribut versehene Liste in die Component gegeben. Das hat zur Folge, dass alle Kind-Elemente dieser Liste manuell, wie hier in der `_tocListItems` Methode gezeigt, selektiert werden müssen.
Das Slot-Element selbst wähle ich mit Hilfe des `@queryAssignedElements`-[Decorators](https://lit.dev/docs/components/shadow-dom/#query-assigned-nodes) aus.

Diese `_tocListItems` (die Links des TOC) bilden nun die Grundlage der (plural) IntersectionObserver. Grundsätzlich kann man nämlich entweder einen IntersectionObserver haben, welcher mehrere Elemente überwacht oder jeweils einen pro Element. Ich habe mich für letzteres entschieden, da ich es als einfacher nachzuvollziehen empfunden habe. Angemessen wäre noch ein Test, ob es hierbei zu Performanceeinbußen kommen kann. Diese Observer entsprechen als Datenstruktur folgender `Map`:

```typescript
private anchorHashObserverMap: Map<
  HTMLAnchorElement['hash'],
  IntersectionObserver
>;
```
oder vereinfacht am Beispiel:
```bash
[
  ['#beschreibung', IntersectionObserver],
  ['#lebensweise', IntersectionObserver],
  ['#nahrung', IntersectionObserver]
]
```

Nun zum eigentlichen IntersectionObserver und zum hervorheben der Links:

```typescript
private createIdObserverMap(
  anchors: HTMLAnchorElement[],
): Map<HTMLAnchorElement['hash'], IntersectionObserver> {
  return new Map(
    anchors.map((anchor: HTMLAnchorElement) => {
      const {hash} = anchor;

      return [
        hash,
        new IntersectionObserver(
          (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
              if (entry.intersectionRatio > 0) {
                this.selectTocLink(hash)?.classList.add(this.tocActiveClass);
                return;
              }

              this.selectTocLink(hash)?.classList.remove(this.tocActiveClass);
            });
          },
          // IntersectionObserver options
          {
            root: this.ownerDocument.querySelector(this.rootElement!) || null,
            rootMargin: this.rootMargin,
          },
        ),
      ];
    }),
  );
}
```
Mit diesem Code iteriere ich über ein Array von Links, extrahiere jeweils den Hash um diesen in der `selectTocLink`-Methode als Selektor zu nutzen.
Zu diesen ausgewählten Links, wird dann eine CSS Klasse hinzugefügt/entfernt, sobald der dazugehörige Observer einen `intersectionRatio`-Wert von größer/kleiner 0 besitzt.

```typescript
private selectTocLink(id: string): HTMLAnchorElement | null {
  return this._tocList?.length
    ? this._tocList[0].querySelector<HTMLAnchorElement>(`[href="${id}"]`)
    : null;
}
```

Auch hier wieder manuelles selektieren der Links. Das ist eigentlich ganz grob auch schon alles, was die reine Funktionalität betrifft. Aber wie eingangs erwähnt, bringt die Entscheidung auch Abschnitte zu unterstützen ein paar Herausforderungen mit sich, auf die ich im nächsten Abschnitt eingehe.

## Verschiedene HTML Strukturen unterstützen
Das eingangs erwähnte, vereinfachte Markup geht davon aus, dass Sections eine ID besitzen. Üblicher ist es aber in <abr>SSG</abr> (Static site generators), eine Section zu haben auf die eine Überschrift mit ID und einem Link folgt. Also eher so:

```html
<section>
  <h2 id="beschreibung">
    <a href="#beschreibung">Beschreibung</a>
  </h2>
  <p>Opossums sind die größten Beutelratten.</p>
</section>
```
Das liegt daran, dass solche SSG häufig mit Markdown-Dateien arbeiten und anhand derer HTML erzeugt wird. Es ist also naheliegend, die ID direkt an Überschriften anzuhängen.

```md
## Beschreibung
Opossums sind die größten Beutelratten.
```
Das Problem hiermit ist, dass man nun ausgehend vom Link dessen Elternelement auswählen muss, wenn man eine Section überwachen möchte. Am einfachsten wäre es, den CSS Selektor `:has()` zu nutzen - Stand jetzt wird dieser aber noch nicht von allen Browsern unterstützt.

```typescript
/**
 * Useful for observing nested markup like this:
 * <section>
 *   <!-- ^observe -->
 *   <h2 id="possum">Possum</h2>
 * </section>
 *
 * Observing wrapper elements instead of just headings
 * has the advantage that those have more area to intersect with.
 *
 *     ┌─────────┐
 *     │ #possum │
 *   ┌─┼─────────┼─┐
 *   │ │         │ │
 *   │ └─────────┘ │< Viewport
 *   │ ^section    │
 *   └─────────────┘
 */
@property({type: Boolean})
public observeParent = false;

// Should be used together with observeParent
@property({type: String})
public parentSelector = 'section';

/**
 * The 'firstUpdated' lifecycle is called after the component's DOM
 * has been updated the first time, immediately before updated() is called.
 * Only then an element's slot content (our toc items) is available and can be observed.
 */
override firstUpdated(): void {
  // Observe items when at least one is available
  if (this._tocListItems?.length) {
    this.anchorHashObserverMap = this.createIdObserverMap(this._tocListItems);

    this.anchorHashObserverMap.forEach((observer, anchorHash) => {
      const item = this.ownerDocument.querySelector(anchorHash);

      if (this.observeParent === false && item) {
        observer.observe(item);
      }

      if (
        this.observeParent === true &&
        item!.closest(this.parentSelector) !== null
      ) {
        observer.observe(item!.closest(this.parentSelector)!);
      }
    });
  }
}
```
Die hier verwendete `firstUpdated` Methode ist ein so genannter [Lifecycle](https://lit.dev/docs/components/lifecycle/) und wie in dessen Kommentar beschrieben, der Zeitpunkt, an dem der Inhalt des Slots verfügbar ist. Es wird die `anchorHashObserverMap` erstellt und die enthaltenen Observer beginnen ihre Elemente zu überwachen. Abhängig davon, ob die Component mit dem `observeParent`-Attribut versehen wird oder nicht, wird entweder by default ein Abschnitt oder ein beliebig wählbares Element überwacht.

```html
<toc-observer observeParent>
  <ul slot="toc"></ul>
</toc-observer>
```

Übrig bleibt nun nur noch, das Überwachen der Elemente zu beenden, für den Fall das `<toc-observer>` aus dem DOM entfernt wird. Auch das. lässt sich bequem in einem Lifecycle lösen:

```typescript
/**
 * Stop observing when the component is removed from the DOM
 */
override disconnectedCallback(): void {
  /**
   * As there are no toc-items left to highlight,
   * observing elements should be stopped
   */
  this.anchorHashObserverMap.forEach((obs) => obs.disconnect());
}
```

Eine Lit Web Component besitzt außerdem eine `render`-[Methode](https://lit.dev/docs/components/rendering/). Diese fällt allerdings sehr kurz aus, da die Component ausschließlich imperativ mit dem Inhalt des Slots arbeitet.

```typescript
override render() {
  return html`<slot name="toc"></slot>`;
}
```

## Limitationen & Fazit

Das imperative selektieren von DOM-Elementen außerhalb des Shadow-DOM fühlt sich meiner Empfindung nach immer etwas umständlich an, da nicht direkt ersichtlich ist, in welchem Zusammenhang Logik und User Interface stehen und man sich darauf verlassen muss, dass die hinzugefügten Elemente den intern vorhergesehenen entsprechen. Als Limitation sehe ich, dass im Moment noch die (reactive) `observeParent`-Property verwendet werden muss, statt auf den CSS-Selektor `:has()` zurückgreifen zu können. Außerdem ist der Hash in `Map<HTMLAnchorElement['hash'], IntersectionObserver>` doch nicht ganz ideal, da so auch Elemente erfasst werden, die lediglich als Sprungmarken zu Überschriften gedacht sind. Als Verbesserung werde ich den Selektor konfigurierbar machen, so dass dieser spezifischer ist und nur die Elemente überwacht werden, welche wirklich relevant sind.
