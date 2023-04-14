---
title: Image Comparison Component
description: 'Bilder vergleichen: Slider, Overlay, Side-by-Side'
date: 2023-04-14
layout: blog/post.njk
type: article
includeToc: true
draft: false
tags:  ['Lit', 'Web Components', 'a11y', 'TypeScript', 'Blog']
socialImage: '/img/2023/image-comparison/2022_1004_14254000.jpg'
permalink: /blog/image-comparison-component/
imports: [
  'theme-switch',
  'index',
  'post',
  'image-comparison'
]
---
In diesem Post geht es darum, eine Component zu entwickeln welche es ermöglicht, Bilder auf verschiedene Arten zu vergleichen. Bilder können mit einem Slider, einem Overlay oder in einer Split-Ansicht verglichen werden.

<image-comparison variant="slider" sliderPrompt="Slider bewegen, um zu vergleichen" class="post-img" id="image-comparison-demo">
  <label slot="label-before">Ohne Filter</label>
  <label slot="label-after">Graustufen</label>
  <img slot="image-before" src="/img/2023/image-comparison/2022_1004_14254000-w3120--opt.jpg" width="440" alt="Blumen in Paris" />
  <img slot="image-after" src="/img/2023/image-comparison/2022_1004_14254000-w3120_grayscale--opt.jpg" width="440" alt="Blumen in Paris dargestellt in Graustufen" />
</image-comparison>

<div class="slider-set-wrapper">
  <fieldset id="slider-variant-set" class="slider-set">
    <legend>Variante</legend>
    <div>
      <input type="radio" id="slider-variant" name="variant" value="slider" checked>
      <label for="slider-variant">Slider</label>
    </div>
    <div>
      <input type="radio" id="overlay-variant" name="variant" value="overlay">
      <label for="overlay-variant">Overlay</label>
    </div>
    <div>
      <input type="radio" id="split-variant" name="variant" value="split">
      <label for="split-variant">Split</label>
    </div>
  </fieldset>

  <!-- <fieldset id="slider-reading-direction-set" class="slider-set">
    <legend>Leserichtung</legend>
    <div>
      <input type="radio" id="ltr" name="reading-direction" value="ltr" checked>
      <label for="ltr"><abbr>LTR</abbr> (Left To Right)</label>
    </div>
    <div>
      <input type="radio" id="rtl" name="reading-direction" value="rtl">
      <label for="rtl"><abbr>RTL</abbr> (Right To Left)</label>
    </div>
  </fieldset> -->
</div>

`<image-comparison>` unterstützt neben diesen Varianten diverse Tastaturkürzel, verschiedene Leserichtungen, Custom Events und ist durch Slots, Attribute und CSS Custom Properties konfigurierbar. Im Folgenden gehe ich auf diese Aspekte ein und beginne mit dem Slider.

