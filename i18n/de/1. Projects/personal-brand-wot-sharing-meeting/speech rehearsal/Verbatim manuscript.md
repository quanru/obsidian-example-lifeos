> Fettgedruckte Stellen markieren Stockpunkte

## Teil 1
> 4min30, 5min, 4min30, 5min45, 5min
- Guten Morgen alle zusammen, ich heiße Lin Yibing. Das Thema meines heutigen Vortrags ist »Frontend-Engineering-Praktiken bei XX«;
- Kurz zu meiner Person: Ich bin Frontend-Architekt im Web-Infra-Team mit mehrjähriger Erfahrung im Frontend-Engineering. Ich helfe Frontend-Ingenieuren dabei, ihre Projekte besser zu verwalten und zu steuern. Derzeit verantworte ich Konzeption und Umsetzung im Bereich Engineering Governance.
- Der heutige Vortrag gliedert sich in vier Teile:
	- Zunächst analysieren wir die »aktuellen Trends in der Frontend-Entwicklung« und leiten daraus die neuen Herausforderungen für das Frontend bei XX ab;
	- Dann stellen wir vor, welche Praktiken wir einsetzen, um diesen neuen Herausforderungen zu begegnen;
	- Anschließend berichten wir über den unternehmensweiten Einsatz unserer eigenentwickelten Lösung bei XX;
	- Abschließend fassen wir zusammen und wagen einen Ausblick auf die Entwicklungstrends im Frontend-Engineering;
	- **Bevor wir starten, klären wir kurz: »Was ist Frontend-Engineering?«**
- Unter Frontend-Engineering versteht man den Einsatz einer Reihe von **Techniken und Werkzeugen** im Frontend-Entwicklungsprozess, um die Entwicklungseffizienz zu steigern, Codequalität zu sichern und Wiederverwendbarkeit zu erhöhen sowie **Automatisierung und Teamkollaboration zu fördern – ein unverzichtbarer Bestandteil moderner Frontend-Entwicklung**;
	- Ich möchte ausdrücklich betonen: Dieser Vortrag behandelt nicht das gesamte Spektrum des Frontend-Engineerings, sondern die »neuen Praktiken«, die wir als Antwort auf die »neuen Herausforderungen« der aktuellen »neuen Trends« entwickelt haben. Schauen wir uns nun an, welche neuen Trends in der Frontend-Entwicklung zu beobachten sind.
- Zunächst zu den Trends im Frontend-Berufsfeld
	- Der erste **Trend**: immer mehr Plattformen – Web, Node, native Clients und Cross-Platform-Lösungen
	- Der zweite Trend: immer mehr und komplexere Geschäftsanforderungen – besonders in den letzten Jahren **entstehen** auf der Frontend-Seite zunehmend interaktionsintensive Anwendungen
	- Der dritte Trend: Als unvermeidliche Folge der beiden vorgenannten Entwicklungen **wachsen auch die Frontend-Teams**
- Diese drei Trends führen objektiv zu vier Trends im Frontend-Engineering:
	- Erstens: wachsender Codeumfang – intern gibt es bereits Projekte mit über 10 GB Code, und die Anzahl der vor- und nachgelagerten Abhängigkeiten eines Projekts ist enorm
	- Zweitens: mehr Beteiligte – an einem Projekt arbeiten manchmal zehn, manchmal vierzig bis fünfzig Personen
	- Drittens: wachsende App-Größe – mit jeder Iteration werden die Anwendungen umfangreicher
	- Viertens: steigende Governance-Komplexität – komplexe Abhängigkeiten sind schwer zu verwalten, komplexe Build-Artefakte schwer zu diagnostizieren
