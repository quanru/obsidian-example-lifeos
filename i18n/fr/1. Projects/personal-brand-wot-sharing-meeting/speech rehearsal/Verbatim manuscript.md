> Les parties en gras indiquent les points de blocage

## Première partie
> 4min30, 5min, 4min30, 5min45, 5min
- Bonjour à tous, je m'appelle Lin Yibing, et le thème de ma présentation aujourd'hui est « Les pratiques d'ingénierie front-end de la société XX » ;
- Permettez-moi de me présenter brièvement : je suis ingénieur en architecture front-end au département Web Infra, avec plusieurs années d'expérience en ingénierie front-end. Je me consacre à aider les ingénieurs front-end à mieux gérer et gouverner leurs projets ; je suis actuellement responsable de la conception et de la mise en œuvre des solutions de gouvernance d'ingénierie.
- La présentation d'aujourd'hui comprend les quatre parties suivantes
	- D'abord, nous analyserons les « tendances actuelles du développement front-end » et introduirons les nouveaux défis auxquels fait face le développement front-end chez XX ;
	- Ensuite, nous partagerons les pratiques que nous avons mises en place pour relever ces nouveaux défis ;
	- Puis, nous présenterons le déploiement global des solutions développées en interne chez XX ;
	- Enfin, nous résumerons et envisagerons les tendances de développement de l'ingénierie front-end ;
	- **Avant de commencer, voyons d'abord « Qu'est-ce que l'ingénierie front-end ? »**
- L'ingénierie front-end consiste à adopter, au cours du développement front-end, une série de **techniques et d'outils** visant à améliorer l'efficacité du développement, garantir la qualité du code, favoriser la réutilisabilité du code, **automatiser les processus et promouvoir la collaboration en équipe — elle est une composante indispensable du développement front-end moderne** ;
	- Je tiens à préciser que cette présentation ne couvre pas l'ingénierie front-end dans son ensemble, mais partage les « nouvelles pratiques » que nous avons adoptées pour répondre aux « nouveaux défis » des « nouvelles tendances » actuelles. Voyons donc quelles sont ces nouvelles tendances dans le développement front-end.
- Commençons par les tendances du métier front-end
	- La première **tendance** est la multiplication des plateformes concernées : Web, Node, client natif, cross-platform, etc.
	- La deuxième tendance est que les métiers supportés sont de plus en plus nombreux et complexes, notamment avec **l'émergence côté front-end** de nombreuses applications à forte interaction
	- La troisième est qu'inévitablement, liée aux deux tendances précédentes, **la taille des équipes front-end s'agrandit**
- Ces trois tendances entraînent objectivement quatre tendances dans les projets front-end, à savoir :
	- La première : l'augmentation de la taille du code — des projets dépassant 10G de code ont déjà vu le jour en interne, et le nombre de projets impliqués dans les dépendances amont/aval d'une application est également très élevé
	- La deuxième : l'augmentation du nombre de mainteneurs — un projet peut impliquer une dizaine à une quarantaine ou cinquantaine de personnes
	- La troisième : l'augmentation de la taille des applications — au fil des itérations fonctionnelles, les applications deviennent de plus en plus volumineuses
	- La quatrième : la complexification de la gouvernance — les dépendances complexes sont difficiles à gérer, et les artefacts de build complexes sont difficiles à diagnostiquer
- Dans ce contexte de tendances, quels nouveaux défis notre développement front-end doit-il relever ? Il en existe principalement quatre :
	- Le premier : le coût élevé de la maintenance multi-projets — infrastructure redondante, réutilisation du code difficile, flux de travail fragmentés, etc.
	- Le deuxième : le coût élevé de la collaboration multi-développeurs — les processus interdépendants et les mises à jour de dépendances en cascade augmentent tous les coûts de collaboration
	- Le troisième : la lenteur de build des applications massives — le temps de build augmente à mesure que l'application grossit
	- Le quatrième : la dégradation rapide des grandes applications — nous manquons de moyens efficaces pour prévenir cette dégradation
- Pour relever ces nouveaux défis, nous avons investi dans les outils suivants
	- Le premier est un outil Monorepo développé en interne, visant à réduire le coût de maintenance de plusieurs projets
	- Le deuxième consiste à améliorer le framework micro-frontend existant afin de réduire davantage les coûts de collaboration lors du développement en équipe
	- Le troisième est le développement d'un Bundler et d'un Build System pour accélérer la compilation des applications massives
	- Le quatrième est la fourniture d'outils de diagnostic pour prévenir efficacement la dégradation des applications
	- Nous allons maintenant développer ces quatre thèmes et expliquer comment nous avons mis en pratique ces objectifs 