[GitHub](https://github.com/TonySpegel/image-comparison), [NPM](https://npmjs.com/package/image-comparison-component), [Lit Playground](https://lit.dev/playground/#gist=2b393dfba73ce32f7b3426492142b926)
<hr>

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

## Slider
Die Slider-Variante ist die komplexeste der drei Varianten. Komplex vor allem durch die vielseitigen Interaktions- und Konfigurationsmöglichkeiten aber weniger durch das CSS.

### HTML & CSS
Wenn man die Component nutzen möchte, gilt folgendes HTML. Die Label sind zwar optional aber zu mindestens die `alt`-Attribute der Bilder sollten gesetzt werden:
```html
<image-comparison
  variant="slider"
  sliderPrompt="Move the slider to compare"
  overlayPrompt="Tap and hold to compare"
>
  <label slot="label-before">Ohne Filter</label>
  <label slot="label-after">Graustufen</label>
  <img slot="image-before" src="/img/2023/before.jpg" alt="Rote Zierquitte" />
  <img slot="image-after" src="/img/2023/after.jpg" alt="Rote Zierquitte (Graustufen)" />
</image-comparison>
```
Auffällig sind hierbei vor allem die drei gesetzten Attribute sowie die zwei Label und Bildelemente. Die `variant` bestimmt sowohl das Verhalten als auch das Aussehen der Component, die beiden Prompt-Attribute geben kurze Hinweise zur Interaktion. Die sogenannten `slot`-Attribute sind eine Eigenheit der Web Components und können als eine Art Schnittstelle gesehen werden. In dieser Component werden sie genutzt, um die zu vergleichenden Bilder sowie deren Label anzuzeigen. Intern folgt das HTML diesem vereinfachten Schema:
```html
<div id="image-container">
  <slot name="label-before"></slot>
  <slot name="label-after"></slot>

  <div id="container-before">
    <slot name="image-before"></slot>
  </div>

  <div id="container-after" style="clip-path: inset(0 50% 0 0)">
    <slot name="image-after"></slot>
  </div>

  <button style="left: 50%"></button>
</div>
```
Neben zusätzlichem Markup, wie dem Button, steckt der größte Teil der <span aria-hidden="true">✨</span>Magie<span aria-hidden="true">✨</span> in der `clip-path: inset(0 50% 0 0)`-Anweisung des zweiten Containers. Der umliegende Container an sich ist schnell erklärt:
```css
#image-container {
  display: inline-grid;
  grid-template-areas: "images";
  overflow: hidden;
}
```
Ich setze hier vor allem deswegen auf ein Grid-Layout, damit ich die verschiedenen Elemente einfach übereinander stapeln kann. Dazu nutze ich `grid-template-areas: "images"` um mich in den übrigen Elementen auf dieses beziehen zu können. `overflow: hidden` wird dann gesetzt, um den dann überstehenden Divider des Buttons abzuschneiden.

```css
#container-before, #container-after {
  grid-area: images;
}

button {
  grid-area: images;
  align-self: center;
  position: relative;

  border: var(--thumb-border-width) solid var(--slider-color);
  border-radius: 50%;
  width: var(--thumb-size);
  aspect-ratio: 1;
  transform: translateX(-50%);

  cursor: col-resize;
  background-color: transparent;
  z-index: 3;
}

button:before, button:after {
  content: '';
  width: var(--thumb-bar-width);
  left: calc(50% - calc(var(--thumb-bar-width) / 2));
  background-color: var(--slider-color);
  position: absolute;
  height: 100vh;
  z-index: -1;
}

button:before {
  bottom: calc(50% + calc(var(--thumb-size) / 2) - calc(var(--thumb-border-width) / 2));
}

button:after {
  top: calc(var(--thumb-size) - var(--thumb-border-width));
}
```
Wie am Anfang beschrieben werden nun beide Container sowie der Button mit `grid-area: images` übereinander gestapelt. Die Reihenfolge im Markup entscheidet dann darüber, welches Element ganz oben liegt - hier ist es der Button. Dieser wird dann mit `align-self: center` vertikal zentriert und horionztal um die Hälfte der eigenen Breite verschoben. Um dann schließlich den Divider des Sliders zu erzeugen, positioniere ich einfach die Pseudo-Elemente `:before` und `:after` ober- und unterhalb des Buttons und nutze dafür einige CSS Variablen. Auf diese Weise habe ich zwar einige Variablen aber das macht es für mich nachvollziehbarer und einfacher zu rechnen, was wie platziert wird.
Außerdem ist es so für andere ebenso leichter weil klar ist, was angepasst werden kann. Das war es auf der CSS Seite des Sliders somit, eine Demo zu diesem Stand könnt ihr auf [Codepen](https://codepen.io/TonySpegel/pen/oNabodW?editors=1100) betrachten.

### Entwicklung der Slider-Funktion

Die wichtigste Information, welche der Slider benötigt, ist die Position des Dividers.
```ts
class ImageComparison extends LitElement {
  @property({ type: Number, reflect: true })
  public sliderPosition: number = 50;
}
```
Lit nutzt an vielen Stellen so genannte Decorators, ein Pattern welches es einem ermöglicht, verschiedene Konstrukte mit zusätzlicher Funktionalität zu erweitern. Dazu ein Zitat aus der offiziellen [Dokumentation](https://lit.dev/docs/components/properties/):
<blockquote cite="https://lit.dev/docs/components/properties/">
"Lit components receive input and store their state as JavaScript class fields or properties. Reactive properties are properties that can trigger the reactive update cycle when changed, re-rendering the component, and optionally be read or written to attributes."
</blockquote>

In diesem Decorator werden zwei [Optionen](https://lit.dev/docs/components/properties/#property-options) genutzt. Zum einen `type`, diese gibt an auf welche Art ein Attribut intern konvertiert werden soll. Zum anderen sorgt `reflect` dafür, dass der interne Wert auch wieder nach außen an das Attribut gegeben wird. Vereinfacht ausgedrückt ermöglicht das eine Synchronisation des äußeren wie innneren Zustands.
```ts
<image-comparison sliderposition="50" variant="slider"></image-comparison>
// ↓↑
@property({ type: Number, reflect: true })
public sliderPosition: number = 50;
```
Jetzt zur eigentlichen Funktionalität, welche diesen Wert setzen wird. Lit setzt grundsätzlich auf einen deklarativen Ansatz um dessen Templates zu beschreiben. Statt Schritt für Schritt anzugeben, wie sich ein Template verändert, gibt man in deklarativen Ansätzen vor, wie ein Template in dessen finalten Zustand auszusehen hat. Das bedeutet nicht, dass man nicht beide Ansätzen mischen kann.

Dazu folgt der grundsätzliche weitere Aufbau des Templates. Alles was im Template anzuzeigen ist, wird in der `render()`-Methode aufgerufen:
```ts
export class ImageComparison extends LitElement {
  @property({ type: Number, reflect: true })
  public sliderPosition: number = 50;

  @state()
  private isRtl: boolean = false;

  render() {
    return html`
      <div id="image-container">
        <slot name="label-before"></slot>
        <slot name="label-after"></slot>

        <div id="container-before">
          <slot name="image-before"></slot>
        </div>

        <div
          id="container-after"
          style=${this.isRtl
            ? `clip-path: inset(0 ${this.sliderPosition}% 0 0)`
            : `clip-path: inset(0 0 0 ${this.sliderPosition}%)`}
        >
          <slot name="image-after"></slot>
        </div>

        <button
          @mousedown=${() => { this.setSlidingState(true); }}
          @mousemove=${(e: MouseEvent) => this.slideCompareHandler(e)}
          style="${`left: ${
            this.isRtl ? -this.sliderPosition : this.sliderPosition
          }%`}"
        >
        </button>
      </div>
    `;
  }
}
```
Hier nutze ich zwei neue Konzepte im Lit Kontext: die [@-Syntax](https://lit.dev/docs/components/events/#adding-event-listeners-in-the-element-template) definiert JavaScript-typische EventListener, der `@state()`-Decorator einen ausschließlich internen Zustand. Inbesondere `isRtl` wird später wichtig sein um eine so genannte <abbr>RTL</abbr> (Right-to-left) script Unterstützung, also Sprachen welche von Rechts nach Links gelesen werden, zu bieten. Hier hat das den einfachen Hintergrund, dass ich das Vorzeichen im `left`-Attribut ändern oder im `inset()` das Rechteck von der anderen Seite aus aufziehen kann.

Jetzt zu den eigentlichen Methoden, ich gehe dabei nur auf die wirklich wichtigen und etwas komplizierteren ein:
```ts
private slideCompareHandler = (event: MouseEvent | TouchEvent): void => {
  this.slideCompare(event);
};

/**
 * Converts 'cursor' position and updates the UI accordingly
 */
private slideCompare = (event: MouseEvent | TouchEvent): void => {
  if (this.slidingActive) {
    let pos = this.convertCursorToSliderPosition(event);
    pos = this.isRtl ? 100 - pos : pos;

    this.sliderPosition = pos;
  }
};
```
Wenn `slidingActive` wahr ist, wird die Cursor-Position relativ zur Container-Position konvertiert und abhängig von der Leserichtung gesetzt.
Übrigens sieht man hier auch gut, dass nicht alles deklarativ sein kann und interne Werte natürlich auch imperativ gesetzt werden.

```ts
const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);

