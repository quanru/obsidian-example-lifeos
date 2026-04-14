> As partes em negrito indicam pontos de hesitação

## Primeira parte
> 4min30, 5min, 4min30, 5min45, 5min
- Bom dia a todos, meu nome é Lin Yibing e o tema da minha apresentação de hoje é 『Práticas de engenharia front-end na empresa XX』;
- Deixe-me fazer uma breve apresentação: sou engenheiro de arquitetura front-end do departamento Web Infra, com vários anos de experiência em engenharia front-end, dedicado a ajudar engenheiros a gerenciar e governar projetos de forma mais eficaz. Atualmente sou responsável pelo design e implementação de soluções na área de governança de engenharia.
- A apresentação de hoje está dividida nas quatro partes a seguir
	- Primeiro, analisaremos as 『tendências atuais no desenvolvimento front-end』 e apresentaremos os novos desafios enfrentados pelo front-end da empresa XX;
	- Em seguida, compartilharemos as práticas que adotamos para enfrentar esses novos desafios;
	- Depois, apresentaremos como as soluções desenvolvidas internamente foram implementadas na empresa XX;
	- Por fim, faremos um resumo e uma perspectiva sobre as tendências de evolução da engenharia front-end;
	- **OK, antes de começar, vamos entender 『o que é engenharia front-end?』**
- A engenharia front-end consiste no uso de uma série de **técnicas e ferramentas** durante o processo de desenvolvimento para aumentar a eficiência, garantir a qualidade do código, melhorar a reutilização e **alcançar objetivos como automação de processos e promoção da colaboração em equipe — sendo uma parte indispensável do desenvolvimento front-end moderno**;
	- Gostaria de esclarecer que esta apresentação não trata da engenharia front-end de forma abrangente, mas sim das 『novas práticas』 que adotamos para enfrentar os 『novos desafios』 impostos pelas 『novas tendências』 atuais. Vejamos a seguir quais são essas tendências.
- Primeiro, as tendências da área de atuação front-end
	- A primeira **tendência** é o aumento das plataformas envolvidas: Web, Node, clientes nativos, multiplataforma, entre outros
	- A segunda tendência é o crescimento dos negócios suportados e da complexidade, especialmente com o **surgimento** nos últimos anos de muitas aplicações com interfaces front-end altamente interativas
	- A terceira é que, em decorrência das duas tendências anteriores, **o tamanho das equipes front-end inevitavelmente aumenta**
- Essas três tendências levam objetivamente a quatro tendências nos projetos front-end, a saber:
	- A primeira é o aumento da escala de código — internamente já existem projetos com mais de 10G de código, e o número de projetos envolvidos nas dependências upstream e downstream de uma aplicação também é muito grande
	- A segunda é o aumento do número de mantenedores — um projeto pode ter de dez a quarenta ou cinquenta pessoas
	- A terceira é o aumento do tamanho dos bundles — à medida que as funcionalidades evoluem, as aplicações ficam cada vez maiores
	- A quarta é o aumento da dificuldade de governança — dependências complexas são difíceis de gerenciar e artefatos de build complexos são difíceis de diagnosticar
- Diante dessas tendências, quais são os novos desafios que o nosso desenvolvimento front-end enfrenta? Principalmente quatro:
	- O primeiro é o alto custo de manutenção de múltiplos projetos — infraestrutura duplicada, dificuldade de reutilização de código, fluxos de trabalho fragmentados, etc.
	- O segundo é o alto custo de colaboração em equipe — processos interdependentes e atualizações em cascata de dependências aumentam o esforço de coordenação
	- O terceiro é a lentidão no build de aplicações gigantes — o tempo de build cresce conforme o tamanho da aplicação aumenta
	- O quarto é a rápida degradação de grandes aplicações — nos faltam meios eficazes de prevenção de degradação
- Para resolver esses novos desafios, investimos nas seguintes ferramentas
	- O primeiro é uma ferramenta Monorepo desenvolvida internamente, para reduzir o custo de manutenção de múltiplos projetos
	- O segundo é a atualização do framework de micro-frontend existente, para reduzir ainda mais o custo de colaboração no desenvolvimento em equipe
	- O terceiro é o desenvolvimento de um Bundler e um Build System para acelerar a compilação de aplicações de grande porte
	- O quarto é fornecer ferramentas de diagnóstico para prevenir efetivamente a degradação das aplicações
	- A seguir, exploraremos esses quatro temas e como os colocamos em prática para atingir os objetivos mencionados 

## Parte 2
> 6min, 5min, 5min, 7min, 6min