- Welche neuen Herausforderungen ergeben sich aus diesen Trends für unsere Frontend-Entwicklung? Es sind vor allem vier:
	- Erstens: hohe Wartungskosten bei mehreren Projekten – doppelte Infrastruktur, schwierige Code-Wiederverwendung und fragmentierte Workflows
	- Zweitens: hohe Kollaborationskosten – gegenseitige Abhängigkeiten und kaskadierende Versions-Updates erhöhen den Abstimmungsaufwand
	- Drittens: langsame Build-Zeiten bei großen Anwendungen – je größer die App, desto länger der Build
	- Viertens: schnelle Qualitätsdegradierung bei großen Anwendungen – uns fehlen wirksame Mittel zur Qualitätssicherung
- Um diesen neuen Herausforderungen zu begegnen, haben wir in folgende Werkzeuge investiert:
	- Das erste ist ein selbst entwickeltes Monorepo-Tool zur Reduzierung der Wartungskosten bei mehreren Projekten
	- Das zweite ist die Weiterentwicklung des bestehenden Micro-Frontend-Frameworks, um die Kollaborationskosten bei der Teamentwicklung weiter zu senken
	- Das dritte ist die Entwicklung eines Bundlers und Build Systems, um die Build-Geschwindigkeit großer Anwendungen zu erhöhen
	- Das vierte ist die Bereitstellung von Diagnosetools, um einer Verschlechterung der Anwendungsqualität wirksam entgegenzuwirken
	- Im Folgenden werden diese vier Themen näher beleuchtet – wie wir die genannten Ziele in der Praxis umgesetzt haben 

## Teil 2
> 6min, 5min, 5min, 7min, 6min

- Was ist ein Monorepo?
	- Es ist ein Muster zur Quellcodeverwaltung, bei dem mehrere Projekte in einem einzigen Repository zusammengefasst werden;
	- Das Gegenstück dazu ist das Polyrepo-Modell, bei dem jedes Projekt ein eigenes Repository besitzt;
	- **Kurz gesagt**: Ein Monorepo fasst mehrere unterschiedliche Projekte in einer gut strukturierten Form in einem einzigen Repository zusammen;
- Wie senkt ein Monorepo die Wartungskosten bei mehreren Projekten? Es tut dies durch
	- Wiederverwendung der Infrastruktur, damit sich Entwickler wieder auf die Anwendung selbst konzentrieren können
	- Code-Sharing, das eine kostengünstige Wiederverwendung von Code ermöglicht
	- Atomare Commits für automatisierte Multi-Projekt-Workflows
- Zunächst ermöglicht die Wiederverwendung der Infrastruktur, dass sich Entwickler wieder auf die Anwendung selbst konzentrieren können:
	- Im traditionellen Polyrepo-Modell muss jedes Projekt von eigenen Entwicklern erstellt und gepflegt werden. Im Monorepo hingegen genügen ein oder zwei Entwickler, um die gesamte Monorepo-Infrastruktur aufzusetzen – alle Projekte werden dann zentral in einem Repository verwaltet. Durch die gemeinsame Nutzung einer einheitlichen Infrastruktur (z. B. CI-Konfiguration, Lint-Regeln, Build-Skripte) werden **die Wartungskosten für mehrere Projekte deutlich gesenkt**
	- Darüber hinaus erleichtert die gemeinsame Infrastruktur auch deren einheitliche Anpassung und Aktualisierung. Möchte man beispielsweise eine Typprüfung in den CI-Prozess aller Projekte integrieren, um die Codequalität zu verbessern, müsste man im Polyrepo-Modell jedes Projekt einzeln anpassen – **was mit erheblichem Aufwand verbunden ist**. Im Monorepo lassen sich solche Anpassungen dagegen problemlos auf alle Projekte übertragen.
