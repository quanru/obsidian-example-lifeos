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
  - Registrar manualmente el tiempo dedicado a cada proyecto en el diario y sus proporciones, ajustando la inversión de tiempo.
  - Usar scripts en las revisiones diarias, semanales, mensuales, trimestrales y anuales para rastrear automáticamente el tiempo dedicado a cada proyecto y sus proporciones, evaluando la inversión de tiempo.

Puede que te preguntes por qué el subsistema anterior parece usar solo "notas periódicas". En realidad, los dos sistemas principales están conectados mediante dos métodos.

### Connection

> How systems are associated

#### Tag Connection

Trata las carpetas de primer nivel bajo PARA como etiquetas especiales (no tienen que coincidir exactamente con los nombres de las carpetas), úsalas en las "notas periódicas" y podrás indexar de forma uniforme en cada carpeta PARA del mismo modo. Esto garantiza que el índice README.md de cada carpeta PARA tenga todo el contexto del tema actual:

#### Project Connection

Genera un proyecto en "gestión del conocimiento"; para reforzar el enfoque en el proyecto, hay una "lista de eventos principales" o "lista de proyectos" en cada clase de "notas periódicas", por ejemplo:

- La "lista de proyectos" en el diario es una instantánea de la lista de proyectos actual, usada para calcular el tiempo dedicado ese día a cada proyecto y sus proporciones, asegurando que se invierta suficiente tiempo en los proyectos.
- Las "dimensiones de eventos principales" en las revisiones semanales y mensuales se fusionan y deduplicen automáticamente a partir de las revisiones diarias de la semana o el mes, y se usan para organizar las tareas por dimensión de proyecto y revisiones posteriores.
- Las "dimensiones de eventos principales" en la revisión trimestral son una instantánea de la lista de dominios actual, usada para organizar los objetivos por dimensión de evento principal y las revisiones posteriores.
- Las "dimensiones de eventos principales" en la revisión anual se fusionan y deduplican automáticamente a partir de las dimensiones de eventos principales de los trimestres, y se usan para establecer objetivos por dimensión de dominio y revisiones posteriores.

### Search

