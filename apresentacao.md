# Roteiro de Apresentação — Defesa de TCC

**Trabalho:** Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade  
**Autor:** Mateus Vinicius Santiago Melo  
**Orientadora:** Marcelle Pereira Mota | **Coorientador:** André Avelino da Silva Neto  
**Instituição:** UFPA — Faculdade de Computação — Bacharelado em Sistemas de Informação

**Duração total:** 20 minutos | **27 slides** | **~44 s por slide** (média)

> Cada seção corresponde a um slide (`slides/pagina1.html` a `pagina27.html`). Cada slide traz duas versões: **Texto (20 min)** — versão calibrada para a apresentação oral — e **Texto expandido** — versão mais detalhada para estudo, ensaio e aprofundamento na defesa.

---

## Slide 1 — Capa ⏱ ~30 s

**Texto (20 min)**

Boa tarde, membros da banca, orientadora e coorientador. Sou Mateus Vinicius Santiago Melo, aluno de Sistemas de Informação da UFPA. Apresento o trabalho *Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade*, em coautoria com André Avelino da Silva Neto e Marcelle Pereira Mota. Trata-se de uma pesquisa em andamento que integra desenvolvimento de sistema, fundamentação em IHC e avaliação empírica com especialistas.

**Texto expandido**

Boa tarde, membros da banca, professora Marcelle, professor André e a todos presentes. Meu nome é Mateus Vinicius Santiago Melo, aluno do curso de Sistemas de Informação da Universidade Federal do Pará. Apresento hoje o trabalho intitulado *Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade*, desenvolvido em coautoria com André Avelino da Silva Neto e Marcelle Pereira Mota, sob orientação da professora Marcelle e coorientação do professor André. O trabalho situa-se na interface entre Interação Humano-Computador, tecnologias cívicas e mapeamento urbano colaborativo. A fundamentação teórica e metodológica baseia-se no artigo *Caminhos para a Espaciabilidade* (IHC 2025), que propõe o critério de espaciabilidade e o MIE — Método de Inspeção da Espaciabilidade. Este TCC operacionaliza esses conceitos no Mapa Cidadão e estende a validação empírica do método, originalmente demonstrada no Google Maps, com três especialistas. Ao longo desta apresentação, percorro a motivação e os objetivos, a fundamentação teórica, o sistema desenvolvido, a metodologia de avaliação, os resultados obtidos e as contribuições e limitações do estudo.

---

## Slide 2 — Introdução ⏱ ~45 s

**Texto (20 min)**

A motivação deste trabalho parte de três eixos: visibilizar problemas urbanos por meio de registro colaborativo; fortalecer participação e transparência entre cidadãos e gestão pública; e explorar como o mapa pode apoiar a compreensão do território — e não apenas o registro de dados. O problema é que apps de mapeamento colaborativo ainda focam na visualização pontual, limitando a identificação de padrões, áreas críticas e associações entre problemas urbanos. Há, portanto, uma lacuna entre a coleta colaborativa de dados e o apoio efetivo ao raciocínio espacial e à compreensão territorial.

**Texto expandido**

Para situar o trabalho desde o início, apresento a motivação e o problema que orientam a pesquisa. A motivação articula três preocupações centrais. Primeiro, a necessidade de visibilizar problemas urbanos — iluminação, pavimentação, alagamentos, lixo — por meio de registro colaborativo, dando voz aos moradores. Segundo, o desejo de fortalecer a participação cidadã e a transparência na relação entre população e gestão pública, tornando visíveis tanto os problemas quanto as respostas das autoridades. Terceiro, o interesse em explorar como o mapa digital pode funcionar como ferramenta de compreensão territorial, indo além do simples "pin no mapa". O problema identificado é que a maior parte das aplicações de mapeamento colaborativo concentra-se na visualização pontual de ocorrências, usando o mapa apenas como recurso de localização básica. Esse enfoque limita a identificação de padrões espaciais, áreas críticas e associações entre diferentes tipos de problemas urbanos. A lacuna central, portanto, situa-se entre a abundância de dados colaborativos e a ausência de apoio efetivo ao raciocínio espacial e à compreensão territorial — lacuna que este TCC busca endereçar com o conceito de espaciabilidade e o desenvolvimento do Mapa Cidadão.

---

## Slide 3 — Objetivo ⏱ ~40 s

**Texto (20 min)**

Trata-se de uma pesquisa em andamento: desenvolver e avaliar o Mapa Cidadão como aplicação de crowdsourcing urbano orientada pela espaciabilidade. Os objetivos específicos são: demonstrar como a espaciabilidade orienta o sistema desde a concepção; aplicar e avaliar o MIE em estudo preliminar com três especialistas em IHC; e operacionalizar o conceito em sistema real, produzindo evidências iniciais sobre sua aplicação.

**Texto expandido**

O contexto deste TCC é uma pesquisa em andamento que integra desenvolvimento de software e avaliação empírica qualitativa. O objetivo geral é desenvolver e avaliar o Mapa Cidadão como aplicação de crowdsourcing urbano orientada pelo critério de espaciabilidade. Os objetivos específicos, em sequência lógica, são: primeiro, demonstrar como a espaciabilidade orienta o Mapa Cidadão desde a concepção — nas decisões de design, interação e representação cartográfica; segundo, aplicar e avaliar o Método de Inspeção da Espaciabilidade em estudo preliminar com três especialistas em IHC, estendendo a validação original do artigo de Neto e Mota; e terceiro, operacionalizar o conceito em um sistema real e produzir evidências iniciais sobre sua aplicabilidade prática, contribuindo tanto para o campo de IHC quanto para tecnologias cívicas baseadas em mapas.

