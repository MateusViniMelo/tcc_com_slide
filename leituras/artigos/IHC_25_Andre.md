# Resumo e análise: Caminhos para a Espaciabilidade

Documento de leitura sobre o artigo **IHC_25_Andre.pdf** — síntese do conteúdo, conceitos centrais, método proposto, estudo de caso e implicações para pesquisas com aplicativos de mapa.

---

## Metadados

| Campo | Informação |
|-------|------------|
| **Título** | Caminhos para a Espaciabilidade: Como Avaliar a Relação Entre o Design de Aplicações de Mapa e o Pensamento Espacial? |
| **Autores** | André Avelino da Silva Neto, Marcelle Pereira Mota |
| **Instituição** | Universidade Federal do Pará (UFPA) |
| **Contato** | andre.neto@icen.ufpa.br, mpmota@ufpa.br |
| **Evento** | Simpósio Brasileiro de Fatores Humanos em Sistemas Computacionais (IHC) — edição de 2025 |
| **Extensão** | 20 páginas |
| **Financiamento** | CAPES (bolsa de doutorado) |

---

## Resumo executivo

O artigo propõe **espaciabilidade** como um **novo critério de qualidade em IHC**, voltado especificamente a sistemas que representam ou organizam informações espaciais (mapas digitais, navegação, visualização geográfica). Diferente de usabilidade, UX, acessibilidade e comunicabilidade, a espaciabilidade avalia se o design **facilita a compreensão, orientação e interpretação do espaço geográfico** e se **apoia o pensamento espacial** do usuário.

Para operacionalizar esse critério, os autores apresentam o **Método de Inspeção da Espaciabilidade (MIE)**, inspirado em métodos clássicos de inspeção (Avaliação Heurística, Percurso Cognitivo, MIS) e ancorado nas habilidades medidas pelo **STAT** (*Spatial Thinking Ability Test*, Lee & Bednarz, 2012). O MIE é aplicado por especialistas em três etapas: definição de objetivos, formulação de tarefas e inspeção propriamente dita.

O artigo inclui um **estudo de caso** com o **Google Maps** (versão móvel), simulando um turista que precisa escolher hotel e pontos de visita em Belo Horizonte. Os resultados mostram que o método é viável e revela limitações do app na **comparação entre diferentes tipos de dados espaciais**, mesmo quando funciona bem para navegação com um único tipo de dado.

---

## Problema de pesquisa

### Contexto

Mapas digitais (Google Maps, Uber, Waze, aplicativos com dados sociais georreferenciados) permitem análises e tomadas de decisão sobre o território. A **interação do usuário com o mapa** é central para interpretar dados espaciais — especialmente em contextos como políticas públicas, comércio, saúde e educação.

### Lacuna identificada

Os **critérios clássicos de qualidade em IHC** (usabilidade, UX, acessibilidade, comunicabilidade) são complementares e úteis, mas **nenhum aborda diretamente** a capacidade da interface de favorecer:

- análise e compreensão de dados espaciais;
- interpretação de relações geográficas;
- raciocínio espacial e pensamento crítico sobre o território.

Por outro lado, instrumentos como o **STAT** medem **habilidades do usuário**, não **qualidade do design do sistema**.

### Pergunta central

> Como avaliar a relação entre o design de aplicações de mapa e o pensamento espacial?

A resposta proposta: criar o critério **espaciabilidade** e o método **MIE** para inspecionar se o design apoia ou prejudica essas habilidades.

---

## Fundamentação teórica

### Pensamento espacial

Conjunto de habilidades cognitivas que permitem:

- compreender conceitos como **localização, direção e escala**;
- interpretar e analisar **dados espaciais**;
- identificar **padrões e tendências** territoriais;
- resolver problemas em contextos geográficos e científicos.

Referências-chave: Montello (1993), National Research Council (2006), Kastens & Ishikawa (2006), Lee & Bednarz (2012).

Andrienko et al. (2002) destacam que **alto grau de interatividade** é requisito geral para mapas que suportam pensamento espacial.

### STAT — Spatial Thinking Ability Test

Instrumento de Lee & Bednarz (2012) com **16 questões objetivas** que avaliam habilidades como:

- orientação e direção;
- comparação entre mapa e gráficos;
- escolha de melhor localização com base em fatores espaciais;
- visualização mental de perfis de declive;
- correlação entre fenômenos espacialmente distribuídos;
- visualização 3D a partir de 2D;
- sobreposição e dissolução de mapas;
- compreensão de pontos, linhas e polígonos.