## Deuxième partie
> 6min, 5min, 5min, 7min, 6min

- Qu'est-ce qu'un Monorepo ?
	- Il s'agit d'un modèle de gestion du code source qui consiste à regrouper plusieurs projets dans un seul dépôt ;
	- À l'opposé, le modèle Polyrepo maintient un dépôt indépendant pour chaque projet ;
	- **En bref**, un Monorepo consiste à regrouper plusieurs projets distincts dans un seul dépôt, en les organisant de manière cohérente ;
- Comment un Monorepo réduit-il les coûts de maintenance de plusieurs projets ? Il y parvient grâce à
	- la réutilisation de l'infrastructure, permettant aux développeurs de se concentrer à nouveau sur l'application elle-même
	- le partage de code, permettant une réutilisation à faible coût
	- les commits atomiques, grâce à des workflows multi-projets automatisés
- Premièrement, en réutilisant l'infrastructure commune, les développeurs peuvent se recentrer sur l'application elle-même :
	- Dans le modèle Polyrepo traditionnel, chaque projet nécessite des développeurs dédiés à sa création et sa maintenance ; dans un Monorepo, il suffit d'un ou deux développeurs pour mettre en place la structure, et tous les projets peuvent être maintenus de manière unifiée dans un seul dépôt, en partageant une même infrastructure (configuration CI, règles Lint, scripts de build, etc.), **réduisant ainsi** le coût de maintenance multi-projets
	- De plus, la réutilisation de l'infrastructure facilite les mises à niveau uniformes. Par exemple, pour ajouter une vérification de types à tous les projets dans le pipeline CI, il faudrait modifier chaque projet séparément en Polyrepo, **ce qui représente un coût élevé**. En Monorepo, les ajustements d'infrastructure s'appliquent facilement à l'ensemble des projets.
- Deuxièmement, grâce au partage de code, les développeurs peuvent réutiliser du code à moindre coût :
	- En Polyrepo, la maintenance des modules partagés est coûteuse. Le débogage est d'abord fastidieux : il faut exécuter manuellement npm link pour relier le module partagé au projet en cours. Si les modules partagés sont nombreux, cette étape devient très laborieuse et inefficace.
	- Ensuite, la mise à jour des modules partagés est tout aussi fastidieuse : il faut gérer manuellement les dépendances, mettre à jour les modules de bas niveau, les publier, puis mettre à jour les modules de haut niveau. **Si une erreur survient en cours de route, tout le processus doit être recommencé**.
	- En Monorepo, il suffit d'une commande pour créer un module partagé, et les modules de haut niveau peuvent l'intégrer immédiatement pour le développement et le débogage. Les modifications des modules de bas niveau sont directement visibles par les modules supérieurs, sans passer par npm link ni par une publication npm. Cela réduit considérablement le travail répétitif et les coûts d'extraction de nouveau code réutilisable, incitant les équipes à davantage factoriser leur code — ce qui améliore en retour le taux de réutilisation.
- Troisièmement, grâce aux commits atomiques, les développeurs bénéficient de workflows multi-projets automatisés
	- Lorsqu'une fonctionnalité métier implique plusieurs projets, le modèle Polyrepo oblige à modifier et committer les modules de bas niveau, exécuter le pipeline CI pour chacun, mettre à jour les dépendances dans les modules de haut niveau, puis relancer un pipeline CI. Ce processus est fastidieux et décousu.
	- En Monorepo, il est possible de modifier et de committer plusieurs projets en une seule fois, et le pipeline CI ainsi que la publication sont gérés en une seule passe, **automatisant ainsi le workflow multi-projets.**
- Faisons un bref résumé :
	- En Polyrepo, chaque projet dispose de sa propre infrastructure, la réutilisation de code est difficile et les workflows sont fragmentés. En Monorepo, plusieurs projets partagent une même infrastructure, le code est facilement mutualisé et les workflows sont uniformes.
	- **Les projets d'une même équipe sont souvent interconnectés, et non isolés les uns des autres. Un Monorepo permet de les regrouper facilement dans un seul dépôt, réduisant ainsi considérablement les coûts de maintenance multi-projets.**

## Troisième partie
> 8min, 9min, 11min, 11min30

