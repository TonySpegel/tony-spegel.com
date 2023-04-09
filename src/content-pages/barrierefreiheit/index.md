---
title: Barrierefreiheit
description: Details zur Barrierefreiheit auf dieser Website

imports: ['index', 'theme-switch']
layout: content-page.njk
permalink: /barrierefreiheit/
templateClass: content-page
---
{% import 'macros/external-link.njk' as link %}

# Barrierefreiheit

Ich möchte, dass diese Website von einem möglichst breiten Publikum genutzt werden kann, unabhängig von Gerät, Browser, Netzgeschwindigkeit oder den eigenen Fähigkeiten.

Daher bin ich bestrebt, dass diese Website und deren Inhalte die in den

{{ link.externalLink('https://www.w3.org/TR/WCAG21/', '(WCAG) 2.1', 'Web Content Accessibility Guidelines') }}

festgelegten Standards der Stufe AA mindestens erfüllt.

Diese Seite soll den aktuellen Stand der Barrierefreiheit dieser Website zeigen.

## Accessibility features

Die Seiten dieser Website sind mit semantischen Elementen wie `<header>`, `<navigation>`,
`<main>` und `<footer>` strukturiert, welche helfen können, sich schneller zurechtzufinden.

Überschriften der Ebene 1 markieren den Hauptinhaltsbereich jeder Seite und die weitere Struktur sollte von dort ausgehend einer logischen Reihenfolge an Überschriften folgen. Jede Seite hat einen für Screenreader zugänglichen Link, um direkt zum Inhalt springen zu können.

Bilder werden mit sogenannten Alt-Tags beschrieben, um sicherzustellen, dass jede/r auf grafische Inhalte zugreifen kann. Eingebettete Audio- und Videodateien sollten mit barrierefreien Beschriftungen und Textbeschreibungen beschrieben werden.

Die Farben dieser Website wurden so gewählt, dass ein ausreichender Farbkontrast auf jeder Seite gewährleistet ist - mindestens jedoch Stufe AA. Dasselbe gilt für mögliche Farbvarianten der Website wie beispielsweise einem sogenannten Dark-Mode.

Jede Komponente dieser Website ist mit der Maus, der Tastatur oder durch Berührung zugänglich.
Diese Website wurde auf modernen Browsern und Endgeräten verschiedener Leistungsstufen getestet.

## Bekannte Probleme
- Die Beschriftung mancher Elemente ist noch nicht perfekt zu nutzen in verschiedenen Screenreadern aber ich arbeite daran. Das äußer sicht vor allem in redundanten Bezeichnungen die gegebenenfalls doppelt vorgelesen werden.

## Feedback
Barrierefreiheit ist ein wichtiges Thema für mich und als nicht direkt Betroffener schwierig perfekt umzusetzen. Sollte es irgendwelche Probleme geben, schickt mir bitte eine E-Mail an: tony.spegel@gmail.com. Ich nehme Probleme mit der Barrierefreiheit sehr ernst und werde versuchen, diese so schnell wie möglich zu beheben. Für Links oder Ressourcen bin ich auch sehr dankbar.