No artigo, o STAT serve de **base teórica** para traduzir habilidades cognitivas em **dimensões avaliáveis no design** — não para testar usuários.

### Critérios clássicos de IHC (Barbosa et al., 2024)

| Critério | Foco | Relação com espaço |
|----------|------|-------------------|
| **Usabilidade** | Eficácia, eficiência, satisfação | Parcial; não orienta disposição geoespacial |
| **Acessibilidade** | Inclusão de diferentes perfis | Permite acesso, mas não avalia raciocínio espacial |
| **UX** | Emoções, valores, significados | Indireta; sem diretrizes para clareza espacial |
| **Comunicabilidade** | Intenção do designer via signos | Parcial via signos cartográficos; não cobre estrutura espacial |
| **Espaciabilidade** | Clareza, orientação, raciocínio espacial | **Foco central** |

### Métodos de avaliação em IHC

**Por inspeção** (sem usuários finais): Avaliação Heurística, Percurso Cognitivo, MIS.

**Por observação**: testes de usabilidade, MAC, avaliação de UX.

O MIE pertence ao primeiro grupo, mas com foco espacial derivado do STAT.

---

## Trabalhos relacionados e lacunas

A revisão bibliográfica (Scopus, Web of Science, ACM DL) confirma três grupos de literatura:

1. **Critérios clássicos** — fundamentam a estrutura, mas não cobrem compreensão espacial.
2. **STAT e extensões** — avaliam usuários, não design de sistemas.
3. **Estudos de usabilidade/UX/acessibilidade/comunicabilidade em mapas** — mostram correlação indireta com pensamento espacial, sem avaliação direta.

**Conclusão da revisão:** há espaço para um critério e um método que avaliem **sistemas**, não apenas **habilidades individuais**.

---

## Metodologia da pesquisa

Abordagem **qualitativa e exploratória**, com três procedimentos:

1. **Revisão teórico-conceitual** — busca estruturada + snowball a partir de Lee & Bednarz (2012) e Barbosa et al. (2024).
2. **Formulação do MIE** — adaptação das habilidades do STAT para dimensões de inspeção de interface.
3. **Estudo de caso** — aplicação do MIE no Google Maps para demonstrar viabilidade.

---

## Espaciabilidade — definição

> **Espaciabilidade** é o grau em que uma interface facilita a **compreensão**, a **orientação** e a **interpretação** das informações espaciais por parte do usuário.

Aspectos centrais:

- clareza na apresentação do **espaço digital**;
- apoio ao **raciocínio espacial**;
- organização de elementos que permita **localizar-se, navegar e compreender o território**;
- ampliação da capacidade de **extrair significado** e tomar **decisões informadas** a partir de dados georreferenciados.

A espaciabilidade **complementa** (não substitui) os critérios clássicos. É especialmente relevante para:

- aplicativos de mapas e navegação;
- painéis de visualização geográfica;
- sistemas com geolocalização;
- jogos e ambientes virtuais com estrutura territorial.

### Alinhamento com Grandes Desafios da IHC-BR

- **GC1** — novas abordagens teóricas além de eficiência e controle; espaciabilidade introduz clareza do espaço representado.
- **GC5** — interação humano-dados e literacia; espaciabilidade como componente da **literacia de dados espaciais**.

---

## MIE — Método de Inspeção da Espaciabilidade

Método de **inspeção por especialistas** para interfaces com mapas ou dados geoespaciais. Objetivos da inspeção:

- verificar se o design **apoia habilidades de pensamento espacial** relevantes ao propósito da aplicação;
- avaliar se **comunica claramente** elementos espaciais e suas relações;
- identificar **obstáculos** ao raciocínio espacial e à tomada de decisão geográfica.

O avaliador **prioriza dimensões** conforme o contexto (nem toda aplicação exige todas as habilidades do STAT).

### Escopo atual

Focado em **visualização 2D** de mapas tradicionais. Habilidades **3D e topográficas** ficam fora do escopo imediato, mas são candidatas a extensões futuras.

---

### Etapa 1 — Definição de objetivos

Descrever contexto, objetivos do usuário, análises possíveis e decisões suportadas. Selecionar dimensões prioritárias entre as **seis dimensões (D1–D6)**:

| Código | Dimensão | Descrição |
|--------|----------|-----------|
| **D1** | Compreensão de orientação e direção | Interpretar direção e posicionamento (norte/sul, esquerda/direita, rotas) |
| **D2** | Detecção de padrões espaciais | Identificar agrupamentos, dispersões, concentrações geográficas |
| **D3** | Decisão sobre localização ideal | Escolher locais com base em múltiplos critérios espaciais |
| **D4** | Identificação de associações espaciais | Detectar correlações ou relações entre fenômenos no mapa |
| **D5** | Compreensão de sobreposição de camadas | Raciocinar com múltiplas camadas e cruzamentos úteis |
| **D6** | Interpretação de tipos espaciais | Diferenciar pontos, linhas, polígonos e seus significados |