/**
 * The relative position of a cursor (as in: a touch or mouse device)
 * is converted into a clamped slider position value
 */
convertCursorToSliderPosition(event: TouchEvent | MouseEvent): number {
  const { left, width } = this.imageContainer.getBoundingClientRect();
  const { scrollX } = window;

  const pageX = event instanceof MouseEvent ?
    event.pageX :
    event.changedTouches[0].pageX;

  const xOffset = left + scrollX;
  const x = pageX - xOffset;

  const sliderPostion = parseFloat(
    clamp((x / width) * 100, 0, 100).toFixed(2)
  );

  return sliderPostion;
}
```
Abhängig davon ob es sich beim ausgeführten Event um ein `Touch`- oder `Mouse`-Event handelt, stehen unterschiedliche Properties zur Verfügung. In beiden Fällen wird jedoch `getBoundingClientRect()` genutzt, um die Position und Breite des Containers zu ermitteln. Mit Hilfe dieser wird in Abhängigkeit dann bestimmt, wo sich das Eingabegerät relativ zu diesem befindet, um am Ende diesen Wert in eine Zahl zwischen 0 und 100 zu konvertieren. Ich gebe zu, dass das etwas kompliziert und nicht einfach zu verstehen ist - aber damit werden diverse Eventualitäten abgedeckt die sonst zu einem Fehlverhalten führen würden.

Im Grunde genommen ist dass die Funktionalität die notwendig ist, um den Slider zu bewegen und Bilder vergleichen zu können. Das allein ist aber noch nicht ausreichend. Zum einen muss noch der Barrierefreiheit wegen (unter anderem) eine Tasaturunterstützung und zum anderen etwas was ich Housekeeping nenne, implementiert werden.

### Barrierefreiheit des Sliders
Zur Barrierefreiheit des Sliders zähle ich, dass dieser nicht nur mit einer Maus sondern möglichst mit beliebigen Eingabegeräten genutzt werden kann und auch seinen internen Zustand nach außen an Screenreader zu kommunizieren weiß. Wenn es darum geht, möglichst barrierefreie Lösungen zu entwickeln, ist die [Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) Seite des W3C ein optimaler Einstieg. Diese bietet diverse, immer wiederkehrende, Patterns wie beispielsweise Tabs, Slide Shows und Ähnliches an und geht dabei auf deren Besonderheiten ein. Das [Window Splitter](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/) Pattern passt hierbei am ehesten zur Slider-Variante.
Um Tasatureingaben abzufangen, extrahiere ich aus dem `KeyboardEvent` zum einen die gedrückten Tasten zu denen vor allem die Cursortasten zählen sowie `ctrlKey`, `metaKey` (<kbd>Win</kbd> / <kbd>⌘</kbd>) und `shiftKey` um diese in Kombination mit den Cursortasten zu nutzen.

```ts
/**
 * Applied when shift is pressed with an arrow key (variant 'slider')
 */
