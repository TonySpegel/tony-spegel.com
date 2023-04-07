---
title: Table of Contents Component
description: 'Artikelüberschriften dynamisch hervorheben'
date: 2023-04-28
layout: blog/post.njk
type: article
includeToc: true
draft: true
tags:  ['Lit', 'Web Components', 'a11y', 'TypeScript', 'Blog']
permalink: /blog/toc-observer/
imports: ['index', 'post', 'theme-switch']
---
{% import 'macros/external-link.njk' as link %}

Eine Table of Contents (<abbr>TOC</abbr>) stellt ein Inhaltsverzeichnis dar und findet
sich häufig in Blogs oder Artikeln wieder.

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

## IntersectionObserver
## Verschiedene HTML Strukturen untzerstützen