---

## Slide 4 — Reconhecimento Acadêmico ⏱ ~30 s

**Texto (20 min)**

Antes de avançar na fundamentação, registro que o artigo derivado deste trabalho foi submetido à Trilha de Pesquisa do Simpósio Brasileiro de Sistemas Colaborativos — SBSC 2026 — e premiado com o reconhecimento Best Paper do evento, realizado em Porto Alegre.

**Texto expandido**

É pertinente mencionar o reconhecimento acadêmico obtido com este trabalho. O artigo derivado da pesquisa foi submetido à Trilha de Pesquisa do Simpósio Brasileiro de Sistemas Colaborativos — SBSC 2026 —, evento realizado em Porto Alegre. O trabalho foi premiado com o reconhecimento Best Paper, o que reforça a relevância da proposta no contexto de sistemas colaborativos e crowdsourcing. Esse reconhecimento valida externamente a contribuição teórica e prática do estudo, embora a defesa de TCC avalie o conjunto completo da pesquisa — desenvolvimento do sistema, metodologia e análise dos resultados — e não apenas o artigo publicado.

---

## Slide 5 — Crowdsourcing e Georreferenciamento ⏱ ~40 s

**Texto (20 min)**

O crowdsourcing distribui atividades para um grande número de indivíduos, com plataformas digitais como mediadoras da participação cidadã. No contexto urbano, associado ao georreferenciamento, o usuário torna-se produtor voluntário de dados espaciais — prática conhecida como VGI. O impacto inclui escalabilidade territorial, atualização de dados sobre a infraestrutura da cidade, transparência pública e apoio à governança urbana.

**Texto expandido**

Antes de apresentar o sistema, contextualizo o cenário tecnológico em que ele se insere. O crowdsourcing caracteriza-se como abordagem na qual atividades tradicionalmente atribuídas a especialistas passam a ser realizadas de forma distribuída por um grande número de indivíduos, mediados por plataformas digitais que viabilizam a participação cidadã. No contexto urbano, associado ao georreferenciamento, essa prática possibilita a coleta colaborativa de informações sobre infraestrutura, mobilidade e serviços públicos. Essa produção é conhecida como VGI, *Volunteered Geographic Information*, na qual o usuário é produtor voluntário de dados espaciais. Iniciativas como OpenStreetMap e Ushahidi exemplificam o potencial dessas plataformas. O impacto urbano inclui escalabilidade — cobertura de grandes áreas territoriais —, atualização frequente dos dados sobre a infraestrutura da cidade, transparência pública e fortalecimento da governança urbana e das tecnologias cívicas.

---

## Slide 6 — Interação Humano-Computador (IHC) ⏱ ~40 s

**Texto (20 min)**

A IHC estuda o design, a avaliação e a implementação de sistemas interativos, buscando torná-los usáveis, acessíveis e prazerosos. Critérios clássicos — usabilidade, acessibilidade, experiência do usuário e comunicabilidade — orientam a maior parte das avaliações. Porém, quando o sistema é um mapa interativo, nenhum deles responde de forma explícita se o design apoia o pensamento espacial. É nessa lacuna que se insere o conceito central deste trabalho.

**Texto expandido**

Para situar o trabalho, começo pela área de Interação Humano-Computador. A IHC estuda o design, a avaliação e a implementação de sistemas interativos, com o objetivo de tornar a tecnologia mais usável, acessível e significativa para as pessoas. Critérios clássicos de qualidade — usabilidade, experiência do usuário, acessibilidade e comunicabilidade — orientam a maior parte das avaliações de interface. A usabilidade relaciona-se à eficácia, eficiência e satisfação na realização de tarefas; a acessibilidade garante inclusão de diferentes perfis; a UX incorpora emoções, valores e significados; a comunicabilidade investiga se a intenção do designer se transmite pelos signos da interface. Embora complementares e fundamentais, nenhum desses critérios aborda diretamente se o design favorece a análise, a interpretação e o raciocínio espacial sobre o território. Por outro lado, instrumentos como o STAT — *Spatial Thinking Ability Test* — medem habilidades cognitivas do usuário, não a qualidade do design do sistema. Quando o sistema em questão é cartográfico, é necessário perguntar não só se o usuário consegue completar tarefas, mas se a interface o ajuda a compreender, orientar-se e interpretar dados georreferenciados. É nessa lacuna que o conceito central deste trabalho — a espaciabilidade — se insere.

---

## Slide 7 — O Conceito de Espaciabilidade ⏱ ~45 s

**Texto (20 min)**

A espaciabilidade é proposta como critério de qualidade em IHC para preencher a lacuna dos critérios clássicos. Designa o grau em que o design estimula o pensamento espacial do usuário, com foco na interpretação e análise de dados georreferenciados. Formulada por Neto e Mota em *Caminhos para a Espaciabilidade* (IHC 2025), orienta o desenvolvimento e a avaliação do Mapa Cidadão.

**Texto expandido**

