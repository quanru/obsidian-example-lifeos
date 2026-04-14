> Las partes en negrita son los puntos de bloqueo

## Primera parte
> 4min30, 5min, 4min30, 5min45, 5min
- Buenos días a todos. Me llamo Lin Yibing y el tema que comparto hoy es «Prácticas de ingeniería front-end en la empresa XX».
- Permítanme presentarme brevemente: soy arquitecto front-end del departamento Web Infra, con varios años de experiencia en ingeniería front-end. Mi misión es ayudar a los ingenieros front-end a gestionar y gobernar mejor sus proyectos; actualmente me encargo del diseño e implementación de soluciones en la dirección de gobernanza de proyectos.
- La presentación de hoy consta de las siguientes cuatro partes
	- Primero analizaremos las «tendencias actuales en el desarrollo front-end» y presentaremos los nuevos desafíos que enfrenta el desarrollo front-end en la empresa XX.
	- A continuación, compartiremos qué prácticas estamos llevando a cabo para hacer frente a estos nuevos desafíos.
	- Luego, explicaremos la situación general de implementación de las soluciones desarrolladas internamente en la empresa XX.
	- Por último, haremos un resumen y una prospectiva sobre las tendencias de desarrollo de la ingeniería front-end.
	- **Bien, antes de comenzar, veamos primero «¿Qué es la ingeniería front-end?»**
- La ingeniería front-end consiste en aplicar, durante el proceso de desarrollo front-end, una serie de **técnicas y herramientas** para mejorar la eficiencia del desarrollo, garantizar la calidad del código, aumentar su reutilización, **lograr la automatización de procesos y fomentar la colaboración en equipo; es una parte indispensable del desarrollo front-end moderno**.
	- Quiero aclarar que lo que compartiré hoy no es una visión exhaustiva de la ingeniería front-end, sino las «nuevas prácticas» que hemos desarrollado para hacer frente a los «nuevos desafíos» de las «nuevas tendencias» actuales. A continuación, veamos qué nuevas tendencias han surgido en el desarrollo front-end.
- En primer lugar, las tendencias del rol front-end
	- La primera **tendencia** es que cada vez son más las plataformas involucradas: Web, Node, clientes nativos y multiplataforma, entre otras
	- La segunda tendencia es que el número de negocios que se pueden soportar es cada vez mayor y la complejidad aumenta, especialmente en los últimos años, donde **han surgido** en el lado front-end numerosas aplicaciones con interacciones intensivas
	- La tercera tendencia es que, como consecuencia inevitable de las dos anteriores, **el tamaño de los equipos front-end ha crecido**
- Estas tres tendencias han dado lugar objetivamente a cuatro tendencias en la ingeniería front-end, a saber:
	- La primera: el volumen de código ha crecido; internamente ya existen grandes proyectos con más de 10 GB de código, y el número de proyectos involucrados en las dependencias ascendentes y descendentes de una aplicación también es muy elevado
	- La segunda: el número de personas encargadas del mantenimiento ha aumentado; un proyecto puede tener desde una decena hasta cuarenta o cincuenta personas
	- La tercera: el tamaño de las aplicaciones crece; a medida que las funcionalidades evolucionan, el volumen se vuelve cada vez más grande
	- La cuarta: la dificultad de gobernanza aumenta; las dependencias complejas son difíciles de gestionar y los artefactos de construcción complejos son difíciles de diagnosticar
- Entonces, ante estas tendencias, ¿cuáles son los nuevos desafíos que enfrenta nuestro desarrollo front-end? Principalmente cuatro:
	- El primero: el coste de mantenimiento de múltiples proyectos es elevado, con infraestructura duplicada, dificultad para reutilizar código y flujos de trabajo fragmentados
	- El segundo: el coste de colaboración en el desarrollo con múltiples personas es alto; los flujos de trabajo interdependientes y las actualizaciones en cascada de dependencias incrementan el coste de coordinación
	- El tercero: la velocidad de construcción de aplicaciones gigantes es lenta; el tiempo de compilación se incrementa a medida que la aplicación crece
	- El cuarto: las aplicaciones de gran escala se degradan rápidamente y carecemos de mecanismos efectivos para prevenir esa degradación
