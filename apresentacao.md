# Roteiro de Apresentação — Defesa de TCC

**Trabalho:** Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade  
**Autor:** Mateus Vinicius Santiago Melo  
**Orientadora:** Marcelle Pereira Mota | **Coorientador:** André Avelino da Silva Neto  
**Instituição:** UFPA — Faculdade de Computação — Bacharelado em Sistemas de Informação

**Duração total:** 20 minutos | **26 slides** | **~45 s por slide** (média)

> Cada seção corresponde a um slide (`slides/pagina1.html` a `pagina26.html`). Cada slide traz duas versões: **Texto (20 min)** — versão calibrada para a apresentação oral — e **Texto expandido** — versão mais detalhada para estudo, ensaio e aprofundamento na defesa.

---

## Slide 1 — Capa ⏱ ~30 s

**Texto (20 min)**

Boa tarde, membros da banca, orientadora e coorientador. Sou Mateus Vinicius Santiago Melo, aluno de Sistemas de Informação da UFPA. Apresento o trabalho *Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade*, em coautoria com André Avelino da Silva Neto e Marcelle Pereira Mota. Trata-se de uma pesquisa em andamento que integra desenvolvimento de sistema, fundamentação em IHC e avaliação empírica com especialistas.

**Texto expandido**

Boa tarde, membros da banca, professora Marcelle, professor André e a todos presentes. Meu nome é Mateus Vinicius Santiago Melo, aluno do curso de Sistemas de Informação da Universidade Federal do Pará. Apresento hoje o trabalho intitulado *Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade*, desenvolvido em coautoria com André Avelino da Silva Neto e Marcelle Pereira Mota, sob orientação da professora Marcelle e coorientação do professor André. O trabalho situa-se na interface entre Interação Humano-Computador, tecnologias cívicas e mapeamento urbano colaborativo. A fundamentação teórica e metodológica baseia-se no artigo *Caminhos para a Espaciabilidade* (IHC 2025), que propõe o critério de espaciabilidade e o MIE — Método de Inspeção da Espaciabilidade. Este TCC operacionaliza esses conceitos no Mapa Cidadão e estende a validação empírica do método, originalmente demonstrada no Google Maps, com três especialistas. Ao longo desta apresentação, percorro a fundamentação teórica, o problema investigado, o sistema desenvolvido, a metodologia de avaliação, os resultados obtidos e as contribuições e limitações do estudo.

---

## Slide 2 — Interação Humano-Computador (IHC) ⏱ ~40 s

**Texto (20 min)**

A IHC estuda o design e a avaliação de sistemas interativos, buscando torná-los usáveis e significativos. Critérios clássicos — usabilidade, experiência do usuário, acessibilidade e comunicabilidade — orientam a maior parte das avaliações. Porém, quando o sistema é um mapa interativo, nenhum deles responde de forma explícita se o design apoia o pensamento espacial. Instrumentos como o STAT medem habilidades do usuário, não qualidade do sistema. É nessa lacuna que se insere o conceito central deste trabalho.

**Texto expandido**

Para situar o trabalho, começo pela área de Interação Humano-Computador. A IHC estuda o design, a avaliação e a implementação de sistemas interativos, com o objetivo de tornar a tecnologia mais usável, acessível e significativa para as pessoas. Critérios clássicos de qualidade — usabilidade, experiência do usuário, acessibilidade e comunicabilidade — orientam a maior parte das avaliações de interface. A usabilidade relaciona-se à eficácia e eficiência na realização de tarefas; a UX incorpora dimensões subjetivas; a acessibilidade garante inclusão; a comunicabilidade investiga se a intenção do designer se transmite pelos signos da interface. Embora complementares e fundamentais, nenhum desses critérios aborda diretamente se o design favorece a análise, a interpretação e o raciocínio espacial sobre o território. Por outro lado, instrumentos como o STAT — *Spatial Thinking Ability Test* — medem habilidades cognitivas do usuário, não a qualidade do design do sistema. Quando o sistema em questão é cartográfico, é necessário perguntar não só se o usuário consegue completar tarefas, mas se a interface o ajuda a compreender, orientar-se e interpretar dados georreferenciados. É nessa lacuna que o conceito central deste trabalho — a espaciabilidade — se insere.

---

## Slide 3 — O Conceito de Espaciabilidade ⏱ ~45 s

**Texto (20 min)**

A espaciabilidade é proposta como critério de qualidade em IHC: o grau em que uma interface facilita a compreensão, a orientação e a interpretação das informações espaciais, apoiando o pensamento espacial do usuário. Ela complementa — e não substitui — os critérios clássicos. Formulada por Neto e Mota a partir do STAT, orienta o desenvolvimento e a avaliação do Mapa Cidadão.

**Texto expandido**

