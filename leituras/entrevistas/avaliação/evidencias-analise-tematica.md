# Análise temática — Avaliação do Mapa Cidadão (MIE)

Análise temática **dedutiva** dos relatórios de inspeção (P1–P3) e das entrevistas semiestruturadas pós-inspeção (P1 e P3), conduzidas com especialistas em IHC/design sobre o **Mapa Cidadão** mediante o **Método de Inspeção da Espaciabilidade (MIE)**.

As quatro categorias analíticas foram definidas a priori: **espaciabilidade**, **usabilidade**, **experiência do usuário (UX)** e **avaliação do MIE**.

Cada evidência recebe uma classificação de percepção dos avaliadores:

| Tipo | Significado |
|------|-------------|
| **Positivo** | Aspecto reconhecido como funcional, satisfatório ou com valor percebido |
| **Oportunidade de melhoria** | Funcionalidade parcial ou sugestão de evolução incremental; não invalida o uso atual |
| **Limitação** | Barreira, lacuna ou dificuldade que compromete ou restringe o objetivo da tarefa/dimensão |

---

## Metodologia

| Aspecto | Descrição |
|---------|-----------|
| **Abordagem** | Análise temática dedutiva com codificação por tipo de percepção |
| **Participantes** | P1 (Lorrane Nobre), P2 (Luciano Teran), P3 (Phelipe Feio) |
| **Instrumentos** | Inspeção MIE (D1, D2, D4, D6; personas João e Ana) + entrevista semiestruturada (~50–60 min) |
| **Fontes** | `resultados_avaliação/entendimento-avaliacoes.md`; `resultado_entrevista/entendimento-entrevista-p1.md`, `entendimento-entrevista-p3.md` |
| **Total** | **23 evidências** — 11 espaciabilidade · 7 usabilidade · 3 UX · 2 MIE |

**Critério:** cada evidência indica código, **tipo de percepção**, dimensão MIE (quando couber), fonte, síntese dos achados e interpretação — preservando **divergências** entre avaliadores quando existirem.

---

## Leitura geral (honesta)

Os três avaliadores concordam que o Mapa Cidadão realiza **registro georreferenciado** e **visualização pontual** de ocorrências. **D1** e **D3** apresentam desempenho em geral satisfatório (P2, P3); P1 ressalva clareza insuficiente nos detalhes dos marcadores.

As avaliações **não são unânimes**. Em **D2**, P2 percebe concentrações visuais nos ponteiros, enquanto P1 e P3 registram **falha ou limitação** sem filtros por tipo. Em **D4**, P2 e P3 veem potencial associativo; P1 não sustenta hipóteses por falta de **recorrência**. P1 classifica o sistema hoje como **visualizador**, não ferramenta analítica; P3 considera que visualização e análise **se complementam**.

A **ausência de filtros e agregação** (tipo, bairro, tempo, quantidade) é a lacuna mais citada — classificada como **limitação** em D2 e D4. **D6** (simbologia) e o **primeiro acesso** (login) aparecem de forma consistente como limitação ou oportunidade de melhoria.

---

## Resumo por categoria

| Categoria | Total | Positivo | Oportunidade | Limitação |
|-----------|:-----:|:--------:|:------------:|:---------:|
| **Espaciabilidade** | 11 | 4 | 3 | 4 |
| **Usabilidade** | 7 | 2 | 3 | 2 |
| **UX** | 3 | 3 | 0 | 0 |
| **MIE** | 2 | 1 | 1 | 0 |

---

## 1. Espaciabilidade (11 evidências)

---

### E-ESP01 — Localização de ocorrências no mapa

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | D1 — Orientação e direção |
| **Fonte** | P2, P3 — inspeção |
| **Evidência** | P2: usuário **entende onde estão as ocorrências**. P3: cenário João (D1) com resultado **OK** — localização e padrões próximos funcionam. |
| **Interpretação** | A georreferenciação atende consulta de localização em nível básico — dimensão com melhor consenso entre avaliadores. |

