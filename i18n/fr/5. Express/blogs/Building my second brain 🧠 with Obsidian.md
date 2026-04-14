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

This article will take [Obsidian](https://obsidian.md/) comme exemple pour partager ma pratique d'utilisation d'Obsidian pour construire un second cerveau !

Pour plus d'informations, veuillez consulter le site officiel [LifeOS](https://lifeos.vip)!

## Preface

### What is Obsidian?

Voici comment il se présente sur le site officiel :

- [Obsidian](https://obsidian.md/) est l'application de prise de notes privée et flexible qui s'adapte à votre façon de penser.
- [Obsidian](https://obsidian.md/) est une application de prise de notes privée et flexible qui s'adapte à votre façon de penser.

Ce que j'apprécie particulièrement, c'est son riche écosystème de plugins. Si vous aimez VSCode, vous aimerez probablement Obsidian également. La seule différence est que VSCode est destiné à l'écriture de code, tandis qu'Obsidian est destiné à la prise de notes.

### First Brain VS Second Brain

Le premier cerveau est notre cerveau réel. Il ne cesse jamais de fonctionner tant que nous sommes en vie. Il accomplit des tâches telles que la gestion des connaissances, la gestion des tâches et la gestion des objectifs. La plupart du temps, nous ne pouvons pas effectuer plusieurs tâches simultanément, ainsi le premier cerveau agit davantage comme un processeur (CPU), avec diverses tâches se disputant des cycles CPU. Lorsqu'il y a trop de tâches à gérer, le cerveau est submergé. Il doit traiter les tâches en cours tout en conservant le contexte des autres tâches pour passer de l'une à l'autre, ce qui nous empêche de nous concentrer sur l'exécution de la tâche actuelle. C'est là qu'un système externe est nécessaire pour assister le premier cerveau : c'est le second cerveau.

Le second cerveau est un système externe. Si nous comparons le premier cerveau à un processeur (CPU), alors le second cerveau ressemble davantage à un système de stockage. Il joue le rôle de tampon entre le premier cerveau et le monde réel, réduisant la charge du premier cerveau pour qu'il puisse se concentrer sur la tâche présente. On peut le comparer à la mémoire vive et aux disques durs, mais la mémoire vive communique plus fréquemment avec le processeur (le premier cerveau) et offre une vitesse de lecture plus rapide. Ce système de stockage conserve des éléments sur lesquels le premier cerveau n'a pas besoin de se concentrer en permanence. Bien sûr, c'est au premier cerveau de décider si ces éléments doivent être stockés. Le contenu peut être des notes, des tâches à faire, des processus, et le support peut être du texte, des images, des vidéos.

Par exemple, lorsque nous utilisons le second cerveau pour la gestion des tâches, les éléments importants et urgents sont stockés en mémoire vive, tandis que les éléments peu importants et non urgents sont stockés sur le disque dur ; les tâches de cette semaine sont en mémoire vive, tandis que les tâches du mois pourraient être sur le disque dur. Ainsi, en tirant parti du second cerveau, nous pouvons nous concentrer sur le présent sans pression et changer de contexte si nécessaire.

Cet article utilisera Obsidian comme exemple pour partager ma pratique dans la construction d'un second cerveau ! Vous pouvez l'appeler un second cerveau, mais en le considérant sous différents angles, je pourrais aussi le désigner comme un « LifeOS », car j'y consigne tout ce qui concerne la vie et le travail. On pourrait également le qualifier de « système de productivité personnelle programmable ». J'y ai écrit beaucoup de code pour effectuer des requêtes et de l'automatisation, et c'est aussi le système de productivité que j'utilise pour gérer les tâches et les objectifs. On pourrait même le comparer à un « projet Monorepo », où chaque dossier représente un projet, et le README.md au sein du projet est comme le Package.json, décrivant les métadonnées du projet courant.

📢 Attention : Ce système n'est pas un système descendant avec des processus préétablis à mettre en œuvre. Il s'est progressivement formé au fur et à mesure que j'utilisais Obsidian et continue d'évoluer. Appelons provisoirement la version actuelle 1.0. L'objectif de le partager maintenant est d'inspirer d'autres personnes à améliorer leurs propres systèmes ! J'ai déjà écrit un [Obsidian Periodic PARA](https://github.com/quanru/obsidian-periodic-para) plugin pour soutenir ce système ! Avec ce plugin, vous n'avez besoin d'aucune connaissance en programmation. Vous pouvez facilement créer des notes périodiques et PARA en quelques clics simples !

## My Practice

J'adopte deux systèmes : l'un pour la gestion des connaissances et l'autre pour les notes périodiques. Le premier gère les connaissances selon des dimensions telles que projet/domaine/ressource, et le second gère les tâches/objectifs/le temps avec le temps comme dimension.

### Core Systems

- Knowledge management: Using the [PARA](https://fortelabs.com/blog/para/) system
  - Projets -> Les projets sont une série de tâches liées à un objectif avec une échéance.
  - Domaines -> Les domaines sont des sphères d'activité qui nécessitent de maintenir certains standards dans le temps.
  - Ressources -> Les ressources sont des sujets ou thématiques d'intérêt continu.
  - Archives -> Les archives sont les éléments inactifs des trois catégories précédentes.
- Periodic notes
  - Long terme : Descendant, axé sur les objectifs à long terme.
    - Three-year Review
    - Annual Review
    - Quarterly Review
  - Court terme : Ascendant, axé sur les tâches à court terme.
    - Monthly Review
    - Weekly Review
  - Quotidien : Capturer pensées et idées, développer la conscience de soi ; statistiques de consommation de temps, se concentrer sur les projets.
    - Daily Log

Plus le composant PARA est proche des Projets, plus il est actionnable ; plus la note périodique est à long terme, moins elle est prévisible ;

Ces deux systèmes créent efficacement deux contextes qui me permettent de rester concentré :

- L'un basé sur le temps (notes périodiques), c'est-à-dire que lorsque j'atteins un certain point temporel, je travaille en me basant sur les notes périodiques correspondantes, et ces notes disposent d'un contexte suffisant ;
- L'autre basé sur le sujet (PARA), c'est-à-dire que lorsque je souhaite approfondir un sujet, je travaille en me basant sur l'index du sujet correspondant (README.md), et les notes ont déjà collecté beaucoup de contexte ;

### Aspect-oriented Subsystem

> [Aspect-oriented programming - Wikiwand](https://www.wikiwand.com/zh-hans/%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)

Sous les deux systèmes mentionnés ci-dessus, il existe un sous-système caché pour gérer les tâches/objectifs/le temps, principalement via les « notes périodiques » :

- Task management
  - Collecting via daily/weekly logs.
  - Organizing via weekly/monthly reviews.
- Goal management
  - Planification des objectifs annuels avec la revue annuelle.
  - Décomposition des objectifs annuels avec la revue trimestrielle.
  - Détail des éléments en attente avec la revue mensuelle.
    - Tri descendant (par décomposition des objectifs).
    - Tri ascendant (par décomposition des collections -> journaux quotidiens/hebdomadaires).
- Time management
  - Suivi manuel du temps passé sur divers projets dans le journal quotidien et de leurs proportions, afin d'ajuster l'investissement en temps.
  - Utilisation de scripts dans les revues quotidiennes, hebdomadaires, mensuelles, trimestrielles et annuelles pour suivre automatiquement le temps passé sur divers projets et leurs proportions, en vue d'examiner l'investissement en temps.

Vous pourriez vous demander pourquoi le sous-système ci-dessus semble n'utiliser que les « notes périodiques ». En réalité, les deux systèmes principaux sont connectés par deux méthodes.

### Connection

> How systems are associated

#### Tag Connection

Traitez les dossiers de premier niveau sous PARA comme des balises spéciales (elles n'ont pas besoin d'être exactement identiques aux noms des dossiers), utilisez-les dans les « notes périodiques », puis vous pouvez indexer uniformément dans chaque dossier PARA de la même manière. Cela garantit que l'index README.md dans chaque dossier PARA dispose de tout le contexte relatif au sujet courant :

#### Project Connection

Générer un projet dans la « gestion des connaissances » ; pour renforcer la concentration sur le projet, il existe une « liste d'événements principaux » ou « liste de projets » dans chaque classe de « notes périodiques », par exemple :

- La « liste de projets » dans le journal quotidien est un instantané de la liste de projets actuelle, utilisé pour calculer le temps passé ce jour-là sur divers projets et leurs proportions, garantissant qu'un temps suffisant est consacré aux projets.
- Les « dimensions d'événements principaux » dans les revues hebdomadaires et mensuelles sont automatiquement fusionnées et dédupliquées à partir des revues quotidiennes de la semaine ou du mois, utilisées pour organiser les tâches par dimension de projet et les revues ultérieures.
- Les « dimensions d'événements principaux » dans la revue trimestrielle constituent un instantané de la liste de domaines actuelle, utilisé pour organiser les objectifs par dimension d'événements principaux et les revues ultérieures.
- Les « dimensions d'événements principaux » dans la revue annuelle, automatiquement fusionnées et dédupliquées à partir des dimensions d'événements principaux des trimestres, utilisées pour définir les objectifs par dimension de domaine et les revues ultérieures.

### Search

- Tags
  - For example, the [holiday](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-01.md#L3), [vacation](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-11.md#L4) tags in the daily log.
- Index files
  - For example, the [README.md](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md) index des tâches, journaux et contexte de chaque projet.
- Folders
  - Par exemple, en utilisant une structure de répertoires cohérente pour chaque catégorie PARA.

### Bilan

- La revue se concentre sur les projets de la période en cours tout en planifiant les tâches de la prochaine période.
- Les revues hebdomadaires portent sur les journaux quotidiens de la semaine, les revues mensuelles sur les revues de chaque semaine, et les revues trimestrielles sur les revues de chaque mois.

## Quick Start

### Téléchargement

1. [Click here to download](https://github.com/quanru/obsidian-example-LifeOS/blob/chinese-version/README.md)
2. Open with obsidian and enjoy

### Creating Notes

- Créez rapidement des notes quotidiennes, hebdomadaires, mensuelles, trimestrielles et annuelles via le module de création de notes dans le coin supérieur gauche.
- Créez rapidement des notes PARA (projets, domaines, ressources, archives) via le module de création de notes en haut à gauche.

### "Daily Log" and "Project README"

- Utilisé pour la gestion quotidienne, notamment les listes de projets, les journaux quotidiens, le suivi des habitudes, la répartition de l'énergie, les accomplissements du jour, etc.
- La « liste de projets » dans le journal quotidien est un instantané des projets en cours (c'est-à-dire ceux du répertoire Projects).

### "Weekly Review" and "Monthly Review"

- Utilisé pour organiser les tâches hebdomadaires et mensuelles, incluant les modules de tâches et de bilan.
- Dans les bilans hebdomadaires et mensuels, les « dimensions des événements principaux » sont une collection d'instantanés des listes de projets issues des notes quotidiennes de la période (générée automatiquement).
- Les « bilans » dans les notes hebdomadaires et mensuelles portent principalement sur les projets de la période.

### "Quarterly Review" and "Annual Review"

- Utilisé pour définir les objectifs trimestriels et annuels, incluant les modules d'objectifs et de bilan.
- Dans le bilan trimestriel, les « dimensions des événements principaux » sont un instantané du domaine actuel (c'est-à-dire sous le répertoire Areas).
- Dans le bilan annuel, les « dimensions des événements principaux » sont une collection d'instantanés issus des dimensions des événements principaux des bilans trimestriels de la période (générée automatiquement).
- Les « bilans » dans les notes trimestrielles et annuelles portent principalement sur les domaines de la période.

### "PARA Index" and "Task Index"

### "Capture" and "Express"

Commençons par présenter un concept : le modèle CODE, où :

- C signifie Capture : collecter les informations qui résonnent en nous.
- O signifie Organize : trier les informations collectées, c'est-à-dire PARA.
- D signifie Distill : extraire l'essence du contenu, en sélectionnant les informations les plus utiles.
- E signifie Express : partager avec les autres, appliquer ses connaissances dans la pratique.

Les habitués de PARA reconnaîtront que ce modèle a été proposé par Tiago Forte dans « Building a Second Brain » ; il s'agit du modèle de plus haut niveau qui englobe la méthode d'organisation PARA, le O désignant précisément cette méthode.

Ma pratique consiste à stocker temporairement certains articles marqués dans le répertoire « Capture », tout en utilisant le fichier « -1. Capture/README.md » pour indexer les notes taguées avec `#PARA/Capture` dispersées dans les journaux quotidiens. Cela me permet, à des moments clés (week-ends, fins de mois, fins de trimestre), de faire un tri : d'abord en classant les articles marqués dans chaque répertoire thématique PARA, puis en transformant certaines notes inspirantes des journaux en tâches concrètes ;

Parlons maintenant d'« Express ». Je place mon blog dans la section Express et note également des fragments dans le journal quotidien, tagués avec `PARA/Express`. Ce sont des productions issues d'une intériorisation. Si ce contenu doit être publié sur une plateforme sociale spécifique (comme Zhihu ou Xiaohongshu), je l'enregistre simplement comme une tâche. Lorsque je consulte les tâches indexées dans le fichier « 5. Express/README.md » et que j'en trouve des en attente, je les traite une par une.

## Small Tips in Practice

### Buffer Zone Mechanism

Placez rapidement les éléments moins importants et non urgents dans une zone tampon (Inbox) en créant des tâches, afin de maintenir l'attention principale sur les « Projects ».

### Task Lists

Enregistrer des tâches ne devrait pas être une charge mentale — les noter ne signifie pas qu'elles doivent nécessairement être accomplies. Les avoir écrites libère l'esprit du besoin de s'en souvenir en permanence ou de craindre de les oublier. J'ai noté de nombreuses tâches, dont beaucoup, après réexamen, n'ont effectivement pas été réalisées.

Il est important de disposer de mécanismes permettant de revoir les tâches enregistrées, par exemple :

- Using a tasks plugin to create [query views](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/TASK.md) for task lists
- Each periodic note contains a [collected tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Weekly/2023-W22.md#%E6%9C%AC%E5%91%A8%E6%94%B6%E9%9B%86) for the current period
- Project index files contain a [tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md#%E4%BB%BB%E5%8A%A1)

### Task Reminders

Je distingue trois types de rappels de tâches :

- Les rappels forts, comme l'achat en flash de bouteilles de Moutai ou de billets de concert, qui nécessitent une alarme au moment précis
- Les rappels doux, pour les choses à faire un jour précis, comme le remboursement de carte de crédit ou d'emprunt, que l'on peut configurer via un logiciel GTD
- Les listes, pour enregistrer des tâches à planifier ultérieurement ; selon les besoins, elles peuvent être converties en rappels forts ou doux, à l'instar de l'inbox dans les systèmes GTD

### Micro-Habits

- Je liste de micro-habitudes dans mon journal — rappelons qu'il ne s'agit pas de tâches. Peu importe qu'elles soient accomplies ou non ; elles servent principalement de rappel : « Avez-vous pensé à pratiquer ces micro-habitudes aujourd'hui ? » Elles agissent comme des déclencheurs quand j'en ai la « capacité » et la « motivation ». Par exemple :
  - Micro-Habits
    - Se lever et boire de l'eau dès que le réveil sonne
    - Mettre les écouteurs et écouter le podcast Little Universe dès la sortie du véhicule
    - Ouvrir WeChat Read dès que je monte dans le métro
    - Noter trois tâches à faire dès que j'arrive à mon poste de travail
    - Commencer le travail sérieux dès qu'il est 10h30

### Easy to Refactor

Dans chaque note périodique, les modules de même nature utilisent la même formulation, comme « tâches collectées durant cette période », tous insérés via la requête suivante. La variable « cette période » est fournie par le nom du fichier courant, ce qui facilite grandement la refactorisation en masse de tous les fichiers périodiques par simple remplacement groupé :

````markdown
```LifeOS
    TaskRecordListByTime
```
````

### Efficient Use of Shortcuts

Définissez des raccourcis globaux cohérents, afin de pouvoir invoquer la même fonction avec le même raccourci, quel que soit le logiciel utilisé. Voici quelques-unes de mes configurations :

- Cursor movement
  - Modèle : Control + initiale directionnelle / direction VIM
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
    - T : Nouvel onglet (pour les fenêtres plus spécifiques, le niveau supérieur utilise Command + T)
    - W : Fermer l'onglet (pour les fenêtres plus spécifiques, le niveau supérieur utilise Command + W)
    - J: Next Tab
    - K: Previous Tab
- Document editing
  - Modèle 1 : Command + Option + chiffre/symbole
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
    - C : Copier le lien (lien de bloc Obsidian, lien du navigateur Arc, lien git VSCode)
    - D: Download
    - I: Add to inbox
    - K: Quick Search