A espaciabilidade é proposta como um novo critério de qualidade em IHC. Ela designa o grau em que uma interface facilita a compreensão, a orientação e a interpretação das informações espaciais por parte do usuário, apoiando o pensamento espacial e a tomada de decisão informada a partir de dados georreferenciados. Diferente da usabilidade, da UX, da acessibilidade e da comunicabilidade — úteis, mas sem diretrizes explícitas para clareza espacial —, a espaciabilidade foca em como decisões de design, interação e representação cartográfica influenciam a interpretação do território. O conceito foi formulado por Neto e Mota como resposta à lacuna entre critérios de IHC e instrumentos como o STAT, que avaliam habilidades do usuário, não qualidade do sistema. A espaciabilidade complementa os critérios clássicos e se alinha aos Grandes Desafios da IHC-BR — especialmente GC1 e GC5, sobre novas abordagens teóricas e literacia de dados espaciais. Neste trabalho, ela orienta tanto o desenvolvimento do Mapa Cidadão quanto a aplicação do MIE.

---

## Slide 4 — Dimensões da Espaciabilidade (D1 a D3) ⏱ ~40 s

**Texto (20 min)**

Derivadas do STAT, o MIE organiza a análise em seis dimensões. As três primeiras: D1, compreensão de orientação e direção — interpretar posicionamento e rotas no território; D2, detecção de padrões espaciais — identificar concentrações e dispersões; D3, decisão sobre localização ideal — escolher locais com base em múltiplos critérios espaciais. No Mapa Cidadão, D1 e D2 foram priorizadas por estarem ligadas à compreensão de ocorrências urbanas.

**Texto expandido**

Para operacionalizar a espaciabilidade, Neto e Mota traduzem habilidades do STAT em seis dimensões analíticas de inspeção de interface. As três primeiras são: D1, compreensão de orientação e direção — interpretar direção, posicionamento e rotas no mapa; D2, detecção de padrões espaciais — identificar agrupamentos, dispersões e concentrações geográficas, como áreas com maior número de ocorrências; e D3, decisão sobre localização ideal — escolher locais com base em múltiplos critérios espaciais, útil para gestores que precisam priorizar intervenções. O avaliador prioriza dimensões conforme o contexto da aplicação — nem todo mapa exige todas as seis. No Mapa Cidadão, D1 e D2 foram priorizadas na avaliação, por estarem diretamente ligadas ao objetivo de compreender ocorrências urbanas distribuídas no espaço. A D3 permaneceu como referência para evoluções futuras do sistema.

---

## Slide 5 — Dimensões da Espaciabilidade (D4 a D6) ⏱ ~40 s

**Texto (20 min)**

Completando o quadro: D4, identificação de associações espaciais — detectar correlações entre fenômenos no território, como alagamentos e falta de pavimentação; D5, compreensão de sobreposição de camadas — raciocinar com múltiplas camadas geográficas, relevante para evoluções futuras; D6, interpretação de tipos espaciais — diferenciar pontos, linhas, polígonos e seus significados; no Mapa Cidadão, isso se traduz na legibilidade de ícones e marcadores por categoria. D4 e D6 também foram selecionadas, por refletirem decisões concretas de design do sistema.

**Texto expandido**

As demais dimensões completam o quadro analítico do MIE. A D4 trata da identificação de associações espaciais — detectar correlações ou relações entre fenômenos no mapa, como alagamentos e falta de pavimentação no mesmo bairro. A D5 refere-se à compreensão de sobreposição de camadas — raciocinar com múltiplas camadas e cruzamentos úteis, relevante quando o sistema incorporar, por exemplo, dados de escolas, postos de saúde ou infraestrutura de drenagem. A D6 aborda a interpretação de tipos espaciais — diferenciar pontos, linhas, polígonos e seus significados cartográficos; no contexto do Mapa Cidadão, essa dimensão se manifesta na clareza de ícones, cores e marcadores que distinguem categorias de ocorrência — alagamento, iluminação, lixo, pavimentação. No estudo, D4 e D6 também foram selecionadas para a avaliação, por refletirem decisões concretas de design: legenda e simbologia são elementos centrais da interface avaliada. D3 e D5 permaneceram como referência para evoluções futuras.

---

## Slide 6 — Método de Inspeção da Espaciabilidade (MIE) ⏱ ~45 s

**Texto (20 min)**

Para avaliar a espaciabilidade, adotamos o MIE — Método de Inspeção da Espaciabilidade. Inspirado em métodos clássicos de inspeção — como Avaliação Heurística e Percurso Cognitivo — e ancorado nas habilidades do STAT, o MIE é conduzido por especialistas que simulam tarefas no sistema e identificam obstáculos ao pensamento espacial. Neto e Mota demonstraram sua viabilidade no Google Maps; este trabalho estende a aplicação ao Mapa Cidadão, com três avaliadores.

**Texto expandido**

Para avaliar a espaciabilidade de forma sistemática, adotamos o Método de Inspeção da Espaciabilidade — o MIE. Trata-se de um método por inspeção, inspirado em Avaliação Heurística, Percurso Cognitivo e MIS, e ancorado nas habilidades medidas pelo STAT — traduzidas nas dimensões D1 a D6. Especialistas em IHC ou design simulam o papel de usuários finais ao executar tarefas no sistema, verificando se o design apoia o pensamento espacial, se comunica claramente elementos e relações espaciais, e registrando obstáculos ao raciocínio geográfico. Entre suas vantagens práticas estão a agilidade — pois não exige recrutamento de usuários leigos — e o baixo custo — adequado a fases iniciais de projeto. Neto e Mota validaram a viabilidade do método em estudo de caso com o Google Maps; este trabalho estende essa validação ao Mapa Cidadão, com três especialistas, entrevistas semiestruturadas e análise temática dos achados.