@property({ type: Number })
private sliderSteps: number = 5;

/**
 * Handle arrow, home & end keys and use more steps when shift is pressed
 */
private keyboardSliderHandler = (event: KeyboardEvent): void => {
  const { code, key, ctrlKey, metaKey, shiftKey } = event;
  const { isRtl } = this;
  const isLtr = !isRtl;
  const steps = shiftKey ? this.sliderSteps : 1;

  let position = this.sliderPosition;

  // These keys would scroll the page when pressed
  if (code === 'Space' || key === 'Home' || key === 'End') {
    event.preventDefault();
  }

  if ((key === 'ArrowLeft' && isLtr) || (key === 'ArrowRight' && isRtl)) {
    event.preventDefault(); // ← Firefox would highlight parts of the UI and labels w/o it
    position -= steps;
  }

  if ((key === 'ArrowRight' && isLtr) || (key === 'ArrowLeft' && isRtl)) {
    event.preventDefault(); // same as above regarding Firefox
    position += steps;
  }

  // Also often called 'Pos1' or '⌘ + ←' on MacOS
  if (key === 'Home' || ((metaKey || ctrlKey) && key === 'ArrowLeft')) {
    position = 0;
  }

  // End or '⌘ + →' on MacOS
  if (key === 'End' || ((metaKey || ctrlKey) && key === 'ArrowRight')) {
    position = 100;
  }

  // Center thumb position
  if (key === 'Enter') position = 50;

  this.sliderPosition = clamp(position, 0, 100);
};
```
Eine weitere Möglichkeit den Slider zu bedienen, ist die direkte Eingabe in dem man auf die gewünschte Position tippt. Das kann Menschen helfen, welche motorisch nicht dauerhaft etwas gedrückt halten und ziehen können und fühlt sich meiner Meinung nach auch intuitiver an. Damit man ohne störendes Verhalten Bilder weiter über das Kontextmenü speichern kann, habe ich die Aktion auf die (in der Regel) linke und mittlere Maustaste beschränkt. Außerdem lässt sich der Slider durch doppeltes klicken/tippen zentrieren.

```ts
html`
  <div
    @mousedown=${(e: MouseEvent) => {
      const { button } = e;
      // The left or the wheel/middle button
      if (
        button === MouseActions.Main ||
        button === MouseActions.Auxiliary
      ) {
        this.setSlidingState(true);
        this.slideCompareHandler(e);
      }
    }}
    id="image-container"
  >
    <button @dblclick=${() => { this.sliderPosition = 50; }}></button>
  </div>
`;
```
Jetzt bleibt noch die Kommunikation mit Screenreadern übrig, um hier eine gute Integration zu ermöglichen, nutze ich ich diverse [WAI-ARIA Roles](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/#:~:text=the%20arrow%20keys.-,WAI%2DARIA%20Roles%2C%20States%2C%20and%20Properties,-The%20element%20that) wie aus dem W3C Pattern zu entnehmen ist. Diese kommunizieren vor allem die minimale, maximale und aktuellen Position des Sliders.

### Housekeeping 🧽 mit Lifecycle-Callbacks
Im einem vorherigen Abschnitt bin ich darauf eingegangen, dass die [@-Syntax](https://lit.dev/docs/components/events/#adding-event-listeners-in-the-element-template) es ermöglicht, EventListener hinzuzufügen. EventListener werden üblicherweise entfernt, wenn eine Component aus dem DOM entfernt wird. Das gilt aber nur für solche Events, die direkt an ein Element gebunden sind, also beispielsweise ein Click-Event an einem Button. Globale EventListener, also solche die die Tastatur oder Mauseingaben verarbeiten und auch außerhalb einer Component verfügbar sein müssen, sind davon ausgenommen.

Das ist an sich aber nicht weiter tragisch, denn Web Components unterstützen so genannte Lifecycles. Das sind Callbacks die zu unterschiedlichen Zeitpunkten ausgelöst werden so dass hier genau solche Arbeiten durchgeführt werden können. `connectedCallback` ist hierbei genau der richtige Zeipunkt, denn die Component wurde zum DOM hinzugefügt.
```ts
/**
 * Component is added to the document's DOM,
 * add EventListeners for variant 'slider'.
 */