- Para abordar estos nuevos desafíos, hemos invertido en las siguientes herramientas
	- El primero es una herramienta Monorepo de desarrollo propio, orientada a reducir el costo de mantenimiento de múltiples proyectos
	- El segundo es la actualización del framework de micro-frontend existente, para reducir aún más el costo de colaboración en el desarrollo con múltiples personas
	- El tercero es el desarrollo de un Bundler y un Build System para acelerar la velocidad de construcción de aplicaciones masivas
	- El cuarto es proporcionar herramientas de diagnóstico para prevenir eficazmente la degradación de las aplicaciones
	- A continuación, desarrollaremos estos cuatro temas y explicaremos cómo los hemos llevado a la práctica para alcanzar los objetivos mencionados 

## Segunda parte
> 6min, 5min, 5min, 7min, 6min

- ¿Qué es Monorepo?
	- Es un patrón de gestión de código fuente que consiste en centralizar múltiples proyectos en un único repositorio;
	- Su contraparte es el patrón Polyrepo, donde cada proyecto tiene su propio repositorio independiente;
	- **En pocas palabras**, Monorepo consiste en mantener múltiples proyectos distintos en un único repositorio, bien organizados entre sí;
- Entonces, ¿cómo reduce Monorepo el costo de mantenimiento de múltiples proyectos? Lo hace mediante
	- La reutilización de infraestructura, permitiendo que los desarrolladores se centren nuevamente en las aplicaciones en sí
	- El uso compartido de código, logrando la reutilización de código a bajo costo
	- Los commits atómicos, usando flujos de trabajo automatizados para múltiples proyectos
- En primer lugar, mediante la reutilización de infraestructura, los desarrolladores pueden centrarse nuevamente en las propias aplicaciones:
	- En el modelo Polyrepo tradicional, cada proyecto requiere que desarrolladores lo creen y mantengan; mientras que en Monorepo, solo uno o dos desarrolladores necesitan establecer el entorno del Monorepo, y todos los proyectos pueden mantenerse de forma unificada en un solo repositorio, reutilizando una misma infraestructura (como configuraciones de CI, reglas de Lint, scripts de construcción, etc.), **reduciendo así** el costo de mantenimiento de múltiples proyectos
	- Además, la reutilización de infraestructura facilita las actualizaciones y mejoras unificadas. Por ejemplo, si se desea agregar verificación de tipos en el flujo CI para todos los proyectos con el fin de mejorar la calidad, en Polyrepo habría que modificar cada proyecto por separado, **lo cual tiene un costo muy elevado**. En Monorepo, los ajustes y el mantenimiento de la infraestructura se pueden aplicar fácilmente a múltiples proyectos.
- En segundo lugar, mediante el uso compartido de código, los desarrolladores pueden reutilizar código a bajo costo:
	- En Polyrepo, el costo de mantener módulos compartidos es bastante alto: depurarlos es tedioso, ya que requiere ejecutar manualmente `npm link` para vincularlos al proyecto en desarrollo. Si hay muchos módulos compartidos, este paso se vuelve sumamente engorroso e ineficiente.
	- Además, actualizar los módulos compartidos es muy laborioso: hay que gestionar manualmente las dependencias, actualizar primero los módulos de nivel inferior, publicarlos y luego actualizar los módulos de nivel superior. **Si algo falla a mitad del proceso, hay que repetir todo desde el principio**.
	- En Monorepo, se pueden crear módulos compartidos con un solo comando; los módulos de nivel superior los importan directamente para desarrollar y depurar, y los cambios en los módulos de nivel inferior son detectados inmediatamente por los superiores, sin necesidad de `npm link` ni publicación en npm. Esto elimina mucho trabajo repetitivo y reduce drásticamente el costo de extraer nuevo «código reutilizable», lo que incentiva a los equipos a realizar este tipo de refactorizaciones, aumentando a su vez la tasa de reutilización del código.