---

## Slide 7 — Aplicação Prática do MIE ⏱ ~35 s

**Texto (20 min)**

O MIE possui três etapas: definir objetivos e selecionar dimensões prioritárias; elaborar persona e tarefas concretas; e conduzir a inspeção, registrando achados em fichas com problemas, severidade e recomendações. No Mapa Cidadão, aplicamos as três etapas — com D1, D2, D4 e D6 — e complementamos com entrevistas e análise temática dos relatórios.

**Texto expandido**

O MIE é estruturado em três etapas, conforme Neto e Mota (IHC 2025). **Etapa 1 — Definição de objetivos:** descrever o contexto da aplicação, análises possíveis e decisões suportadas; selecionar dimensões prioritárias entre D1 e D6. **Etapa 2 — Formulação de tarefas:** criar uma persona representativa e, para cada dimensão selecionada, propor tarefas concretas no sistema. **Etapa 3 — Inspeção da espaciabilidade:** percorrer a interface simulando as tarefas, registrar dificuldades relacionadas às dimensões, organizar achados em fichas de inspeção — problema, severidade, possíveis soluções — e sintetizar recomendações. No Mapa Cidadão, na Etapa 1 priorizamos D1, D2, D4 e D6; na Etapa 2, definimos João e Ana com quatro tarefas; na Etapa 3, três especialistas produziram relatórios de inspeção. Este TCC complementa o MIE com entrevistas semiestruturadas e análise temática dos dados — extensões além do estudo de caso original do artigo.

---

## Slide 8 — Crowdsourcing e Georreferenciamento ⏱ ~40 s

**Texto (20 min)**

O crowdsourcing distribui atividades para um grande número de indivíduos via plataformas digitais. Associado ao georreferenciamento no contexto urbano, possibilita coleta colaborativa sobre infraestrutura e serviços públicos — prática conhecida como VGI, na qual o cidadão produz dados espaciais voluntariamente. O impacto inclui escalabilidade territorial, atualização frequente e fortalecimento da governança urbana.

**Texto expandido**

Antes de apresentar o sistema, contextualizo o cenário tecnológico em que ele se insere. O crowdsourcing caracteriza-se como abordagem na qual atividades tradicionalmente atribuídas a especialistas passam a ser realizadas de forma distribuída por um grande número de indivíduos, mediados por plataformas digitais. No contexto urbano, associado ao georreferenciamento, essa prática possibilita a coleta colaborativa de informações sobre infraestrutura, mobilidade e serviços públicos — ampliando cobertura espacial e frequência de atualização. Essa produção é conhecida como VGI, *Volunteered Geographic Information*, na qual o cidadão é produtor voluntário de dados espaciais. Iniciativas como OpenStreetMap e Ushahidi exemplificam o potencial dessas plataformas para engajamento cidadão e visualização de eventos no território. O impacto inclui escalabilidade territorial, atualização frequente dos dados, transparência pública e fortalecimento da governança urbana e das tecnologias cívicas.

---

## Slide 9 — O Problema: Lacuna no Raciocínio Espacial ⏱ ~45 s

**Texto (20 min)**

Apesar desse potencial, a maior parte das aplicações ainda se limita ao registro pontual de ocorrências, usando o mapa apenas como localizador. Isso cria uma lacuna entre a coleta colaborativa e o apoio ao pensamento espacial — lacuna que critérios clássicos de IHC e instrumentos como o STAT não cobrem diretamente. Disponibilizar pontos no mapa não garante compreensão territorial: identificar padrões, áreas críticas e associações entre problemas exige decisões conscientes de design. Este é o problema que motiva o Mapa Cidadão.

**Texto expandido**

Apesar do potencial do crowdsourcing urbano, a maior parte das aplicações ainda se concentra no registro e na visualização pontual de ocorrências, utilizando o mapa principalmente como recurso de localização. Esse enfoque limita a interpretação dos dados espaciais, dificultando a identificação de padrões, áreas críticas e associações entre diferentes problemas urbanos. O problema abordado neste trabalho refere-se à lacuna entre a coleta colaborativa de dados georreferenciados e o apoio efetivo ao pensamento espacial dos usuários. Critérios clássicos de IHC — usabilidade, UX, acessibilidade, comunicabilidade — são complementares, mas nenhum avalia diretamente se o design favorece análise e interpretação de relações geográficas; o STAT, por sua vez, mede habilidades do usuário, não qualidade do sistema. Estudos em geovisualização e cognição espacial indicam que a simples disponibilização de dados em mapas não garante compreensão territorial. É necessário considerar como decisões de design, interação e representação cartográfica apoiam — ou limitam — essa interpretação. Este é o problema que motiva o desenvolvimento do Mapa Cidadão, concebido para ir além do "pin no mapa".

---

## Slide 10 — Solução Proposta: Mapa Cidadão ⏱ ~45 s

**Texto (20 min)**