- Tags
  - For example, the [holiday](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-01.md#L3), [vacation](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-11.md#L4) tags in the daily log.
- Index files
  - For example, the [README.md](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md) índice de tareas, registros y contexto de cada proyecto.
- Folders
  - Por ejemplo, usando una estructura de directorios coherente para cada categoría de PARA.

### Revisión

- La revisión se centra en los proyectos del período actual mientras se planifican las tareas del siguiente período.
- Las revisiones semanales reflexionan sobre los diarios de la semana, las mensuales sobre las revisiones de cada semana, y las trimestrales sobre las revisiones de cada mes.

## Quick Start

### Descarga

1. [Click here to download](https://github.com/quanru/obsidian-example-LifeOS/blob/chinese-version/README.md)
2. Open with obsidian and enjoy

### Creating Notes

- Crea rápidamente notas diarias, semanales, mensuales, estacionales y anuales mediante el módulo de creación de notas en la esquina superior izquierda.
- Crea rápidamente notas PARA —es decir, proyectos, áreas, recursos y archivos— mediante el módulo de creación de notas en la esquina superior izquierda.

### "Daily Log" and "Project README"

- Usado para la gestión diaria, incluyendo listas de proyectos, registros del día, seguimiento de hábitos, distribución de energía, logros del día, etc.
- La "lista de proyectos" en el diario es una instantánea de los proyectos actuales (es decir, los que están bajo el directorio Projects).

### "Weekly Review" and "Monthly Review"

- Usado para organizar tareas semanales y mensuales, incluyendo módulos de tareas y revisiones.
- En las revisiones semanales y mensuales, las "dimensiones de eventos principales" son una colección de instantáneas de las listas de proyectos de las notas diarias del período (generadas automáticamente).
- Las "revisiones" en las notas semanales y mensuales se centran principalmente en los proyectos del período.

### "Quarterly Review" and "Annual Review"

- Usado para establecer objetivos trimestrales y anuales, incluyendo módulos de objetivos y revisiones.
- En la revisión trimestral, las "dimensiones de eventos principales" son una instantánea del dominio actual (es decir, lo que está bajo el directorio Areas).
- En la revisión anual, las "dimensiones de eventos principales" son una colección de instantáneas tomadas de las dimensiones de eventos principales de las revisiones trimestrales del período (generadas automáticamente).
- Las "revisiones" en las notas trimestrales y anuales se centran principalmente en los dominios del período.

### "PARA Index" and "Task Index"

### "Capture" and "Express"

Primero, presentemos un concepto: el modelo CODE, donde:

- C es de Capturar: recopilar información que resuena contigo.
- O es de Organizar: clasificar la información recopilada, es decir, PARA.
- D es de Destilar: extraer la esencia del contenido, seleccionando la información más útil.
- E es de Expresar: compartir con otros, aplicando tu conocimiento en la práctica.

Quienes conozcan PARA reconocerán que este modelo fue propuesto por Tiago Forte en "Building a Second Brain"; es el modelo de nivel superior que engloba el método de organización PARA, donde la O representa precisamente dicho método.

Mi práctica es almacenar temporalmente algunos artículos marcados en el directorio "Capture", mientras uso el archivo "-1. Capture/README.md" para indexar las notas etiquetadas con `#PARA/Capture` dispersas en los diarios. Esto me facilita, en momentos específicos como fines de semana, fin de mes o fin de trimestre, revisar y ordenar: primero organizando los artículos marcados en cada directorio temático de PARA, y luego convirtiendo algunas notas inspiradoras de los diarios en tareas concretas pendientes;

A continuación, hablemos de "Expresar". Coloco mi blog en la sección de expresión y también registro notas fragmentarias en el diario etiquetadas con `PARA/Express`. Estas son salidas después de la internalización. Si alguna de estas salidas necesita publicarse en una plataforma social específica, como Zhihu o Xiaohongshu, la registro convenientemente como tarea. Cuando reviso las tareas indexadas en el archivo "5. Express/README.md" y encuentro pendientes, simplemente las voy completando una a una.

## Small Tips in Practice

### Buffer Zone Mechanism

Incorpora rápidamente los elementos menos importantes y no urgentes a una zona de entrada (Inbox) creando tareas, manteniendo el foco principal en "Projects".

### Task Lists

Registrar tareas no debe ser una carga mental: escribirlas no significa que deban hacerse obligatoriamente. Tenerlas anotadas libera tu mente de tener que recordarlas continuamente o temer olvidarlas. He registrado muchas tareas, y muchas de ellas, al reevaluarlas, efectivamente no se completaron.

Es importante contar con mecanismos que permitan revisar las tareas registradas; por ejemplo:

- Using a tasks plugin to create [query views](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/TASK.md) for task lists
- Each periodic note contains a [collected tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Weekly/2023-W22.md#%E6%9C%AC%E5%91%A8%E6%94%B6%E9%9B%86) for the current period
- Project index files contain a [tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md#%E4%BB%BB%E5%8A%A1)

### Task Reminders

Considero que existen tres tipos de recordatorios de tareas:

- Recordatorios fuertes, como reservar entradas para un concierto o productos de edición limitada, que requieren una alarma que avise en el momento preciso
- Recordatorios suaves, para cosas que deben hacerse en un día concreto, como el pago de la tarjeta de crédito o de un préstamo, que pueden configurarse mediante software GTD
- En formato de lista, para registrar tareas que se organizarán más adelante; según la necesidad, pueden convertirse en recordatorios fuertes o suaves, similar a la bandeja de entrada en los sistemas GTD

### Micro-Habits

- Anoto microhábitos en mi diario y, recuerda, no son tareas. No importa si se cumplen o no; sirven principalmente como recordatorio: "¿Consideras practicar estos microhábitos hoy?" Actúan como impulsos cuando tengo la "capacidad" y la "motivación". Por ejemplo:
  - Micro-Habits
    - Levantarme y beber agua en cuanto suene el despertador
    - Ponerme los auriculares y escuchar el podcast Little Universe justo al bajar del vehículo
    - Abrir WeChat Read en cuanto suba al metro
    - Anotar tres tareas pendientes en cuanto llegue a mi puesto de trabajo
    - Comenzar el trabajo en serio en cuanto sean las 10:30

### Easy to Refactor

Dentro de cada nota periódica, los módulos de funciones idénticas usan la misma declaración, como "tareas recopiladas en este período", todas insertadas mediante la siguiente consulta. La variable "este período" la proporciona el nombre del archivo actual, lo que hace muy conveniente refactorizar todos los archivos periódicos en bloque, bastando con realizar un reemplazo masivo:

````markdown
```LifeOS
    TaskRecordListByTime
```
````

### Efficient Use of Shortcuts

Configura atajos globales coherentes para que, sin importar en qué software estés, puedas invocar la misma función con el mismo atajo. Aquí algunas de mis configuraciones:

- Cursor movement
  - Patrón: Control + inicial direccional/dirección VIM
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
    - T: Nueva pestaña (para ventanas más específicas, el nivel superior usa Command + T)
    - W: Cerrar pestaña (para ventanas más específicas, el nivel superior usa Command + W)
    - J: Next Tab
    - K: Previous Tab
- Document editing
  - Patrón 1: Command + Opción + número/símbolo
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
    - C: Copiar enlace (enlace de bloque de Obsidian, enlace del navegador Arc, enlace git de VSCode)
    - D: Download
    - I: Add to inbox
    - K: Quick Search