- O que é Monorepo?
	- É um padrão de gerenciamento de código-fonte que consiste em centralizar múltiplos projetos em um único repositório;
	- O oposto é o padrão Polyrepo, onde cada projeto possui seu próprio repositório independente;
	- **Em resumo**, Monorepo consiste em organizar múltiplos projetos distintos em um único repositório, mantendo-os com uma estrutura bem organizada;
- Então, como o Monorepo reduz o custo de manutenção de múltiplos projetos? Ele faz isso através de
	- Reutilização de infraestrutura, permitindo que os desenvolvedores se concentrem na aplicação em si
	- Compartilhamento de código, possibilitando a reutilização com baixo custo
	- Commits atômicos, com fluxos de trabalho automatizados para múltiplos projetos
- Primeiramente, através da reutilização de infraestrutura, os desenvolvedores podem se concentrar novamente na aplicação em si:
	- No modelo Polyrepo tradicional, cada projeto exige que desenvolvedores criem e mantenham sua própria infraestrutura; já no Monorepo, basta um ou dois desenvolvedores configurarem o projeto, permitindo que todos os projetos sejam mantidos em um único repositório, reutilizando uma infraestrutura comum (como configurações de CI, regras de Lint, scripts de build, etc.), **reduzindo assim** o custo de manutenção de múltiplos projetos
	- Além disso, a reutilização de infraestrutura facilita atualizações e melhorias unificadas — por exemplo, adicionar verificação de tipos no fluxo de CI para todos os projetos. No Polyrepo, isso exigiria modificar cada projeto individualmente, **o que representa um custo bastante elevado**. Já no Monorepo, ajustes na infraestrutura podem ser aplicados facilmente a múltiplos projetos.
- Em segundo lugar, através do compartilhamento de código, os desenvolvedores podem reutilizar código com baixo custo:
	- No Polyrepo, o custo de manutenção de módulos compartilhados é elevado. A depuração é trabalhosa, pois requer a execução manual de npm link para associar o módulo ao projeto em desenvolvimento; quando há muitos módulos compartilhados, esse processo torna-se extremamente tedioso e ineficiente.
	- Além disso, a atualização de módulos compartilhados é trabalhosa: é necessário gerenciar manualmente as dependências, atualizar os módulos de baixo nível, publicá-los e depois atualizar os de alto nível. **Se algo der errado no meio do processo, é preciso recomeçar tudo.**
	- No Monorepo, é possível criar módulos compartilhados com um único comando. Os módulos de alto nível podem importá-los diretamente para desenvolvimento e depuração, e alterações nos módulos de baixo nível são imediatamente percebidas pelos superiores, sem necessidade de npm link ou publicação. Isso elimina muito trabalho repetitivo, reduz significativamente o custo de extrair novos 'códigos reutilizáveis' e incentiva essa prática — o que, por sua vez, aumenta a taxa de reutilização de código.
- Por fim, através de commits atômicos, os desenvolvedores podem usufruir de um fluxo de trabalho automatizado para múltiplos projetos
	- Se uma demanda de negócio envolve múltiplos projetos, no modelo Polyrepo — por exemplo, modificar os três projetos da figura — é necessário primeiro alterar e commitar os módulos de baixo nível, executar o fluxo de CI de cada módulo, depois atualizar as dependências nos módulos de alto nível e executar o CI novamente. Todo esse processo é extremamente tedioso e fragmentado.
	- No Monorepo, podemos ajustar e commitar múltiplos projetos de uma só vez, e os fluxos de CI e publicação também são resolvidos em uma única etapa, **automatizando assim o fluxo de trabalho de múltiplos projetos.**
- Vamos fazer um breve resumo:
	- No modelo Polyrepo, cada projeto tem sua própria infraestrutura, a reutilização de código é difícil e os fluxos de trabalho são fragmentados. Já no Monorepo, múltiplos projetos compartilham uma infraestrutura comum, o código é facilmente compartilhado e o fluxo de trabalho é consistente.
	- **Na maioria das vezes, os projetos de uma equipe não são isolados, mas interconectados. O Monorepo permite organizar facilmente esses projetos em um único repositório, reduzindo enormemente o custo de manutenção de múltiplos projetos.**

## Parte 3
> 8min, 9min, 11min, 11min30

- A seguir, compartilharemos as práticas de engenharia com Bundler e Build System. Seja em projetos de repositório único ou múltiplo, o crescimento do volume de código e do número de sub-aplicações inevitavelmente degrada o desempenho de build. **Para lidar com isso**, desenvolvemos as ferramentas Bundler e Build System.
	- O Bundler foi criado para resolver o problema de lentidão na compilação de aplicações monolíticas;
	- Já o Build System foi criado para resolver o problema de lentidão na compilação em projetos Monorepo.