- En tercer lugar, mediante los commits atómicos, los desarrolladores pueden disfrutar de flujos de trabajo automatizados para múltiples proyectos
	- Si un requisito de negocio abarca múltiples proyectos, en el modelo Polyrepo —por ejemplo, al modificar tres proyectos— hay que modificar y confirmar primero los módulos de nivel inferior, ejecutar el flujo CI de cada módulo, y al tratar los módulos de nivel superior también actualizar las dependencias inferiores y ejecutar otro ciclo de CI. Este proceso es muy tedioso e inconexo.
	- En Monorepo, podemos ajustar y confirmar múltiples proyectos de una sola vez, y los flujos de CI y publicación también se completan en una única operación, **automatizando así el flujo de trabajo de múltiples proyectos.**
- Hagamos un breve resumen:
	- En el modelo Polyrepo, cada proyecto tiene su propia infraestructura, la reutilización de código es difícil y los flujos de trabajo están fragmentados. En Monorepo, múltiples proyectos pueden compartir una misma infraestructura, compartir código fácilmente y usar flujos de trabajo consistentes.
	- **Muchas veces los proyectos de un equipo no están aislados entre sí, sino interrelacionados. Monorepo permite organizar cómodamente estos proyectos en un único repositorio, reduciendo drásticamente el costo de mantenimiento de múltiples proyectos.**

## Tercera parte
> 8min, 9min, 11min, 11min30

- A continuación, compartiremos las prácticas de ingeniería con el Bundler y el Build System. Tanto en proyectos de un solo repositorio como en proyectos multirrepo, a medida que crece la escala del código y el número de sub-aplicaciones, el rendimiento de construcción se degrada. **Para hacer frente a esta situación**, desarrollamos por separado las herramientas Bundler y Build System.
	- El Bundler está orientado a resolver el problema de la lentitud de construcción en aplicaciones monolíticas de gran tamaño;
	- Mientras que el Build System está orientado a resolver el problema de la lentitud de construcción en entornos Monorepo.
- En el ámbito del frontend, un Bundler es una herramienta **que empaqueta múltiples recursos frontend (como archivos JS, CSS, imágenes, etc.) en uno o varios archivos, de modo que el navegador pueda ejecutarlos directamente**;
	- Entre las herramientas Bundler más comunes se encuentran Webpack, Rollup, Vite, Parcel y Esbuild.
- A continuación, presentamos nuestro Bundler de desarrollo propio: Rspack, un motor de construcción de alto rendimiento basado en el lenguaje Rust, con interoperabilidad con el ecosistema de Webpack.
	- De esta descripción se desprende que Rspack tiene dos características principales: alto rendimiento y compatibilidad con el ecosistema de Webpack.
- La primera característica es su implementación en Rust. Dado que JS es de un solo hilo, aunque existen formas de lograr concurrencia en JS, estos métodos siempre presentan ciertas limitaciones. **En Rust, en cambio, podemos soportar bien la concurrencia**, por lo que ejecutamos las tareas del proceso de construcción **aprovechando esta característica de concurrencia, lo que mejora drásticamente el rendimiento de construcción**;
	- Estas dos imágenes muestran una comparación del uso de hilos entre Webpack y Rspack durante el proceso de construcción. Se puede apreciar claramente que Webpack es esencialmente de un solo hilo, mientras que Rspack puede aprovechar al máximo las CPU multinúcleo para exprimir el rendimiento al máximo.
	- Este es un gráfico comparativo de nuestro sitio oficial: en el mismo proyecto, Rspack solo necesita 4,2 segundos, mientras que Webpack requiere 34,8 segundos
- La segunda característica de Rspack es su compatibilidad parcial con webpack. La implementación actual puede entenderse como un subconjunto de webpack que incluye la mayoría de las configuraciones de uso común, suficientes para el desarrollo habitual de negocio. **Entonces, ¿por qué ser compatible con el ecosistema de webpack?**
	- **Primero: el sistema de plugins de webpack satisface los requisitos de personalización de los proyectos**
	- **Segundo: reutilizar el rico ecosistema de webpack equivale a optimizar la experiencia de desarrollo de proyectos masivos al mínimo costo**
	- **Tercero: hay una enorme cantidad de proyectos webpack existentes; la compatibilidad con webpack reduce drásticamente el costo de migración**
