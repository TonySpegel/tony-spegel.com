---
title: 'Einen Decorator für <slot> Inhalte entwickeln'
metaDescription: Ein ClassAccessor-Decorator für Web Components welcher eine Property in einen Getter zu  konvertiert, um den Inhalt <slot> zugewiesener Elemente einfacher verarbeiten zu können.
shortDescription: Den Inhalt <slot> zugewiesener Elemente mit einem Decorator verarbeiten
date: 2023-09-20
layout: blog/post.njk
type: article
includeToc: true
draft: false
tags:  ['Decorator', 'TypeScript', 'Lit', 'Web Components', 'Upcoming']
permalink: /blog/query-assigned-element-content/
jsFiles: [
  'theme-switch',
  'index',
  'post'
]
styleSheets: [
  'index',
  'blog-post',
  'components/toc-observer',
  'components/theme-switch',
  'prism-a11y-rework'
]
---

## Motivation

Vor einer Weile habe ich eine Web Component [entwickelt](/blog/toc-observer), welche CSS-Klassen zu Links in einem Inhaltsverzeichnis
je nach Sichtbarkeit der zugehörigen Elemente im Viewport hinzufügen/entfernen kann.
```html
<toc-observer>
  <ul slot="toc">
    <li><a href="#tethys">Tethys</a></li>
    <li><a href="#mimas">Mimas</a></li>
  </ul>
</toc-observer>

<section id="tethys"></section>
<section id="mimas"></section>
```
Web Components bieten den Vorteil, dass diese so konfiguriert werden können, dass sie in sich geschlossen sind und von außen nur über klar definierte Schnittstellen beeinflusst werden können.