- Nous allons maintenant présenter les pratiques d'ingénierie autour du Bundler et du Build System. Que ce soit dans un projet mono-dépôt ou multi-dépôts, la croissance du volume de code et du nombre de sous-applications entraîne une dégradation des performances de build. **Pour y remédier**, nous avons développé respectivement un Bundler et un Build System.
	- Le Bundler vise à résoudre la lenteur de compilation des applications monolithiques ;
	- Le Build System, quant à lui, vise à résoudre la lenteur de compilation dans un contexte Monorepo.
- Dans le domaine frontend, un Bundler est un outil **permettant de regrouper plusieurs ressources frontend (JS, CSS, images, etc.) en un ou plusieurs fichiers que le navigateur peut exécuter directement** ;
	- Les outils Bundler les plus courants sont Webpack, Rollup, Vite, Parcel et Esbuild.
- Voici notre Bundler maison, Rspack — un moteur de compilation haute performance basé sur Rust, interopérable avec l'écosystème Webpack.
	- Cette description nous révèle deux caractéristiques de Rspack : la haute performance et la compatibilité avec l'écosystème Webpack.
- La première caractéristique est l'implémentation en Rust. JavaScript étant mono-thread, bien qu'il existe des méthodes de concurrence en JS, elles restent contraignantes. **Rust offre un vrai support de la concurrence**, ce qui nous permet **d'exécuter les tâches de build en parallèle, améliorant ainsi considérablement les performances** ;
	- Ces deux images comparent l'utilisation des threads lors du build avec Webpack et Rspack. On constate clairement que Webpack est mono-thread, tandis que Rspack exploite pleinement les CPU multicœurs pour en extraire les meilleures performances.
	- Ce graphique comparatif issu de notre site officiel montre que, sur un même projet, Rspack ne nécessite que 4,2 secondes, contre 34,8 secondes pour Webpack.
- La deuxième caractéristique de Rspack est sa compatibilité partielle avec Webpack. L'implémentation actuelle peut être vue comme un sous-ensemble de Webpack, couvrant la plupart des configurations courantes pour répondre aux besoins du développement quotidien. **Pourquoi cette compatibilité avec l'écosystème Webpack ?**
	- **Premièrement. le système de plugins Webpack répond aux besoins de personnalisation des projets**
	- **Deuxièmement. réutiliser le riche écosystème Webpack permet d'améliorer l'expérience de développement des projets massifs au moindre coût**
	- **Enfin. les projets Webpack existants sont très nombreux, et la compatibilité avec Webpack réduit considérablement les coûts de migration**
- Voici les gains observés sur deux projets métier représentatifs : le démarrage en mode dev passait d'environ 5 minutes à seulement 20 secondes avec Rspack, et le HMR d'environ 20 secondes à environ 1 seconde — soit un gain de performance d'environ 10x dans les deux cas.
- Le Build System analyse le graphe de dépendances entre les projets d'un Monorepo et ordonnance les tâches de build en conséquence ;
	- Pourquoi un Monorepo a-t-il besoin d'un Build System ? Parce qu'un Monorepo ne se résume pas à regrouper des projets dans un dépôt unique. **Il requiert un Build System pour gérer l'ensemble des projets et les compiler selon leurs dépendances mutuelles ;**
	- Les outils Build System les plus courants incluent Bazel, NX, Turborepo et Lage.
- Voici comment nous avons mis en œuvre le Build System dans notre outil Monorepo maison, grâce à
	- la prise en charge de la **parallélisation des tâches**, avec un parallélisme maximal pour accélérer les builds
	- la prise en charge du **cache multi-niveaux**, appliqué aux tâches de build
	- la prise en charge de la **compilation à la demande**, en fonction des parties du code impactées par les modifications
- Comme le montre le schéma, les dépendances entre sous-projets forment un graphe de tâches. L'ordre de compilation doit respecter une contrainte : les projets de haut niveau ne peuvent être compilés qu'une fois ceux du bas niveau terminés.
	- La première approche est l'exécution séquentielle dans l'ordre DEBCA, qui respecte les contraintes de build mais offre de faibles performances. D et E pouvant être parallélisés, la deuxième approche exécute DE puis BC en parallèle, réduisant les 5 étapes à 3.
	- On constate toutefois que la tâche C ne dépend pas de la tâche D, pourtant dans la deuxième approche, C doit attendre que D et E soient toutes deux terminées.
	- D'où la troisième approche : dès que la tâche E est terminée, D et C s'exécutent en parallèle ;
- **Lorsque le nombre de sous-projets dans un Monorepo augmente, chaque développement ou mise en production implique plusieurs sous-projets. Devoir tout recompiler à chaque fois ralentirait considérablement les builds et les déploiements.**
	- **Nous avons mis en place une capacité de mise en cache des artefacts de build, en local et à distance. Lorsqu'un sous-projet n'a pas été modifié, les artefacts précédents sont réutilisés pour réduire le temps de compilation.**