A solução é o Mapa Cidadão, com espaciabilidade como diretriz central. Integra crowdsourcing, georreferenciamento e IHC. Os objetivos: favorecer orientação e interpretação territorial; tratar o mapa como artefato cognitivo, não apenas repositório de registros; e aplicar o MIE para verificar empiricamente se o design apoia o raciocínio espacial. O sistema foi desenvolvido e avaliado em estudo exploratório e qualitativo.

**Texto expandido**

A solução proposta é o Mapa Cidadão, concebido com a espaciabilidade como diretriz central de projeto. O trabalho integra três eixos: crowdsourcing para coleta colaborativa de ocorrências urbanas, georreferenciamento para ancoragem territorial dos dados e IHC para garantir qualidade na interação. Os objetivos são claros: construir um ambiente que favoreça orientação e interpretação territorial; tratar o mapa como artefato cognitivo capaz de gerar insights, e não apenas como repositório de registros pontuais; e aplicar o MIE para verificar, de forma empírica, se o design realmente apoia o raciocínio espacial. Diferenciando-se de plataformas que tratam o mapa só como suporte visual ao registro, o Mapa Cidadão busca apoiar operações de orientação, identificação de padrões e associações espaciais. O sistema foi desenvolvido e avaliado como parte de um estudo exploratório e qualitativo, configurando-se como pesquisa em andamento.

---

## Slide 11 — Mapa Cidadão: O Sistema ⏱ ~45 s

**Texto (20 min)**

O Mapa Cidadão é um sistema colaborativo de registro e visualização de ocorrências urbanas. A interface gira em torno de um mapa interativo com zoom e deslocamento. Marcadores diferenciados por ícones e cores representam categorias — alagamento, iluminação, lixo, pavimentação — apoiados por legenda integrada, ligada à D6. Ao clicar, o usuário vê tipo, endereço e estado do registro.

**Texto expandido**

O Mapa Cidadão é um sistema colaborativo de registro e visualização de ocorrências urbanas, baseado em crowdsourcing e georreferenciamento, com espaciabilidade como diretriz de projeto. Desde a concepção, buscou-se estruturar a interface não apenas como repositório de registros, mas como ambiente capaz de favorecer orientação espacial, identificação de padrões e interpretação de relações territoriais. A interface é organizada em torno de um mapa interativo central, com navegação por zoom e deslocamento. As ocorrências são representadas por marcadores geográficos diferenciados por ícones e cores, associados a categorias como alagamento, iluminação pública, lixo e pavimentação. Uma legenda integrada auxilia na interpretação dos símbolos — elemento diretamente relacionado à dimensão D6. Ao clicar em um marcador, o usuário acessa informações detalhadas: tipo do problema, endereço aproximado e estado do registro, articulando localização geográfica e conteúdo informacional.

---

## Slide 12 — Mapa Cidadão: Crowdsourcing na Prática ⏱ ~35 s

**Texto (20 min)**

O usuário autenticado registra ocorrências, valida registros com "likes" e encerra ocorrências resolvidas. O perfil reúne o histórico de contribuições. Socialmente, o sistema busca construir conhecimento urbano coletivo e fortalecer tecnologias cívicas — sempre com foco na interpretação espacial, indo além da simples localização de pontos.

**Texto expandido**

Além da visualização, o sistema incorpora funcionalidades colaborativas que dão vida ao crowdsourcing. O usuário autenticado pode registrar novas ocorrências, interagir com registros existentes por meio de um mecanismo de validação social — os "likes" — e encerrar ocorrências já resolvidas. O acesso às funcionalidades de registro depende de login; há um menu de perfil que reúne informações do usuário e o histórico de "Minhas ocorrências", permitindo acompanhar contribuições individuais. Do ponto de vista social e cívico, o Mapa Cidadão busca a construção coletiva do conhecimento urbano, fortalecendo tecnologias cívicas, transparência e engajamento cidadão. O diferencial está no foco na interpretação espacial: o sistema foi pensado para ir além da simples localização de pontos, tratando o mapa como meio de compreensão territorial.

---

## Slide 13 — Interface do Mapa Cidadão: Detalhamento ⏱ ~30 s

**Texto (20 min)**

Este slide detalha os sete elementos da interface: mapa central, navegação, marcadores categorizados, legenda — D6 —, detalhes ao clicar, funcionalidades colaborativas com autenticação, e menu de perfil. A versão avaliada não tinha filtros, agregação ou visualização analítica — limitação que influenciou diretamente as percepções dos especialistas.

**Texto expandido**

Neste slide detalho os sete elementos principais da interface, numerados na figura do artigo. O mapa interativo ocupa a região central; ferramentas de zoom e deslocamento permitem a navegação. Os marcadores usam ícones e cores por categoria — alagamento, lixo, iluminação, pavimentação. A legenda integrada apoia a interpretação de tipos espaciais, conforme a D6. Ao clicar no marcador, abrem-se informações da ocorrência: tipo, endereço e estado. As funcionalidades colaborativas — registro, validação por "like" e encerramento — exigem autenticação. Por fim, o menu de perfil reúne dados do usuário e o histórico de "Minhas ocorrências". Vale notar que a versão avaliada não incorporava mecanismos avançados de filtragem, agregação ou visualização analítica, operando principalmente com a visualização simultânea de marcadores distribuídos no território. Essa configuração foi relevante para a análise posterior, pois influenciou diretamente as percepções dos especialistas quanto ao suporte ao raciocínio espacial nas dimensões D2 e D4.