Zu diesen Schnittstellen gehört das `<slot>`-Element bzw. Attribut. Es verhält sich als ein Platzhalter, welcher eigenes Markup, in dem Fall das Inhaltsverzeichnis meiner Posts, in die Component aufnehmen kann. Um nun den "Inhalt" (die Links) des zum Slot zugewiesenen Element ( das `<ul>`) verarbeiten zu können, benutze ich in einem ersten Schritt den zu Lit gehörenden `@queryAssignedElements`-[Decorator](https://lit.dev/docs/api/decorators/#queryAssignedElements):

```ts
@customElement('toc-observer')
export class TocObserver extends LitElement {
  @queryAssignedElements({slot: 'toc'})
  private _tocList?: Array<HTMLUListElement>;

  private get _tocListItems(): HTMLAnchorElement[] | null {
    return this._tocList?.length
      ? [...this._tocList[0].querySelectorAll<HTMLAnchorElement>('[href^="#"]')]
      : null;
  }
}
```
Bei der Nutzung dieses Decorators bin ich zunächst darüber gestolpert, dass ausschließlich die zum Slot zugewiesenen Elemente zurückgegeben werden - was so aber auch Sinn ergibt. Deswegen nutze ich in einem weiteren Schritt auch einen Getter, welcher mit einem `querySelectorAll` die enthaltenen Links zurückgibt. Das ist nicht großartig kompliziert aber hat mich dann motiviert meinen eigenen Decorator zu schreiben der am Ende beide Schritte in einem vereint:
```typescript
class DecoElement extends HTMLElement {
  @queryAssignedElementContent({ selector: 'li', slot: 'list' })
  accessor #tocLinks!: Array<HTMLAnchorElement>;
}
```

## Implementation
<details>
   <summary>Gut zu wissen: Decorators</summary>
   <div id="details-content">
    <p>
      Decorators ermöglichen es, das Verhalten von Classes und deren Member zu ändern. Dazu zählt beispielsweise das Hinzufügen von Metadaten, die Erweiterung von Funktionalität oder die Validierung von Daten.
    </p>
    <p>
      Es ist wichtig zu beachten, dass hier Standard Decorators gemeint sind, die derzeit als <a href="https://github.com/tc39/proposal-decorators">Stage 3 Proposal</a> existieren. (Legacy) Decorators können bereits seit längerem genutzt werden und entsprechen einem vorherigen Entwurf. Obwohl Standard Decorators derzeit von keinem Browser unterstützt werden, können sie bereits mit Compilern wie TypeScript (>= 5.x.x) oder Babel genutzt werden.
    </p>
   </div>
</details>

Meine Implementation basiert auf dem derzeit aktuellen Stage 3 Proposal und unterscheidet sich somit von den bisher bereits verfügbaren Legacy Decorators (siehe _Gut zu wissen_). Den aktuellen Status des Proposals verfolge ich schon eine Weile und habe dann schließlich im Mai mit der Umsetzung begonnen. Eine kleine Einschränkung direkt vorab: zum jetzigen Zeitpunkt ist es noch nicht mögliche beide Arten von Decorators parallel in Lit zu nutzen - das ist aber bereits in Arbeit.

Die eigentliche Logik im Code ist, wie in der [Motivation](#motivation) zu sehen, überschaubar. Die Herausforderung für mich lag eher darin, ein so umfassendes, technisches Dokument wie das Proposal komplett zu lesen und so weit zu verstehen, dass ich damit arbeiten konnte. Viel gelernt habe ich im Austausch mit [Valentin Degenne](https://github.com/vdegenne), welchen ich über den [Lit Discord](https://discord.gg/eMaSX7G5) kennenlernen durfte und mich bei Fragen immer wieder unterstützt hat.

Nach einer Weile habe ich dann verstanden, dass ich einen `Class Auto-Accessor` benötige. Diese werden mit dem neuen `accessor` Keyword ausgezeichnet.

Eine Auto-accessor definiert automatisch ein Getter/Setter-Paar so dass:
```js
class C {
  accessor x = 1;
}
```
grob zu folgendem übersetzt wird:
```js
class C {
  #x = 1; // '#' marks private fields in JS

  get x() {
    return this.#x;
  }

  set x(val) {
    this.#x = val;
  }
}
```

Auf diese Art funktioniert das nur für einfache Felder. Das stellt aber kein Problem dar, weil diese sich weiter anpassen lassen. Grob ausgedrückt soll der Decorator dieses so dekorierte Feld nehmen und mit einem angepassten Getter ersetzen in dem es mit zusätzlicher Logik angereichert wird.

Meine Implementation basiert auf Grund der Nähe auch stark auf dem `queryAssignedElements`-[Decorators](https://github.com/lit/lit/blob/main/packages/reactive-element/src/decorators/query-assigned-elements.ts#L79):

```ts
// A: Signature
export function queryAssignedElementContent<
  T extends Element, // The `this` type to which the target applies
  E extends Element // The property type for the class `accessor` field.
>(options: QueryAssignedElementContentOptions) {
  return function (
    _target: ClassAccessorDecoratorTarget<T, E[]>,
    // Context object containing information about the value being decorated
    context: ClassAccessorDecoratorContext<T, E[]>
  ) {
    // B: Runtime check for better DX
    if (context.kind !== 'accessor') {
      throw new TypeError('Only supported on class accessors');
    }

    // C: Building a new getter
    const result: ClassAccessorDecoratorResult<T, E[]> = {
      get(this: T) {
        const { shadowRoot } = this; // Root node within a shadow dom
        const { selector, slot } = options; // Extract options

        // C1: Construct a slot element selector
        const slotSelector = slot ? `slot[name=${slot}]` : `slot:not([name])`;
        // C2: Select a slot element
        const slotElement =
          shadowRoot?.querySelector<HTMLSlotElement>(slotSelector);
        // C3: Get slot assigned elements
        const assignedElements = slotElement?.assignedElements({
          ...options,
          flatten: true,
        });
        // C4: Query slot for its content
        const slotContent = assignedElements?.length
          ? [...assignedElements[0].querySelectorAll<E>(selector)]
          : [];

        return slotContent;
      },
    };
    return result;
  };
}
```

### A: Signature

Ein `ClassAccessorDecorator` gibt ein `ClassAccessorDecoratorResult` zurück, welches als Parameter ein `target` (hier ungenutzt) sowie `context` erwartet. Um dieselben Konfigurationsmöglichkeiten wie der `queryAssignedElements` zu bieten, definiere dieses Interface:
```ts
interface QueryAssignedElementContentOptions {
  /**
   * The selector used to query the content of the slot's assigned elements.
   * Must be a valid CSS selector string.
   * ```html
   * <ul slot="list">
   *   <li>Tethys</li> // ← use a selector to query these elements
   * </ul>
   * ```
   */
  selector: string;
  /**
   * The name of the slot to query elements from.
   * ```html
   * <ul slot="list"></ul>
   *           ^
   * ```
   * @optional
   */
  slot?: string;
}
```
Lediglich `slot` definiere ich als optional, da ich später ohne Angabe eines Namens auf den Default Slot zurückgreife.

### B: Runtime check

Um nicht nur in TypeScript sondern auch in JavaScript etwas mehr Sicherheit zu bieten, habe ich noch einen Check integriert, um sicherzustellen, dass der Decorator nur an der richtigen Stelle, nämlich an einer Class Property, verwendet werden kann. Wäre es nicht für diesen Check wäre auch das `context`-Objekt unbenutzt.

### C: Building a new getter

Der Kern dieses Decorators ist der neue Getter. Im ersten Schritt (**C1**) konstruiere ich den Slot-Selektor für **C2** und greife auf den Standard-Slot zurück, sollte kein `name` übergeben werden. Eine Web Component kann aber muss nämlich nicht nur aus einem Slot-Element bestehen. Inklusive **C3** ist die Implementierung noch nah am Vorbild denn erst in **C4** extrahiere ich den für mich eigentlich interessanten Inhalt.

## Fazit & Ausblick

Auch wenn ich zum jetzigen Stand meinen Decorator noch nicht in meinen Projekten nutzen kann, habe ich hier eine Menge gelernt und wertvolles Feedback einholen können sowohl was die Implementierung aber auch insbesondere das Arbeiten mit anspruchsvolleren Spezifikationen betrifft.
Vor allem das Ganze typsicher umzusetzen und Generics über mehrere Ebenen hinweg zu nutzen war nicht ganz ohne. Auch spannend würde ich es bezeichnen, dass zur Zeit der Umsetzung wenig bis eher keine anderen Posts existierten, die genau diese Art an Decorators behandelt haben.

Das Ganze sehe ich im Moment noch als experimentell aber als guten ersten Schritt für weitere Entwicklungen an. Logik hinter einem Decorator zu verstecken ist natürlich auch immer etwas <span aria-hidden="true">✨</span>Magie<span aria-hidden="true">✨</span>, da es auf den ersten Blick nicht ersichtlich ist, was konkret passiert. Da hier aber der Anwendungsfall relativ kompakt ist, sehe ich das als kein großes Problem an.

Jetzt bleibt meinerseits lediglich zu warten, bis seitens Lit die Unterstützung für "Hybrid"-Decorators kommt und Browser anfangen Standard-Decorators zu implementieren. In meinem nächsten Post wird es um einen weiteren Decorator und dazu passenden Anwendungsfall gehen.
