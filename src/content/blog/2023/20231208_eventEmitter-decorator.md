---
title: 'Custom Events mit @eventEmitter'
metaDescription: Ein ClassMethod-Decorator welcher CustomEvents auslösen kann. Mit diesem Standard Decorator kann DOM-unabhängig kommuniziert werden. Eine gute Lösung für (Web) Components und Frameworks.
shortDescription: Wie man einen Class Method Decorator für Custom Events umsetzen kann

date: 2023-12-08
layout: blog/post.njk
type: article
includeToc: true
draft: false
tags:  ['Decorator', 'TypeScript', 'Web Components', 'Upcoming']
socialImage: '/img/social-images/2023/event-emitter-decorator.png'
permalink: /blog/event-emitter-decorator/
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
eleventyImport:
  collections: ["post"]
---
{% import 'macros/good-to-know.njk' as gtn with context %}

Events sind eine super Möglichkeit um zwischen verschiedenen (Web) Components
zu kommunizieren und besonders geeignet, wenn man nicht so sehr an das DOM gebunden sein möchte oder keine Annahmen über dessen Aufbau treffen kann. Deswegen habe ich mir die Frage gestellt, wie man das Auslösen von Custom Events mit Hilfe von Standard Decorators etwas "bequemer" lösen kann und führe hier durch meinen Denkprozess. Kleiner Spoiler: man könnte das so machen, wie ich es umgesetzt habe, aber es geht auch noch besser. Übrigens unterstützen auch die meisten Frontend-Frameworks native DOM-Events.

{{ gtn.gtnDecorators() }}