A espaciabilidade é proposta como um novo critério de qualidade em IHC. Ela designa o grau em que uma interface facilita a compreensão, a orientação e a interpretação das informações espaciais por parte do usuário, apoiando o pensamento espacial e a tomada de decisão informada a partir de dados georreferenciados. Diferente da usabilidade, da UX, da acessibilidade e da comunicabilidade — úteis, mas sem diretrizes explícitas para clareza espacial —, a espaciabilidade foca em como decisões de design, interação e representação cartográfica influenciam a interpretação do território. O conceito foi formulado por Neto e Mota como resposta à lacuna entre critérios de IHC e instrumentos como o STAT, que avaliam habilidades do usuário, não qualidade do sistema. A espaciabilidade complementa os critérios clássicos e se alinha aos Grandes Desafios da IHC-BR — especialmente GC1 e GC5, sobre novas abordagens teóricas e literacia de dados espaciais. Neste trabalho, ela orienta tanto o desenvolvimento do Mapa Cidadão quanto a aplicação do MIE.

---

## Slide 8 — Dimensões da Espaciabilidade (D1 a D3) ⏱ ~35 s

**Texto (20 min)**

O MIE organiza a análise em seis dimensões derivadas do STAT. As três primeiras: D1, orientação e direção — compreender localização e sentido no espaço geográfico; D2, padrões espaciais — identificar concentrações, clusters e tendências territoriais; D3, tomada de decisão espacial — escolher a melhor localização com base em múltiplos fatores espaciais. No Mapa Cidadão, D1 e D2 foram priorizadas na avaliação.

**Texto expandido**

Para operacionalizar a espaciabilidade, Neto e Mota traduzem habilidades do STAT em seis dimensões analíticas de inspeção de interface. As três primeiras são: D1, orientação e direção — capacidade de compreender localização e sentido no espaço geográfico, interpretar direção, posicionamento e rotas no mapa; D2, padrões espaciais — identificação de concentrações, clusters e tendências territoriais, como áreas com maior número de ocorrências; e D3, tomada de decisão espacial — escolha da melhor localização com base em múltiplos fatores espaciais, útil para gestores que precisam priorizar intervenções. O avaliador prioriza dimensões conforme o contexto da aplicação — nem todo mapa exige todas as seis. No Mapa Cidadão, D1 e D2 foram priorizadas na avaliação, por estarem diretamente ligadas ao objetivo de compreender ocorrências urbanas distribuídas no espaço. A D3 permaneceu como referência para evoluções futuras do sistema.

---

## Slide 9 — Dimensões da Espaciabilidade (D4 a D6) ⏱ ~35 s

**Texto (20 min)**

Completando o quadro: D4, associação e correlação — relacionar diferentes fenômenos espaciais distribuídos no território; D5, sobreposição de camadas — integrar múltiplas camadas de informação para análise crítica; D6, interpretação de tipos espaciais — compreender características geográficas como ponto, linha ou polígono. No Mapa Cidadão, D4 e D6 também foram selecionadas, por refletirem decisões concretas de design do sistema.

**Texto expandido**

As demais dimensões completam o quadro analítico do MIE. A D4 trata da associação e correlação — relacionar diferentes fenômenos espaciais distribuídos no território, como alagamentos e falta de pavimentação no mesmo bairro. A D5 refere-se à sobreposição de camadas — integração de múltiplas camadas de informação para análise crítica, relevante quando o sistema incorporar, por exemplo, dados de escolas, postos de saúde ou infraestrutura de drenagem. A D6 aborda a interpretação de tipos espaciais — compreensão de características geográficas como ponto, linha ou polígono; no contexto do Mapa Cidadão, essa dimensão se manifesta na clareza de ícones, cores e marcadores que distinguem categorias de ocorrência — alagamento, iluminação, lixo, pavimentação. No estudo, D4 e D6 também foram selecionadas para a avaliação, por refletirem decisões concretas de design: legenda e simbologia são elementos centrais da interface avaliada. D3 e D5 permaneceram como referência para evoluções futuras.

---

## Slide 10 — Método de Inspeção da Espaciabilidade (MIE) ⏱ ~50 s

**Texto (20 min)**

Para avaliar a espaciabilidade, adotamos o MIE — Método de Inspeção da Espaciabilidade. Trata-se de um método por inspeção, inspirado no Percurso Cognitivo e ancorado nas dimensões D1 a D6. Especialistas em IHC ou design simulam tarefas no sistema e identificam barreiras ao raciocínio espacial — com vantagens de agilidade e baixo custo. O método possui três etapas: definir objetivos e dimensões prioritárias; elaborar persona e tarefas concretas; e conduzir a inspeção, registrando achados em fichas com problema, severidade e recomendações.

**Texto expandido**

Para avaliar a espaciabilidade de forma sistemática, adotamos o Método de Inspeção da Espaciabilidade — o MIE. Trata-se de um método por inspeção, inspirado no Percurso Cognitivo e ancorado nas dimensões D1 a D6 derivadas do STAT. Especialistas em IHC ou design simulam tarefas no sistema e identificam barreiras ao raciocínio espacial — verificando se o design apoia a compreensão, a orientação e a interpretação das informações georreferenciadas. Entre suas vantagens práticas estão a agilidade — pois não exige recrutamento de usuários leigos — e o baixo custo — adequado a fases iniciais de projeto. O MIE é estruturado em três etapas, conforme Neto e Mota (IHC 2025). **Etapa 1 — Definição de objetivos:** descrever o contexto da aplicação, análises possíveis e decisões suportadas; selecionar dimensões prioritárias entre D1 e D6. **Etapa 2 — Formulação de tarefas:** criar uma persona representativa do contexto de uso e, para cada dimensão selecionada, propor tarefas concretas no sistema. **Etapa 3 — Inspeção da espaciabilidade:** simular as tarefas percorrendo a interface e registrar achados em fichas de inspeção — problema, severidade, recomendações. Neto e Mota validaram a viabilidade do método em estudo de caso com o Google Maps; este trabalho estende essa validação ao Mapa Cidadão — na Etapa 1 priorizamos D1, D2, D4 e D6; na Etapa 2, definimos João e Ana com quatro tarefas; na Etapa 3, três especialistas produziram relatórios de inspeção — complementados por entrevistas semiestruturadas e análise temática dos dados.