---

### E-ESP02 — Detalhes dos marcadores e posição do usuário

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Oportunidade de melhoria |
| **Dimensão** | D1 — Orientação e direção |
| **Fonte** | P1 — inspeção; P2 — inspeção |
| **Evidência** | P1: ao clicar no marcador, informações (tipo, endereço, like, encerrar) **não são claras**; poucas informações nos pontos. P2: falta indicar **posição do usuário** em relação ao problema; sugere notificação de proximidade. |
| **Interpretação** | D1 funciona para localizar pontos, mas a orientação espacial **pode ser enriquecida** — densidade informacional nos marcadores e referência egocêntrica do usuário. |

---

### E-ESP03 — Concentrações visuais perceptíveis

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | D2 — Padrões espaciais |
| **Fonte** | P2 — inspeção |
| **Evidência** | P2 avalia D2 como **sim**: ao observar os ponteiros, **percebe concentração de problemas** em área específica da cidade. |
| **Interpretação** | Leitura visual de padrões é **possível** por inspeção direta do mapa — visão mais otimista, divergente de P1 e P3 na mesma dimensão. |

---

### E-ESP04 — Ausência de filtros e agrupamento por tipo

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Limitação |
| **Dimensão** | D2 — Padrões espaciais |
| **Fonte** | P1, P3 — inspeção; P1 — entrevista |
| **Evidência** | P1: Ana **não encontrou filtro nem agrupamento** para áreas com alagamento. P3: cenário D2 com **falha/limitação** — impossível filtrar um único tipo de padrão. P1 na entrevista: tarefas analíticas **não correspondem** às funcionalidades atuais sem agregação. |
| **Interpretação** | **Dimensão mais criticada** por P1 e P3; principal barreira ao raciocínio espacial analítico em D2. P2 reconhece concentrações, mas também sugere filtros. |

---

### E-ESP05 — Georreferenciação para intervenção

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | D3 — Localização ideal |
| **Fonte** | P2, P3 — inspeção |
| **Evidência** | P2: D3 **sim** — localização permite ir ao local afetado; **anonimato** do reportador valorizado. P3: D3 **OK**; click-to-identify funcional. |
| **Interpretação** | Precisão geográfica dos marcadores apoia identificar **onde intervir**, com consenso positivo entre P2 e P3. |

---

### E-ESP06 — Associações espaciais e potencial analítico

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | D4 — Associações espaciais |
| **Fonte** | P2, P3 — inspeção; P3 — entrevista |
| **Evidência** | P2: D4 **sim** — no mesmo bairro, conjunto de problemas (alagamento + falta de energia). P3: D4 **OK**; percebe **potencial analítico** no relacionamento de dados. P3 na entrevista: possível **relacionar variáveis** (ex.: lixo ↔ alagamento). |
| **Interpretação** | Proximidade visual entre tipos de ocorrência **viabiliza associações básicas** — leitura otimista compartilhada por P2 e P3. |

---

### E-ESP07 — Associações sem suporte de recorrência

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Limitação |
| **Dimensão** | D4 — Associações espaciais |
| **Fonte** | P1 — inspeção |
| **Evidência** | João **não consegue sustentar** associação pavimentação ↔ alagamento: pontos exibem apenas **horário de cadastro**, sem informação de **recorrência**. |
| **Interpretação** | Visão mais crítica de P1: proximidade visual **não basta** para inferência relacional sem metadados analíticos. Contrasta com E-ESP06. |

---

### E-ESP08 — Filtros, agregação e dados temporais

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Oportunidade de melhoria |
| **Dimensão** | Transversal (D2, D4) |
| **Fonte** | P1, P2, P3 — inspeção; P1 — entrevista |
| **Evidência** | Convergência nos três relatórios: **filtros por tipo, bairro/região, contagem e tempo**. P1 sugere: *"Neste bairro há X ocorrências de lixo, Y de pavimentação..."* P2: **filtro temporal** (dia, semana) ajudaria em D4. |
| **Interpretação** | Recomendação **mais consensual** dos avaliadores — evolução necessária para análise territorial, sem negar o registro pontual atual. |