- **Pour la compilation à la demande, nous supportons l'exécution du pipeline CI selon la portée des changements. Un git diff sur le code modifié permet une analyse des dépendances, de sorte que seuls les projets affectés sont compilés — évitant ainsi de tout recompiler à chaque CI.**
- Prenons un Monorepo simple comme exemple ; **les dépendances sont représentées dans le schéma ci-dessous**
	1. La compilation complète de tous les projets en une seule passe prend environ 17,72 secondes.
	2. Si seul le module component est modifié, la compilation à la demande ne cible que component, app1 et app2, pour un total de 8,94 secondes — soit 50 % de temps économisé.
	3. Sans cache, la compilation d'App1, App2 et App3 prend entre 10,77 et 16,94 secondes.
	4. Avec le cache — par exemple si component, sdk et util ont déjà été compilés — la compilation d'App1, App2 et App3 ne prend plus qu'entre 7,55 et 9,74 secondes, soit environ 45 % de temps économisé.
- Grâce au Bundler et au Build System, en exploitant respectivement les performances de Rust et le cache de build distant, nous avons considérablement accéléré la compilation des applications massives. Mais au-delà de la vitesse de développement, cela apporte deux bénéfices majeurs à notre activité
	1. Repousser les limites des applications monolithiques : nous pouvons désormais développer des applications encore plus grandes et plus puissantes
	2. Accélérer les itérations : nous pouvons effectuer davantage de tests A/B et de mises en production plus rapidement

## Quatrième partie
> 10min 10min 14min

- Le micro-frontend est une solution de découpage applicatif dans le domaine frontend. La pratique micro-frontend de XX Company a traversé les phases iframe, SPA et framework ; face aux problèmes rencontrés en pratique, et pour réduire davantage les coûts de collaboration en équipe, nous explorons actuellement une nouvelle approche.
- Voyons comment les pratiques d'ingénierie micro-frontend de la nouvelle approche réduisent les coûts de collaboration lors du développement en équipe.
	- Premièrement, en allégeant le shell applicatif, on découple l'application hôte de la logique métier
	- Deuxièmement, grâce à une composition fine, chaque module peut être développé et déployé de manière indépendante
	- Enfin, en définissant des protocoles de module standardisés, nous avons mis en place un hub de modules pouvant même s'intégrer à des plateformes low-code, augmentant ainsi le taux de réutilisation des modules ; cela permet également des déploiements progressifs et des tests A/B au niveau du module ;
- Comment allège-t-on le shell applicatif ? Dans le micro-frontend traditionnel, un shell commun concentre la logique partagée. Cette approche, au-delà des bibliothèques utilitaires, tend à coupler une grande partie de la logique métier au shell, entraînant des modifications et publications plus fréquentes, un périmètre d'impact plus large en cas de panne, et une invalidation plus fréquente du cache ;
	- Cela ramène les sous-applications à une certaine interdépendance, à l'opposé du développement et déploiement indépendants souhaités. La nouvelle approche supprime ce type de shell via deux mécanismes : le mécanisme de consommation, généralement utilisé pour réutiliser la logique métier, et le mécanisme de partage, dédié aux bibliothèques utilitaires indépendantes du métier.
- Comment fonctionnent concrètement ces mécanismes de la nouvelle approche ?
	- Dans l'architecture micro-frontend traditionnelle, les sous-applications sont relativement isolées les unes des autres, généralement via un mécanisme de sandbox ;
	- Mais à mesure que les sous-applications frontend grandissent en taille et en effectifs, cette isolation trop grossière finit par entraver la collaboration au sein et entre les sous-applications ;
	- C'est pourquoi notre nouvelle approche consiste à fournir une **solution de consommation et de partage de modules plus granulaire**, permettant aux développeurs de travailler, tester et déployer de manière indépendante en unités plus petites.