- Estos son los beneficios en dos casos de negocio típicos: dos proyectos que originalmente tardaban unos 5 minutos en iniciar en modo dev ahora solo necesitan unos 20 segundos con Rspack; el HMR que antes tardaba unos 20 segundos ahora solo tarda alrededor de 1 segundo. La mejora de rendimiento es de aproximadamente 10 veces en ambos casos
- El Build System procesa el grafo de dependencias de los proyectos en un Monorepo y programa las tareas de construcción en función de ese grafo;
	- ¿Por qué necesita un Monorepo un Build System? Porque Monorepo no consiste simplemente en mantener múltiples proyectos en un único repositorio, **sino que también requiere un Build System para gestionar los múltiples proyectos del repositorio y construirlos según las dependencias entre ellos;**
	- Entre las herramientas de Build System más comunes se encuentran Bazel, NX, Turborepo y Lage
- A continuación, describimos cómo implementamos el Build System en nuestra herramienta Monorepo de desarrollo propio. Lo logramos mediante
	- Soporte de «capacidad de tareas en paralelo», acelerando al máximo mediante la ejecución paralela de tareas
	- Soporte de «capacidad de caché multinivel», implementando caché en múltiples niveles para las tareas de construcción
	- Soporte de «capacidad de construcción bajo demanda», construyendo según el alcance de los cambios en el código
- Como se muestra en el diagrama, las dependencias entre sub-proyectos se convierten en un grafo de dependencias de tareas, cuyo orden de construcción debe cumplir el requisito de que la construcción de los proyectos de nivel superior debe esperar a que se completen los de nivel inferior.
	- Veamos la opción uno: la ejecución en serie como DEBCA, que cumple con los requisitos de construcción; sin embargo, su rendimiento es bajo, ya que D y E pueden ejecutarse en paralelo. Por eso, la segunda opción consiste en paralelizar DE y BC, reduciendo así los 5 pasos anteriores a 3 pasos.
	- En ese momento observamos que la tarea C no depende de que se complete la tarea D, pero en la opción dos, la tarea C debe esperar a que tanto D como E finalicen antes de ejecutarse.
	- Esto lleva a la tercera opción: una vez completada la tarea E, D y C se ejecutan en paralelo;
- **A medida que crece la escala de sub-proyectos en un Monorepo, cada desarrollo o despliegue implica múltiples sub-proyectos. Si cada vez hubiera que reconstruirlos todos, esto ralentizaría enormemente la velocidad de construcción y despliegue**.
	- **Ofrecemos la capacidad de almacenar en caché los artefactos de construcción, tanto localmente como de forma remota. Cuando los sub-proyectos relevantes no han sufrido cambios en el código, se reutilizan los artefactos de construcción anteriores para reducir el tiempo de construcción**.
- **En cuanto a la práctica de construcción bajo demanda, soportamos la ejecución del flujo CI según el alcance del impacto: mediante `git diff` analizamos las dependencias del código modificado y solo construimos los proyectos afectados, evitando así que cada CI construya por completo todos los sub-proyectos**.
- Tomemos como ejemplo un Monorepo sencillo, **cuyas dependencias se muestran en el diagrama**
	1. Si se construyen todos los proyectos de una vez, el tiempo total es de aproximadamente 17,72 segundos
	2. Si solo se modifica el módulo `component`, con la construcción bajo demanda solo necesito construir component, app1 y app2, lo que lleva 8,94 segundos, ahorrando un 50% del tiempo
	3. Sin caché, si construyo únicamente App1, App2 y App3, el tiempo oscila entre 10,77 y 16,94 segundos
	4. Con caché —por ejemplo, si component, sdk y util ya han sido construidos— al construir por separado App1, App2 y App3, el tiempo de construcción oscila entre 7,55 y 9,74 segundos, ahorrando aproximadamente un 45% del tiempo
