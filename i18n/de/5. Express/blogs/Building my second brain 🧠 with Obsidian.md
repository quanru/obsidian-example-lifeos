---
title: Building my second brain 🧠 with Obsidian
toc: true
date: 2023-07-08 09:38:13
categories: PKM
tags:
  - LifeOS
  - PKM
  - Periodic-Note
  - Task-Management
  - Goal-Management
  - Time-Management
---

This article will take [Obsidian](https://obsidian.md/) als Beispiel, um meine Praxis der Nutzung von Obsidian zum Aufbau eines zweiten Gehirns zu teilen!

Weitere Informationen findest du auf der offiziellen Website [LifeOS](https://lifeos.vip)!

## Preface

### What is Obsidian?

So stellt es sich auf der offiziellen Website vor:

- [Obsidian](https://obsidian.md/) ist die private und flexible Notiz-App, die sich an deine Denkweise anpasst.
- [Obsidian](https://obsidian.md/) ist eine private und flexible Notiz-App, die sich an deine Denkweise anpasst.

Was ich besonders schätze, ist das reichhaltige Plugin-Ökosystem. Wer VSCode mag, wird wahrscheinlich auch Obsidian mögen. Der einzige Unterschied: VSCode ist zum Schreiben von Code, Obsidian zum Schreiben von Notizen.

### First Brain VS Second Brain

Das erste Gehirn ist unser tatsächliches Gehirn. Es arbeitet ununterbrochen, solange wir leben. Es übernimmt Aufgaben wie Wissensmanagement, Aufgabenverwaltung und Zielverfolgung. Meistens können wir keine mehreren Dinge gleichzeitig tun, weshalb das erste Gehirn eher wie eine CPU funktioniert, bei der verschiedene Aufgaben um Rechenzeit konkurrieren. Werden es zu viele Aufgaben, ist das Gehirn überlastet. Es muss aktuelle Aufgaben bearbeiten und gleichzeitig den Kontext anderer Aufgaben im Blick behalten, um zwischen ihnen wechseln zu können – das verhindert echte Konzentration. Genau dann wird ein externes System benötigt, das das erste Gehirn unterstützt: das zweite Gehirn.

Das zweite Gehirn ist ein externes System. Wenn man das erste Gehirn mit einer CPU vergleicht, ist das zweite Gehirn eher ein Speichersystem. Es fungiert als Puffer zwischen dem ersten Gehirn und der realen Welt und reduziert die Belastung des ersten Gehirns, damit es sich auf das Wesentliche konzentrieren kann. Man kann es mit Arbeitsspeicher und Festplatte vergleichen: Der Arbeitsspeicher kommuniziert häufiger mit der CPU (dem ersten Gehirn) und hat eine schnellere Lesegeschwindigkeit. Dieses Speichersystem bewahrt Dinge auf, auf die das erste Gehirn nicht ständig achten muss – wobei es natürlich dem ersten Gehirn überlassen bleibt, ob etwas gespeichert werden soll. Die Inhalte können Notizen, Aufgaben oder Abläufe sein, und das Medium kann Text, Bilder oder Videos sein.

Wenn wir das zweite Gehirn zum Beispiel für das Aufgabenmanagement nutzen, werden wichtige und dringende Punkte im Arbeitsspeicher abgelegt, während unwichtige und nicht dringende Punkte auf der Festplatte landen; Aufgaben dieser Woche liegen im Arbeitsspeicher, Aufgaben dieses Monats möglicherweise auf der Festplatte. Durch die Nutzung des zweiten Gehirns können wir uns auf das Jetzt konzentrieren, ohne Druck zu verspüren, und bei Bedarf den Kontext wechseln.

Dieser Artikel nutzt Obsidian als Beispiel, um meine Praxis beim Aufbau eines zweiten Gehirns zu teilen! Man kann es ein zweites Gehirn nennen – aus verschiedenen Blickwinkeln betrachtet nenne ich es aber auch "LifeOS", weil ich dort alles rund um Leben und Arbeit festhalte. Außerdem könnte man es ein "programmierbares persönliches Produktivitätssystem" nennen: Ich habe einigen Code dafür geschrieben, um Abfragen und Automatisierungen durchzuführen, und es ist das Produktivitätssystem, mit dem ich Aufgaben und Ziele verwalte. Es lässt sich sogar mit einem "Monorepo-Projekt" vergleichen, bei dem jeder Ordner ein Projekt darstellt und die README.md darin wie die Package.json die Metadaten des jeweiligen Projekts beschreibt.

📢 Hinweis: Dieses System ist kein Top-down-System mit vorgegebenen Prozessen. Es hat sich nach und nach durch die Nutzung von Obsidian entwickelt und entwickelt sich weiter. Die aktuelle Version nennen wir vorläufig 1.0. Der Zweck des Teilens ist es, andere dazu zu inspirieren, ihre eigenen Systeme zu verbessern! Ich habe bereits ein [Obsidian Periodic PARA](https://github.com/quanru/obsidian-periodic-para) Plugin entwickelt, das dieses System unterstützt! Mit diesem Plugin sind keine Programmierkenntnisse erforderlich. Periodische und PARA-Notizen lassen sich ganz einfach per Mausklick erstellen!

## My Practice

Ich verwende zwei Systeme: eines für das Wissensmanagement und eines für periodische Notizen. Ersteres verwaltet Wissen anhand von Dimensionen wie Projekt/Bereich/Ressource, Letzteres verwaltet Aufgaben/Ziele/Zeit mit der Zeit als Dimension.

### Core Systems

- Knowledge management: Using the [PARA](https://fortelabs.com/blog/para/) system
  - Projekte -> Projekte sind eine Reihe von Aufgaben, die auf ein Ziel mit einer Deadline ausgerichtet sind.
  - Bereiche -> Bereiche sind Aktivitätsdomänen, die über einen längeren Zeitraum bestimmte Standards aufrechterhalten müssen.
  - Ressourcen -> Ressourcen sind Themen oder Gebiete von anhaltendem Interesse.
  - Archive -> Archive sind inaktive Einträge aus den drei oben genannten Kategorien.
- Periodic notes
  - Langfristig: Top-down, mit Fokus auf langfristige Ziele.
    - Three-year Review
    - Annual Review
    - Quarterly Review
  - Kurzfristig: Bottom-up, mit Fokus auf kurzfristige Aufgaben.
    - Monthly Review
    - Weekly Review
  - Täglich: Gedanken und Erkenntnisse festhalten, Selbstreflexion fördern; Zeiterfassung, Fokus auf Projekte.
    - Daily Log

Je näher eine PARA-Komponente an Projekten liegt, desto umsetzbarer ist sie; je langfristiger die periodische Notiz, desto weniger planbar ist sie;

Diese beiden Systeme schaffen effektiv zwei Kontexte, die mich fokussiert halten:

- Einer basiert auf der Zeit (periodische Notizen): Wenn ich einen bestimmten Zeitpunkt erreiche, arbeite ich anhand der entsprechenden periodischen Notizen, die genügend Kontext enthalten;
- Der andere basiert auf dem Thema (PARA): Wenn ich ein Thema recherchieren möchte, arbeite ich anhand des Index des entsprechenden Themas (README.md), in dem bereits viel Kontext gesammelt wurde;

### Aspect-oriented Subsystem

> [Aspect-oriented programming - Wikiwand](https://www.wikiwand.com/zh-hans/%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)

Unterhalb der beiden oben genannten Systeme befindet sich ein verstecktes Subsystem zur Verwaltung von Aufgaben/Zielen/Zeit, hauptsächlich durch "periodische Notizen":

- Task management
  - Collecting via daily/weekly logs.
  - Organizing via weekly/monthly reviews.
- Goal management
  - Jahresziele im Rahmen des Jahresrückblicks planen.
  - Jahresziele im Rahmen des Quartalsrückblicks aufteilen.
  - Offene Punkte im Rahmen des Monatsrückblicks aufschlüsseln.
    - Top-down-Sortierung (durch Zielzerlegung).
    - Bottom-up-Sortierung (durch Sammlungszerlegung -> Tages-/Wochenlogs).
- Time management
  - Manuell die für verschiedene Projekte aufgewendete Zeit und ihre Anteile im Tageslog erfassen und die Zeitinvestitionen anpassen.
  - Mithilfe von Skripten in täglichen, wöchentlichen, monatlichen, vierteljährlichen und jährlichen Rückblicken automatisch die für verschiedene Projekte aufgewendete Zeit und ihre Anteile erfassen und die Zeitinvestitionen reviewen.

Vielleicht fragst du dich, warum das obige Subsystem scheinbar nur "periodische Notizen" verwendet. Tatsächlich sind die beiden Hauptsysteme auf zwei Wegen miteinander verbunden.

### Connection

> How systems are associated

#### Tag Connection

Die Ordner der ersten Ebene unter PARA werden als spezielle Tags behandelt (sie müssen nicht exakt mit den Ordnernamen übereinstimmen) und in "periodischen Notizen" verwendet. So kann in jedem PARA-Ordner auf dieselbe Weise einheitlich indexiert werden. Dadurch enthält der README.md-Index in jedem PARA-Ordner den gesamten Kontext zum aktuellen Thema:

#### Project Connection

Ein Projekt im "Wissensmanagement" erstellen – um den Fokus auf das Projekt zu stärken, gibt es in jeder Klasse von "periodischen Notizen" eine "Hauptereignisliste" oder "Projektliste", zum Beispiel:

- Die "Projektliste" im Tageslog ist eine Momentaufnahme der aktuellen Projektliste und dient zur Berechnung der an diesem Tag für verschiedene Projekte aufgewendeten Zeit und ihrer Anteile, um sicherzustellen, dass genügend Zeit in Projekte investiert wird.
- Die "Hauptereignis-Dimensionen" in den Wochen- und Monatsrückblicken werden automatisch aus den Tagesrückblicken der jeweiligen Woche oder des Monats zusammengeführt und dedupliziert. Sie dienen der Planung von Aufgaben in Projektdimensionen und späteren Rückblicken.
- Die "Hauptereignis-Dimensionen" im Quartalsrückblick sind eine Momentaufnahme der aktuellen Bereichsliste und dienen der Planung von Zielen in Hauptereignis-Dimensionen sowie späteren Rückblicken.
- Die "Hauptereignis-Dimensionen" im Jahresrückblick werden automatisch aus den Hauptereignis-Dimensionen der Quartale zusammengeführt und dedupliziert, um Ziele in Bereichsdimensionen festzulegen und spätere Rückblicke durchzuführen.

### Search

- Tags
  - For example, the [holiday](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-01.md#L3), [vacation](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-11.md#L4) tags in the daily log.
- Index files
  - For example, the [README.md](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md) Index der Aufgaben, Logs und des Kontexts jedes Projekts.
- Folders
  - Zum Beispiel eine einheitliche Verzeichnisstruktur für jede PARA-Kategorie verwenden.

### Rückblick

- Der Rückblick konzentriert sich auf die Projekte des aktuellen Zeitraums und plant gleichzeitig die Aufgaben für den nächsten Zeitraum.
- Wochenrückblicke reflektieren die Tageslogs der Woche, Monatsrückblicke die Wochenrückblicke und Quartalsrückblicke die Monatsrückblicke.

## Quick Start

### Herunterladen

1. [Click here to download](https://github.com/quanru/obsidian-example-LifeOS/blob/chinese-version/README.md)
2. Open with obsidian and enjoy

### Creating Notes

- Tages-, Wochen-, Monats-, Quartals- und Jahresnotizen schnell über das Notizerstellungsmodul in der oberen linken Ecke anlegen.
- Erstelle PARA-Notizen – also Projekte, Bereiche, Ressourcen und Archive – schnell über das Notizerstellungsmodul in der oberen linken Ecke.

### "Daily Log" and "Project README"

- Wird für das tägliche Management verwendet, einschließlich Projektlisten, Tagesprotokollen, Gewohnheitsverfolgung, Energieverteilung, heutigen Errungenschaften usw.
- Die „Projektliste“ im Tagesprotokoll ist eine Momentaufnahme der aktuellen Projekte (d. h. der Inhalte im Verzeichnis „Projekte“).

### "Weekly Review" and "Monthly Review"

- Wird für die Planung wöchentlicher und monatlicher Aufgaben verwendet, einschließlich Aufgaben- und Überprüfungsmodulen.
- In den Wochen- und Monatsrückblicken sind die „Hauptereignis-Dimensionen“ eine Sammlung von Momentaufnahmen der Projektlisten aus den Tagesprotokollen des jeweiligen Zeitraums (automatisch generiert).
- Die „Rückblicke“ in den Wochen- und Monatsnotizen konzentrieren sich hauptsächlich auf die Projekte des jeweiligen Zeitraums.

### "Quarterly Review" and "Annual Review"

- Wird für die Festlegung quartals- und jahresbezogener Ziele verwendet, einschließlich Ziel- und Überprüfungsmodulen.
- Im Quartalsrückblick ist die „Hauptereignis-Dimension“ eine Momentaufnahme der aktuellen Bereiche (d. h. der Inhalte im Verzeichnis „Areas“).
- Im Jahresrückblick sind die „Hauptereignis-Dimensionen“ eine Sammlung von Momentaufnahmen der Hauptereignis-Dimensionen aus den Quartalsrückblicken des jeweiligen Zeitraums (automatisch generiert).
- Die „Rückblicke“ in den Quartals- und Jahresnotizen konzentrieren sich hauptsächlich auf die Bereiche des jeweiligen Zeitraums.

### "PARA Index" and "Task Index"

### "Capture" and "Express"

Zunächst möchte ich ein Konzept vorstellen: das CODE-Modell, bei dem:

- C steht für Capture (Erfassen): Das Sammeln von Informationen, die einen ansprechen.
- O steht für Organize (Ordnen): Das Sortieren der gesammelten Informationen, d. h. PARA.
- D steht für Distill (Destillieren): Das Herausarbeiten des Wesentlichen eines Inhalts und die Auswahl der nützlichsten Informationen.
- E steht für Express (Ausdrücken): Das Teilen mit anderen und die praktische Anwendung des eigenen Wissens.

Wer mit PARA vertraut ist, wird erkennen, dass dieses Modell von Tiago Forte in „Building a Second Brain“ vorgeschlagen wurde. Es ist das übergeordnete Modell, das die PARA-Organisationsmethode einschließt – wobei O für die PARA-Organisationsmethode steht.

Meine Praxis besteht darin, einige markierte Artikel vorübergehend im Verzeichnis „Capture“ zu speichern und gleichzeitig die Datei „-1. Capture/README.md“ zu verwenden, um Notizen zu indexieren, die mit `#PARA/Capture` in den Tagesprotokollen verteilt sind. Das erleichtert es mir, zu bestimmten Zeitpunkten – wie Wochenenden, Monats- und Quartalsenden – zu überprüfen und zu sortieren: Zuerst ordne ich markierte Artikel in die jeweiligen thematischen PARA-Verzeichnisse ein, dann übertrage ich einige inspirierende Notizen aus den Tagesprotokollen in konkrete Aufgaben.

Kommen wir nun zu „Express“. Ich führe meinen Blog im Bereich „Express“ und halte auch einige fragmentarische Notizen im Tagesprotokoll fest, die mit `PARA/Express`gekennzeichnet sind. Das sind Ergebnisse nach der Internalisierung. Wenn diese Ausgabe auf einer bestimmten sozialen Plattform veröffentlicht werden soll, etwa auf Zhihu oder Xiaohongshu, halte ich das bequem als Aufgabe fest. Wenn ich die in der Datei „5. Express/README.md“ indexierten Aufgaben überprüfe und ausstehende finde, erledige ich sie einfach nacheinander.

## Small Tips in Practice

### Buffer Zone Mechanism

Lege weniger wichtige und nicht dringende Punkte schnell in einen Pufferbereich (Inbox), indem du Aufgaben erstellst, und behalte den Hauptfokus auf „Projekten“.

### Task Lists

Das Festhalten von Aufgaben sollte keine mentale Last sein – sie aufzuschreiben bedeutet nicht, dass sie zwingend erledigt werden müssen. Wenn sie aufgeschrieben sind, muss man sie nicht mehr ständig im Gedächtnis behalten oder befürchten, sie zu vergessen. Ich habe viele Aufgaben notiert, von denen ich viele bei erneuter Betrachtung tatsächlich nicht abgeschlossen habe.

Es ist wichtig, Mechanismen zu etablieren, die eine Überprüfung der aufgezeichneten Aufgaben ermöglichen, zum Beispiel:

- Using a tasks plugin to create [query views](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/TASK.md) for task lists
- Each periodic note contains a [collected tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Weekly/2023-W22.md#%E6%9C%AC%E5%91%A8%E6%94%B6%E9%9B%86) for the current period
- Project index files contain a [tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md#%E4%BB%BB%E5%8A%A1)

### Task Reminders

Ich unterscheide drei Arten von Aufgabenerinnerungen:

- Starke Erinnerungen, z. B. für den Kauf von Moutai-Schnaps oder Konzerttickets, bei denen ein Wecker nötig ist, der dich genau zum richtigen Zeitpunkt erinnert
- Weiche Erinnerungen, für Dinge, die an einem bestimmten Tag erledigt werden müssen, wie Kreditkartenrückzahlungen oder Kreditrückzahlungen, die über GTD-Software als Erinnerungen eingerichtet werden können
- Listenform, zum Aufzeichnen von Aufgaben, die später eingeplant werden; bei Bedarf können diese in starke oder weiche Erinnerungen umgewandelt werden – ähnlich dem Eingang in GTD-Systemen

### Micro-Habits

- Ich liste Mikrogewohnheiten in meinem Journal auf – und denke daran: Es sind keine Aufgaben. Es ist egal, ob sie erledigt werden oder nicht; sie dienen hauptsächlich als Erinnerung: „Möchtest du heute diese Mikrogewohnheiten üben?“ Sie wirken als Impulsgeber, wenn ich die nötige „Fähigkeit“ und „Motivation“ habe. Zum Beispiel:
  - Micro-Habits
    - Aufstehen und sofort Wasser trinken, wenn der Wecker klingelt
    - Kopfhörer aufsetzen und den Little Universe-Podcast direkt nach dem Aussteigen aus dem Fahrzeug hören
    - WeChat Read öffnen, sobald ich in die U-Bahn einsteige
    - Drei Aufgaben aufschreiben, sobald ich meinen Arbeitsplatz erreiche
    - Ernsthafte Arbeit beginnen, sobald es 10:30 Uhr ist

### Easy to Refactor

Innerhalb jeder periodischen Notiz verwenden gleiche Funktionsmodule dieselbe Formulierung, z. B. „in diesem Zeitraum gesammelte Aufgaben“, die alle über die folgende Abfrageanweisung eingefügt werden. Die Variable „dieser Zeitraum“ wird durch den aktuellen Dateinamen bereitgestellt, was es sehr praktisch macht, alle periodischen Dateien auf einmal umzustrukturieren – es ist lediglich eine Massenersetzung erforderlich:

````markdown
```LifeOS
    TaskRecordListByTime
```
````

### Efficient Use of Shortcuts

Lege einheitliche globale Tastenkürzel fest, sodass du unabhängig von der verwendeten Software dieselbe Funktion mit demselben Kürzel aufrufen kannst. Hier sind einige meiner Konfigurationen:

- Cursor movement
  - Muster: Strg + Richtungsanfangsbuchstabe/VIM-Richtung
  - Examples:
    - A: Head of line
    - E: End of line
    - F/L: Forward
    - B/H: Backward
    - N/J: Next line
    - P/K: Previous line
    - W: Delete a word (Backward)
    - D: Delete a character (Forward)
- Window management
  - Pattern: Command + Option + initial
  - Examples:
    - L: Left half of the screen
    - R: Right half of the screen
    - C: Center
    - M: Maximize
    - `[`: Show/Hide left sidebar
    - `]`: Show/Hide right sidebar
    - ': Show/Hide bottom bar
    - T: Neuer Tab (für spezifischere Fenster wird auf oberster Ebene Command + T verwendet)
    - W: Tab schließen (für spezifischere Fenster wird auf oberster Ebene Command + W verwendet)
    - J: Next Tab
    - K: Previous Tab
- Document editing
  - Muster 1: Command + Option + Zahl/Symbol
  - Examples:
    - 1: Markdown level-one heading
    - 2: Markdown level-two heading
    - 3: Markdown level-three heading
    - 4: Markdown level-four heading
    - 5: Markdown level-five heading
    - 6: Markdown level-six heading
    - Bulleted list: ~
    - Strikethrough: -
- Function category
  - Pattern: Control + initial
  - Examples:
    - C: Link kopieren (Obsidian-Block-Link, Arc-Browser-Link, VScode-Git-Link)
    - D: Download
    - I: Add to inbox
    - K: Quick Search