- No universo frontend, um Bundler é uma ferramenta **utilizada para empacotar múltiplos recursos (como arquivos JS, CSS, imagens, etc.) em um ou mais arquivos, de forma que o navegador possa executá-los diretamente**;
	- Ferramentas de Bundler comuns incluem Webpack, Rollup, Vite, Parcel e Esbuild.
- A seguir, apresentamos o Rspack Bundler, desenvolvido internamente: um motor de compilação de alto desempenho baseado em Rust, com interoperabilidade com o ecossistema Webpack.
	- A partir dessa apresentação, podemos identificar duas características do Rspack: alto desempenho e compatibilidade com o ecossistema Webpack.
- A primeira característica é a implementação em Rust. Como o JS é single-thread — embora existam formas de atingir concorrência em JS, elas se assemelham a dançar com grilhões —, **no Rust conseguimos suportar bem a concorrência**. Por isso, executamos as tarefas do processo de build **aproveitando a concorrência, o que melhora enormemente o desempenho**;
	- Estas duas imagens comparam o uso de threads durante o processo de build do Webpack e do Rspack. Podemos ver claramente que o Webpack é single-thread, enquanto o Rspack aproveita ao máximo as CPUs multi-core, extraindo o máximo de desempenho possível.
	- Este é um gráfico comparativo do nosso site oficial: no mesmo projeto, o Rspack leva apenas 4,2 segundos, enquanto o Webpack precisa de 34,8 segundos.
- A segunda característica do Rspack é a compatibilidade parcial com o webpack. A implementação atual pode ser entendida como um subconjunto do webpack, contendo a maioria das configurações mais comuns e atendendo ao desenvolvimento cotidiano. **Então, por que ser compatível com o ecossistema webpack?**
	- **Primeiro. O sistema de plugins do webpack atende aos requisitos de personalização dos projetos**
	- **Segundo. Reutilizar o rico ecossistema do webpack equivale a otimizar a experiência de desenvolvimento de projetos de grande porte com o mínimo de custo**
	- **Por fim. Existem muitos projetos legados em webpack, e a compatibilidade reduz significativamente o custo de migração**
- Estes são os ganhos em dois casos de negócio típicos: os projetos originalmente levavam cerca de 5 minutos para iniciar em modo dev; com o Rspack, isso cai para cerca de 20 segundos. O HMR, que levava cerca de 20 segundos, agora leva apenas 1 segundo. O ganho de desempenho é de aproximadamente 10x em ambos os casos.
- Uma breve introdução ao Build System: ele processa o grafo de dependências dos projetos no Monorepo e agenda as tarefas de build com base nesse grafo;
	- Por que um Monorepo precisa de um Build System? Porque o Monorepo não se resume a manter múltiplos projetos em um único repositório; **ele também precisa de um Build System para gerenciar todos os projetos do repositório e executar o build de acordo com as dependências entre eles;**
	- Ferramentas de Build System comuns incluem Bazel, NX, Turborepo e Lage, entre outras.
- A seguir, explicamos como implementamos o Build System em nossa ferramenta Monorepo interna, através de
	- Suporte à 'execução paralela de tarefas', maximizando a aceleração por paralelismo
	- Suporte a 'cache multinível', implementando cache em múltiplos níveis para as tarefas de build
	- Suporte a 'build sob demanda', compilando apenas os projetos afetados pelas alterações de código
- Como ilustrado, as dependências entre sub-projetos são convertidas em um grafo de dependências de tarefas. A ordem de build deve respeitar o seguinte requisito: projetos de alto nível só podem ser compilados após a conclusão dos de baixo nível.
	- A primeira abordagem é a execução serial na ordem DEBCA, que respeita os requisitos de build, mas tem desempenho baixo — por exemplo, D e E poderiam ser executados em paralelo. A segunda abordagem paraleliza DE e BC, reduzindo os 5 passos anteriores para 3.
	- Nesse ponto, percebemos que a tarefa C não depende da conclusão da tarefa D, mas na segunda abordagem, C ainda precisa aguardar a conclusão de D e E para iniciar.
	- Isso nos leva à terceira abordagem: após a conclusão da tarefa E, D e C são executadas em paralelo;