- Gracias al desarrollo del Bundler y el Build System, aprovechando respectivamente el alto rendimiento del lenguaje Rust y la capacidad de caché de construcción remota, hemos acelerado enormemente la velocidad de construcción de aplicaciones masivas. Pero esto no se limita a una mejora en la velocidad de desarrollo: también aporta dos grandes beneficios al negocio
	1. Elevar el techo de una aplicación monolítica: nos permite desarrollar aplicaciones aún más grandes y potentes
	2. Acelerar la velocidad de iteración: nos permite realizar pruebas A/B y lanzar funcionalidades con mayor rapidez y frecuencia

## Cuarta parte
> 10min 10min 14min

- El micro-frontend es la solución de división de aplicaciones en el ámbito del frontend. La práctica de micro-frontend en la empresa XX también ha pasado por las etapas de iframe, SPA y framework; en el camino se han encontrado no pocos problemas y, para reducir aún más el costo de colaboración entre múltiples personas, actualmente se está explorando una nueva solución.
- A continuación, veremos las prácticas de ingeniería del micro-frontend y cómo la nueva solución reduce el costo de colaboración en el desarrollo con múltiples personas
	- En primer lugar, reduciendo la carga de la aplicación base y desacoplando la lógica de negocio de ella
	- En segundo lugar, mediante una composición de granularidad fina, desarrollando e implementando de forma independiente a nivel de módulos más pequeños
	- Por último, mediante la estandarización del protocolo de módulos, hemos construido un centro de módulos que, incluso combinado con plataformas low-code, permite una mayor tasa de reutilización de módulos y soporta capacidades de grayscale release y A/B a nivel de módulo;
- ¿Cómo reduce la carga de la aplicación base? En el micro-frontend tradicional, se establece una base común para alojar la lógica compartida. Esta forma de reutilización, más allá de las bibliotecas de utilidades, tiende a acumular lógica de negocio en la base, lo que provoca cambios y despliegues más frecuentes de esta, mayor superficie de fallo y cachés que se invalidan con más facilidad;
	- Esto hace que las sub-aplicaciones, que deberían desarrollarse e implementarse de forma independiente, vuelvan a depender unas de otras en cierta medida. Por ello, la nueva solución elimina este tipo de base mediante dos mecanismos: el mecanismo de consumo, generalmente usado para reutilizar lógica de negocio, y el mecanismo de compartición, usado para reutilizar bibliotecas de utilidades independientes del negocio
- Entonces, ¿cómo funcionan los mecanismos de la nueva solución?
	- En la arquitectura tradicional de micro-frontend, las sub-aplicaciones están relativamente aisladas entre sí, y habitualmente se utiliza un mecanismo de sandbox para garantizar ese aislamiento;
	- Sin embargo, a medida que los sub-aplicaciones frontend crecen en escala y se incorporan más personas, este aislamiento de grano grueso acaba limitando la colaboración dentro y fuera de cada sub-aplicación;
	- Por eso, nuestra nueva estrategia consiste en ofrecer un esquema de **consumo y compartición de módulos más granular**, que permita a los desarrolladores desarrollar, probar y desplegar de forma independiente en unidades más pequeñas.
- **El estándar de protocolo de módulos define la metainformación de los módulos y fluye entre plataformas a través de dicho protocolo para lograr funcionalidades específicas.**
	1. Por ejemplo, la plataforma de compilación genera este archivo de protocolo a partir del archivo de configuración.
	2. **Por ejemplo, la plataforma de despliegue convierte la metainformación en datos con direcciones CDN concretas, los cuales se insertan directamente en el HTML para su distribución; este paso es también el requisito previo para implementar canary releases y pruebas A/B de módulos.**
	3. Asimismo, el runtime de la aplicación también carga módulos de forma dinámica según este protocolo.
	- Gracias a las **características** de la composición granular y el estándar de protocolo de módulos, podemos crear fácilmente un hub de módulos en línea donde componentes de negocio y librerías utilitarias genéricas pueden reutilizarse **a un costo mínimo** dentro del equipo e incluso entre equipos;
	- Además, **sobre la base de este mecanismo**, también hemos explorado la integración con plataformas low-code: los componentes creados en ellas que cumplen el estándar de protocolo de módulos pueden registrarse como módulos en línea, lo que mejora significativamente la eficiencia del desarrollo de negocio.
