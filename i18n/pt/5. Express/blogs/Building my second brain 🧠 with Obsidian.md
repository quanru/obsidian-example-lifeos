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

This article will take [Obsidian](https://obsidian.md/) como exemplo para compartilhar minha prática de usar o Obsidian para construir um segundo cérebro!

Para mais informações, consulte o site oficial [LifeOS](https://lifeos.vip)!

## Preface

### What is Obsidian?

Veja como ele se apresenta no site oficial:

- [Obsidian](https://obsidian.md/) é o aplicativo de anotações privado e flexível que se adapta à forma como você pensa.
- [Obsidian](https://obsidian.md/) é um aplicativo de anotações privado e flexível que se adapta à sua forma de pensar.

O que eu especialmente aprecio é seu rico ecossistema de plugins. Se você gosta do Vscode, provavelmente também vai gostar do Obsidian. A única diferença é que o Vscode serve para escrever código, enquanto o Obsidian serve para fazer anotações.

### First Brain VS Second Brain

O primeiro cérebro é o nosso cérebro real. Ele nunca para de funcionar enquanto estamos vivos. Realiza tarefas como gestão do conhecimento, gestão de tarefas e gestão de objetivos. Na maior parte do tempo, não conseguimos fazer várias coisas ao mesmo tempo, portanto o primeiro cérebro age mais como uma CPU, com diversas tarefas competindo por ciclos de processamento. Quando há tarefas demais para lidar, o cérebro fica sobrecarregado. Ele precisa lidar com as tarefas atuais enquanto mantém o contexto de outras tarefas para alternar entre elas, o que nos impede de nos concentrar na execução da tarefa atual. É nesse momento que um sistema externo é necessário para auxiliar o primeiro cérebro — esse é o segundo cérebro.

O segundo cérebro é um sistema externo. Se compararmos o primeiro cérebro a uma CPU, o segundo cérebro se assemelha mais a um sistema de armazenamento. Ele atua como um buffer entre o primeiro cérebro e o mundo real, reduzindo a carga sobre o primeiro cérebro para que ele possa se concentrar no que importa no momento. Pode ser comparado à memória RAM e aos discos rígidos: a memória se comunica com mais frequência com a CPU (o primeiro cérebro) e tem velocidade de leitura mais rápida. Esse sistema de armazenamento guarda coisas nas quais o primeiro cérebro não precisa se concentrar o tempo todo. É claro que cabe ao primeiro cérebro decidir o que precisa ser armazenado. O conteúdo pode ser notas, tarefas pendentes, processos, e o meio pode ser texto, imagens ou vídeos.

Por exemplo, quando usamos o segundo cérebro para gestão de tarefas, itens importantes e urgentes são armazenados na memória, enquanto itens sem urgência e menos importantes ficam no disco rígido; as tarefas desta semana estão na memória, enquanto as do mês podem estar no disco rígido. Assim, ao utilizar o segundo cérebro, podemos nos concentrar no presente sem pressão e trocar de contexto quando necessário.

Este artigo usará o Obsidian como exemplo para compartilhar minha prática de construir um segundo cérebro! Você pode chamá-lo de segundo cérebro, mas olhando por diferentes ângulos, eu também poderia denominá-lo "LifeOS", pois registro nele tudo que diz respeito à vida e ao trabalho. Além disso, poderia ser chamado de "sistema de produtividade pessoal programável". Escrevi bastante código nele para fazer consultas e automações, e é também o sistema de produtividade que uso para gerenciar tarefas e objetivos. Poderia até ser comparado a um "projeto Monorepo", onde cada pasta representa um projeto e o README.md dentro do projeto é como o Package.json, descrevendo os metadados do projeto atual.

📢 Atenção: Este sistema não é um modelo pronto com processos pré-estabelecidos para implementar. Ele foi se formando gradualmente conforme eu usava o Obsidian e ainda está evoluindo. Vamos chamar a versão atual de 1.0. O objetivo de compartilhá-lo agora é inspirar outras pessoas a aprimorarem seus próprios sistemas! Já escrevi um [Obsidian Periodic PARA](https://github.com/quanru/obsidian-periodic-para) plugin para dar suporte a este sistema! Com ele, você não precisa de nenhum conhecimento em programação. É possível criar notas periódicas e do PARA facilmente com simples cliques visuais!

## My Practice

Adoto dois sistemas: um para gestão do conhecimento e outro para notas periódicas. O primeiro gerencia o conhecimento pelas dimensões projeto/área/recurso, enquanto o segundo gerencia tarefas/objetivos/tempo tendo o tempo como dimensão.

### Core Systems

- Knowledge management: Using the [PARA](https://fortelabs.com/blog/para/) system
  - Projetos -> Projetos são uma série de tarefas relacionadas a um objetivo com prazo definido.
  - Áreas -> Áreas são domínios de atividade que precisam manter certos padrões ao longo do tempo.
  - Recursos -> Recursos são tópicos ou assuntos de interesse contínuo.
  - Arquivos -> Arquivos são itens inativos das três categorias acima.
- Periodic notes
  - Longo prazo: De cima para baixo, focando em objetivos de longo prazo.
    - Three-year Review
    - Annual Review
    - Quarterly Review
  - Curto prazo: De baixo para cima, focando em tarefas de curto prazo.
    - Monthly Review
    - Weekly Review
  - Diário: Capturando pensamentos e insights, promovendo o autoconhecimento; estatísticas de consumo de tempo, com foco nos projetos.
    - Daily Log

Quanto mais próximo de Projetos estiver o componente do PARA, mais acionável ele é; quanto mais longo o prazo da nota periódica, menos previsível ela é;

Esses dois sistemas criam efetivamente dois contextos que me mantêm focado:

- Um baseado no tempo (notas periódicas), ou seja, quando chego a um determinado ponto no tempo, trabalho com base nas notas periódicas correspondentes, que já contêm contexto suficiente;
- O outro baseado no tópico (PARA), ou seja, quando quero pesquisar um tópico, trabalho com base no índice do tópico correspondente (README.md), e as notas já acumularam bastante contexto;

### Aspect-oriented Subsystem

> [Aspect-oriented programming - Wikiwand](https://www.wikiwand.com/zh-hans/%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)

Por baixo dos dois sistemas mencionados acima, há um subsistema oculto para gerenciar tarefas/objetivos/tempo, principalmente por meio das "notas periódicas":

- Task management
  - Collecting via daily/weekly logs.
  - Organizing via weekly/monthly reviews.
- Goal management
  - Planejamento de objetivos anuais com a revisão anual.
  - Divisão dos objetivos anuais com a revisão trimestral.
  - Decomposição de itens pendentes com a revisão mensal.
    - Ordenação de cima para baixo (por meio da decomposição de objetivos).
    - Ordenação de baixo para cima (por meio da decomposição de coleções -> registros diários/semanais).
- Time management
  - Rastreamento manual do tempo gasto em vários projetos no registro diário e suas proporções, ajustando o investimento de tempo.
  - Uso de scripts nas revisões diárias, semanais, mensais, trimestrais e anuais para rastrear automaticamente o tempo gasto em vários projetos e suas proporções, revisando o investimento de tempo.

Você pode estar se perguntando por que o subsistema acima parece usar apenas "notas periódicas". Na verdade, os dois sistemas principais estão conectados por dois métodos.

### Connection

> How systems are associated

#### Tag Connection

Trate as pastas de primeiro nível do PARA como tags especiais (não precisam ser exatamente iguais aos nomes das pastas), use-as nas "notas periódicas", e então você poderá indexar uniformemente em cada pasta do PARA da mesma forma. Isso garante que o índice README.md em cada pasta do PARA tenha todo o contexto do tópico atual:

#### Project Connection

Ao gerar um projeto em "gestão do conhecimento", para aumentar o foco no projeto, há uma "lista de eventos principais" ou "lista de projetos" em cada tipo de "nota periódica", como:

- A "lista de projetos" no registro diário é um instantâneo da lista de projetos atual, usada para calcular o tempo gasto naquele dia em vários projetos e suas proporções, garantindo que tempo suficiente seja dedicado aos projetos.
- As "dimensões de eventos principais" nas revisões semanais e mensais são automaticamente mescladas e deduplicadas a partir das revisões diárias da semana ou do mês, sendo usadas para organizar tarefas por dimensão de projeto e revisões subsequentes.
- As "dimensões de eventos principais" na revisão trimestral constituem um instantâneo da lista de domínios atual, usadas para organizar objetivos por dimensão de eventos principais e revisões subsequentes.
- As "dimensões de eventos principais" na revisão anual são automaticamente mescladas e deduplicadas a partir das dimensões de eventos principais do trimestre, sendo usadas para definir objetivos por dimensão de domínio e revisões subsequentes.

### Search

- Tags
  - For example, the [holiday](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-01.md#L3), [vacation](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-11.md#L4) tags in the daily log.
- Index files
  - For example, the [README.md](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md) índice das tarefas, registros e contexto de cada projeto.
- Folders
  - Por exemplo, usando uma estrutura de diretório consistente para cada categoria do PARA.

### Revisão

- A revisão foca nos projetos do período atual enquanto planeja as tarefas do próximo período.
- As revisões semanais refletem sobre os registros diários da semana, as revisões mensais sobre as revisões de cada semana, e as revisões trimestrais sobre as revisões de cada mês.

## Quick Start

### Download

1. [Click here to download](https://github.com/quanru/obsidian-example-LifeOS/blob/chinese-version/README.md)
2. Open with obsidian and enjoy

### Creating Notes

- Crie rapidamente notas diárias, semanais, mensais, trimestrais e anuais por meio do módulo de criação de notas no canto superior esquerdo.
- Crie rapidamente notas PARA — ou seja, projetos, áreas, recursos e arquivos — através do módulo de criação de notas no canto superior esquerdo.

### "Daily Log" and "Project README"

- Usado para gestão diária, incluindo listas de projetos, registros diários, rastreamento de hábitos, alocação de energia, conquistas do dia, entre outros.
- A "lista de projetos" no diário diário é um instantâneo dos projetos atuais (ou seja, os que estão no diretório Projetos).

### "Weekly Review" and "Monthly Review"

- Usado para organizar tarefas semanais e mensais, incluindo módulos de tarefas e revisões.
- Nas revisões semanais e mensais, as "dimensões dos principais eventos" são uma coleção de instantâneos das listas de projetos dos diários do período (gerada automaticamente).
- As "revisões" nas notas semanais e mensais focam principalmente nos projetos do período.

### "Quarterly Review" and "Annual Review"

- Usado para definir metas trimestrais e anuais, incluindo módulos de metas e revisões.
- Na revisão trimestral, as "dimensões dos principais eventos" são um instantâneo do domínio atual (ou seja, o que está no diretório Áreas).
- Na revisão anual, as "dimensões dos principais eventos" são uma coleção de instantâneos das dimensões dos principais eventos das revisões trimestrais do período (gerada automaticamente).
- As "revisões" nas notas trimestrais e anuais focam principalmente nos domínios do período.

### "PARA Index" and "Task Index"

### "Capture" and "Express"

Primeiro, vamos apresentar um conceito: o modelo CODE, onde:

- C é de Capturar (Capture): Coletar informações que ressoam com você.
- O é de Organizar (Organize): Classificar as informações coletadas, ou seja, PARA.
- D é de Destilar (Distill): Extrair a essência do conteúdo, selecionando as informações mais úteis.
- E é de Expressar (Express): Compartilhar com outros, aplicando seu conhecimento na prática.

Quem conhece o PARA perceberá que esse modelo foi proposto por Tiago Forte em "Building a Second Brain". É o modelo de nível superior que engloba o método de organização PARA, com o O indicando justamente esse método.

Minha prática é armazenar temporariamente alguns artigos marcados no diretório "Capture", enquanto uso o arquivo "-1. Capture/README.md" para indexar as notas etiquetadas com `#PARA/Capture` espalhadas nos diários diários. Isso facilita a revisão e organização em momentos específicos, como fins de semana, fim de mês e fim de trimestre: primeiro organizo os artigos marcados em cada diretório temático do PARA e depois transfiro algumas notas inspiradoras dos diários para tarefas concretas;

A seguir, vamos falar sobre "Expressar". Coloco meu blog na seção de expressão e também registro notas fragmentadas no diário etiquetadas com `PARA/Express`. Esses são resultados após a internalização. Se essa saída precisar ser publicada em uma plataforma social específica, como Zhihu ou Xiaohongshu, registro isso convenientemente como uma tarefa. Ao revisar as tarefas indexadas no arquivo "5. Express/README.md" e encontrar pendências, é só concluí-las uma a uma.

## Small Tips in Practice

### Buffer Zone Mechanism

Coloque itens menos importantes e não urgentes rapidamente em uma zona de buffer (Caixa de Entrada) criando tarefas, mantendo o foco principal em "Projetos".

### Task Lists

Registrar tarefas não deve ser um fardo mental — escrever não significa que precisam ser feitas. Tê-las escritas libera sua mente de ter que lembrar continuamente ou temer esquecer. Já registrei muitas tarefas e, ao reavaliá-las, várias realmente não foram concluídas.

É importante ter mecanismos que permitam revisar as tarefas registradas, por exemplo:

- Using a tasks plugin to create [query views](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/TASK.md) for task lists
- Each periodic note contains a [collected tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Weekly/2023-W22.md#%E6%9C%AC%E5%91%A8%E6%94%B6%E9%9B%86) for the current period
- Project index files contain a [tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md#%E4%BB%BB%E5%8A%A1)

### Task Reminders

Considero que existem três tipos de lembretes de tarefas:

- Lembretes fortes, como comprar ingressos para shows ou produtos em promoção relâmpago, que precisam de um alarme para avisar na hora certa
- Lembretes moderados, para coisas que precisam ser feitas em um determinado dia, como pagamento de cartão de crédito ou parcelas de empréstimo, que podem ser configurados em aplicativos GTD para lembrete
- Em forma de lista, para registrar tarefas que serão organizadas posteriormente; conforme a necessidade, podem ser convertidas em lembretes fortes ou moderados, semelhante à caixa de entrada em sistemas GTD

### Micro-Habits

- Listo micro-hábitos no meu diário e, lembre-se, eles não são tarefas. Não importa se são cumpridos ou não; servem principalmente como um lembrete: "Você considera praticar esses micro-hábitos hoje?" Funcionam como estímulos quando tenho "capacidade" e "motivação". Por exemplo:
  - Micro-Habits
    - Levantar e beber água assim que o alarme tocar
    - Colocar o fone de ouvido e ouvir o podcast Little Universe logo após desembarcar do veículo
    - Abrir o WeChat Read assim que entrar no metrô
    - Anotar três tarefas assim que chegar à minha estação de trabalho
    - Iniciar o trabalho sério assim que forem 10h30

### Easy to Refactor

Dentro de cada nota periódica, os módulos de funcionalidades iguais utilizam a mesma declaração, como "tarefas coletadas neste período", todas inseridas por meio da seguinte instrução de consulta. A variável "este período" é fornecida pelo nome do arquivo atual, o que torna muito conveniente refatorar todos os arquivos periódicos em massa, bastando realizar uma substituição em lote:

````markdown
```LifeOS
    TaskRecordListByTime
```
````

### Efficient Use of Shortcuts

Defina atalhos globais consistentes para que, independentemente do software, você possa acionar a mesma função com o mesmo atalho. Aqui estão algumas das minhas configurações:

- Cursor movement
  - Padrão: Control + inicial direcional/direção VIM
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
    - T: Nova Aba (para janelas mais específicas, o nível superior usa Command + T)
    - W: Fechar Aba (para janelas mais específicas, o nível superior usa Command + W)
    - J: Next Tab
    - K: Previous Tab
- Document editing
  - Padrão 1: Command + Option + número/símbolo
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
    - C: Copiar link (link de bloco do Obsidian, link do navegador Arc, link git do VSCode)
    - D: Download
    - I: Add to inbox
    - K: Quick Search