---

## Slide 11 — O Problema: Lacuna no Raciocínio Espacial ⏱ ~40 s

**Texto (20 min)**

Apesar do potencial do crowdsourcing urbano, a maior parte das aplicações ainda se concentra no registro e na visualização de ocorrências, usando o mapa apenas como recurso de localização básica. Isso cria uma lacuna entre a coleta colaborativa de dados e o apoio efetivo ao raciocínio espacial; além disso, problemas urbanos e a resposta das autoridades permanecem pouco transparentes para a população. A solução proposta é o Mapa Cidadão: mapa como artefato cognitivo, orientado pela espaciabilidade para apoiar a interpretação espacial.

**Texto expandido**

Apesar do potencial do crowdsourcing urbano, a maior parte das aplicações ainda se concentra no registro e na visualização de ocorrências, utilizando o mapa principalmente como recurso de localização básica. Esse enfoque limita a interpretação dos dados espaciais. A lacuna identificada neste trabalho refere-se à dificuldade em identificar padrões e áreas críticas; ao fato de que a disponibilidade de dados não garante compreensão territorial; e à falta de apoio efetivo ao raciocínio espacial do usuário. Um aspecto adicional é a baixa transparência: problemas urbanos e a resposta das autoridades permanecem pouco visíveis para a população. Critérios clássicos de IHC — usabilidade, UX, acessibilidade, comunicabilidade — são complementares, mas nenhum avalia diretamente se o design favorece análise e interpretação de relações geográficas; o STAT, por sua vez, mede habilidades do usuário, não qualidade do sistema. Estudos em geovisualização e cognição espacial indicam que a simples disponibilização de dados em mapas não garante compreensão territorial. A solução proposta é o Mapa Cidadão, concebido como artefato cognitivo orientado pela espaciabilidade, para ir além do "pin no mapa".

---

## Slide 12 — Metodologia ⏱ ~35 s

**Texto (20 min)**

A metodologia adota abordagem qualitativa e exploratória, estruturada em quatro etapas sequenciais: desenvolvimento do sistema; definição de personas e tarefas; coleta de dados com especialistas; e análise dos resultados por análise temática dedutiva.

**Texto expandido**

A metodologia deste TCC adota abordagem qualitativa e exploratória, estruturada em quatro etapas sequenciais, conforme ilustrado na figura. A primeira etapa compreende o desenvolvimento do Mapa Cidadão como sistema web, com arquitetura cliente-servidor e decisões de design orientadas pela espaciabilidade. A segunda etapa envolve a definição de personas — João e Ana — e tarefas de validação alinhadas às dimensões D1, D2, D4 e D6 do MIE. A terceira etapa consiste na coleta de dados com três especialistas em IHC, por meio de inspeção MIE, relatórios individuais e entrevistas semiestruturadas remotas. A quarta etapa realiza a análise dos resultados por análise temática dedutiva, com categorias predefinidas — espaciabilidade, usabilidade, experiência do usuário e avaliação do MIE — e triangulação de achados entre os três avaliadores.

---

## Slide 13 — Mapa Cidadão ⏱ ~45 s

**Texto (20 min)**

A solução é o Mapa Cidadão: sistema colaborativo de registro e visualização de ocorrências urbanas, guiado pela espaciabilidade e integrando crowdsourcing, georreferenciamento e IHC. O mapa é tratado como artefato cognitivo para apoiar o raciocínio espacial do cidadão. As principais funções incluem navegação interativa com legenda para interpretação de tipos — D6 —, registro colaborativo com validação social por "likes", e construção coletiva do conhecimento urbano com engajamento cívico.

**Texto expandido**

A solução proposta é o Mapa Cidadão, concebido com a espaciabilidade como diretriz central de projeto. Trata-se de um sistema colaborativo de registro e visualização de ocorrências urbanas, integrando três eixos: crowdsourcing para coleta colaborativa, georreferenciamento para ancoragem territorial dos dados e IHC para garantir qualidade na interação. Diferenciando-se de plataformas que tratam o mapa apenas como suporte visual ao registro, o Mapa Cidadão busca apoiá-lo como artefato cognitivo — favorecendo orientação, identificação de padrões e interpretação de relações territoriais. Entre as principais funções estão a navegação interativa com legenda integrada, diretamente ligada à dimensão D6; o registro colaborativo de ocorrências com validação social por "likes"; e a construção coletiva do conhecimento urbano, fortalecendo tecnologias cívicas e engajamento cidadão. O sistema foi desenvolvido e avaliado em estudo exploratório e qualitativo, com aplicação do MIE para verificar empiricamente se o design apoia o raciocínio espacial.

---

## Slide 14 — Especificações Técnicas ⏱ ~45 s

