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

Este artículo tomará [Obsidian](https://obsidian.md/) como ejemplo para compartir mi práctica de usar Obsidian para construir un segundo cerebro!

Para más información, consulta el sitio web oficial [LifeOS](https://lifeos.vip)!

## Prefacio

### ¿Qué es Obsidian?

Así es como se presenta en su sitio web oficial:

- [Obsidian](https://obsidian.md/) es la aplicación de notas privada y flexible que se adapta a tu forma de pensar.
- [Obsidian](https://obsidian.md/) es una aplicación de notas privada y flexible que se adapta a tu forma de pensar.

Lo que más valoro es su rico ecosistema de plugins. Si te gusta VSCode, probablemente también te gustará Obsidian. La única diferencia es que VSCode es para escribir código, y Obsidian es para tomar notas.

### Primer Cerebro VS Segundo Cerebro

El primer cerebro es nuestro cerebro real. Nunca deja de funcionar mientras estamos vivos. Realiza tareas como la gestión del conocimiento, la gestión de tareas y la gestión de objetivos. La mayoría de las veces no podemos hacer varias cosas a la vez, por lo que el primer cerebro actúa más como una CPU, con diversas tareas compitiendo por sus ciclos. Cuando hay demasiadas tareas, el cerebro se satura: debe atender las tareas actuales mientras mantiene el contexto de otras para poder cambiar entre ellas, lo que impide concentrarse en la tarea presente. Es entonces cuando se necesita un sistema externo que asista al primer cerebro: el segundo cerebro.

El segundo cerebro es un sistema externo. Si comparamos el primer cerebro con una CPU, el segundo cerebro se asemeja más a un sistema de almacenamiento. Actúa como un búfer entre el primer cerebro y el mundo real, reduciendo la carga sobre el primero para que pueda concentrarse en el asunto presente. Puede compararse con la memoria RAM y el disco duro: la RAM se comunica con mayor frecuencia con la CPU (el primer cerebro) y tiene mayor velocidad de lectura. Este sistema de almacenamiento guarda todo aquello en lo que el primer cerebro no necesita enfocarse constantemente. Por supuesto, es el primer cerebro quien decide qué debe almacenarse. El contenido puede ser notas, tareas pendientes o procesos, y el medio puede ser texto, imágenes o vídeos.

Por ejemplo, al usar el segundo cerebro para la gestión de tareas, los asuntos importantes y urgentes se guardan en memoria, mientras que los no importantes y no urgentes se guardan en el disco duro; las tareas de esta semana están en memoria, mientras que las de este mes podrían estar en el disco duro. Así, aprovechando el segundo cerebro, podemos centrarnos en el presente sin presión y cambiar de contexto cuando sea necesario.

Este artículo usará Obsidian como ejemplo para compartir mi práctica en la construcción de un segundo cerebro. Puedes llamarlo segundo cerebro, pero desde distintos ángulos también podría denominarse "LifeOS", porque registro en él todo lo relacionado con mi vida y mi trabajo. También podría llamarse "sistema de productividad personal programable": he escrito bastante código para hacer consultas y automatizaciones, y es el sistema de productividad que uso para gestionar tareas y objetivos. Incluso podría compararse con un "proyecto Monorepo", donde cada carpeta representa un proyecto y el README.md dentro del proyecto es como el Package.json, describiendo los metadatos del proyecto actual.

📢 Atención: Este sistema no es uno de arriba hacia abajo con procesos preestablecidos. Se fue formando gradualmente a medida que usaba Obsidian y sigue evolucionando. Llamemos provisionalmente a la versión actual 1.0. El propósito de compartirlo ahora es inspirar a otros a mejorar sus propios sistemas. Ya he escrito un [Obsidian Periodic PARA](https://github.com/quanru/obsidian-periodic-para) plugin para dar soporte a este sistema. Con él, no necesitas ningún conocimiento de programación. Puedes crear notas periódicas y PARA fácilmente con simples clics visuales.

## Mi Práctica

Adopto dos sistemas: uno para la gestión del conocimiento y otro para las notas periódicas. El primero gestiona el conocimiento con dimensiones como proyecto/área/recurso, y el segundo gestiona tareas/objetivos/tiempo tomando el tiempo como dimensión.

### Sistemas Principales

- Gestión del conocimiento: Usando el [PARA](https://fortelabs.com/blog/para/) sistema
  - Proyectos -> Los proyectos son una serie de tareas relacionadas con un objetivo que tiene fecha límite.
  - Áreas -> Las áreas son dominios de actividad que requieren mantener ciertos estándares a lo largo del tiempo.
  - Recursos -> Los recursos son temas o materias de interés continuo.
  - Archivos -> Los archivos son elementos inactivos de las tres categorías anteriores.
- Notas periódicas
  - Largo plazo: De arriba hacia abajo, enfocado en objetivos a largo plazo.
    - Revisión Trienal
    - Revisión Anual
    - Revisión Trimestral
  - Corto plazo: De abajo hacia arriba, enfocado en tareas a corto plazo.
    - Revisión Mensual
    - Revisión Semanal
  - Diario: Capturando pensamientos e ideas, logrando autoconciencia; estadísticas de consumo de tiempo, con foco en los proyectos.
    - Registro Diario

Cuanto más cerca de Proyectos esté el componente PARA, más accionable es; cuanto más a largo plazo sea la nota periódica, menos predecible resulta;

Estos dos sistemas crean efectivamente dos contextos que me mantienen enfocado:

- Uno basado en el tiempo (notas periódicas): cuando llego a un determinado nodo temporal, trabajo a partir de la nota periódica correspondiente, la cual ya contiene suficiente contexto;
- El otro basado en el tema (PARA): cuando quiero investigar un tema, trabajo a partir del índice del tema correspondiente (README.md), que ya ha recopilado mucho contexto;

### Subsistema orientado a aspectos

> [Programación orientada a aspectos - Wikiwand](https://www.wikiwand.com/zh-hans/%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)

Por debajo de los dos sistemas mencionados, hay un subsistema oculto para gestionar tareas/objetivos/tiempo, principalmente a través de las "notas periódicas":

- Gestión de tareas
  - Recopilación mediante registros diarios/semanales.
  - Organización mediante revisiones semanales/mensuales.
- Gestión de objetivos
  - Planificación de objetivos anuales con la revisión anual.
  - División de objetivos anuales con la revisión trimestral.
  - Desglose de elementos pendientes con la revisión mensual.
    - Clasificación de arriba hacia abajo (mediante descomposición de objetivos).
    - Clasificación de abajo hacia arriba (mediante descomposición de colección -> registros diarios/semanales).
- Gestión del tiempo
  - Manually tracking the time spent on various projects in the daily log and its proportions, adjusting time investment.
  - Using scripts in daily, weekly, monthly, quarterly, and annual reviews to automatically track the time spent on various projects and their proportions, reviewing time investment.

You might be curious that the above subsystem seems to only use "periodic notes." In fact, the two main systems are connected through two methods.

### Connection

> How systems are associated

#### Tag Connection

Treat the first-level folders under PARA as special tags (they don't need to be exactly the same as the folder names), use them in "periodic notes," then you can index uniformly in each PARA folder in the same way. This ensures that the README.md index in each PARA folder has all the context for the current topic:

#### Project Connection

Generate a project in "knowledge management," to enhance focus on the project, there's a "main event list" or "project list" in every class of "periodic notes," such as:

- The "project list" in the daily log is a snapshot of the current project list, used for calculating the time spent that day on various projects and their proportions, ensuring enough time is spent on projects.
- The "main event dimensions" in the weekly and monthly reviews automatically merge and deduplicate from the daily reviews of the week or month, used for arranging project dimension tasks and subsequent reviews.
- The "main event dimensions" in the quarterly review is a snapshot of the current domain list, used for arranging main event dimension goals and subsequent reviews.
- The "main event dimensions" in the annual review, automatically merged and deduplicated from the quarter's main event dimensions, used for setting domain dimension goals and subsequent reviews.

### Search

- Tags
  - For example, the [holiday](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-01.md#L3), [vacation](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-11.md#L4) tags in the daily log.
- Index files
  - For example, the [README.md](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md) index of each project's tasks, logs, and context.
- Folders
  - For example, using a consistent directory structure for each PARA category.

### Revisión

- The review focuses on the projects of the current period while planning the tasks for the next period.
- Weekly reviews reflect on the week's daily logs, monthly reviews on each week's reviews, and quarterly reviews on each month's reviews.

## Quick Start

### Descarga

1. [Click here to download](https://github.com/quanru/obsidian-example-LifeOS/blob/chinese-version/README.md)
2. Open with obsidian and enjoy

### Creating Notes

- Quickly create daily, weekly, monthly, seasonal, and annual notes through the note creation module in the upper left corner.
- Quickly create PARA notes, i.e., projects, areas, resources, archives through the note creation module in the upper left corner.

### "Daily Log" and "Project README"

- Used for daily management, including project lists, daily records, habit tracking, energy allocation, today's accomplishments, etc.
- The "project list" in the daily log is a snapshot of the current projects (i.e., under the Projects directory).

### "Weekly Review" and "Monthly Review"

- Used for arranging weekly and monthly tasks, including task and review modules.
- In the weekly and monthly reviews, the "main event dimensions" are a collection of snapshots of the project lists from dailynotesof the period (generated automatically).
- The "reviews" in the weekly and monthly notes mainly focus on the projects of the period.

### "Quarterly Review" and "Annual Review"

- Used for setting quarterly and annual goals, including goals and review modules.
- In the quarterly review, the "main event dimensions" is a snapshot of the current domain (i.e., under the Areas directory).
- In the annual review, the "main event dimensions" is a collection of snapshots from the main event dimensions of the period's quarterly reviews (generated automatically).
- The "reviews" in the quarterly and annual notes mainly focus on the domains of the period.

### "PARA Index" and "Task Index"

### "Capture" and "Express"

First, let's introduce a concept, the CODE model, where:

- C is for Capture: Collecting resonant information.
- O is for Organize: Sorting the collected information, i.e., PARA.
- D is for Distill: Extracting the essence of the content, selecting the most useful information.
- E is for Express: Sharing with others, applying your knowledge in practice.

Those familiar with PARA will see that this model is actually proposed by Tiago Forte in "Building a Second Brain," and it's the higher-level model that includes the PARA organization method, with O indicating the PARA organization method.

My practice is to temporarily store some marked articles in the "Capture" directory while using the "-1. Capture/README.md" file to index the notes tagged with `#PARA/Capture` scattered in the daily logs. This makes it convenient for me during specific time nodes, such as weekends, month-ends, and quarter-ends, to review and sort, first organizing marked articles into each PARA topical directory, then transferring some inspirational notes from the dailynotesinto some explicit to-dos;

Next, let's talk about "Express." I place my blog in the express section and also record some fragmentary notes in the daily log tagged with `PARA/Express`. These are outputs after internalization. If this output needs to be further posted on a specific social platform, such as Zhihu or Xiaohongshu, I will conveniently record it as a task. When I review the tasks indexed in the "5. Express/README.md" file and find pending ones, just complete them one by one.

## Small Tips in Practice

### Buffer Zone Mechanism

Place less important and non-urgent items swiftly into a buffer zone (Inbox) by creating tasks, keeping the main focus on "Projects."

### Task Lists

Recording tasks shouldn't be a mental burden – writing them down doesn't mean they must be done. Having them written relieves your mind from having to continuously remember or fear forgetting them. I've recorded many tasks, many of which, upon reassessment, were indeed not completed.

It's important to have mechanisms in place that allow for review of recorded tasks, for example:

- Using a tasks plugin to create [query views](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/TASK.md) for task lists
- Each periodic note contains a [collected tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Weekly/2023-W22.md#%E6%9C%AC%E5%91%A8%E6%94%B6%E9%9B%86) for the current period
- Project index files contain a [tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md#%E4%BB%BB%E5%8A%A1)

### Task Reminders

I consider there to be three types of task reminders:

- Strong reminders, such as snapping up Moutai liquor or concert tickets, which need an alarm to remind you when it's time
- Soft reminders, for things that need to be done on a certain day, like credit card repayments or loan repayments, which can be set up through GTD software for reminders
- List-style, for recording tasks which will be arranged later; based on the need, these can be converted to strong or soft reminders, akin to the inbox in GTD systems

### Micro-Habits

- I list micro-habits in my journal, and remember, they are not tasks. It's okay whether they are completed or not; they mainly serve as a reminder, "Do you consider practicing these micro-habits today?" These act as prompts when I have the "capability" and "motivation." For example:
  - Micro-Habits
    - Get up and drink water as soon as the alarm goes off
    - Put on headphones and listen to the Little Universe podcast right after getting off the vehicle
    - Open WeChat Read as soon as I get on the subway
    - Write down three to-dos as soon as I reach my workstation
    - Start serious work as soon as it's 10:30 am

### Easy to Refactor

Within each periodic note, the same feature modules use the same statement, such as "tasks collected this period," all inserted through the following query statement. The "this period" variable is provided by the current file name, which makes it very convenient to refactor all periodic files en masse, needing only to perform a batch replacement:

````markdown
```LifeOS
    TaskRecordListByTime
```
````

### Efficient Use of Shortcuts

Set consistent global shortcuts, so that no matter in which software, you can invoke the same function with the same shortcut. Here are some of my configurations:

- Cursor movement
  - Pattern: Control + directional initial/VIM direction
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
    - T: New Tab (for more specific windows, the top level uses Command + T)
    - W: Close Tab (for more specific windows, the top level uses Command + W)
    - J: Next Tab
    - K: Previous Tab
- Document editing
  - Pattern 1: Command + Option + number/symbol
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
    - C: Copy link (Obsidian block link, Arc browser link, VScode git link)
    - D: Download
    - I: Add to inbox
    - K: Quick Search