---

## Slide 14 — Metodologia: Personas e Tarefas ⏱ ~45 s

**Texto (20 min)**

A avaliação usou duas personas e quatro tarefas. João, 40 anos, morador periférico, registra ocorrências e acompanha recorrências. Ana, 27 anos, estudante, consulta ocorrências na região. As tarefas: D1 — João localiza iluminação no bairro; D2 — Ana identifica áreas com alagamentos; D4 — João relaciona pavimentação e alagamentos; D6 — Ana distingue marcadores no mapa.

**Texto expandido**

A avaliação foi planejada com duas personas e quatro tarefas, alinhadas às dimensões selecionadas do MIE. João, 40 anos, morador de bairro periférico, utiliza o Mapa Cidadão para registrar ocorrências próximas à residência — iluminação pública defeituosa, buracos na via — e quer acompanhar se os problemas reportados são recorrentes e se há providências por parte do poder público. Ana, 27 anos, estudante universitária, consulta ocorrências na região onde mora e, eventualmente, cria novos registros, como acúmulo de lixo ou alagamentos; seu objetivo é compreender como esses problemas afetam mobilidade e qualidade de vida. As tarefas foram: D1 — João localiza todas as ocorrências de iluminação no bairro; D2 — Ana identifica áreas da cidade com maior número de alagamentos; D4 — João percebe se problemas de falta de pavimentação estão relacionados a alagamentos no bairro; e D6 — Ana compreende claramente o que representa cada marcador no mapa.

---

## Slide 15 — Coleta de Dados: Participantes ⏱ ~35 s

**Texto (20 min)**

Três especialistas em IHC — P1, P2 e P3 — de laboratório universitário, com três a seis anos de experiência. Nenhum conhecia espaciabilidade, MIE ou o Mapa Cidadão previamente. A amostra de três participantes fundamenta-se no caráter qualitativo e exploratório, buscando análise aprofundada e consistência entre avaliadores.

**Texto expandido**

Foram convidados três especialistas em IHC, identificados como P1, P2 e P3, vinculados a um laboratório de pesquisa em IHC de universidade pública. P1 é do sexo feminino, mestranda com três anos de experiência em IHC. P2 é doutorando com seis anos de experiência e vivência adicional em design de sistemas de crowdsourcing georreferenciado e pesquisas em aplicações cartográficas com ênfase em acessibilidade. P3 é doutorando com quatro anos de experiência. Nenhum possuía familiaridade prévia com o conceito de espaciabilidade, o MIE ou o Mapa Cidadão, o que favoreceu avaliação mais isenta. Todos foram orientados a realizar a avaliação de forma independente, sem comunicação entre si. A escolha por três participantes fundamenta-se no caráter qualitativo e exploratório do estudo, buscando análise aprofundada e verificação de consistência entre avaliadores — não generalização estatística.

---

## Slide 16 — Coleta de Dados: Ambiente e Cenários ⏱ ~30 s

**Texto (20 min)**

A avaliação foi remota e independente: cada especialista recebeu o protocolo, executou as tarefas simulando João e Ana, e produziu relatório individual. Os cenários aproximaram situações reais de uso, permitindo observar como o design apoia ou limita cada dimensão de espaciabilidade.

**Texto expandido**

A avaliação foi conduzida de forma remota. Cada especialista recebeu o protocolo com personas, tarefas e dimensões de espaciabilidade, executou as atividades de forma independente — incorporando os perfis de João e Ana nas decisões ao longo das tarefas — e produziu um relatório de inspeção individual. Os cenários simulavam situações próximas ao uso real: João buscando padrões de iluminação no bairro, Ana tentando identificar concentrações de alagamentos, João investigando relações entre pavimentação e alagamentos, e Ana distinguindo categorias pelos marcadores. Essa estrutura permitiu observar como o design do Mapa Cidadão apoia — ou limita — cada dimensão de espaciabilidade, registrando barreiras ao raciocínio espacial, pontos positivos e recomendações objetivas de melhoria.

---

## Slide 17 — Coleta de Dados: Procedimentos ⏱ ~35 s

**Texto (20 min)**

Após os relatórios, conduzi entrevistas semiestruturadas individuais sobre três eixos: perfil e experiência com mapas; avaliação da aplicação e sugestões de melhoria; e avaliação do MIE. Essa etapa complementou os relatórios e aprofundou a análise do sistema e do instrumento metodológico.

**Texto expandido**

Após a entrega dos relatórios individuais, conduzi entrevistas semiestruturadas com cada participante, realizadas de forma remota e individual, gravadas mediante consentimento prévio. O roteiro abordou três eixos principais. O primeiro contextualizou o perfil dos participantes e sua experiência prévia com mapas interativos e geoinformação. O segundo concentrou-se na avaliação da aplicação: primeira impressão, percepção do mapa como visualizador ou ferramenta analítica, elementos de design que potencializavam ou limitavam a espaciabilidade, e sugestões de melhoria. O terceiro voltou-se à avaliação do próprio MIE: adequação das tarefas, relação com situações reais e possíveis aprimoramentos do método. Essa etapa complementou os relatórios escritos e permitiu aprofundar tanto a análise do sistema quanto a reflexão sobre a validade e aplicabilidade do instrumento metodológico.