**Texto (20 min)**

O sistema adota arquitetura cliente-servidor com API REST desacoplada do frontend. No backend, PHP 8.4 com Laravel 12 estrutura a API — autenticação, ocorrências e validação social — com comunicação via endpoints JSON. No frontend, Nuxt 3 com OpenStreetMap como base cartográfica. A persistência usa PostgreSQL 13 com extensão PostGIS 3.5 para dados geoespaciais das ocorrências.

**Texto expandido**

As especificações técnicas do Mapa Cidadão seguem arquitetura cliente-servidor com API REST desacoplada do frontend, separando persistência de dados e interface cartográfica. O backend utiliza PHP 8.4 como linguagem de execução no servidor, com Laravel 12 estruturando a API REST — responsável por autenticação de usuários, gestão de ocorrências e mecanismos de validação social (likes e encerramento). A comunicação entre cliente e servidor ocorre via endpoints JSON consumidos pelo frontend. O frontend é uma aplicação web reativa e componentizada em Nuxt 3 (Vue.js), com OpenStreetMap como base cartográfica colaborativa do mapa interativo. A camada de persistência utiliza PostgreSQL 13 como banco de dados relacional, com a extensão PostGIS 3.5 para armazenamento e consulta de dados geoespaciais das ocorrências — permitindo operações espaciais como georreferenciamento preciso dos marcadores no mapa.

---

## Slide 15 — Interface do Mapa Cidadão: Detalhamento ⏱ ~40 s

**Texto (20 min)**

Este slide detalha os sete elementos da interface principal: mapa interativo central; navegação com zoom e deslocamento; marcadores com ícones e cores por categoria; legenda para interpretação de tipos espaciais — D6 —; detalhes da ocorrência ao clicar no marcador; colaboração com registro, validação por "like" e encerramento; e menu de perfil com histórico de contribuições.

**Texto expandido**

Neste slide detalho os sete elementos principais da interface, numerados na figura. (1) O mapa interativo ocupa a região central para navegação. (2) Ferramentas de zoom e deslocamento permitem a navegação. (3) Os marcadores usam ícones e cores por categoria — alagamento, lixo, iluminação, pavimentação. (4) A legenda integrada apoia a interpretação de tipos espaciais, conforme a D6. (5) Ao clicar no marcador, abrem-se informações da ocorrência. (6) As funcionalidades colaborativas — registro, validação por "like" e encerramento — exigem autenticação. (7) O menu de perfil reúne dados do usuário e o histórico de contribuições. O design foi alinhado às dimensões do MIE priorizadas neste estudo — D1, D2, D4 e D6. Vale notar que a versão avaliada não incorporava mecanismos avançados de filtragem, agregação ou visualização analítica, o que influenciou as percepções dos especialistas quanto ao suporte ao raciocínio espacial nas dimensões D2 e D4.

---

## Slide 16 — Interface do Mapa Cidadão: Cadastro de Ocorrência ⏱ ~30 s

**Texto (20 min)**

O cadastro ocorre por modal sobreposto ao mapa. O endereço é preenchido automaticamente com base no ponto selecionado; o usuário escolhe a categoria obrigatória — iluminação, lixo, alagamento etc. —, descreve o problema em até 250 caracteres e salva. A ocorrência é persistida no servidor e exibida no mapa.

**Texto expandido**

Este slide detalha o fluxo de cadastro de ocorrências, numerado na figura. (1) O modal de registro aparece sobreposto ao mapa para criação de novas ocorrências, exigindo autenticação prévia. (2) O campo de endereço é preenchido automaticamente com base no ponto selecionado no mapa, reduzindo esforço do usuário e garantindo georreferenciamento preciso. (3) A categoria é campo obrigatório, com seleção do tipo de problema — iluminação, lixo, alagamento, pavimentação. (4) A descrição permite texto livre para detalhar o problema, com limite de 250 caracteres. (5) O botão salvar envia a ocorrência para persistência no servidor e exibição imediata no mapa. P1 completou esse fluxo com sucesso na avaliação, confirmando que o registro georreferenciado é funcional — embora tenha relatado dificuldade em localizar o histórico de ocorrências após o cadastro.

---

## Slide 17 — Interface do Mapa Cidadão: Histórico de Ocorrências ⏱ ~25 s

**Texto (20 min)**

O histórico exibe, para cada ocorrência do usuário autenticado, tipo, endereço, cidade, estado e data de criação. Indicadores visuais distinguem status Em Andamento e Resolvida — funcionalidade relevante para acompanhar a resolução dos registros, embora pouco acessível na interface atual.

**Texto expandido**

Este slide apresenta a tela de histórico de ocorrências do usuário autenticado. (1) Os dados exibidos incluem tipo, endereço, cidade, estado e data de criação de cada ocorrência registrada pelo usuário. (2) Indicadores visuais distinguem os status Em Andamento e Resolvida, permitindo acompanhar o ciclo de vida dos registros. Essa funcionalidade é central para a persona João, que deseja acompanhar resoluções de problemas no bairro. Na avaliação, P1 teve dificuldade para encontrar o histórico no menu de perfil e sugeriu reposicioná-lo na barra superior — achado que aparece nos resultados de usabilidade.

---

## Slide 18 — Metodologia: Personas e Tarefas ⏱ ~40 s

**Texto (20 min)**