---

### E-ESP09 — Sobreposição de camadas pouco compreendida

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Limitação |
| **Dimensão** | D5 — Sobreposição de camadas |
| **Fonte** | P3 — inspeção |
| **Evidência** | P3: conceito de sobreposição de camadas **não foi entendido** na interface atual. |
| **Interpretação** | D5 é a dimensão com percepção mais negativa de P3 — interface não comunica análise multicamada. |

---

### E-ESP10 — Exploração por zoom e escala

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Oportunidade de melhoria |
| **Dimensão** | D5 — Sobreposição de camadas |
| **Fonte** | P2 — inspeção |
| **Evidência** | P2: D5 **parcial** — sobreposição depende de zoom; em zoom próximo a leitura é viável; em escala da cidade, ponteiros se acumulam — sugere **filtros por distância ou tipo**. |
| **Interpretação** | P2 vê potencial em D5 com navegação por escala, mas reconhece degradação em zoom amplo — visão intermediária em relação a P3. |

---

### E-ESP11 — Simbologia e clareza dos marcadores

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Limitação |
| **Dimensão** | D6 — Interpretação de tipos |
| **Fonte** | P1, P2, P3 — inspeção; P3 — entrevista |
| **Evidência** | P1: poucas informações nos pontos; buscou menu "Sobre". P3: iluminação (sugerir lâmpada); pavimentação confunde com **binóculo**. P2: legenda ajuda, mas **cores similares** entre pavimentação e sem pavimentação — risco para baixa visão. |
| **Interpretação** | **Consenso transversal** sobre necessidade de revisão em D6 — diverge apenas no grau: P2 reconhece apoio da legenda; P1 e P3 são mais críticos. |

---

## 2. Usabilidade (7 evidências)

---

### E-USA01 — Cadastro e criação de ocorrência concluídos

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | — (fluxo de registro) |
| **Fonte** | P1 — inspeção |
| **Evidência** | P1 completou cadastro (nome, e-mail, senha) e **criou ocorrência** com endereço pré-preenchido, categoria iluminação e descrição. |
| **Interpretação** | Após autenticação, o fluxo de registro georreferenciado **é funcional** — aspecto positivo documentado na jornada narrativa de P1. |

---

### E-USA02 — Descoberta da função principal de cadastro

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | — (descoberta de funcionalidade) |
| **Fonte** | P1 — entrevista |
| **Evidência** | P1 valoriza balão **"cadastrar uma ocorrência"** — mais claro que em Waze/Google Maps, onde o cadastro só aparece após clique. |
| **Interpretação** | Comunicação imediata do propósito do sistema — diferencial de usabilidade reconhecido na entrevista. |

---

### E-USA03 — Login e cadastro pouco evidentes no primeiro acesso

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Limitação |
| **Dimensão** | — (primeiro acesso) |
| **Fonte** | P1 — inspeção; P3 — entrevista |
| **Evidência** | P1: erro *"Faça o login para informar uma ocorrência"* sem cadastro evidente — fluxo descoberto via "Entrar" → "criar conta". P3: > *"Quando entrei, não identifiquei que precisava fazer login para usar a ferramenta."* |
| **Interpretação** | Barreira recorrente entre inspeção e entrevista — requisito de autenticação **não comunicado** antes da tentativa de uso. |

---

### E-USA04 — Onboarding no primeiro acesso

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Oportunidade de melhoria |
| **Dimensão** | — (primeiro acesso) |
| **Fonte** | P1, P3 — entrevista |
| **Evidência** | P1: pop-up perguntando se tem cadastro; tutorial de botões e funcionalidades. P3: pop-up explicando objetivo, funcionamento e **necessidade de login**. |
| **Interpretação** | Sugestão **consensual** entre P1 e P3 — melhoria incremental que reduziria atrito sem alterar arquitetura do sistema. |