- Außerdem ermöglicht Code-Sharing, dass Entwickler Code mit geringem Aufwand wiederverwenden können:
	- Im Polyrepo ist die Pflege gemeinsamer Module aufwändig. Das Debugging ist umständlich, da gemeinsame Module manuell per `npm link` mit dem aktuellen Projekt verknüpft werden müssen. Bei vielen gemeinsamen Modulen wird dieser Schritt schnell sehr mühsam und ineffizient.
	- Auch das Aktualisieren gemeinsamer Module ist aufwändig: Man muss die Abhängigkeiten manuell verwalten, zuerst die Basismodule aktualisieren, dann veröffentlichen und schließlich die übergeordneten Module aktualisieren – **und tritt dabei ein Fehler auf, muss der gesamte Prozess von vorne beginnen**.
	- Im Monorepo hingegen lassen sich gemeinsame Module mit einem Klick erstellen. Übergeordnete Module können sie sofort einbinden – ganz ohne `npm link` oder Veröffentlichung. Änderungen in Basismodulen werden unmittelbar von den abhängigen Modulen erkannt. Das reduziert redundante Arbeit erheblich, senkt den Aufwand für das Auslagern wiederverwendbaren Codes und steigert damit die generelle Bereitschaft dazu – was wiederum die Codwiederverwendungsrate erhöht.
- Schließlich ermöglichen atomare Commits automatisierte Multi-Projekt-Workflows für Entwickler
	- Wenn eine Anforderung mehrere Projekte betrifft, muss man im Polyrepo-Modell – wie im Beispiel mit den drei Projekten – zunächst die Basismodule anpassen und committen, dann die CI-Pipeline jedes Moduls durchlaufen, beim Bearbeiten der übergeordneten Module die Abhängigkeiten aktualisieren und die CI-Pipeline erneut starten. Dieser Ablauf ist sehr mühsam und fragmentiert.
	- Im Monorepo hingegen können alle Projekte auf einmal angepasst und committed werden – CI und Release-Prozesse werden in einem einzigen Durchlauf abgehandelt, **wodurch der Multi-Projekt-Workflow vollständig automatisiert wird.**
- Fassen wir kurz zusammen:
	- Im Polyrepo-Modell verfügt jedes Projekt über eine eigene Infrastruktur, Code-Wiederverwendung ist schwierig und die Workflows sind fragmentiert. Im Monorepo hingegen können mehrere Projekte dieselbe Infrastruktur nutzen, Code einfach teilen und einen einheitlichen Workflow verwenden.
	- **Die Projekte eines Teams sind oft nicht isoliert, sondern miteinander verknüpft. Ein Monorepo ermöglicht es, diese Projekte einfach in einem einzigen Repository zu organisieren und zu pflegen – und senkt damit die Wartungskosten für mehrere Projekte erheblich.**

## Teil 3
> 8min, 9min, 11min, 11min30

- Im Folgenden wird die Ingenieurpraxis rund um Bundler und Build System vorgestellt. Unabhängig davon, ob es sich um ein Mono- oder Polyrepo handelt: Mit wachsendem Codeumfang und zunehmender Anzahl von Teilanwendungen sinkt die Build-Performance. **Um dem entgegenzuwirken**, haben wir sowohl einen Bundler als auch ein Build System entwickelt.
	- Der Bundler adressiert das Problem langsamer Build-Zeiten bei einzelnen monolithischen Anwendungen;
	- Das Build System hingegen löst das Problem langsamer Build-Zeiten innerhalb eines Monorepos.
- Im Frontend-Bereich ist ein Bundler ein Werkzeug, **das mehrere Frontend-Ressourcen (z. B. JS-, CSS- und Bilddateien) zu einer oder mehreren Dateien bündelt, sodass der Browser sie direkt ausführen kann**;
	- Gängige Bundler-Tools sind Webpack, Rollup, Vite, Parcel und Esbuild.
- Im Folgenden wird unser selbst entwickelter Rspack Bundler vorgestellt – eine hochperformante, auf Rust basierende Build-Engine mit Interoperabilität zum Webpack-Ökosystem.
	- Aus dieser Beschreibung ergeben sich zwei wesentliche Merkmale von Rspack: hohe Performance und Kompatibilität mit dem Webpack-Ökosystem.