A avaliação usou duas personas e quatro tarefas. João, 40 anos, morador de bairro periférico, foca em registrar iluminação e buracos e acompanhar resoluções. Ana, 27 anos, estudante universitária, consulta ocorrências existentes e analisa o impacto na mobilidade. As tarefas: D1 — João localiza iluminação no bairro; D2 — Ana identifica áreas com alagamentos; D4 — João relaciona falta de pavimentação com alagamentos; D6 — Ana compreende a representação de cada marcador.

**Texto expandido**

A avaliação foi planejada com duas personas e quatro tarefas, alinhadas às dimensões selecionadas do MIE. João, 40 anos, morador de bairro periférico, foca em registrar iluminação e buracos e acompanhar resoluções. Ana, 27 anos, estudante universitária, consulta ocorrências existentes e analisa o impacto na mobilidade. As tarefas foram: D1 — João localiza todas as ocorrências de iluminação no bairro; D2 — Ana identifica áreas com maior número de alagamentos; D4 — João relaciona falta de pavimentação com alagamentos; e D6 — Ana compreende a representação de cada marcador no mapa.

---

## Slide 19 — Coleta de Dados ⏱ ~45 s

**Texto (20 min)**

Três especialistas em IHC — P1, P2 e P3 — do laboratório de pesquisa da UFPA, com três a seis anos de experiência, em estudo qualitativo exploratório com n igual a três. A avaliação foi remota e independente. Cada um conduziu inspeção MIE simulando João e Ana, produziu relatório individual e participou de entrevista semiestruturada remota. Os dados foram analisados por análise temática dedutiva com triangulação entre os três avaliadores.

**Texto expandido**

Foram convidados três especialistas em IHC, identificados como P1, P2 e P3, vinculados ao laboratório de pesquisa em IHC da UFPA. P1 é mestranda com três anos de experiência; P2 é doutorando com seis anos de experiência e vivência em crowdsourcing georreferenciado; P3 é doutorando com quatro anos de experiência. Nenhum possuía familiaridade prévia com espaciabilidade, MIE ou Mapa Cidadão. A escolha por três participantes fundamenta-se no caráter qualitativo e exploratório do estudo — análise aprofundada e verificação de consistência, não generalização estatística. A avaliação foi remota e independente, sem comunicação entre avaliadores. Cada especialista executou inspeção MIE simulando João e Ana, produziu relatório individual e participou de entrevista semiestruturada remota pós-inspeção. Os dados foram examinados por análise temática dedutiva, com categorias predefinidas — espaciabilidade, usabilidade, experiência do usuário e avaliação do MIE — e triangulação de achados entre os três avaliadores.

---

## Slide 20 — Entrevista Semiestruturada ⏱ ~35 s

**Texto (20 min)**

Após a inspeção, conduzi entrevistas semiestruturadas por videoconferência remota — cerca de 50 a 60 minutos cada. Dois objetivos: avaliar se o Mapa Cidadão apoia o raciocínio espacial; e validar o MIE — adequação de tarefas, personas e cenários. A estrutura percorreu abertura e primeira impressão; design e espaciabilidade; aspectos positivos, negativos e melhorias de uso; e avaliação do método.

**Texto expandido**

Complementando os relatórios de inspeção, apliquei entrevista semiestruturada em videoconferência remota pós-inspeção, com duração aproximada de 50 a 60 minutos por especialista, gravada mediante consentimento. O instrumento tinha dois objetivos: (1) avaliar se o Mapa Cidadão apoia o raciocínio espacial e a interpretação de dados geográficos; e (2) validar o MIE — adequação de tarefas, personas e cenários de inspeção. A estrutura seguiu quatro blocos: abertura — perfil e primeira impressão; design e espaciabilidade — visualizador ou ferramenta analítica; uso — aspectos positivos, negativos e melhorias; e avaliação do método — adequação das tarefas e do instrumento. Perguntas sobre uso alimentaram as categorias de usabilidade e UX; as perguntas sobre o MIE fundamentaram achados sobre clareza das tarefas e formato de relatório. Roteiro completo em `leituras/entrevistas/avaliação/entrevista-semiestruturada.md`.

---

## Slide 21 — Resultados: Distribuição das Evidências ⏱ ~45 s

**Texto (20 min)**

Passo aos resultados. A análise temática dedutiva identificou 23 evidências — leitura favorável do Mapa Cidadão. Espaciabilidade concentrou 11 evidências, com D1 e D3 satisfatórias e potencial em D2 e D4; usabilidade, 7; UX, 3; e MIE, 2. A limitação central, convergente entre P1, P2 e P3, é a ausência de filtros no sistema.

**Texto expandido**

Os resultados organizam-se a partir da análise temática dedutiva, que identificou 23 evidências qualitativas distribuídas em quatro categorias analíticas. A categoria espaciabilidade concentrou 11 evidências — a mais numerosa —, indicando que o critério central do estudo gerou a maior parte dos achados; D1 e D3 foram avaliadas como satisfatórias, com potencial identificado em D2 e D4. Usabilidade registrou 7 evidências, apontando fluxo funcional com pontos de melhoria na arquitetura da informação. Experiência do usuário registrou 3 evidências, com proposta social valorizada pelos especialistas. Avaliação do MIE registrou 2 evidências, confirmando aplicabilidade do método com recomendações de refinamento. A limitação central, com convergência entre os três participantes, é a ausência de mecanismos de filtragem — P1, P2 e P3 sugeriram filtros por tipo e temporais como evolução prioritária do sistema. Os slides seguintes detalham cada categoria.