---

### E-USA05 — Interação com marcadores insuficiente

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Limitação |
| **Dimensão** | D1, D6 (interface) |
| **Fonte** | P1 — inspeção e entrevista |
| **Evidência** | Hover exibe endereço, like e encerrar **sem contexto**; descrição do cadastro **não aparece**; significado de "like" e "encerrar" ambíguo. Após salvar, mensagem de sucesso **sem ID** da ocorrência. |
| **Interpretação** | Feedback pós-cadastro e detalhe dos marcadores **insuficientes** para acompanhar ocorrências — conecta usabilidade a D1 e D6. |

---

### E-USA06 — Histórico e rastreabilidade das ocorrências

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Oportunidade de melhoria |
| **Dimensão** | — (arquitetura de informação) |
| **Fonte** | P1 — entrevista |
| **Evidência** | P1 não encontrou **"Minhas ocorrências"** (no perfil); sugere reposicionar na barra superior. Dificuldade em retomar a ocorrência cadastrada. |
| **Interpretação** | Função relevante para persona João (acompanhar resolução) está **pouco acessível** — oportunidade de reorganização do menu. |

---

### E-USA07 — Conflito visual no formulário de cadastro

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Oportunidade de melhoria |
| **Dimensão** | — (formulário) |
| **Fonte** | P1 — inspeção |
| **Evidência** | Ícone de contagem de palavras **sobreposto ao corretor ortográfico** no campo de descrição. |
| **Interpretação** | Problema pontual de layout — não impede o registro, mas prejudica edição do texto. |

---

## 3. Experiência do usuário — UX (3 evidências)

---

### E-UX01 — Proposta social distinta dos apps de trânsito

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | — (percepção geral) |
| **Fonte** | P1 — entrevista |
| **Evidência** | P1: proposta **importante, distinta e útil** — questões sociais e urbanas com caráter **persistente**, diferente do Waze (dados momentâneos de trânsito). |
| **Interpretação** | Valor percebido da proposta participativa — Mapa Cidadão como complemento, não concorrente, aos mapas de mobilidade. |

---

### E-UX02 — Utilidade para cidadão e gestão pública

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | — (percepção geral) |
| **Fonte** | P3 — entrevista |
| **Evidência** | P3: duplo valor — **cidadão** (visão da região/bairro) e **poder público** (demonstrar onde existem problemas). |
| **Interpretação** | Experiência avaliada positivamente em termos de **utilidade social e institucional** — expectativa de uso territorial. |

---

### E-UX03 — Likes como validação comunitária

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | D4 (engajamento social) |
| **Fonte** | P3 — entrevista |
| **Evidência** | > *"[...] o 'likezinho' [...] conseguimos ter uma validação de quem mora em determinada área ou local e pode confirmar se aquela notificação realmente existe."* |
| **Interpretação** | Mecanismo de **confiança comunitária** — aspecto de UX social destacado por P3 e pouco enfatizado por P1. |

---

## 4. Avaliação do MIE (2 evidências)

---

### E-MIE01 — Personas e estrutura do protocolo

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Positivo |
| **Dimensão** | Meta-avaliação |
| **Fonte** | P1, P3 — entrevista |
| **Evidência** | P1: personas **bem construídas**, tarefas **bem direcionadas**. P3: tarefas **adequadas** para provocar reflexão espacial; João e Ana trazem perspectivas distintas. P3: > *"Acredito que ela consegue avaliar de forma positiva essa compreensão espacial."* |
| **Interpretação** | O MIE é avaliado **positivamente** em estrutura — dimensões, personas e tarefas cumprem objetivo de inspeção da espaciabilidade. |

---

### E-MIE02 — Alinhamento tarefa–sistema e cobertura do protocolo