- Este es un caso de negocio típico de incorporación: tras la integración, observamos mejoras significativas en el tiempo de compilación, el tiempo de despliegue, e incluso en la velocidad de iteración y el throughput de requisitos.
- A continuación hablaré sobre las herramientas de diagnóstico. **La mayoría de las herramientas del mercado se centran en el diagnóstico y análisis de los artefactos de compilación, sin poder profundizar en el proceso de compilación en sí**, lo que limita considerablemente su utilidad.
- ¿Cómo previene eficazmente la degradación de las aplicaciones nuestra herramienta de diagnóstico de desarrollo propio?
	- En primer lugar, ofrece capacidad de análisis orientada al proceso de compilación; al registrar los datos del proceso, podemos realizar análisis más granulares y completos;
	- En segundo lugar, ofrece un mecanismo de reglas extensible que **permite a diferentes** escenarios verticales y de negocio ampliar sus propias reglas;
	- Por último, al integrarse con el flujo principal de desarrollo, las reglas cobran efecto real;
- Esta es una página de resultados de análisis de statoscope, un ejemplo típico de análisis orientado a artefactos de compilación, **es decir, analiza el artefacto consumiendo stats.json**;
	- **No incluye análisis ni diagnósticos relacionados con el proceso de compilación, como loader, resolver o plugin;**
	- Mostrando imagen...
		- Análisis de secuencia temporal de webpack loader
		- Análisis de webpack loader
		- Análisis de webpack plugin
	- ¿Cómo lo logramos? Nos integramos en el proceso de compilación escuchando hooks de plugins e interceptando Loaders, y recopilamos y generamos estructuras de datos específicas para escenarios de diagnóstico y análisis —como grafos de dependencias, grafos de módulos, grafos de paquetes de terceros, código fuente, datos de loader, plugin y resolver— **obteniendo así un contexto de compilación más completo para llevar a cabo diagnósticos y análisis en profundidad.**
- Ofrecemos algunas reglas de diagnóstico predeterminadas, por ejemplo:  
	1. Verificación de paquetes duplicados - Duplicate Packages
	2. Coincidencia de sentencias de especificación de paquetes - Default Import Check
	3. Optimización del rendimiento de Loader - Loader Performance Optimization
	- Además, ofrecemos un mecanismo extensible de reglas de diagnóstico: pasamos las estructuras de datos regeneradas como contexto a las reglas personalizadas, lo que **permite implementar fácilmente las siguientes capacidades**:
		1. Verificación del modo de referencia de dependencias
		2. Verificación de versiones de dependencias específicas
		3. Prohibición del uso de sentencias específicas
- Esas dos capacidades no son suficientes; también buscamos integrarnos con el flujo de desarrollo principal, añadiendo soporte en CI para la intercepción de diffs basada en ramas, de modo que las reglas tengan un efecto real.
- En resumen, estos son algunos de los beneficios empresariales típicos obtenidos.
- Este es el estado actual de adopción de las herramientas mencionadas: la herramienta Monorepo cuenta con x proyectos integrados, la micro-frontend tiene y usuarios activos, la herramienta open-source Bundler Rspack acumula z estrellas, y la herramienta de diagnóstico alcanza n descargas semanales.
- A continuación, un breve resumen y perspectivas de futuro:
	- Una vez que la cadena de herramientas mencionada soporte una mayor escala de proyectos, equipos más grandes, mayor velocidad de compilación y proyectos frontend más mantenibles;
	- Estoy convencido de que **el futuro sin duda traerá** aplicaciones frontend más «potentes», y **cuando estas aplicaciones más potentes continúen aumentando en escala de ingeniería**, incorporando más personas al equipo, poco a poco **reducirán la velocidad de compilación y la mantenibilidad**.
	- **Eso exigirá inevitablemente más de estas herramientas en el futuro, impulsando una nueva revolución en toda la cadena de herramientas frontend.**
- Gracias, eso es todo lo que he traído para compartir hoy.