---

## Slide 22 — Análise de Espaciabilidade ⏱ ~50 s

**Texto (20 min)**

Em espaciabilidade, os aspectos favoráveis incluem: localização de ocorrências no mapa — maior consenso entre P2 e P3; concentrações visuais perceptíveis em área específica — P2; georreferenciação que apoia identificar onde intervir; e associações espaciais básicas pela proximidade entre tipos de ocorrência. As limitações: ausência de filtros e agrupamento por tipo; sobreposição de camadas pouco compreendida na interface; e simbologia com ícones e cores similares — consenso entre os três avaliadores.

**Texto expandido**

Na espaciabilidade, os resultados organizam-se em aspectos favoráveis e limitações. **Aspectos favoráveis:** a georreferenciação atende à consulta de localização — usuário identifica onde estão as ocorrências, com maior consenso entre P2 e P3; a inspeção visual permite perceber concentração de problemas em área específica da cidade (P2); a precisão dos marcadores apoia identificar onde intervir (P2, P3); e a proximidade entre tipos de ocorrência viabiliza associações espaciais básicas e potencial de relacionar variáveis (P2, P3). **Limitações e recomendações:** a ausência de filtros e agrupamento por tipo impossibilita filtrar um único padrão — tarefas analíticas não correspondem às funcionalidades atuais sem agregação (P1, P3), com convergência sobre filtros temporais sugeridos por P1, P2 e P3; o conceito de sobreposição de camadas não foi entendido na interface, com leitura dependente de zoom e escala (P3, P2); e ícones e cores similares comprometem a distinção entre categorias, com consenso sobre revisão da simbologia (P1, P2, P3).

---

## Slide 23 — Avaliação do MIE ⏱ ~35 s

**Texto (20 min)**

O MIE foi considerado aplicável: P1 avaliou personas como bem construídas e tarefas bem direcionadas; P3 confirmou que João e Ana trazem perspectivas distintas e que as tarefas provocam reflexão espacial. A recomendação de melhoria é incluir mais tarefas para identificar gargalos — oportunidade de refinamento do método, não invalidação.

**Texto expandido**

Os especialistas consideraram o MIE aplicável e eficaz, capaz de gerar evidências relevantes sobre espaciabilidade. **Aspectos favoráveis:** P1 avaliou as personas como bem construídas e as tarefas como bem direcionadas; P3 confirmou que as tarefas são adequadas para provocar reflexão espacial e que João e Ana trazem perspectivas distintas — dimensões, personas e tarefas cumprem o objetivo de inspeção da espaciabilidade (P1, P3). **Recomendações de melhoria:** P3 sugeriu incluir mais tarefas para identificar gargalos adicionais — oportunidade de refinamento do MIE, não invalidação do método (P1, P3). Para aprofundamento em defesa, vale mencionar que P1 adotou relatório narrativo e P2/P3 organizaram por dimensões — ponto levantado nas entrevistas.

---

## Slide 24 — Análise de Usabilidade ⏱ ~35 s

**Texto (20 min)**

Em usabilidade, o aspecto favorável é o fluxo de cadastro: P1 completou criação de conta e registro de ocorrência com endereço pré-preenchido, categoria e descrição — registro georreferenciado funcional. A limitação principal é a dificuldade de P1 em encontrar o Histórico de ocorrências no perfil, com sugestão de reposicioná-lo na barra superior.

**Texto expandido**

As evidências de usabilidade organizam-se em aspectos favoráveis e limitações. **Aspecto favorável:** após autenticação, P1 completou cadastro e criou ocorrência com endereço pré-preenchido, categoria e descrição — fluxo de registro georreferenciado funcional (P1). **Limitação e recomendação:** P1 teve dificuldade para encontrar a funcionalidade de Histórico de ocorrências no perfil e sugeriu reposicioná-la na barra superior; função relevante para acompanhar resolução dos registros está pouco acessível — oportunidade de reorganização do menu (P1). Melhorias na simbologia — D6 — beneficiariam usabilidade e espaciabilidade simultaneamente.

---

## Slide 25 — Análise de Experiência do Usuário ⏱ ~30 s

**Texto (20 min)**

Em experiência do usuário, P3 destacou duplo valor do sistema: para o cidadão, oferece visão da região e do bairro; para o poder público, demonstra onde existem problemas. Utilidade social e institucional com expectativa de uso territorial.

**Texto expandido**

No âmbito da experiência do usuário, o resultado principal veio de P3, que destacou o duplo valor do Mapa Cidadão. Para o cidadão, o sistema oferece visão da região e do bairro, apoiando a compreensão territorial local. Para o poder público, demonstra onde existem problemas, fortalecendo transparência e accountability. Essa utilidade social e institucional gera expectativa de uso territorial — o sistema é percebido não apenas como ferramenta de registro, mas como artefato com potencial de impacto cívico. Embora o slide apresente apenas o aspecto favorável, nas entrevistas emergiram também observações sobre anonimato (positivo, P2), validação por likes e necessidade de tutoriais para interpretação dos dados.

---

## Slide 26 — Considerações Finais: Limitações e Contribuições ⏱ ~50 s

**Texto (20 min)**