| Campo | Conteúdo |
|-------|----------|
| **Tipo** | Oportunidade de melhoria |
| **Dimensão** | Meta-avaliação |
| **Fonte** | P1, P3 — entrevista |
| **Evidência** | P1: tarefas analíticas **não refletem situações reais** no estado atual — > *"Não basta apenas cadastrar; ele precisa conseguir visualizar [dados agregados]."* Cenários poderiam ser mais explícitos. P3: incluir **mais tarefas** para identificar gargalos. |
| **Interpretação** | **Divergência metodológica:** P1 aponta desalinhamento design–tarefa; P3 pede expansão do protocolo. Ambas são oportunidades de refinamento do MIE, não invalidação do método. |

---

## 5. Síntese transversal

### Distribuição das 23 evidências por tipo

| Tipo | Espaciabilidade | Usabilidade | UX | MIE | Total |
|------|:-------------:|:-----------:|:--:|:---:|:-----:|
| Positivo | 4 | 2 | 3 | 1 | **10** |
| Oportunidade | 3 | 3 | 0 | 1 | **7** |
| Limitação | 4 | 2 | 0 | 0 | **6** |

### O que os avaliadores reconhecem (positivo)

- Registro georreferenciado e visualização pontual funcionais (P1–P3).
- **D1** e **D3** com desempenho satisfatório em nível básico (P2, P3).
- Leitura visual de concentrações (P2) e associações entre tipos (P2, P3).
- Proposta social valorizada e mecanismo de likes (P1, P3 — entrevistas).
- MIE com personas e tarefas bem estruturadas (P1, P3).

### Limitações mais consistentes

- **Filtros e agregação** ausentes — D2 e D4 (P1, P2, P3).
- **Simbologia** em D6 — ícones e cores (P1, P2, P3).
- **Login** não evidente no primeiro acesso (P1, P3).
- **Recorrência** insuficiente para associações analíticas (P1).
- **D5** pouco compreendido (P3).

### Oportunidades de melhoria prioritárias

1. Filtros por tipo, bairro/região, tempo e contagem (E-ESP08).
2. Onboarding e comunicação de login (E-USA04).
3. Revisão de ícones, cores e detalhes nos marcadores (E-ESP11, E-USA05).
4. Refinamento do MIE — cenários mais explícitos (P1) ou mais tarefas (P3) (E-MIE02).

### Divergências a preservar na discussão

| Tema | P1 | P2 | P3 |
|------|----|----|-----|
| D2 (padrões) | Limitação — sem filtros | Positivo — concentrações visíveis | Limitação — falha/limitação |
| Visualizador vs. analítico | Visualizador | — | Ambos se complementam |
| Tarefas refletem realidade? | Não | — | Sim |
| D6 (ícones) | Limitação | Oportunidade (legenda ajuda) | Limitação |

### Implicações para o TCC

As 23 evidências sustentam leitura **equilibrada**: o Mapa Cidadão atende **consulta pontual e registro colaborativo**, mas **não sustenta análise territorial sistemática** sem filtros, agregação e revisão de simbologia. O MIE cumpriu papel diagnóstico — expondo convergências, limitações e divergências entre especialistas com critérios distintos (P1 exige o que a tarefa pede; P3 pondera o que o sistema oferece).

---

## Referências

| Documento | Conteúdo |
|-----------|----------|
| `resultados_avaliação/entendimento-avaliacoes.md` | Síntese dos relatórios de inspeção P1, P2 e P3 |
| `resultado_entrevista/entendimento-entrevista-p1.md` | Síntese da entrevista com P1 |
| `resultado_entrevista/entendimento-entrevista-p3.md` | Síntese da entrevista com P3 |
| `avaliacao.md` | Protocolo MIE — dimensões D1–D6, personas, tarefas |

---

*Análise elaborada com base nos dados de inspeção (P1–P3) e entrevistas semiestruturadas (P1 e P3), junho/2026.*