- Das erste Merkmal ist die Implementierung in Rust. Da JavaScript single-threaded ist – auch wenn es gewisse Ansätze zur Nebenläufigkeit gibt, fühlen sich diese oft wie Tanzen mit Fesseln an – **bietet Rust echte, gut unterstützte Nebenläufigkeit**. Wir nutzen diese, um Build-Aufgaben parallel auszuführen, **was die Build-Performance enorm steigert**;
	- Diese zwei Grafiken vergleichen die Thread-Auslastung von Webpack und Rspack während des Build-Vorgangs. Man sieht deutlich: Webpack läuft tatsächlich single-threaded, während Rspack die Vorteile von Multi-Core-CPUs voll ausschöpft und maximale Performance herausholt.
	- Dies ist ein Vergleichsdiagramm von unserer Website: Für dasselbe Projekt benötigt Rspack nur 4,2 Sekunden, während Webpack 34,8 Sekunden braucht.
- Das zweite Merkmal von Rspack ist die teilweise Webpack-Kompatibilität. Die aktuelle Implementierung lässt sich als Webpack-Teilmenge verstehen, die die meisten gängigen Konfigurationen abdeckt und den täglichen Entwicklungsbedarf erfüllt. **Aber warum überhaupt Webpack-Kompatibilität?**
	- **Erstens: Das Plugin-System von Webpack erfüllt die Anpassungsanforderungen von Projekten**
	- **Zweitens: Durch die Wiederverwendung des umfangreichen Webpack-Ökosystems lässt sich die Entwicklungserfahrung bei großen Projekten mit minimalem Aufwand optimieren**
	- **Drittens: Da es sehr viele bestehende Webpack-Projekte gibt, senkt die Webpack-Kompatibilität die Migrationskosten erheblich**
- Hier zwei typische Praxisbeispiele: Die Dev-Startzeit beider Projekte lag ursprünglich bei etwa 5 Minuten – mit Rspack nur noch bei ca. 20 Sekunden. Die HMR-Zeit betrug vorher rund 20 Sekunden, jetzt nur noch etwa 1 Sekunde. Der Performance-Gewinn liegt damit jeweils beim ca. 10-Fachen.
- Kurz zum Build System: Es verarbeitet den Abhängigkeitsgraphen der Projekte innerhalb eines Monorepos und plant die Build-Aufgaben entsprechend;
	- Warum braucht ein Monorepo ein Build System? Weil ein Monorepo mehr ist als nur mehrere Projekte in einem Repository. **Es erfordert ein Build System, das alle Projekte im Repository verwaltet und sie entsprechend ihrer gegenseitigen Abhängigkeiten baut;**
	- Gängige Build-System-Tools sind Bazel, NX, Turborepo und Lage.
- Im Folgenden wird erläutert, wie das Build System in unserem selbst entwickelten Monorepo-Tool umgesetzt wird. Wir erreichen dies durch
	- Unterstützung für „parallele Aufgabenausführung“ durch maximale Parallelisierung zur Build-Beschleunigung
	- Unterstützung für „mehrstufiges Caching“ zur Zwischenspeicherung von Build-Ergebnissen auf mehreren Ebenen
	- Unterstützung für „bedarfsgesteuertes Bauen“ – nur betroffene Projekte werden entsprechend den Codeänderungen gebaut
- Wie in der Abbildung gezeigt, wird anhand der Abhängigkeiten der Teilprojekte ein Aufgaben-Abhängigkeitsgraph erstellt. Die Build-Reihenfolge muss dabei einer Regel folgen: Übergeordnete Projekte können erst gebaut werden, nachdem die Basismodule fertig sind.
	- Betrachten wir zunächst Variante 1: die serielle Ausführung in der Reihenfolge DEBCA. Diese erfüllt die Build-Anforderungen, ist jedoch wenig performant. Da D und E parallel ausgeführt werden können, sieht Variante 2 eine parallele Verarbeitung von DE und BC vor – wodurch die ursprünglich 5 Schritte auf 3 reduziert werden.
	- Dabei fällt auf: Aufgabe C hängt gar nicht von der Fertigstellung von Aufgabe D ab – dennoch muss C in Variante 2 warten, bis sowohl D als auch E abgeschlossen sind.
	- Dies führt zu Variante 3: Sobald Aufgabe E abgeschlossen ist, werden D und C parallel ausgeführt;