Quanto às **limitações**: amostra reduzida de três especialistas do mesmo laboratório; sistema em estágio inicial, sem funcionalidades analíticas avançadas; e avaliação restrita à perspectiva de especialistas, sem usuários finais ou gestores públicos. Quanto às **contribuições**: consolidação da espaciabilidade como critério aplicável; aplicação empírica e refinamento do MIE; desenvolvimento do Mapa Cidadão voltado à interpretação espacial; e evidências qualitativas sobre a relação entre espaciabilidade, usabilidade e experiência do usuário.

**Texto expandido**

**Limitações:** a pesquisa apresenta limitações relacionadas ao tamanho reduzido da amostra, composta por três especialistas pertencentes ao mesmo laboratório, o que restringe a generalização dos resultados. Além disso, o sistema avaliado encontra-se em estágio inicial de desenvolvimento, sem funcionalidades analíticas avançadas, e a avaliação concentrou-se exclusivamente na perspectiva de especialistas, não contemplando usuários finais ou gestores públicos. Essas limitações não invalidam os achados, mas delimitam seu escopo e orientam investigações futuras — com amostras maiores, funcionalidades analíticas e múltiplos perfis de usuário.

**Contribuições:** as principais contribuições incluem: a consolidação da espaciabilidade como critério aplicável ao design de sistemas colaborativos urbanos; a aplicação empírica e o refinamento do MIE, com recomendações estruturadas de aprimoramento; o desenvolvimento de um sistema concebido explicitamente para apoiar a interpretação espacial; e evidências qualitativas sobre a relação entre espaciabilidade, usabilidade e experiência do usuário. O estudo reforça que, em tecnologias cívicas baseadas em mapas, a qualidade da representação espacial é fundamental para transformar dados colaborativos em compreensão territorial e suporte à tomada de decisão.

---

## Slide 27 — Agradecimentos ⏱ ~30 s

**Texto (20 min)**

Agradeço à orientadora Marcelle Pereira Mota, ao coorientador André Avelino da Silva Neto, aos membros da banca examinadora e à UFPA pelo apoio institucional. Obrigado pela atenção — estou à disposição para perguntas.

**Texto expandido**

Este trabalho foi possível graças ao apoio de diversas pessoas e instituições. Agradeço à orientadora Marcelle Pereira Mota, pelo acompanhamento rigoroso e pela introdução ao conceito de espaciabilidade e ao MIE; ao coorientador André Avelino da Silva Neto, pela coautoria e pelo apoio na fundamentação teórica; aos membros da banca examinadora, pela avaliação e pelas contribuições que certamente enriquecerão este trabalho; aos especialistas P1, P2 e P3, pela participação na avaliação; e à Universidade Federal do Pará, pelo apoio institucional e ambiente acadêmico. Obrigado pela atenção — estou à disposição para perguntas.

---

## Distribuição do tempo (20 min)

| Bloco | Slides | Tempo |
|-------|--------|-------|
| Abertura e contexto | 1–4 | ~2,5 min |
| Fundamentação (crowdsourcing, IHC, espaciabilidade, MIE) | 5–10 | ~4 min |
| Problema e metodologia | 11–12 | ~1,5 min |
| Sistema Mapa Cidadão | 13–17 | ~3 min |
| Metodologia de avaliação | 18–20 | ~2 min |
| Resultados | 21–25 | ~3,5 min |
| Considerações finais e encerramento | 26–27 | ~1,5 min |
| **Reserva** | — | **~2 min** |

A reserva absorve transições, pausas naturais e slides que você enfatizar um pouco mais — especialmente os de resultados (21–25) e o bloco de interface (15–17).

## Como usar as duas versões

- **Texto (20 min):** use na apresentação oral — versão calibrada para caber em 20 minutos.
- **Texto expandido:** use para ensaio prévio, aprofundamento de argumentos e resposta a perguntas da banca; contém mais detalhes, citações de participantes e conexões com o artigo.

## Dicas rápidas

- **Slide 4:** mencione o Best Paper de forma breve — não desvie para detalhes do artigo; retome a fundamentação no slide 5.
- **Slide 10:** o MIE tem **três etapas** (objetivos → tarefas → inspeção); entrevistas e análise temática são extensões deste TCC, não etapas do método.
- **Slide 12:** aponte a figura das **quatro etapas** da metodologia; não repita o conteúdo dos slides 18–20.
- **Slides 15–17:** percorra os elementos numerados em cada tela de interface; mantenha ritmo firme — são três slides visuais seguidos.
- **Slide 19:** a tabela de participantes está no slide — cite P1, P2 e P3 com formação e experiência; detalhes extras ficam no texto expandido.
- **Slide 21:** abra o bloco de resultados com uma frase de transição; cite os números do gráfico (23 evidências, 11 espaciabilidade, 7 usabilidade, 3 UX, 2 MIE).
- **Slides 22–25:** cada slide contrasta **aspectos favoráveis** e **limitações/recomendações** quando aplicável; o slide 25 tem apenas aspecto favorável.
- **Slide 26:** apresente primeiro as **três limitações** (coluna esquerda) e depois as **quatro contribuições** (coluna direita).
- **Slide 27:** encerre com agradecimentos e convite a perguntas — não repita considerações finais do slide anterior.
- **Metodologia (18–20):** bloco denso — mantenha ritmo firme para não estourar o tempo.
- **Perguntas sobre n = 3:** estudo exploratório que estende o artigo original (1 avaliador no Google Maps); ampliação com usuários leigos é trabalho futuro previsto pelos autores.