---

## Slide 18 — Coleta de Dados: Instrumentos e Análise ⏱ ~35 s

**Texto (20 min)**

Relatórios e entrevistas foram analisados por análise temática dedutiva, com categorias predefinidas: espaciabilidade, usabilidade, UX e avaliação do MIE. Trechos foram codificados e comparados entre avaliadores, verificando convergências, divergências e adequação do método.

**Texto expandido**

Os dados dos relatórios e das entrevistas semiestruturadas foram examinados por análise temática, técnica empregada na investigação qualitativa para identificar, organizar e interpretar padrões de significado em conjuntos de dados textuais. Adotou-se abordagem dedutiva: as categorias analíticas foram previamente definidas com base nos objetivos da pesquisa — espaciabilidade, usabilidade, experiência do usuário e avaliação do MIE. Trechos relevantes dos relatórios e excertos das falas dos participantes foram codificados e alocados nas respectivas categorias. Essa estratégia possibilitou analisar percepções sob diferentes perspectivas de qualidade em IHC, comparar resultados entre avaliadores, verificar convergências e divergências e refletir sobre a adequação, consistência e possíveis aprimoramentos do MIE enquanto instrumento de avaliação.

---

## Slide 19 — Resultados e Discussão: Visão Geral ⏱ ~50 s

**Texto (20 min)**

Passo aos resultados. A análise identificou 23 evidências: 11 de espaciabilidade, 7 de usabilidade, 3 de UX e 2 sobre o MIE. Espaciabilidade liderou os achados, confirmando o potencial do Mapa Cidadão como artefato cognitivo espacial. Como no estudo de caso do Google Maps no artigo de referência, usabilidade e UX também emergiram — reforçando que alta usabilidade não implica espaciabilidade alta quando a tarefa exige cruzar múltiplos tipos de dados no mapa.

**Texto expandido**

Passo agora aos resultados e discussão. A análise temática identificou 23 evidências qualitativas, distribuídas entre as quatro categorias analíticas, conforme o gráfico deste slide: 11 de espaciabilidade, 7 de usabilidade, 3 de experiência do usuário e 2 sobre o MIE. Como esperado, a espaciabilidade concentrou o maior número de registros, uma vez que constituiu o foco da avaliação — confirmando o potencial do Mapa Cidadão como artefato cognitivo espacial. Porém, também emergiram evidências relevantes de usabilidade e UX, evidenciando uma proposta holística de qualidade em IHC — alinhada ao artigo de Neto e Mota, que mostra que usabilidade alta não implica espaciabilidade alta quando a tarefa exige comparar ou cruzar diferentes tipos de dados espaciais no mapa. Em síntese, o sistema cumpre bem seu papel de visualizador colaborativo de ocorrências georreferenciadas, com base promissora para análise espacial mais avançada — desde que incorporadas as melhorias apontadas pelos especialistas.

---

## Slide 20 — Resultados: Espaciabilidade (D1–D6) ⏱ ~50 s

**Texto (20 min)**

Em D1, o sistema apoia orientação básica, mas falta integração com a localização do usuário. As maiores limitações estão em D2 e D4: ausência de filtros e agregação para concentrações por tipo ou região — problema semelhante ao do Google Maps ao comparar múltiplos tipos de dados espaciais. P1 sugeriu filtros por bairro, dados quantitativos e informação de recorrência. Em D6, ícones pouco familiares e cores semelhantes comprometeram a legibilidade. O sistema funciona como visualizador, mas com suporte limitado à análise espacial aprofundada.

**Texto expandido**

Na espaciabilidade, os resultados indicam que o sistema apoia operações básicas de orientação espacial — D1 — permitindo identificar a localização das ocorrências no território. Contudo, P2 apontou a ausência de integração explícita com a localização do próprio usuário, o que poderia ampliar a percepção de proximidade e relevância contextual. As limitações mais significativas concentraram-se em D2 e D4: os especialistas relataram inexistência de filtros ou mecanismos de agregação que permitissem visualizar concentrações por tipo de ocorrência ou por recorte territorial — fragilidade análoga à identificada por Neto e Mota no Google Maps, em que cruzar diferentes tipos de dados espaciais no mapa permanece difícil mesmo com boa usabilidade geral. P1 afirmou que não encontrou "formas de visualização no mapa, como um filtro ou agrupamento de locais cadastrados", sugerindo filtro por bairro, exibição quantitativa e informação sobre recorrência. Em D6, fragilidades na simbologia — ícones pouco familiares e cores semelhantes entre tipos — comprometeram a legibilidade e geraram ambiguidades interpretativas. De modo geral, o sistema funciona como visualizador de ocorrências, mas oferece suporte limitado à análise espacial aprofundada.

---

## Slide 21 — Resultados: Usabilidade ⏱ ~40 s

**Texto (20 min)**

