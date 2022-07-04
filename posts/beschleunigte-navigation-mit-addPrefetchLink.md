---
title: Beschleunigte Navigation mit Link prefetching
description: 'Wie man rel="prefetch" durch Interaktionen wie bspw. mouseover oder focus optimieren kann'
date: 2021-10-04
tags:  ['JavaScript', 'TypeScript', 'Performance', 'NPM']
layout: layouts/post.njk
type: article
---


Prefetching beschreibt einen Prozess, welcher eventuell benötigte Inhalte vorlädt,
um diese schneller aufrufen zu können. Das kann beispielsweise so aussehen:
`<link rel="prefetch" href="/img/catsarecute.jpg" />`. 
Browser werden diese Ressource dann herunterladen und zwischenspeichern 
(allerdings nur im {% externalLink 'Idle', 'Idle', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#how_is_browser_idle_time_determined' %})

Alle Links einer Seite für das Prefetching hinzuzufügen ist natürlich wenig sinnvoll.
Um das zu optimieren ist mein Ansatz, Links nur auf eine Interaktion hin zu prefetchen - also beispielsweise 
das Zeigen mit der Maus oder das Fokussieren mit einer Tastatur. Inspiration habe ich mir hierbei 
durch das von Google entwickelte 
geholt. Der entscheidende Unterschied zu meiner Lösung ist, dass Quicklink alle Links im sichtbaren Bereichen vorlädt (wenn der Browser im Idle ist) und nicht durch eine Interaktion.

Links zu meiner Lösung _addPrefetchLink_:

## Anforderungen

- Links welche ein `mailto:` oder `tel:` enthalten, sollen nicht prefetched werden
- Ist ein Datensparmodus aktiv oder ist die Verbindung zu langsam, sollen keine Links prefetched werden
- Pro Link darf nur eine Interaktion das Prefetching auslösen

## Die richtigen Links selektieren