override connectedCallback(): void {
  super.connectedCallback();

  this.addSliderEventListener();
}

/**
 * Slider EventListener are added when 'variant' is set to 'slider'
 */
private addSliderEventListener(): void {
  if (this.variant === 'slider') {
    // Moving the slider
    window.addEventListener('mousemove', this.slideCompareHandler);
    window.addEventListener('touchmove', this.slideCompareHandler);
    // Stop moving the slider
    window.addEventListener('mouseup', this.slideEndHandler);
    window.addEventListener('touchend', this.slideEndHandler);
  }
}
```
Äquivalent dazu müssen die EventListener dann spätestens entfernt werden, wenn die Component nicht mehr im DOM ist:
```ts
/**
 * Clean up EventListeners
 */
override disconnectedCallback(): void {
  super.disconnectedCallback();

  this.removeSliderEventListener();
}
```
Da meine Component mehrere Varianten über das dazu passende Attribut unterstützt, muss auch das bedacht werden:
```ts
/**
 * Because slider EventListeners are only added when the
 * 'variant' attribute is set to 'slider', you also have to react to its changes
 */
override attributeChangedCallback(
  name: string = 'variant',
  oldVal: string | null,
  newVal: Variants
) {
  super.attributeChangedCallback(name, oldVal, newVal);

  if (name === 'variant' && newVal !== oldVal && newVal === 'slider') {
    this.addSliderEventListener();
  }

  if (name === 'variant' && newVal !== oldVal && newVal === 'overlay') {
    this.removeSliderEventListener();
  }
}
```
Damit stelle ich sicher, dass EventListener nur dann hinzugefügt bzw. entfernt werden, wenn es auch wirklich notwendig ist.

## Overlay
Die Overlay Variante ist deutlich kompakter und arbeitet im Grunde genommen aber auch hier wieder mit einem praktischen Trick den ich mir durch das Stappeln des Grid-Layouts zu nutzen mache.

<image-comparison variant="overlay" overlayPrompt="Tippen und gedrückt, um zu vergleichen" id="kasimir-overlay" class="post-img">
  <label slot="label-before">Ohne Filter</label>
  <label slot="label-after">Graustufen</label>
  <img slot="image-before" src="/img/2023/image-comparison/kasimir--opt.jpg" width="440" alt="Tabby Katze" />
  <img slot="image-after" src="/img/2023/image-comparison/kasimir_filter--opt.jpg" width="440" alt="Tabby Katze in Graustufen" />
</image-comparison>

Immer dann, wenn mit einem Eingabegerät auf das Bild gedrückt und gehalten wird, ändere ich lediglich die Reihenfolge der Bilder im Stack und mehr nicht. Im CSS sieht das dann so aus:
```css
/* Switch order of images */
#image-container.pressed ::slotted([slot='image-after']) {
  order: 1;
}
```
ausgelöst wird das durch folgenden Code:
```ts
@state()
private pressed = false;