Dois participantes tiveram dificuldade em perceber a necessidade de login para registrar ocorrências. Também foram apontados problemas na localização de "Minhas ocorrências" e na clareza das ações "like" e "encerrar". Esses problemas interferem na fluidez e podem impactar indiretamente o raciocínio espacial. Melhorias na simbologia — D6 — beneficiariam usabilidade e espaciabilidade simultaneamente.

**Texto expandido**

As evidências de usabilidade concentraram-se na clareza do fluxo de interação e na organização das funcionalidades. Dois participantes relataram dificuldade em perceber a necessidade de login para registrar ocorrências — a exigência de autenticação não estava claramente integrada à jornada de uso. Também foram apontadas limitações na localização do histórico de registros pessoais — "Minhas ocorrências" — e na clareza dos elementos interativos associados aos marcadores, especialmente quanto ao significado das ações "like" e "encerrar". Esses aspectos sugerem oportunidades de melhoria na comunicação visual e na arquitetura da informação. Embora não estejam diretamente ligados à espaciabilidade, interferem na fluidez da interação e podem impactar indiretamente o raciocínio espacial. Ressalto que aspectos da espaciabilidade impactam diretamente a percepção de usabilidade — melhorias na simbologia, como sugerido para D6, beneficiariam ambos os critérios simultaneamente.

---

## Slide 22 — Resultados: Experiência do Usuário ⏱ ~40 s

**Texto (20 min)**

Os participantes reconheceram o potencial social da aplicação, distinta de apps de navegação. P1 observou que dados urbanos sociais exigem mais familiaridade do usuário que trânsito em tempo real. Sugeriu-se aproximar o visual de apps conhecidos e incluir tutoriais. Destacaram-se positivamente o anonimato e o mecanismo de "likes" para confiabilidade coletiva.

**Texto expandido**

No âmbito da experiência do usuário, os participantes reconheceram o potencial social e participativo da aplicação, destacando sua proposta distinta em relação a aplicativos tradicionais de navegação como Google Maps ou Waze. P1 observou que a interpretação de dados urbanos de natureza social exige maior familiaridade do usuário, diferentemente de informações consolidadas como trânsito em tempo real: "(...) ainda falta um pouco de vivência do usuário para que ele consiga entender e interpretar os dados mostrados no mapa". Sugeriu-se aproximar elementos visuais de aplicativos já conhecidos e incluir tutoriais breves para introduzir a potencialidade do sistema. Aspectos avaliados positivamente incluíram o anonimato, percebido como incentivo à participação, e o mecanismo de validação por "likes", considerado relevante para fortalecer a confiabilidade coletiva das ocorrências e o senso de participação cidadã.

---

## Slide 23 — Resultados: Avaliação do MIE ⏱ ~45 s

**Texto (20 min)**

O MIE foi considerado aplicável, com sugestões de aprimoramento: tarefas mais claras e analíticas, e relatórios em formato misto — narrativa das personas com categorização por dimensão, alinhado às fichas de inspeção propostas no artigo. Emergiram evidências de usabilidade e UX além do foco espacial, o que não invalida o método, mas sugere rótulos para diferenciar problemas de espaciabilidade dos demais critérios.

**Texto expandido**

Os especialistas consideraram o MIE aplicável, mas sugeriram ajustes na formulação das tarefas e cenários. P1 indicou que as descrições poderiam ser mais claras; P3 defendeu um número maior de tarefas analíticas, que permitissem explorar diferentes aspectos do sistema. Observou-se diferença nos formatos de relatório: P1 adotou abordagem narrativa, seguindo o passo a passo das personas; P2 e P3 organizaram por dimensões de espaciabilidade. A abordagem narrativa gerou maior riqueza de dados; a organização por dimensões facilitou a categorização. Recomenda-se um formato misto — narração das ações da persona com categorização de problemas nas dimensões — alinhado às fichas de inspeção propostas por Neto e Mota (problema, severidade, possíveis soluções). Também emergiram evidências de usabilidade e UX além do foco espacial — o que não invalida o método, mas sugere criar rótulos para que especialistas diferenciem problemas de espaciabilidade dos demais critérios.

---

## Slide 24 — Considerações Finais: Síntese ⏱ ~45 s

**Texto (20 min)**

Em síntese, investigamos a espaciabilidade como orientação para mapeamento urbano colaborativo, concebendo o Mapa Cidadão como artefato cognitivo. O sistema apoia orientação — D1 — e identificação inicial de padrões. Direções futuras: filtros, agregação e visualização analítica — D2 e D4 —; simbologia aprimorada — D6 —; e avaliação ampliada com mais participantes e usuários leigos. Dados georreferenciados sozinhos não promovem compreensão territorial.

**Texto expandido**

Em síntese, este trabalho investigou a espaciabilidade como orientação para o desenvolvimento e a avaliação de sistemas colaborativos de mapeamento urbano. O Mapa Cidadão foi concebido como artefato cognitivo voltado à interpretação espacial das ocorrências, buscando ir além do simples registro georreferenciado. Os achados positivos incluem o apoio à orientação e localização — D1 — e a identificação inicial de padrões via distribuição de marcadores no território. As direções futuras são claras: incluir filtros, agregação e visualização analítica para fortalecer D2 e D4; aprimorar a simbologia para legibilidade em D6; e ampliar a avaliação com mais participantes, usuários leigos e, eventualmente, gestores públicos. O estudo evidencia que a simples disponibilização de dados georreferenciados não é suficiente para promover compreensão territorial — é preciso avançar nas ferramentas analíticas em plataformas de mapeamento colaborativo urbano.