- **À medida que o número de sub-projetos no Monorepo cresce, cada ciclo de desenvolvimento ou publicação envolve múltiplos sub-projetos. Se for necessário recompilar todos eles a cada vez, isso impactará enormemente a velocidade de build e deploy.**
	- **Oferecemos a capacidade de cache dos artefatos de build, tanto local quanto remotamente. Quando o código de um sub-projeto não foi modificado, os artefatos de build anteriores são reutilizados para reduzir o tempo de compilação.**
- **Em termos de build sob demanda, suportamos a execução do fluxo de CI com base no escopo de impacto: utilizando git diff para analisar as dependências das alterações, compilamos apenas os projetos afetados — caso contrário, cada CI teria que recompilar todos os sub-projetos.**
- Tomemos um Monorepo simples como exemplo; **as dependências estão ilustradas no diagrama**
	1. Compilar todos os projetos de uma vez leva aproximadamente 17,72 segundos
	2. Se apenas o módulo component for alterado, o build sob demanda exige compilar apenas component, app1 e app2, levando 8,94 segundos — uma economia de 50% do tempo
	3. Sem cache, compilar apenas App1, App2 e App3 leva entre 10,77 e 16,94 segundos
	4. Com cache — por exemplo, component, sdk e util já compilados anteriormente —, compilar App1, App2 e App3 individualmente leva entre 7,55 e 9,74 segundos, economizando aproximadamente 45% do tempo
- Com o Bundler e o Build System, aproveitamos o alto desempenho do Rust e o cache remoto de build para acelerar enormemente a compilação de aplicações de grande porte. Mas os benefícios vão além da velocidade de desenvolvimento — também trouxeram dois grandes ganhos para o negócio:
	1. Elevou o limite de uma aplicação monolítica: permitindo desenvolver aplicações ainda maiores e mais poderosas
	2. Acelerou a velocidade de iteração: possibilitando mais testes A/B e lançamentos de funcionalidades com maior frequência

## Parte 4
> 10min 10min 14min

- O micro-frontend é uma solução de divisão e conquista para aplicações no universo frontend. A prática de micro-frontend na empresa XX passou pelas fases de iframe, SPA e framework; ao longo do processo foram encontrados vários problemas e, para reduzir ainda mais o custo de colaboração em equipe, está em andamento a exploração de uma nova abordagem.
- A seguir, veremos as práticas de engenharia de micro-frontend e como a nova abordagem reduz o custo de colaboração no desenvolvimento em equipe
	- Primeiro, aliviando a carga do shell, desacoplando a aplicação base da lógica de negócio
	- Segundo, utilizando composição granular, desenvolvendo e implantando módulos de forma independente em granularidade mais fina
	- Por fim, ao estabelecer padrões de protocolo para módulos, criamos um hub de módulos que pode até ser integrado a plataformas low-code, aumentando a taxa de reutilização de módulos e suportando capacidades de canary release e A/B no nível de módulo;
- Como isso alivia a carga do shell? No micro-frontend tradicional, um shell comum é criado para hospedar a lógica compartilhada. Essa forma de reutilização, além das bibliotecas utilitárias, tende a acumular lógica de negócio no shell, levando a modificações e publicações mais frequentes, maior superfície de impacto em falhas e cache que invalida com mais facilidade;
	- Isso faz com que as sub-aplicações, que deveriam ser desenvolvidas e implantadas de forma independente, voltem a ser interdependentes de certa forma. Por isso, a nova abordagem elimina esse tipo de shell por meio de dois mecanismos: o mecanismo de consumo e o mecanismo de compartilhamento — o primeiro para reutilizar lógica de negócio, o segundo para reutilizar bibliotecas utilitárias independentes do negócio
- Então, como funcionam os mecanismos da nova abordagem?
	- Na arquitetura de micro-frontend tradicional, as sub-aplicações são relativamente isoladas entre si, geralmente por meio de um mecanismo de sandbox para garantir esse isolamento;
	- Porém, à medida que a escala dos sub-aplicativos frontend cresce e o número de membros da equipe aumenta, esse isolamento grosseiro acaba limitando a colaboração entre as pessoas dentro e fora de cada sub-aplicativo;
	- Por isso, nossa nova abordagem é oferecer uma **solução de consumo e compartilhamento de módulos** mais granular, permitindo que os desenvolvedores realizem desenvolvimento, testes e implantação independentes em unidades menores.