- **Wenn das Monorepo wächst und jede Entwicklungs- oder Deployment-Runde mehrere Teilprojekte betrifft, würde ein vollständiger Rebuild bei jedem Mal die Build- und Deployment-Geschwindigkeit erheblich verlangsamen.**
	- **Wir haben eine Caching-Funktion für Build-Artefakte implementiert, die sowohl lokal als auch remote speichert. Wenn der Code eines Teilprojekts unverändert geblieben ist, werden die vorhandenen Build-Artefakte wiederverwendet, um die Build-Zeit zu verkürzen.**
- **Beim bedarfsgesteuerten Bauen unterstützen wir eine CI-Ausführung nach Auswirkungsbereich: Per `git diff` werden geänderte Dateien analysiert und nur die betroffenen Projekte gebaut. Andernfalls würde jeder CI-Lauf alle Teilprojekte vollständig neu bauen.**
- Als Beispiel dient ein einfaches Monorepo – **die Abhängigkeiten sind in der Abbildung dargestellt**
	1. Ein vollständiger Build aller Projekte dauert etwa 17,72 Sekunden
	2. Wurde nur das component-Modul geändert, genügt es beim bedarfsgesteuerten Bauen, component, app1 und app2 zu bauen – das dauert 8,94 Sekunden und spart 50 % der Zeit
	3. Ohne Cache dauert der Build von App1, App2 und App3 zwischen 10,77 und 16,94 Sekunden
	4. Mit Cache – wenn component, sdk und util bereits gebaut wurden – reduziert sich die Build-Zeit für App1, App2 und App3 auf 7,55 bis 9,74 Sekunden, was etwa 45 % einspart
- Durch den Einsatz von Bundler und Build System – mit Rust für hohe Performance und Remote-Caching für effiziente Builds – haben wir die Build-Geschwindigkeit großer Anwendungen erheblich gesteigert. Das ist jedoch nicht nur ein Gewinn für die Entwicklungsgeschwindigkeit; es bringt zwei weitere bedeutende Vorteile für unser Geschäft
	1. Höhere Obergrenze für monolithische Anwendungen: Wir können nun noch größere und leistungsfähigere Anwendungen entwickeln
	2. Beschleunigte Iterationsgeschwindigkeit: Wir können A/B-Tests und Feature-Releases häufiger und schneller durchführen

## Teil 4
> 10min 10min 14min

- Micro-Frontends sind die Divide-and-Conquer-Lösung im Frontend-Bereich. Die Micro-Frontend-Praxis bei XX hat die Phasen iframe, SPA und Framework durchlaufen. Aufgrund zahlreicher Herausforderungen in der Praxis befindet man sich nun in der Erkundungsphase eines neuen Ansatzes, um die Kollaborationskosten im Team weiter zu senken.
- Im Folgenden wird die Ingenieurpraxis bei Micro-Frontends beleuchtet – wie der neue Ansatz die Kollaborationskosten im Team senkt
	- Erstens: Durch die Entlastung der Shell-Anwendung wird die Kern-App von der Geschäftslogik entkoppelt
	- Zweitens: Durch feinkörnige Komposition können Module unabhängig voneinander entwickelt und deployt werden
	- Drittens: Durch die Standardisierung von Modulprotokollen haben wir ein Modulzentrum aufgebaut. Dieses lässt sich sogar mit Low-Code-Plattformen kombinieren, was die Wiederverwendungsrate von Modulen erhöht und Canary-Deployments sowie A/B-Tests auf Modulebene ermöglicht;
