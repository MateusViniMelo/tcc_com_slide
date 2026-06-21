# Preparação para a Banca — TCC Mapa Cidadão

Documento de apoio à defesa do Trabalho de Conclusão de Curso sobre o **Mapa Cidadão** — aplicação de *crowdsourcing* urbano com ênfase em **espaciabilidade**, avaliação qualitativa com o **Método de Inspeção da Espaciabilidade (MIE)** e 3 especialistas.

**Instituição:** Universidade Federal do Pará (UFPA) — Faculdade de Computação

---

## Orientação

### Marcelle Pereira Mota (orientadora)

- Curso técnico em Telecomunicações pelo IFPA (2000–2003)
- Graduação em Ciência da Computação pela UFPA (2003–2007), título: *JavaTool: Uma Ferramenta para Ensino de Programação*
- Mestrado em Ciência da Computação pela UFPA (2008–2010), área de informática educativa; título: *Ambiente de Aprendizagem de Programação com Visualização e Avaliação Automática de Programas*
- Doutorado em Informática (IHC) pela PUC-Rio (2010–2014), título: *PoliFacets: um modelo de design da metacomunicação de documentos ativos para apoiar o ensino e aprendizado de programação*
- Professora Associada I da UFPA; vice-coordenadora do PPGCOMP/UFPA
- Editora associada da área de IHC na *Journal on Interactive Systems* (JIS)
- Ex-representante do BR-CHI (2019–2021); ex-coordenadora da CE-IHC/SBC (2021–2023); ex-representante institucional da UFPA na SBC (2016–2024)
- Ex-diretora da Faculdade de Computação (2015–2017); ex-coordenadora do PPGCOMP (2021–2025)
- Membro da comissão de educação da SBC (2023–2027); secretária regional adjunta da região Norte 2 da SBC
- Organizadora do Curso de Qualidade na Educação Superior no Congresso da SBC (2026)

### André Avelino da Silva Neto (coorientador)

- Ensino médio no Centro de Estudos Impacto — CEI (2009–2011)
- Graduação em Sistemas de Informação pela UFPA (2012–2016), título: *A implementação de um criptossistema El Gamal limiar e sua integração a um sistema de votação eletrônica*
- Mestrado em Ciência da Computação pela UFPA (2017–2019), áreas de segurança da informação e IHC; título: *Considerações de usabilidade para sistemas eleitorais resistentes à coerção*
- Doutorado em andamento em Ciência da Computação pela UFPA (desde 2022), orientadora: Marcelle Pereira Mota
- Professor da UFPA; Técnico Científico no Banco da Amazônia
- Coautor do Método de Inspeção da Espaciabilidade (MIE), com Marcelle Pereira Mota

---

## Membros da banca

### Vinicius Augusto Carvalho de Abreu

- Graduação em Ciência da Computação pelo Centro Universitário do Estado do Pará — CESUPA (2003–2008), título: *TV Digital: um estudo comparativo dos padrões de Middleware*
- Doutorado em Bioinformática pela UFMG (2010–2014), com período sanduíche no Max-Planck-Institut für Informatik (orientador: Jan Baumbach); título: *CMRegNet — uma plataforma de análise interativa para estudar redes regulatórias transcricionais dos gêneros Corynebacterium e Mycobacterium*; programa com conceito 7 CAPES
- Pós-doutorado na UFMG (2014–2015)
- Pós-doutorado no CENA/USP (2015–2018)
- Pós-doutorado na Universidad de Buenos Aires — UBA, Argentina (2024–2025)
- Professor Adjunto da UFPA (dedicação exclusiva), Departamento de Computação
- Membro do PPGCOMP/UFPA (conceito 6) e PPGCI/UFPA (conceito 5)
- Pesquisa em Bioinformática e Biologia Computacional: algoritmos, pipelines, workflows, dados ômicos, genômica comparativa, redes de regulação gênica e gestão da informação científica
- Ex-vice-chefe e chefe de departamento (2020–2023); membro do NDE (2020–2025)
- Integrante da CPA/UFPA — desenvolvimento e automação de indicadores acadêmicos
- Sócio fundador da startup **Katu Data Visualization** (visualização de dados e análise inteligente da informação)
- Coordena projetos financiados por agências nacionais e internacionais