const overlayTemplate = html`
  <div
    @keydown=${this.keyboardOverlayHandler}
    @keyup=${() => {
      this.setPressed(false);
    }}
    @mousedown=${() => {
      this.setPressed(true);
    }}
    @mouseup=${() => {
      this.setPressed(false);
    }}
    @mouseleave=${() => {
      this.setPressed(false);
    }}
    tabindex="0"
    title=${this.overlayPrompt}
    id="image-container"
    class="${this.pressed ? 'pressed' : ''}"
  >
    <slot name="label-before"></slot>
    <slot name="label-after"></slot>
    <slot name="image-after"></slot>
    <slot name="image-before"></slot>
  </div>
  <slot name="prompt"></slot>
`;
```
Also wird nur eine einzige interne Variable geflippt.

## Split
<image-comparison variant="split" class="post-img">
  <label slot="label-before">Ohne Filter</label>
  <label slot="label-after">Graustufen</label>
  <img slot="image-before" src="/img/2023/image-comparison/kasimir--opt.jpg" width="212" alt="Tabby Katze" />
  <img slot="image-after" src="/img/2023/image-comparison/kasimir_filter--opt.jpg" width="212" alt="Tabby Katze in Graustufen" />
</image-comparison>

Es wird immer weniger komplex je weiter dieser Artikel fortschreitet, denn die Split-Variante ist tatsächlich ausschließlich CSS. Nicht besonders spannend, es ist einfach ein umbrechendes zweispaltiges Layout:
```css
:host([variant='split']) #image-container {
  gap: var(--split-gap);
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--split-column-min-width), var(--split-column-max-width))
  );
}

:host([variant='split']) .container-split-column {
  display: flex;
  flex-direction: column;
}

:host([variant='split']) ::slotted([slot^='label-']) {
  opacity: 1;
}
```

## Custom Events
Custom Events oder auch "Synthetic Events" sind wie der Name vermuten lässt eigens geschaffene Events. Da der Aufbau immer ähnlich ist, gehe ich hier nur auf das Event des Sliders ein:
```ts
export class DragEvent extends Event {
  static readonly eventName = 'drag-event' as const;

  targetElement: HTMLElement;

