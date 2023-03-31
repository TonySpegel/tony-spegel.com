---
title: 'Bilder vergleichen: Slider, Overlay, Side-by-Side'
description: 'Eine 3 in 1 Komponente entwickeln'
date: 2023-04-14
layout: blog/post.njk
type: article
includeToc: true
draft: true
tags:  ['Lit', 'Web Components', 'a11y', 'TypeScript', 'Blog']
permalink: /blog/image-comparison/
imports: [
  'theme-switch',
  'index',
  'post',
  'image-comparison'
]
---
{% import 'macros/external-link.njk' as link %}

2020: 5.944
2021: 1.012

Als ich darüber nachgedacht habe wie man Bilder miteinander vergleichen kann, sind mir drei Varianten eingefallen:
mit einem Slider, einem Overlay oder einfach nebeneinander.

<div class="disclaimer">
  <span>Hinweis</span>
  <p>
    Dieser Post geht davon aus, dass ihr euch schon ein wenig mit Web Components beschäftigt habt.
    Wer noch etwas mehr wissen möchte, kann hier querlesen:
  </p>

  <ul>
    <li>{{ link.externalLink('https://developer.mozilla.org/en-US/docs/Web/Web_Components', 'MDN Web Docs: Web Components') }}</li>
    <li>{{ link.externalLink('https://lit.dev/docs/', 'lit.dev: What is Lit?') }}</li>
    <li>{{ link.externalLink('https://web.dev/learn/html/template/', 'Learn HTML!: Template, slot, and shadow') }}</li>
  </ul>
</div>

## Schöne Blumen

<image-comparison variant="slider" sliderPrompt="Slider bewegen, um zu vergleichen" class="post-img" id="image-comparison-demo">
  <label slot="label-before">Ohne Filter</label>
  <label slot="label-after">Graustufen</label>
  <img slot="image-before" src="/img/2022_1004_14254000-w3120--opt.jpg" width="440" alt="Blumen in Paris" />
  <img slot="image-after" src="/img/2022_1004_14254000-w3120_grayscale--opt.jpg" width="440" alt="Blumen in Paris dargestellt in Graustufen" />
</image-comparison>

<fieldset id="slider-variant-set">
  <legend>Variante auswählen:</legend>
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


## Barrierefreiheit

Es gibt Nutzer oder Nutzerinnen welche Probleme damit haben,
motorisch dauerhauft einen Slider zu bewegen.

### Keyboard Navigation
<kbd>←</kbd>

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