## Motivation
In meiner [Image Comparison Component](/blog/image-comparison-component/#custom-events) nutze ich Custom Events, um zu kommunizieren, dass der Slider abschließend bewegt wurde oder das auf andere Weise mit der Component interagiert wird. Das kann man unter anderem so umsetzen:
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
Die Optionen sollte man dann natürlich anpassen. Nutzen lässt es sich das Custom Event dann, in dem man `dispatchEvent` auf einem [Element](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent) ausführt, welches Events empfangen kann:
```ts
export class ImageComparison extends LitElement {
  // (...)
  private slideEndHandler = (): void => {
    // (...)
    window.dispatchEvent(new DragEvent(this));
  };
}
```
Die Stelle des Auslösen ist später nochmal wichtig <span aria-hidden="true">👀</span>.

## Anwendungsbeispiel
Weil ich mich noch mehr mit Standard Decorators befassen wollte, habe mich dann dazu entschieden einen `ClassMethod`-Decorator als Basis meiner Entwicklung umzusetzen was am Ende angewandt so aussehen kann:
```ts
import { eventEmitter } from './event-emitter.js';

class EmitterElement extends HTMLElement {
  #counter: number = 0;

  @eventEmitter({ name: 'counter-event' })
  increase(): number {
    return (this.#counter += 1);
  }
```
Dieser Decorator wird dann jeweils direkt an der Class Method angefügt und löst gleichzeitig mit der Ausführung der Method ein Event aus. Über verschiedene Optionen lässt sich `@eventEmitter` dann weiter konfigurieren. Mir ging es in diesem Projekt vor allem darum, noch mehr zu Standard Decorators zu lernen. Da bietet es sich natürlich an, etwas zu versuchen zu lösen, was man öfter benötigt. Bis auf die Types ist das übrigens, so bald Decorators im Browser unterstützt werden, standardkonformes JavaScript.

## Implementation
Meine Implementation teile ich in [Optionen](#optionen) und die [Kernfunktionalität](#decorator) des Decorators ein. Am Ende zeige ich noch auf, wie man den Decorator nutzen kann und im anschließenden Abschnitt worauf noch zu achten ist und welche alternativen Implementationen es gibt.

### Optionen

Um für die Optionen etwas flexibler als im `DragEvent`-Beispiel gezeigt zu bleiben, erweitere ich das
`CustomEventInit` Interface mit zwei weiteren Properties: `name` und `emitter`:
```ts
/**
 * EmitterConfig includes not only a name for your custom event
 * but also all other properties one would like to set such as:
 * detail, bubbles and so on.
 */
interface EmitterConfig extends CustomEventInit {
  /**
   * The event name you can listen to
   */
  name: string;
  /**
   * The emitter for your events,
   * by default the class instance (this)
   */
  emitter?: Window | Document;
}
```
Alle bisherigen Properties aus dem `CustomEventInit` Interface (zum Beispiel `bubbles`) lassen sich so weiter wie gewohnt nutzen. `name` ist dabei in jedem Fall anzugeben. Der Grund dafür ist, dass ich zuerst den Namen des Custom Events von der Class Method ableiten wollte und das aber zu folgendem Problem führt. Nämlich dann, wenn ein Minifier den Namen der Class Method verändert, also aus `increase()` ein `i()` kürzt. Niemand könnte dann wissen, auf welches Event zu hören ist und mit einer Pflicht-Property wie dieser ist es dann deutlich impliziter. `emitter` ist optional aber fällt standardmäßig auf die Instanz der Klasse zurück.

### Decorator
Der Decorator sieht auf dem ersten, und auch auf den zweiten und dritten, Blick erst mal kompliziert aus:
```ts
// A: Signature
export function eventEmitter(config: EmitterConfig) {
  // B: Returning a wrapped method
  return function <This extends EventTarget, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    _context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >
  )
  // C: Extracting options (...)

  // D: Wrapping the initial method
  return function (this: This, ...args: Args): Return {}
  };
}
```
In den Abschnitten `A` und `B` wird eine bestehende Class Method genommen, vom Decorator umschlossen, mit zusätzlicher Logik ergänzt und schließlich mit diesem ersetzt. Das Typing in der Form ist notwendig, wobei ich `_context` nicht weiter nutze. Dadurch dass ich `EventTarget` erweitere, kann ich später im `emitter` einfacher auf einen Default zurückfallen.

Das extrahieren der Optionen im Abschnitt `C` ist nicht weiter spannend, aber ich habe einen Laufzeit Check hinzugefügt damit man auch in einem JavaScript Kontext Fehler angezeigt bekommt, wenn man sein Custom Event nicht benennt:
```ts
/**
 * Throw an error if no config or no name has been set.
 */
if (!config?.name) {
  throw new Error(
    `The "name"-property in the config is mandatory. It is used to name your custom event.`
  );
}
/**
 * Extracts the event name from the provided config.
 */
const { name } = config;
```

Abschnitt D bringt dann den Rest zusammen und übernimmt die eigentliche Logik:
```ts
return function (this: This, ...args: Args): Return {
  /**
   * The method's return value
   */
  const result = target.call(this, ...args);
  /**
   * 'detail' is by default what is set with the config and if not
   * the method's return value
   */
  const detail = config.detail ?? result;
  /**
   * The emitter which dispatches the event
   */
  const emitter = config.emitter ?? this;

  emitter.dispatchEvent(
    new CustomEvent(name, { detail, ...config })
  );

  return result;
};
```
Interessant finde ich hier vor allem die Zuweisung von `detail` und `emitter`. Das macht es schon flexibler als in meiner ursprünglichen Lösung. Das ganze Typing und die Zeilen bis zu diesem Punkt sind so gesehen nur Setup für diese paar Zeilen:
```ts
emitter.dispatchEvent(
  new CustomEvent(name, { detail, ...config })
);
```
Auf das Event im Counter Beispiel lässt sich dann beispielsweise so hören:
```ts
window.addEventListener('counter-event', e => {
  const { detail } = e as CustomEvent;

  this.#counter = detail;
});
```

## Limitationen und andere Implementationen

Soweit so gut könnte man meinen, aber später ist mir dann ein entscheidender Nachteil aufgefallen: mein Decorator löst immer dann ein Event aus, wenn eine Methode mit diesem Decorator ausgeführt wird.

Dieser Decorator diente für mich vor allem dazu, noch mehr über Standard Decorators zu lernen und das wollte ich so unvoreingenommen wie möglich machen. Als ich dann an einem ersten brauchbaren Stand angekommen bin, habe ich nach weiteren Implementationen gesucht und bin auf die der [Stencil-Bibliothek](https://stenciljs.com/docs/events) gestoßen. [Stencil](https://stenciljs.com/) ermöglicht es, ähnlich wie mit [Lit](https://lit.dev/) Web Components erstellen zu können. Genutzt wird es beispielsweise vom Cross-Plattform Framework [Ionic](https://ionicframework.com/) oder dem Design System der [Deutschen Bahn](https://github.com/db-ui/elements). Die Implementation von Stencil sieht grob so aus:
```ts
import { Event, EventEmitter } from '@stencil/core';

export class TodoList {
  // Event called 'todoCompleted' that is "composed", "cancellable" and it will bubble up!
  @Event({
    eventName: 'todoCompleted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) todoCompleted: EventEmitter<Todo>;

  todoCompletedHandler(todo: Todo) {
    const event = this.todoCompleted.emit(todo);
    if(!event.defaultPrevented) {
      // if not prevented, do some default handling code
    }
  }
}
```
Zu den (groben) Unterschieden: zum einen wird hier keine Methode sondern ein Class field dekoriert und zum anderen kann der Type des Emitters mit einem Generic noch genauer gesetzt werden: `EventEmitter<Todo>`. Letztlich lässt sich dann, an einem beliebigen Punkt in der der eigenen Methode, die `emit`-Methode des Decorators aufrufen:
`this.todoCompleted.emit(todo)`. Das hat, finde ich, den entscheidenden Vorteil, dass man noch mehr Logik oder Bedingungen einführen kann bevor das Event ausgelöst wird. Schön zu sehen ist aber auch, dass man auf ähnliche Lösungen wie etablierte Bibliotheken kommt <span aria-hidden="true">😅</span>. Neben dem `Event`-Decorator bietet Stencil außerdem noch einen `Listen`-Decorator um Events verarbeiten zu können. Ein nächster Schritt für mein Projekt könnte sein, es alternativ mit einem `ClassField`-Decorator zu versuchen und dann noch mehr Möglichkeiten zur Typisierung zu bieten. Einen Link zum GitHub Repository gibt es [hier](https://github.com/TonySpegel/event-emitter) - über Feedback freue ich mich natürlich auch.