  constructor(targetElement: HTMLElement) {
    super(DragEvent.eventName, {
      bubbles: true,
      cancelable: false,
      composed: true,
    });

    this.targetElement = targetElement;
  }
}
```
Dieses löse ich immer dann aus, wenn der Slider nicht mehr bewegt wird:
```ts
private slideEndHandler = (): void => {
  this.setSlidingState(false);
  window.dispatchEvent(new DragEvent(this));
};
```
Abfangen könnte man dieses Event wie üblich so:
```js
window.addEventListener('drag-event', (e) => console.log(e));
```
In Class field `targetElement` steckt dann auch das bekannte `sliderPosition`-Attribut und dessen Wert.

## Internationalisierung
An manchen Stellen habe ich bereits angeschnitten, dass die Component auch Sprachen unterstützt, welche von rechts nach links gelesen werden. Meistens ist das auch kein Problem, denn Layouts wie `Grid` oder `Flex` untzerstützen diese bereits von Haus aus so dass kein weiterer Code nötig ist. Leider gibt es noch nicht in allen Browsern die CSS Pseudo Klasse `:dir()` so dass dann doch an einigen Stellen auf JavaScript zurückgegriffen werden muss. In HTML bestimmt das `dir`-Attribut die Leserichtung eines Elements und wirkt sich auf alle Kind-Elemente aus.
Normalerweise könnte man mit `closest()` ohne weiteres ausgehend von einem Element bis zum `Document` suchen bis man ein Element mit dem entsprechenden Attribut gefunden hat - im ShadowDOM ist das allerdings etwas komplizierter, da dieses in sich geschlossen ist. Der folgende Ansatz ist deswegen auch leider nicht perfekt, sollte aber in den meisten Fällen ausreichend sein. Auf diese Einschränkung gehe ich gleich noch etwas genauer ein. Grundsätzlich nutze ich aber einen `MutationObserver` und gebe diesem einen Selektor welche entweder das nächste Element mit einem `dir`-Attribut oder das `Document` an sich ist. Ähnlich den EventListern werden auch Observer im `connectedCallback` aktiviert und im `disconnectedCallback` deaktiviert.

```ts
export class ImageComparison extends LitElement {
  @state()
  private isRtl: boolean = false;

  private readingDirectionObserver!: MutationObserver;

  /**
   * Callback to handle any mutations made to the dir-attribute
   */
  private readingDirectionHandler = (mutations: MutationRecord[]) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'dir') {
        const { dir } = mutation.target as HTMLElement;
        this.isRtl = dir === 'rtl';
      }
    }
  };

  /**
   * Component is added to the document's DOM, setup readingDirectionObserver
   */
  override connectedCallback(): void {
    super.connectedCallback();

    this.readingDirectionObserver = new MutationObserver(
      this.readingDirectionHandler
    );

    // Find closest element with a dir attribute by traversing upwards
    this.textDirectionElement =
      this.closest('[dir]') ??
      this.ownerDocument?.querySelector('html')!;

    // Found one? Is is 'rtl'?
    this.isRtl = this.textDirectionElement.dir === 'rtl';

    // Start observing 🔍
    this.readingDirectionObserver.observe(this.textDirectionElement, {
      attributes: true,
    });
  }

  /**
   * Stop observing the dir attribute
   */
  override disconnectedCallback(): void {
    super.disconnectedCallback();

    this.readingDirectionObserver.disconnect();
  }
}
```
In den aller meisten Fällen ist die folgende Integration ausreichend:
```html
<div class="rtl-container" dir="rtl">
  <image-comparison>
    <!-- Content -->
  </image-comparison>
</div>
```
Die Component würde korrekterweise in rtl gelesen und genutzt werden können. Was nicht funktionieren würde, ist das die Component selbst in einem `Slot` oder im ShadowDOM benutzt wird. Es ist auf jeden Fall eine Limitierung, umgehen könnte man eventuell noch in dem man ein weiteres Attribut für die Component selbst einführt. Ich denke man kann damit aber leben. Die meisten Personen mit denen ich gesprochen habe, die ein rtl-Layout betreffen würde, wären zum Beispiel gar nicht davon ausgegangen, dass sich die Bilder drehen müssten. Das ist natürlich nur anekdotisch.

```ts
/**
 * Callback to handle any mutations made to the dir-attribute
 */