**Exemplo do artigo:** app de navegação urbana exige D1 e rotas, mas pode não exigir perfis topográficos.

---

### Etapa 2 — Formulação de tarefas

- Criar uma **persona** representativa.
- Para cada dimensão selecionada, propor **tarefas concretas** no sistema.
- Tarefas podem exigir interação ou apenas leitura/identificação de padrões no mapa.

**Exemplos de tarefas por dimensão (Tabela 4 do artigo):**

| Dimensão | Exemplos de tarefa |
|----------|-------------------|
| D1 | Encontrar direção mais curta entre dois pontos; identificar POI mais ao norte/sul; traçar rota |
| D2 | Identificar áreas com maior concentração de um tipo de dado; comparar tamanhos de áreas de interesse |
| D3 | Escolher melhor local para empreendimento, escola ou hospital |
| D4 | Verificar relação entre desmatamento e densidade populacional; entre ruas próximas a rios e alagamentos |
| D5 | Identificar interseções entre camadas; adicionar camadas diferentes; localizar ponto em mapa multicamada |
| D6 | Diferenciar áreas, linhas e pontos; interpretar símbolos; encontrar dado por cor/símbolo |

---

### Etapa 3 — Inspeção da espaciabilidade

1. Percorrer a interface **simulando** as tarefas com a persona em mente.
2. Registrar dificuldades e relacioná-las às dimensões.
3. Organizar achados em **fichas de inspeção** (problema, severidade, possíveis soluções).
4. Sintetizar qualitativamente e emitir **recomendações** para melhorar clareza espacial, navegabilidade e potencial interpretativo.

---

## Estudo de caso: Google Maps (móvel)

### Configuração

- **Avaliador:** um especialista em IHC com familiaridade em usabilidade e visualização geográfica.
- **Contexto:** navegação urbana; usuário que conhece uma cidade nova e precisa escolher hotel e pontos turísticos.
- **Dimensões priorizadas:** D1, D2, D3, D4 (D5 e D6 ficaram de fora neste caso).

### Persona

**Rafael**, 35 anos, estudante de letras, usuário casual de mapas. Viagem a **Belo Horizonte-MG** para um congresso; nunca usou o app para hospedagem/turismo.

### Tarefas aplicadas

| Código | Dimensões | Tarefa |
|--------|-----------|--------|
| T1 | D1, D4 | Buscar hotéis próximos ao local do evento com melhores rotas e preços |
| T2 | D4 | Buscar hotéis próximos a pontos turísticos |
| T3 | D2 | Identificar áreas com mais bares e restaurantes |
| T4 | D3 | Escolher hotel com base nos dados anteriores |

### Principais achados

#### Pontos positivos

- **D4:** associações úteis entre preço, avaliações e posição no mapa.
- **D1:** visualização de rotas entre evento e hotéis.
- **D2:** em zoom amplo, possível ver concentração de bares/restaurantes.
- **D3:** dados ricos para embasar decisão (preço, avaliações, interesses).

#### Problemas identificados

| Tarefa | Dimensão | Problema | Sugestão |
|--------|----------|----------|----------|
| T1 | D1 | Comparar rotas exige abrir **uma de cada vez**; difícil comparar muitos hotéis | Visualizar condições de vias de **múltiplas rotas** simultaneamente |
| T1 | D4 | Busca sequencial (evento → hotéis) pode não ser óbvia | Manter local do evento visível ao exibir hotéis |
| T2 | D4 | Busca literal por “hotéis próximos a pontos turísticos” **não funciona**; buscas separadas não mostram relação | Permitir **selecionar tipos de marcadores** a exibir juntos |
| T3 | D2 | Pontos aparecem conforme zoom (**lazy loading**); análise de concentração fica imprecisa | Opção de manter todos os pontos na janela ou exibir **quantitativos/heatmap** |
| T4 | D3 | Decisão limitada por dificuldades de **comparação e associação** entre dados | Implementar melhorias das tarefas anteriores |

#### Síntese do estudo de caso

O Google Maps tem **forte espaciabilidade para navegação com um tipo de dado**, mas **fragilidades na comparação entre diferentes dados espaciais**. O MIE mostrou-se **viável** e capaz de produzir recomendações acionáveis — desde que objetivos e tarefas estejam bem definidos.