- Wie wird die Shell-Anwendung entlastet? Im traditionellen Micro-Frontend-Ansatz trägt eine gemeinsame Shell-App die gemeinsame Logik. Abgesehen von Utility-Bibliotheken koppelt diese Wiederverwendungsweise oft viel Geschäftslogik in die Shell ein – was häufigere Änderungen und Deployments, größere Fehlerauswirkungen und leicht invalidiertes Caching zur Folge hat;
	- Das führt dazu, dass Teilanwendungen, die eigentlich unabhängig entwickelt und deployt werden sollten, wieder gewissermaßen voneinander abhängen. Der neue Ansatz beseitigt diese Art von Shell daher durch zwei Mechanismen: einen Konsummechanismus für die Wiederverwendung von Geschäftslogik und einen Sharing-Mechanismus für die Wiederverwendung von Utility-Bibliotheken.
- Wie funktionieren die Mechanismen des neuen Ansatzes?
	- In der traditionellen Micro-Frontend-Architektur sind mehrere Teilanwendungen weitgehend voneinander isoliert – typischerweise durch einen Sandbox-Mechanismus;
	- Doch mit wachsender Größe der Frontend-Teilanwendungen und steigender Mitarbeiterzahl schränkt diese grobkörnige Isolation zunehmend die Zusammenarbeit innerhalb und zwischen den einzelnen Teilanwendungen ein;
	- Daher besteht unser neuer Ansatz darin, durch ein feinkörnigeres **Modul-Konsum- und -Freigabekonzept** Entwicklern die Möglichkeit zu geben, in kleineren Einheiten unabhängig zu entwickeln, zu testen und bereitzustellen.
- **Der Modulprotokoll-Standard definiert die Metainformationen von Modulen und ermöglicht durch das plattformübergreifende Weiterleiten dieser Informationen bestimmte Funktionen.**
	1. So generiert beispielsweise die Build-Plattform diese Protokolldatei anhand der Konfigurationsdatei.
	2. **So wandelt etwa die Deployment-Plattform die Metainformationen in Daten mit konkreten CDN-Adressen um, fügt diese direkt in das HTML ein und liefert es aus – diese Operation ist auch die Voraussetzung für Modul-Canary-Rollouts und A/B-Tests.**
	3. Ebenso lädt die Anwendungslaufzeit Module auf Basis dieses Protokolls dynamisch nach.
	- Dank der **Merkmale** der feinkörnigen Komposition und des Modulprotokoll-Standards können wir zudem sehr einfach ein Online-Modulzentrum aufbauen, in dem sowohl geschäftsbezogene Komponenten als auch geschäftsunabhängige Bibliotheken **mit minimalem Aufwand** innerhalb und sogar zwischen Teams wiederverwendet werden können;
	- Darüber hinaus haben wir **auf Basis dieses Mechanismus** die Integration mit Low-Code-Plattformen erprobt: Komponenten, die dem Modulprotokoll-Standard entsprechen, werden über Low-Code-Plattformen erstellt und als Online-Module registriert, was die Effizienz der Geschäftsentwicklung erheblich steigert.
- Dies ist ein typisches Onboarding-Projekt, und nach der Integration stellten wir signifikante Verbesserungen bei der Build-Zeit, der Deployment-Zeit sowie bei der Iterationsgeschwindigkeit und dem Anforderungsdurchsatz fest.
- Als nächstes möchte ich das Diagnosewerkzeug vorstellen: **Die meisten verfügbaren Tools analysieren und diagnostizieren lediglich die Build-Artefakte und können den Build-Prozess selbst nicht tiefgehend untersuchen** – ihr Nutzen ist daher sehr begrenzt.
- Wie verhindert unser selbst entwickeltes Diagnosewerkzeug effektiv eine Verschlechterung der Anwendungsqualität?
	- Erstens bietet es Analysekapazitäten, die auf den Build-Prozess ausgerichtet sind: Da die Daten des Build-Prozesses aufgezeichnet werden, ermöglicht dies eine feinkörnigere und umfassendere Analyse;
	- Zweitens stellt es einen erweiterbaren Regelmechanismus bereit, der **verschiedenen** vertikalen und geschäftlichen Szenarien ermöglicht, eigene Regeln zu definieren;
	- Drittens wird durch die Integration in den zentralen Entwicklungsprozess sichergestellt, dass die Regeln tatsächlich wirksam werden;