- **O padrão de protocolo de módulo define os metadados do módulo, que circulam entre as plataformas por meio desse protocolo para alcançar funcionalidades específicas**
	1. Por exemplo, a plataforma de build gera esse arquivo de protocolo com base nos arquivos de configuração.
	2. **Por exemplo, a plataforma de implantação converte os metadados em dados contendo endereços CDN específicos, preenchendo-os diretamente no HTML durante a entrega — essa etapa é também o pré-requisito para o canary release e testes A/B de módulos**
	3. Além disso, o runtime da aplicação também carrega módulos dinamicamente com base nesse protocolo.
	- Com as **características** da composição granular e do padrão de protocolo de módulo, podemos criar facilmente um centro de módulos online, onde componentes relacionados ao negócio ou bibliotecas utilitárias independentes podem ser reutilizados **a um custo muito baixo** dentro da equipe ou até entre equipes;
	- Além disso, **com base nesse mecanismo**, também experimentamos a integração com plataformas low-code: ao criar componentes conformes ao padrão de protocolo de módulo e registrá-los como módulos online, é possível aumentar significativamente a eficiência do desenvolvimento de negócios.
- Este é um caso de negócio típico de integração. Após a adoção, observamos melhorias significativas no tempo de build, no tempo de implantação, na velocidade de iteração e na capacidade de entrega de requisitos.
- A seguir, vamos falar sobre as ferramentas de diagnóstico. **A maioria das ferramentas disponíveis no mercado é voltada para o diagnóstico e análise dos artefatos de build, sem capacidade de diagnóstico aprofundado do processo de build**, o que limita bastante sua utilidade.
- Então, como nossa ferramenta de diagnóstico desenvolvida internamente previne efetivamente a degradação das aplicações?
	- Primeiro, oferecemos capacidade de análise voltada ao processo de build. Por registrar dados do processo de build, conseguimos análises mais granulares e detalhadas;
	- Em segundo lugar, oferecemos um mecanismo de regras extensível, **permitindo que diferentes** cenários verticais e de negócio expandam suas próprias regras;
	- Por fim, integrando-as ao fluxo central de desenvolvimento, as regras passam a ter efeito real;
- Esta é uma página de resultados de análise do statoscope, um exemplo típico de análise voltada para artefatos de build, **ou seja, analisa os artefatos consumindo o stats.json**;
	- **Ele não possui análise nem diagnóstico relacionados ao processo de build, como loader, resolver, plugin, entre outros;**
	- Exibindo imagens...
		- Análise de sequência temporal do webpack loader
		- Análise do webpack loader
		- Análise do webpack plugin
	- Como fazemos isso? Intervimos no processo de build por meio de escuta de hooks de plugins e interceptação de Loaders, coletando e gerando estruturas de dados dedicadas a cenários de diagnóstico e análise — como grafos de dependência, grafos de módulos, grafos de pacotes de terceiros, código-fonte, loader, plugin, resolver, entre outros — **obtendo assim um contexto de build mais completo para diagnósticos e análises aprofundadas posteriores**
- Fornecemos algumas regras de diagnóstico padrão, como:  
	1. Verificação de pacotes duplicados - Duplicate Packages
	2. Verificação de instruções de importação - Default Import Check
	3. Otimização de desempenho do Loader - Loader Performance Optimization
	- Além disso, oferecemos um mecanismo extensível de regras de diagnóstico, passando as estruturas de dados regeneradas como contexto para as regras personalizadas, **o que permite facilmente as seguintes capacidades**:
		1. Verificação do modo de importação de dependências
		2. Verificação de versão de dependências específicas
		3. Proibição de uso de instruções específicas
- Ter apenas as duas capacidades acima não é suficiente. Também buscamos integração ao fluxo central de desenvolvimento, com suporte a interceptação de diff baseada em branch no CI, para que as regras realmente entrem em ação.
- Em resumo, estes são alguns dos benefícios típicos para os negócios.
- Este é o panorama atual de adoção das ferramentas mencionadas: a ferramenta Monorepo conta com x projetos integrados, y usuários ativos de microfrontend, a ferramenta open-source Bundler Rspack tem z stars, e a ferramenta de diagnóstico alcança n downloads semanais.
- A seguir, faremos um breve resumo e perspectivas:
	- Quando esse conjunto de ferramentas suportar projetos de maior escala, equipes maiores, builds mais rápidos e um frontend mais fácil de manter;
	- Acredito que **o futuro certamente** dará origem a aplicações frontend mais『poderosas』, e **quando essas aplicações mais poderosas continuarem aumentando a escala do projeto**, adicionando mais membros à equipe, gradualmente **reduzindo a velocidade de build e a manutenibilidade**
	- **O futuro certamente exigirá mais dessas ferramentas, impulsionando mais uma renovação de toda a cadeia de ferramentas frontend**
- Obrigado, este foi o conteúdo que trouxe hoje.