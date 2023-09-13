---
title: queryAssignedElementContent
description: Ein Decorator, um den Inhalt von Elementen
date: 2023-09-15
layout: blog/post.njk
type: article
includeToc: true
draft: true
tags:  ['Decorator', 'TypeScript', 'Web Components', 'Lit', 'Upcoming']
permalink: /blog/query-assigned-element-content/
imports: ['index', 'post']
---

## Motivation

Vor einer Weile habe ich eine Web Component entwickelt, welche im Viewport sichtbare Überschriften in einem Inhaltsverzeichnis dynamisch hervorhebt. Ein Vorteil von Web Components ist, dass diese so konfiguriert werden können, dass diese in sich geschlossen und von außen nur über klar definierte Schnittstellen beeinflussbar sind.

Zu diesen Schnittstellen gehört das `<slot>`-Element bzw. Attribut. Dieses verhält sich als ein Platzhalter-Element, welches eigenes Markup, in dem Fall das Inhaltsverzeichnis, in die Component aufnehmen kann.
```html
<toc-observer>
  <ul slot="toc">
    <li><a href="#">Tethys</a></li>
    <li><a href="#">Mimas</a></li>
  </ul>
</toc-observer>
```
Elemente, welche auf diese Art in die Component gegeben werden, müssen manuell selektiert und verarbeitet werden.
Nutzt man den zu Lit gehörenden `@queryAssignedElements`-Decorator, kann das beispielsweise so aussehen:

```ts
@customElement('toc-observer')
export class TocObserver extends LitElement {
  // ...

  @queryAssignedElements({slot: 'toc'})
  private _tocList?: Array<HTMLUListElement>;

  private get _tocListItems(): HTMLAnchorElement[] | null {
    return this._tocList?.length
      ? [...this._tocList[0].querySelectorAll<HTMLAnchorElement>('[href^="#"]')]
      : null;
  }
}
```
Bei der Nutzung dieses Decorators bin ich zunächst darüber gestolpert, dass ausschließlich Elemente


## Implementation
Ein Decorator beschreibt ein Design-Pattern, welches (unter anderem) so genanntes Meta-Programming ermöglicht.