- **Le protocole de module standard définit les métadonnées des modules ; ces informations circulent entre les différentes plateformes via ce protocole pour remplir des fonctions spécifiques.**
	1. Par exemple, la plateforme de build génère ce fichier de protocole à partir des fichiers de configuration.
	2. **Par exemple, la plateforme de déploiement convertit les métadonnées en données contenant les adresses CDN concrètes, les injectant directement dans le HTML — condition préalable à la mise en place de déploiements progressifs et de tests A/B pour les modules.**
	3. De même, le runtime de l'application charge dynamiquement les modules en suivant ce protocole.
	- Grâce aux **capacités** offertes par la composition fine et le protocole de module standard, il devient très aisé de mettre en place un hub de modules en ligne. Qu'il s'agisse de composants métier ou de bibliothèques utilitaires génériques, ils peuvent être réutilisés **à moindre coût** au sein d'une équipe, voire entre équipes ;
	- De plus, **en s'appuyant sur ce mécanisme**, nous avons expérimenté l'intégration avec des plateformes low-code : en créant des composants conformes au protocole de module standard via ces plateformes, puis en les enregistrant comme modules en ligne, l'efficacité du développement métier peut être considérablement améliorée.
- Il s'agit d'un cas d'intégration typique : après intégration, nous avons constaté des améliorations significatives sur les temps de build, les temps de déploiement, ainsi que sur la vitesse d'itération et le débit des fonctionnalités.
- Parlons maintenant des outils de diagnostic. **La plupart des outils du marché se concentrent sur l'analyse des artefacts de build et ne permettent pas d'analyser en profondeur le processus de build lui-même**, ce qui limite considérablement leur utilité.
- Comment notre outil de diagnostic maison prévient-il efficacement la dégradation des applications ?
	- Premièrement, il offre une capacité d'analyse orientée vers le processus de build : grâce à l'enregistrement des données du processus, les analyses sont plus granulaires et plus riches ;
	- Deuxièmement, il propose un mécanisme de règles extensible, **permettant aux différents** contextes métier et secteurs verticaux de définir leurs propres règles ;
	- Enfin, en s'intégrant aux flux de développement essentiels, les règles produisent un effet réel ;
- Voici une page de résultats d'analyse de statoscope — un outil typiquement orienté artefacts de build, **c'est-à-dire qu'il analyse les artefacts en consommant le fichier stats.json** ;
	- **Il ne propose aucune analyse ni diagnostic relatifs au processus de build, tels que les loaders, resolvers ou plugins ;**
	- Affichage des images...
		- Analyse temporelle des webpack loaders
		- Analyse des webpack loaders
		- Analyse des webpack plugins
	- Comment y parvient-on ? En interceptant les hooks de plugins et en instrumentant les loaders pour s'insérer dans le processus de build, puis en collectant et générant des structures de données dédiées aux scénarios de diagnostic et d'analyse — graphes de dépendances, graphes de modules, graphes de packages tiers, code source, loaders, plugins, resolvers, etc. — **afin d'obtenir un contexte de build plus complet, propice à des diagnostics et analyses approfondis.**
- Nous proposons plusieurs règles de diagnostic par défaut, par exemple :  
	1. Détection de packages en double - Duplicate Packages
	2. Vérification des imports par défaut - Default Import Check
	3. Optimisation des performances des loaders - Loader Performance Optimization
	- De plus, nous proposons un mécanisme de règles de diagnostic extensible : en transmettant les structures de données régénérées comme contexte aux règles personnalisées, **il devient facile de mettre en œuvre les capacités suivantes** :
		1. Vérification du mode de référencement des dépendances
		2. Vérification de version de dépendances spécifiques
		3. Interdiction d'utilisation d'instructions spécifiques
- Ces deux capacités seules ne suffisent pas : nous cherchons aussi à nous intégrer aux flux de développement essentiels, en prenant en charge dans la CI une interception par diff basée sur les branches, afin que les règles aient un réel impact.
- En résumé, voici quelques exemples typiques de bénéfices métier obtenus.
- Voici l'état d'adoption actuel de ces outils : l'outil Monorepo est intégré dans x projets, les micro-frontends comptent y utilisateurs actifs, le bundler open source Rspack totalise z étoiles, et l'outil de diagnostic atteint n téléchargements par semaine.
- Pour conclure, voici un bilan et quelques perspectives :
	- Lorsque cette chaîne d'outils aura permis de gérer des projets de plus grande envergure, des équipes plus importantes, des builds plus rapides et des applications frontend plus maintenables ;
	- Je suis convaincu que **l'avenir verra émerger** des applications frontend encore plus « puissantes » ; **à mesure que ces applications plus puissantes feront croître la taille des projets**, les équipes s'agrandiront et **la vitesse de build ainsi que la maintenabilité en pâtiront progressivement.**
	- **Ces évolutions exigeront inévitablement davantage de ces outils, entraînant une nouvelle révolution de toute la chaîne d'outils frontend.**
- Merci, c'est tout ce que j'avais à partager aujourd'hui.