### Josivan Rodrigues dos Reis

- Graduação em Ciências da Computação pela Universidade da Amazônia (UNAMA, 2005–2009)
- Mestrado em Ciências da Computação pela UFPE (2010–2012), com foco em reconhecimento de faces, visão computacional e processamento de imagens; pesquisas vinculadas ao VIISAR (UFPE) e ao Centro de Tecnologia Estratégica do Nordeste
- Doutorado em Engenharia Elétrica pela UFPA (2021–2025), título: *Metodologia de Previsão de Cenários do Preço da Curva Forward de Energia Elétrica nos Horizontes de Médio e Longo Prazo*
- Professor da UFOPA — Campus Oriximiná/PA (2018–2025)
- Atualmente Projeto Adjunto na UFPA e Pesquisador do CEAMAZON (Centro de Excelência em Eficiência Energética da Amazônia)
- Atuação em ensino, pesquisa e extensão com ênfase em Visão Computacional, Eficiência Energética, Tecnologias Educacionais e Acessibilidade Digital

---

## Visão geral da banca

A banca é **interdisciplinar dentro de Computação**, mas **não centrada em IHC**. Os dois avaliadores têm forte viés em **dados, visualização e sistemas aplicados**:

| Membro | Eixo principal | Conexão com o trabalho |
|--------|----------------|------------------------|
| **Vinicius** | Bioinformática, pipelines, visualização de dados, gestão da informação | Dados georreferenciados, visualização cartográfica, análise espacial, indicadores |
| **Josivan** | Visão computacional, ML, acessibilidade digital, tecnologias educacionais | Símbolos/cores no mapa, usabilidade, aplicação prática e social |

Isso é positivo: tendem a valorizar **impacto técnico e aplicado**, não só teoria de IHC.

---

## Vinicius Augusto — o que provavelmente observa

### Pontos fortes do trabalho para ele

- Tratamento de **dados espaciais** (mesmo em escala piloto)
- **Visualização** como meio de interpretação — alinhado à Katu Data Visualization
- **Pipeline metodológico** estruturado (desenvolvimento → personas/tarefas → MIE → análise temática)
- Interface entre **Ciência da Computação e Ciência da Informação** (dados colaborativos, governança urbana)

### Perguntas prováveis

1. **"Como o sistema escalaria com milhares de ocorrências?"**  
   Prepare resposta sobre agregação, clustering, heatmaps e filtros (já apontados como trabalho futuro no artigo).

2. **"Como validar a qualidade dos dados do crowdsourcing?"**  
   Mecanismo de "like", autenticação, limitações de confiabilidade.

3. **"Por que análise qualitativa e não métricas quantitativas?"**  
   Justifique o caráter exploratório e o refinamento do MIE; cite que é pesquisa em andamento.

4. **"Quais indicadores espaciais poderiam ser automatizados?"**  
   Concentração por bairro, recorrência, correlações entre tipos de ocorrência (como relatado por P1 na avaliação).

### Como conectar na fala

Enfatize o Mapa Cidadão como **artefato de análise de informação espacial**, não só como app de registro. Destaque que o sistema funciona como **visualizador colaborativo** com base promissora para **análise espacial avançada**.

---

## Josivan Rodrigues — o que provavelmente observa

### Pontos fortes do trabalho para ele

- **Acessibilidade digital** — legibilidade de ícones/cores (dimensão D6), identificada como fragilidade
- **Tecnologias educacionais/cívicas** — engajamento cidadão, participação digital
- **Processamento visual** — distinção simbólica entre categorias no mapa
- **Aplicação na Amazônia** — problemas urbanos locais (alagamento, infraestrutura)

### Perguntas prováveis

