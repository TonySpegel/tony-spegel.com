---
title: 'Bilder vergleichen: Slider, Overlay, Side-by-Side'
description: 'Eine 3 in 1 Komponente entwickeln'
date: 2023-04-14
layout: blog/post.njk
type: article
includeToc: true
draft: true
tags:  ['Lit', 'Web Components', 'a11y', 'TypeScript', 'Blog']
socialImage: '/img/2023/image-comparison/2022_1004_14254000.jpg'
permalink: /blog/image-comparison/
imports: [
  'theme-switch',
  'index',
  'post',
  'image-comparison'
]
---
{% import 'macros/external-link.njk' as link %}

In diesem Post geht es darum, eine Komponente zu entwickeln welche es ermöglicht, Bilder auf der verschiedene Arten zu vergleichen. Bilder können mit einem Slider, einem Overlay oder in einer Split-Ansicht verglichen werden.

<image-comparison variant="slider" sliderPrompt="Slider bewegen, um zu vergleichen" class="post-img" id="image-comparison-demo">
  <label slot="label-before">Ohne Filter</label>
  <label slot="label-after">Graustufen</label>
  <img slot="image-before" src="/img/2023/2022_1004_14254000-w3120--opt.jpg" width="440" alt="Blumen in Paris" />
  <img slot="image-after" src="/img/2023/2022_1004_14254000-w3120_grayscale--opt.jpg" width="440" alt="Blumen in Paris dargestellt in Graustufen" />
</image-comparison>

<div class="slider-set-wrapper">
  <fieldset id="slider-variant-set" class="slider-set">
    <legend>Variante:</legend>
    <div>
      <input type="radio" id="slider" name="variant" value="slider" checked>
      <label for="slider">Slider</label>
    </div>
    <div>
      <input type="radio" id="overlay" name="variant" value="overlay">
      <label for="overlay">Overlay</label>
    </div>
    <div>
      <input type="radio" id="split" name="variant" value="split">
      <label for="split">Split</label>
    </div>
  </fieldset>
  <fieldset id="slider-reading-direction-set" class="slider-set">
    <legend>Leserichtung:</legend>
    <div>
      <input type="radio" id="ltr" name="variant" value="ltr" checked>
      <label for="ltr"><abbr>LTR</abbr> (Left To Right)</label>
    </div>
    <div>
      <input type="radio" id="rtl" name="variant" value="rtl" checked>
      <label for="rtl"><abbr>RTL</abbr> (Right To Left)</label>
    </div>
  </fieldset>
</div>

<hr>

<div class="disclaimer">
  <span>Hinweis</span>
  <p>
    Dieser Post geht davon aus, dass ihr euch schon ein wenig mit Web Components beschäftigt habt - wenn nicht, ist das aber auch in Ordnung.
    Hier ein paar Links:
  </p>

  <ul>
    <li>{{ link.externalLink('https://developer.mozilla.org/en-US/docs/Web/Web_Components', 'MDN Web Docs: Web Components') }}</li>
    <li>{{ link.externalLink('https://lit.dev/docs/', 'lit.dev: What is Lit?') }}</li>
    <li>{{ link.externalLink('https://web.dev/learn/html/template/', 'Learn HTML!: Template, slot, and shadow') }}</li>
  </ul>
</div>

Einer der Vorteile daran, eine Web Component zu entwickeln, ist deren Eigenschaft frameworkunabhängig zu sein. Sie lassen sich also in Blogs gleichermaßen wie in Web Apps einbinden. Den Anfang macht hier die Slider-Variante.

## Slider
Die Slider-Variante ist die komplexeste der drei Varianten. Komplex in der Implementation und auch nur durch die vielseitigen Interaktions- und Konfigurationsmöglichkeiten aber weniger am CSS. Auf der Seite der Nutzer:innen gilt das folgende HTML.

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
Auffällig sind hierbei vor allem die drei gesetzten Attribute sowie die zwei Label und Bildelemente. Die `variant` bestimmt sowohl das Verhalten als auch das Aussehen der Komponente, die beiden Attribute geben kurze Hinweise zur Interaktion. Die sogenannten `slot`-Attribute sind eine Eigenheit des shadow-DOM und können als eine Art Schnittstelle gesehen werden. In dieser Komponente werden sie genutzt, um die zu vergleichenden Bilder sowie deren Label anzuzeigen. Intern folgt das HTML diesem vereinfachten Schema:
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

  <button></button>
</div>
```
Neben zusätzlichem Markup, wie dem Button, steckt der größte Teil der <span aria-hidden="true">✨</span>Magie<span aria-hidden="true">✨</span> in der `clip-path: inset(0 50% 0 0)`-Anweisung des zweiten Containers.

## Overlay

## Barrierefreiheit

Wenn es darum geht, möglichst barrierefreie Lösungen zu entwickeln, ist die [Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) Seite des W3C ein optimaler Einstieg. Diese bietet diverse, immer wiederkehrende, Patterns wie beispielsweise Tabs, Slide Shows und Ähnliches an und geht dabei auf deren Besonderheiten ein.
Das [Window Splitter](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/) passt hierbei am ehesten zur Slider-Variante.

Es gibt Nutzer oder Nutzerinnen welche Probleme damit haben,
motorisch dauerhauft einen Slider zu bewegen.

### Keyboard Navigation
Die Komponente unterstützt verschiedene Tasten-(kombinationen) um diese auch
ausschließlich mit einer Tastatur verwenden zu können.
- Slider
  - <kbd>←</kbd> / <kbd>→</kbd> ändert die Position um jeweils 1
  - <kbd><kbd>Shift</kbd> + <kbd>←/→</kbd></kbd> ändert die Position um den Betrag von `sliderSteps` (Standard: 5)
  - (<kbd>Home</kbd> / <kbd>Pos1</kbd>)

## Custom Events

## Internationalization

The World Wide Web is available to everyone in the world—it's right there in the name!
That means that your website is potentially available to anyone who has access to the internet,
regardless of where they are, what device they're using, or what languages they speak.

The goal of responsive design is to make your content available to everyone.
Applying that same philosophy to human languages is the driving force behind
internationalization—preparing your content and designs for an international audience.

## Drei Komponenten in Einer

Sollte man wirklich drei Komponenten in Einer verwirklichen? Wahrscheinlich eher nicht aber interessant war es trotzdem.
Jede Lit-Komponente besitzt eine sog. `render()`-Methode welche das HTML-Template sowie die dazugehörige Logik zu rendert.

Damit "live" zwischen den Varianten wechseln zu können bin ich wie folgt vorgegangen.
- Einen Typ für Varianten definieren
  ```typescript
  /* TypeScript */
  type Variants = 'overlay' | 'slider' | 'split';
  ```
- Eine Property für die Komponente definieren
  ```typescript
  /* TypeScript */
  @property({ type: String })
  private variant: Variants = 'slider';
  ```
- Templates definieren und auf Property reagieren lassen
  ```typescript
  /* TypeScript */
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
  Die zu Lit gehörende [`choose`](https://lit.dev/docs/templates/directives/#choose)-Direktive
  kann nun auf diese Art typensicher eines von drei Templates rendern und dies allein durch das ändern des
  `variant`-Attributes:
  ```html
  <!-- HTML -->
  <image-comparison variant="slider"></image-comparison>
  <image-comparison variant="overlay"></image-comparison>
  <image-comparison variant="split"></image-comparison>
  ```