---

## Slide 25 — Considerações Finais: Limitações ⏱ ~40 s

**Texto (20 min)**

Reconheço quatro limitações: amostra de três especialistas, restringindo generalização; avaliadores do mesmo laboratório; sistema em estágio inicial, sem filtros ou agregação; e perspectiva exclusiva de especialistas, sem usuários finais ou gestores. Essas limitações delimitam o escopo e orientam investigações futuras, sem invalidar os achados.

**Texto expandido**

Reconheço as limitações desta pesquisa. A amostra foi reduzida — três especialistas —, o que restringe a generalização dos resultados em um estudo exploratório e qualitativo. Os avaliadores pertenciam ao mesmo laboratório de IHC, o que pode influenciar convergências e limitar a diversidade de perspectivas. O Mapa Cidadão encontra-se em estágio inicial de desenvolvimento, sem funcionalidades analíticas avançadas: filtros e agregação ainda não foram implementados na versão avaliada. Por fim, a avaliação concentrou-se exclusivamente na perspectiva de especialistas, não contemplando usuários finais nem gestores públicos — perfis centrais para o uso real de tecnologias cívicas. Essas limitações não invalidam os achados, mas delimitam seu escopo e orientam investigações futuras com amostras maiores, funcionalidades analíticas e múltiplos perfis de usuário.

---

## Slide 26 — Considerações Finais: Contribuições ⏱ ~45 s

**Texto (20 min)**

As contribuições são: consolidação da espaciabilidade como critério aplicável; aplicação empírica do MIE com recomendações de aprimoramento; desenvolvimento do Mapa Cidadão voltado à interpretação espacial; e evidências sobre a interdependência entre espaciabilidade, usabilidade e UX — ponte entre critérios de IHC, pensamento espacial (STAT) e design de mapas digitais. Agradeço à orientadora Marcelle, ao coorientador André, aos membros da banca e a todos que contribuíram. Estou à disposição para perguntas.

**Texto expandido**

As principais contribuições deste trabalho são quatro. Primeiro, a consolidação da espaciabilidade como critério aplicável ao design de sistemas colaborativos urbanos — demonstrando que o conceito pode orientar decisões de projeto desde a concepção e complementa, sem substituir, usabilidade, UX, acessibilidade e comunicabilidade. Segundo, a aplicação empírica do MIE, estendendo o estudo de caso original do Google Maps: três avaliadores, recomendações de aprimoramento — tarefas analíticas mais robustas, relatórios em formato misto e rótulos de categorização. Terceiro, o desenvolvimento do Mapa Cidadão, sistema concebido explicitamente para apoiar a interpretação espacial das ocorrências, e não apenas seu registro pontual. Quarto, evidências qualitativas sobre a interdependência entre espaciabilidade, usabilidade e experiência do usuário em tecnologias cívicas — reforçando a ponte teórica entre critérios de IHC, pensamento espacial medido pelo STAT e design de mapas digitais proposta por Neto e Mota. Agradeço à orientadora Marcelle Pereira Mota, ao coorientador André Avelino da Silva Neto, aos membros da banca e a todos que contribuíram para este trabalho. Estou à disposição para perguntas.

---

## Distribuição do tempo (20 min)

| Bloco | Slides | Tempo |
|-------|--------|-------|
| Abertura | 1 | ~30 s |
| Fundamentação (IHC, espaciabilidade, MIE) | 2–7 | ~4 min |
| Contexto e problema | 8–10 | ~2 min |
| Sistema Mapa Cidadão | 11–13 | ~2 min |
| Metodologia | 14–18 | ~3 min |
| Resultados | 19–23 | ~4 min |
| Considerações finais | 24–26 | ~2 min |
| **Reserva** | — | **~2 min** |

A reserva absorve transições, pausas naturais e slides que você enfatizar um pouco mais — especialmente o 19, com o gráfico.

## Como usar as duas versões

- **Texto (20 min):** use na apresentação oral — versão calibrada para caber em 20 minutos.
- **Texto expandido:** use para ensaio prévio, aprofundamento de argumentos e resposta a perguntas da banca; contém mais detalhes, citações de participantes e conexões com o artigo.

## Dicas rápidas

- **Slide 6–7:** o MIE tem **três etapas** (objetivos → tarefas → inspeção), não cinco; entrevistas e análise temática são extensões deste TCC.
- **Slide 19:** explique em uma frase cada categoria antes de comentar os números; cite que usabilidade alta não implica espaciabilidade alta.
- **Slides 11–13:** não repita o mesmo conteúdo; o slide 13 complementa, não reexplica.
- **Metodologia (14–18):** bloco mais denso — mantenha ritmo firme para não estourar o tempo.
- **Perguntas sobre n = 3:** estudo exploratório que estende o artigo original (1 avaliador no Google Maps); ampliação com usuários leigos é trabalho futuro previsto pelos autores.