---

## Limitações reconhecidas pelos autores

1. **Sem usuários reais** até esta etapa — apenas inspeção por especialista.
2. **Um único avaliador** (autor do método), com viés; estudo valida viabilidade, não qualidade absoluta dos resultados.
3. **Apenas Google Maps** como caso prático — generalização para outros domínios ainda não testada.
4. Dimensões **3D/topográficas** excluídas do escopo atual.

Projeto submetido ao **Comitê de Ética** para etapas futuras com usuários e outros especialistas (Resolução CNS 510/2016).

---

## Trabalhos futuros (segundo o artigo)

- Estudos empíricos com **usuários reais** (desempenho, satisfação, interpretação do espaço).
- MIE com **múltiplos avaliadores** (confiabilidade inter-avaliadores).
- Aplicação em outros sistemas: mapas educacionais, painéis geográficos, monitoramento ambiental, jogos territoriais.
- Extensão do conceito com **dimensões sociais e políticas** (desigualdade territorial, justiça informacional).
- Adaptação do MIE para capturar a **perspectiva do usuário real**, não só do especialista.

---

## Contribuições principais

1. **Conceito de espaciabilidade** — novo critério de qualidade em IHC para sistemas espaciais.
2. **MIE** — método sistemático, flexível e replicável de inspeção por especialistas.
3. **Estudo de caso** — demonstração prática no Google Maps.
4. **Ponte teórica** — entre critérios de IHC, pensamento espacial (STAT) e design de mapas digitais.

---

## Conexão com o Mapa Cidadão / TCC

Este artigo é **referência direta** para avaliações de espaciabilidade no projeto Mapa Cidadão:

- O protocolo em `leituras/entrevistas/avaliação/avaliacao.md` **reutiliza o MIE** com as mesmas dimensões D1–D6.
- Personas (João e Ana) e tarefas (iluminação, alagamentos, pavimentação, ícones) seguem a **Etapa 2** do MIE adaptada ao contexto de **ocorrências cidadãs**.
- Dimensões especialmente relevantes para mapas sociais:
  - **D2** — padrões de ocorrências por região;
  - **D4** — relação entre tipos de problemas (ex.: pavimentação ↔ alagamento);
  - **D3** — priorização de intervenção territorial;
  - **D6** — clareza de marcadores por tipo de ocorrência.

Problemas similares aos do Google Maps (T2, T3) podem aparecer no Mapa Cidadão: **dificuldade de ver relações entre tipos de dados**, **pontos que só aparecem com zoom** e **comparação entre regiões**.

---

## Referências mais citadas no artigo

- **Lee & Bednarz (2012)** — STAT e componentes do pensamento espacial.
- **Barbosa et al. (2024)** — critérios de qualidade e métodos de avaliação em IHC.
- **Andrienko et al. (2002)** — interatividade em mapas para pensamento espacial.
- **De Souza (2005)** — engenharia semiótica e comunicabilidade.
- **Nielsen (1994)** — heurísticas de usabilidade.
- **Neto et al. (2023)** — usabilidade em mapas móveis sociais (trabalho anterior dos autores).
- **Marquez et al. (2021)** — heurísticas para mapas web interativos.
- **da Silva Junior et al. (2024)** e **Coleti et al. (2024)** — Grandes Desafios IHC-BR (GC1, GC5).

---

## Glossário rápido

| Termo | Significado |
|-------|-------------|
| **Espaciabilidade** | Critério de qualidade: quanto a interface apoia compreensão e raciocínio espacial |
| **MIE** | Método de Inspeção da Espaciabilidade |
| **STAT** | Teste de habilidade de pensamento espacial (16 questões) |
| **Pensamento espacial** | Habilidades cognitivas para perceber, organizar e inferir informações espaciais |
| **Dimensões D1–D6** | Seis eixos de avaliação derivados do STAT para inspeção de design |
| **Ficha de inspeção** | Registro estruturado de problemas, severidade e recomendações |

---

## Notas de leitura

- O artigo é **exploratório e conceitual** — propõe e demonstra viabilidade, não valida estatisticamente o critério.
- A comparação com critérios clássicos (Tabela 2) deixa claro que espaciabilidade **não compete** com usabilidade/UX, mas **preenche uma lacuna específica**.
- O estudo de caso ilustra que **usabilidade alta não implica espaciabilidade alta** quando a tarefa exige cruzar múltiplos tipos de dados no mapa.
- Os autores declararam uso de **IA generativa (ChatGPT)** apenas para revisão gramatical e apoio à compreensão de conceitos.