- Dies ist eine Ergebnisseite der Statoscope-Analyse – ein typisches Beispiel für die Analyse von Build-Artefakten, **d. h. die Artefakte werden durch Auswertung der stats.json analysiert**;
	- **Es fehlen Analysen und Diagnosen zu build-prozessbezogenen Aspekten wie loader, resolver, plugin usw.;**
	- Bild wird angezeigt ...
		- webpack loader Zeitsequenzanalyse
		- webpack loader Analyse
		- webpack plugin Analyse
	- Wie haben wir das erreicht? Wir greifen in den Build-Prozess ein, indem wir Plugin-Hooks abhören und Loader abfangen, und sammeln sowie generieren Datenstrukturen, die speziell für Diagnose- und Analyseszenarien konzipiert sind – z. B. Abhängigkeitsgraphen, Modulgraphen, Drittanbieter-Paketgraphen, Quellcode, loader, plugin, resolver usw. – **um so umfassendere Build-Kontextinformationen für tiefgehende Diagnosen und Analysen zu erhalten**.
- Wir stellen einige standardmäßige Diagnoseregeln bereit, zum Beispiel:  
	1. Prüfung auf doppelte Pakete - Duplicate Packages
	2. Paket-Konventionsprüfung - Default Import Check
	3. Loader-Leistungsoptimierung - Loader Performance Optimization
	- Darüber hinaus bieten wir einen erweiterbaren Diagnoseregelmechanismus: Indem wir die neu generierten Datenstrukturen als Kontext an benutzerdefinierte Regeln übergeben, **lassen sich folgende Fähigkeiten mühelos realisieren**:
		1. Prüfung der Abhängigkeitsreferenzierung
		2. Versionsprüfung bestimmter Abhängigkeiten
		3. Verbot der Verwendung bestimmter Ausdrücke
- Die beiden oben genannten Fähigkeiten allein reichen nicht aus – wir streben auch die Integration in den zentralen Entwicklungsprozess an und unterstützen in der CI branch-basiertes Diff-Abfangen, damit die Regeln wirklich zur Geltung kommen.
- Zusammenfassend sind hier einige typische Geschäftsvorteile aufgeführt:
- Dies ist der aktuelle Stand der Einführung der oben genannten Tools: Das Monorepo-Tool wird in x Projekten eingesetzt, das Micro-Frontend hat y aktive Nutzer, das Open-Source-Bundler-Tool Rspack hat z Stars, und das Diagnosewerkzeug erreicht n wöchentliche Downloads.
- Im Folgenden eine kurze Zusammenfassung und ein Ausblick:
	- Wenn die oben beschriebene Toolchain größere Projektumfänge, mehr Teammitglieder, schnellere Build-Zeiten und besser wartbare Frontend-Projekte unterstützt;
	- bin ich überzeugt, dass **die Zukunft unweigerlich** noch »leistungsfähigere« Frontend-Anwendungen hervorbringen wird. **Wenn diese noch leistungsfähigeren Frontend-Anwendungen den Projektumfang weiter vergrößern**, mehr Teammitglieder hinzukommen und dabei **die Build-Geschwindigkeit und Wartbarkeit schrittweise sinken**,
	- **werden die Anforderungen an diese Tools zwangsläufig steigen und damit die gesamte Frontend-Toolchain zu einer erneuten Erneuerung antreiben.**
- Vielen Dank – das war mein heutiger Beitrag.