private readingDirectionHandler = (mutations: MutationRecord[]) => {
  for (const mutation of mutations) {
    if (mutation.attributeName === 'dir') {
      const { dir } = mutation.target as HTMLElement;
      this.isRtl = dir === 'rtl';
    }
  }
};
```

## Drei Components in Einer

Sollte man wirklich drei Components in Einer verwirklichen? Wahrscheinlich eher nicht aber interessant war es trotzdem und in meinen Tests mit einem älteren Smartphone gab es auch nicht wirklich Performance Probleme. Um "live" zwischen den Varianten wechseln zu können bin ich wie folgt vorgegangen.
Einen Typ für Varianten definieren:
```typescript
type Variants = 'overlay' | 'slider' | 'split';
```

Eine Property für die Component definieren:
```typescript
@property({ type: String })
private variant: Variants = 'slider';
```
Mit Hilfe dieses Decorators wird ein Attribut erstellt auf dessen Änderungen automatisch reagiert werden kann und bei Bedarf neu gerendert wird.

Templates definieren und auf Property reagieren lassen:
```typescript
render() {
  const sliderTemplate = html``;
  const overlayTemplate = html``;
  const splitTemplate = html``;

  return html`
    ${choose<Variants, TemplateResult>(this.variant, [
      ['slider', () => sliderTemplate],
      ['overlay', () => overlayTemplate],
      ['split', () => splitTemplate],
    ])}
  `;
}
```
Die zu Lit gehörende [`choose`](https://lit.dev/docs/templates/directives/#choose)-Direktive kann nun auf diese Art typensicher eines von drei Templates rendern und dies allein durch das ändern des `variant`-Attributes:
```html
<image-comparison variant="slider"></image-comparison>
<image-comparison variant="overlay"></image-comparison>
<image-comparison variant="split"></image-comparison>
```

## Integration auf Websites und in Frameworks
Um diese Component beispielsweise in WordPress zu integrieren, reicht es aus, folgendes Script-Tag zum gewünschten Template hinzuzufügen und über deren Slots zu konfigurieren.

```html
<script
  type="module"
  src="https://unpkg.com/image-comparison-component/dist/src/image-comparison.js?module">
</script>

<image-comparison
  variant="slider"
  sliderPrompt="Move the slider to compare"
  overlayPrompt="Tap and hold to compare"
>
  <label slot="label-before">Ohne Filter</label>
  <label slot="label-after">Graustufen</label>
  <img slot="image-before" src="/img/2023/before.jpg" alt="Rote Zierquitte" />
  <img slot="image-after" src="/img/2023/after.jpg" alt="Rote Zierquitte (Graustufen)" />
</image-comparison>
```
In anderen Umgebungen sieht das dann ähnlich aus. Wenn man die Component über NPM installiert hat und dessen Attribute über Radio Buttons ändern möchte könnte man so etwas machen:
```typescript
import 'image-comparison-component/image-comparison.js';

const imageComparisonDemoComponent = document.querySelector(
  '#image-comparison-demo',
);

const radioButtonVariants = document.querySelectorAll('input[name="variant"]');

radioButtonVariants.forEach((radioButton) =>
  radioButton.addEventListener('change', (e) => {
    const { value } = e.target;
    imageComparisonDemoComponent.setAttribute('variant', value);
  }),
);
```
## Fazit
Die Arbeit an dieser Component hatte ich bereits vor einer Weile abgeschlossen und konnte jetzt durch das Schreiben des Posts noch einiges dazu lernen. Dazu zählte auf jeden Fall das hinzufügen von Default-Styles, die Integration in einen statischen Seitengenerator und insbesondere das Handling des `rtl`-Attributs. Etwas später in der Entwicklung habe ich dann auch noch eine Component Library entdeckt, welche ebenfalls in Lit geschrieben ist und auch eine solche Component enthält. Wer also eine ausgewachsenere Variante nutzen möchte dem kann ich nur [Shoelace](https://shoelace.style/components/image-comparer) empfehlen. Viel Spaß mit der Component :)