1. **"O sistema é acessível para pessoas com deficiência visual ou baixa literacia digital?"**  
   Se não foi avaliado, reconheça como limitação e cite WCAG/contraste de cores como direção futura.

2. **"Por que ícones e cores específicas? Há base em reconhecimento visual?"**  
   Relacione com D6 do MIE e com literatura de geovisualização/cognição espacial.

3. **"Qual o uso prático em Oriximiná/Amazônia?"**  
   Contextualize o problema urbano regional.

4. **"Visão computacional poderia ajudar?"**  
   Validação automática de fotos de ocorrências, detecção de padrões visuais; boa resposta se ele puxar para ML.

### Como conectar na fala

Ao falar de **usabilidade e UX** (7 e 3 evidências nos resultados), destaque que qualidade visual e acessibilidade impactam diretamente a **interpretação espacial** — não são "extras" de interface.

---

## Perguntas que os dois podem fazer juntos

1. **Amostra pequena (n = 3 especialistas)**  
   Estudo piloto para validar o MIE e o conceito; ampliar com usuários leigos e testes quantitativos é trabalho futuro.

2. **Contribuição científica**  
   Operacionalização da espaciabilidade + evidências empíricas + refinamento do MIE + sistema real.

3. **Diferencial do Mapa Cidadão**  
   Ir além de "pin no mapa"; espaciabilidade como critério de design desde a concepção.

4. **Implementação técnica**  
   Stack, APIs de mapa, persistência, arquitetura — tenha 2–3 frases prontas mesmo que o foco do TCC não seja engenharia de software.

---

## Resultados principais (referência para a defesa)

Evidências por categoria analítica (análise temática — relatórios + entrevistas):

| Categoria | Evidências |
|-----------|------------|
| Espaciabilidade | 11 |
| Usabilidade | 7 |
| UX | 3 |
| MIE | 2 |
| **Total** | **23** |

**Síntese dos achados:**

- 23 evidências ricas e consistentes identificadas por análise temática
- Espaciabilidade liderou os achados, confirmando o potencial do Mapa Cidadão como artefato cognitivo espacial
- Usabilidade e UX também se destacaram, evidenciando proposta holística de qualidade em IHC
- O sistema cumpre bem o papel de visualizador colaborativo, com base promissora para análise espacial avançada

**Limitações reconhecidas no trabalho:**

- Ausência de filtros, agregação e visualização analítica (D2, D4)
- Fragilidades na simbologia e legibilidade (D6)
- Amostra reduzida de especialistas (estudo piloto)

**Direções futuras:**

- Incluir filtros, agregação e visualização analítica
- Aprimorar simbologia para legibilidade
- Ampliar avaliação com mais participantes e usuários leigos

---

## Dicas práticas para a apresentação

### No slide de resultados (página 19)

- Ao apresentar o gráfico, **explique em uma frase** o que é cada categoria analítica — a banca pode não dominar o MIE
- Destaque que **espaciabilidade liderou** sem minimizar usabilidade/UX: reforça a proposta holística do artigo

### Na defesa oral

- **Vinicius:** fale em *dados, visualização, pipelines analíticos futuros, gestão da informação científica/cívica*
- **Josivan:** fale em *acessibilidade, legibilidade visual, impacto social, tecnologia cívica na região*
- **Ambos:** reconheça limitações com clareza e mostre que orientam o roadmap, não invalidam o trabalho

### Evitar

- Jargão excessivo de IHC sem tradução — *espaciabilidade = capacidade da interface de apoiar raciocínio espacial*
- Prometer funcionalidades que não existem no sistema avaliado
- Tratar o trabalho como "só um app de mapa"

---

## Síntese

A banca combina **visualização e análise de dados** (Vinicius) com **visão, acessibilidade e aplicação social** (Josivan). O TCC encaixa bem nessa interface, desde que se **traduza espaciabilidade e MIE para linguagem de dados espaciais, visualização e impacto cívico**, e se esteja preparado para limitações metodológicas (n = 3, qualitativo) e técnicas (falta de agregação/filtros).
