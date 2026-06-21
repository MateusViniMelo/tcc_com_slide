# Síntese da avaliação — Mapa Cidadão

Documento consolidado a partir de todo o material em `leituras/entrevistas/` e do arquivo complementar `leituras/avaliacao_de_usabilidade_mapa_cidadao.pdf`.

**Objetivo:** registrar o que os relatórios de inspeção, transcrições de entrevistas e protocolos revelam sobre a avaliação do Mapa Cidadão com o MIE — além do que já está sintetizado no artigo (`main.tex`).

---

## 1. Materiais consultados

| Arquivo | Tipo | Conteúdo principal |
|---------|------|-------------------|
| `avaliacao.pdf` | Protocolo | Dimensões D1–D6, personas João/Ana, tarefas de validação |
| `avaliacao.md` | Markdown | Versão estruturada do protocolo acima |
| `resultado_avaliacao.pdf` | Relatórios | Inspeções narrativas de **Lorrane Nobre**, **Luciano Teran** e **Phelipe Feio** |
| `transcrição_lorrane.pdf` | Entrevista | Entrevista semiestruturada pós-inspeção (Lorrane) |
| `transcrição_phelipe.pdf` | Entrevista | Entrevista semiestruturada pós-inspeção (Phelipe) |
| `../avaliacao_de_usabilidade_mapa_cidadao.pdf` | Relatório | Avaliação positiva simulando persona Ana (4 tarefas, impacto no design) |

**Correspondência com o artigo (P1, P2, P3):**

| Código no artigo | Nome nos relatórios | Perfil (artigo) |
|------------------|---------------------|-----------------|
| **P1** | Lorrane Nobre | Mestranda, ~3 anos de IHC |
| **P2** | Luciano Teran | Doutorando, ~6 anos, experiência em crowdsourcing georreferenciado |
| **P3** | Phelipe Feio | Doutorando, ~4 anos de IHC |

Não há transcrição de Luciano Teran (P2) na pasta — apenas relatório em `resultado_avaliacao.pdf`.

---

## 2. Protocolo de avaliação (MIE)

### 2.1 Papel do avaliador

Especialista em IHC ou design simula o uso do sistema, executa tarefas com personas e registra **barreiras ao raciocínio espacial**, problemas, sugestões e recomendações — opcionalmente anotando usabilidade e UX quando interferirem na interpretação do mapa.

### 2.2 Dimensões de espaciabilidade

| Dim. | Foco | Pergunta orientadora |
|------|------|----------------------|
| **D1** | Orientação e direção | O usuário entende onde está cada ocorrência? |
| **D2** | Padrões espaciais | É possível ver áreas com mais ocorrências (ex.: alagamentos)? |
| **D3** | Localização ideal | Gestores/usuários identificam onde intervir primeiro? |
| **D4** | Associações espaciais | Dá para relacionar tipos de problemas (pavimentação ↔ alagamento)? |
| **D5** | Sobreposição de camadas | Com mais dados futuros, será possível analisar sobreposições? |
| **D6** | Tipos espaciais | Ícones e marcadores diferenciam claramente cada categoria? |

**Tarefas explícitas no protocolo:** D1, D2, D4 e D6. D3 e D5 ficam como referência para observações espontâneas.

### 2.3 Personas

**João (40 anos)** — morador de bairro periférico; registra iluminação queimada e buracos; quer saber se a prefeitura resolve e se problemas são recorrentes.

**Ana (27 anos)** — estudante universitária; consulta ocorrências na região, registra lixo e alagamentos; quer entender impacto na mobilidade e qualidade de vida.

### 2.4 Tarefas obrigatórias

| Tarefa | Dim. | Persona | Enunciado resumido |
|--------|------|---------|-------------------|
| 1 | D1 | João | Localizar ocorrências de iluminação no bairro e verificar padrão nas ruas |
| 2 | D2 | Ana | Identificar áreas da cidade com maior número de alagamentos |
| 3 | D4 | João | Relacionar falta de pavimentação com alagamentos no bairro |
| 4 | D6 | Ana | Compreender claramente o que representa cada marcador |

### 2.5 Entrega esperada (relatório)

Para cada tarefa: resumo dos passos; problemas (com dimensão); severidade/impacto no raciocínio espacial; recomendações objetivas.

---

## 3. Relatórios de inspeção (`resultado_avaliacao.pdf`)

### 3.1 Lorrane Nobre (P1) — formato narrativo

Abordagem **passo a passo**, simulando a jornada real do usuário. Destaques:

#### Jornada de primeiro acesso e login

- No cenário D1, não havia ícone de iluminação visível no mapa; usou botão de categoria e opção "informar problema".
- Tentou localização atual; ao informar ocorrência, recebeu pop-up: *"Erro — Faça o login para informar uma ocorrência"*.
- Fluxo de cadastro (nome, e-mail, data de nascimento, senha) funcionou; retornou à tarefa com sucesso.
- **Usabilidade:** ícone de contagem de palavras sobreposto ao corretor ortográfico; após salvar ocorrência, mensagem de sucesso sem indicar nome/ID da ocorrência.

#### Por dimensão

| Dim. | Achado | Recomendação |
|------|--------|--------------|
| **D1** | Informações ao clicar no marcador pouco claras (tipo, endereço, like, encerrar, fechar); mesmo problema em pavimentação | Verificar ortografia de endereços; padronizar descrição dos ícones |
| **D2** | Ana não encontrou filtro ou agrupamento de locais | Ao clicar no nome do problema, exibir quantidade e localização dos cadastros |
| **D4** | João não entende relação pavimentação ↔ alagamento; pontos não informam **recorrência**, só horário de cadastro | Incluir dado de recorrência (armazenável pelo sistema) |
| **D6** | Poucas informações nos pontos; buscou menu "Sobre" para entender o sistema | — |

**Formato do relatório:** narrativo, rico em detalhes de interação — alinhado ao que o artigo descreve como abordagem que gerou maior riqueza de dados (P1).

---

### 3.2 Luciano Teran (P2) — formato por dimensão

Abordagem **organizada por dimensão D1–D6**, com pontos positivos e negativos em cada uma.

| Dim. | Avaliação | Observações |
|------|-----------|-------------|
| **D1** | Sim, com ressalva | Falta indicar localização do usuário em relação ao problema; sugeriu notificação de proximidade (ex.: alagamento) |
| **D2** | Sim | Concentração visível de problemas em área específica ao observar ponteiros |
| **D3** | Sim | Localização permite ir ao lugar afetado; anonimato do reportador é ponto positivo |
| **D4** | Sim, com ressalva | No mesmo bairro, conjunto de problemas afeta qualidade de vida (ex.: alagamento + falta de energia); filtro temporal (dia/semana) seria útil |
| **D5** | Parcial | Depende de zoom; em escala da cidade, ponteiros sobrepostos — sugere filtros por distância ou tipo espacial |
| **D6** | Sim, com ressalva | Legenda à direita ajuda; ao clicar no item, significado fica claro; **pavimentação e sem pavimentação têm cores similares** — risco para baixa visão |

**Tom geral:** mais otimista que P1 quanto à espaciabilidade básica, mas convergente na necessidade de **filtros** e **melhoria de simbologia/cores**.

---

### 3.3 Phelipe Feio (P3) — formato tabular + cenários

Duas seções: (1) avaliação geral por dimensão; (2) desempenho por cenário/persona.

#### Seção 1 — Percepção por dimensão

| Dim. | Status | Sugestão |
|------|--------|----------|
| D1 | OK | Manter clareza visual |
| D2 | OK | Manter ícone de alagamento |
| D3 | OK | Manter click-to-identify |
| D4 | OK | Manter flexibilidade de tipos de problemas |
| D5 | **Não entendido** | Conceito de sobreposição de camadas não ficou claro |
| D6 | **Atenção** | Iluminação: ícone mais direto (lâmpada); pavimentação: de longe parece binóculo |

#### Seção 2 — Desempenho nos cenários

| Cenário | Resultado |
|---------|-----------|
| D1 (João localiza iluminação) | OK — localização e padrões próximos |
| D2 (Ana identifica alagamentos) | **Falha/limitação** — impossível filtrar e analisar um único tipo de padrão |
| D4 (João relaciona pavimentação/alagamento) | OK — percebe potencial analítico, mas ícones de D6 ainda precisam melhorar |
| D6 (clareza dos ícones) | Atenção — mesmas sugestões de ícones |

**Formato do relatório:** tabular, facilita categorização — alinhado ao artigo (P2 e P3).

---

## 4. Entrevistas semiestruturadas

### 4.1 Lorrane Nobre (P1) — `transcrição_lorrane.pdf`

#### Experiência prévia com mapas

Google Maps, Waze e Citymapper (Alemanha). Uso principalmente para transporte e busca de locais — **não** para questões sociais/urbanas colaborativas.

#### Primeira impressão do Mapa Cidadão

Proposta **distinta e útil** em relação a apps de geolocalização. Comparou com Waze (buracos, acidentes), mas notou que lá o foco é trânsito e validação momentânea; o Mapa Cidadão propõe registro urbano mais persistente e social.

#### Visualizador vs. ferramenta analítica

Tende ao **visualizador**: falta vivência do usuário para interpretar dados sociais no mapa, diferente do trânsito (mais consolidado no Google Maps/Waze).

> *"(...) ainda falta um pouco de vivência do usuário para que ele consiga entender e interpretar os dados mostrados no mapa."*

#### Design e espaciabilidade

Filtros, cores, disposição de botões e funcionalidades **potencializam** o uso — mas o sistema ainda não oferece filtros analíticos suficientes.

#### Pontos positivos

Balão explícito "cadastrar uma ocorrência" — mais claro que em outros apps onde o cadastro só aparece após clique.

#### Pontos negativos

- Hover no marcador: endereço, like e encerrar pouco claros; descrição cadastrada não aparece.
- Significado de "like" e "encerrar" ambíguo (*"Encerrar a ocorrência? Indicar que foi resolvida?"*).
- Dificuldade em encontrar histórico de ocorrências cadastradas.
- Login não evidente no primeiro acesso.

#### Melhorias sugeridas (design)

- Pop-up no primeiro acesso: tem cadastro? deseja se cadastrar?
- Mover **"Minhas ocorrências"** para barra superior (entre "Início" e "Sobre"); "Sobre" poderia ir para menu de perfil.
- Tutorial/onboarding no primeiro acesso (destacar botões e funcionalidades).

#### Avaliação do MIE

- Personas bem construídas; **cenários poderiam ser mais claros** (ex.: indicar que usuário buscará histórico ou filtros).
- Tarefas **não refletem plenamente situações reais** no estado atual do sistema — falta filtro por tipo e por bairro com dados quantitativos.
- Sugestão analítica detalhada: filtro por bairro mostrando *"Neste bairro há X ocorrências de lixo, Y de pavimentação..."* ou filtro por tipo com distribuição por bairro.

---

### 4.2 Phelipe Feio (P3) — `transcrição_phelipe.pdf`

#### Experiência prévia com mapas

Waze como referência mais próxima (inserir barreiras durante navegação), mas limitado a trânsito — Mapa Cidadão permite expandir para pavimentação, energia, lixo.

#### Primeira impressão

Interessante para usuário e população local; forma de **demonstrar problemas ao poder público**; potencial de **relacionar variáveis** (lixo + alagamento).

#### Visualizador vs. ferramenta analítica

**As duas coisas se completam** — depende do perfil de uso; possível juntar variáveis e chegar a conclusões territoriais.

#### Design e espaciabilidade

Potencializa espacialidade; pontos bem identificáveis.

#### Pontos positivos

- Liberdade de inserir etiquetas em qualquer parte do mapa.
- **"Likezinho"** como validação colaborativa — confirmação por quem mora na área.

#### Pontos negativos

- **Login não evidente** no primeiro acesso; caiu direto no mapa e só descobriu necessidade de login ao tentar interagir.
- Ícone de pavimentação confundido com **binóculo** quando reduzido.
- Iluminação: sugeriu **lâmpada** mais familiar.

#### Melhorias sugeridas

- Pop-up inicial explicando objetivo, funcionamento e **necessidade de login**.
- Melhorar legenda e iconografia (pavimentação, energia).

#### Avaliação do MIE

- Tarefas e personas **adequadas**; idades diferentes trazem reflexão sobre formas de uso.
- Tarefas refletem situações reais e cobrem boa parte das funcionalidades.
- Sugestão metodológica: **incluir mais tarefas** para identificar gargalos e entendimentos vagos.

---

## 5. Avaliação de usabilidade complementar (`avaliacao_de_usabilidade_mapa_cidadao.pdf`)

Relatório distinto dos três especialistas: simula **persona Ana** com tom predominantemente **positivo** em todas as tarefas.

| Tarefa | Dim. | Avaliação | Tom |
|--------|------|-----------|-----|
| Localizar iluminação no bairro | D1 | Positivo | Mapa limpo; zoom fluido; marcadores claros |
| Identificar áreas com alagamentos | D2 | Positivo | Concentração de ícones azuis visível sem filtros |
| Relacionar alagamento e pavimentação | D4 | Positivo | Proximidade visual entre tipos; depende de sensibilidade do usuário |
| Interpretar ícones | D6 | Altamente positivo | Iconografia clara (lâmpada, gota, pá, lixeira) mesmo sem legenda |

**Observação:** este relatório **contrasta** com P1 e P3 em D2 (filtros) e D6 (ambiguidade de ícones). Pode representar outro momento de avaliação, outro avaliador ou foco em usabilidade idealizada — útil como contraponto, não como consenso unânime.

---

## 6. Síntese transversal

### 6.1 Convergências entre avaliadores

1. **Proposta social do Mapa Cidadão** é valorizada (distinta de Waze/Google Maps).
2. **D1 (orientação)** funciona em nível básico — localizar ocorrências no mapa.
3. **Ausência de filtros, agregação e visualização quantitativa** limita D2 e D4 (P1, P3; P2 sugere filtros temporais e por tipo).
4. **Login pouco integrado** à jornada de uso (P1 narrativa, P3 entrevista).
5. **Simbologia D6** precisa revisão: iluminação (lâmpada), pavimentação (confusão com binóculo), cores similares entre categorias (P2, P3).
6. **"Like" e "encerrar"** com significado pouco claro nos marcadores (P1).
7. **"Minhas ocorrências"** difícil de encontrar no menu de perfil (P1).
8. **Mecanismo de likes** visto como positivo para confiabilidade coletiva (P3; artigo/UX).
9. **Anonimato** valorizado (P2).

### 6.2 Divergências relevantes

| Tema | Visão mais crítica | Visão mais otimista |
|------|-------------------|---------------------|
| D2 (padrões) | P1, P3: impossível sem filtros | P2: concentração visível; relatório Ana: positivo |
| D4 (associações) | P1: falta recorrência | P2, P3: potencial analítico percebido |
| D6 (ícones) | P1, P3: ambiguidade | P2: legenda ajuda; relatório Ana: altamente positivo |
| Mapa como analítico | P1: mais visualizador | P3: visualizador + analítico |
| Tarefas refletem realidade | P1: não, no estado atual | P3: sim |

### 6.3 Evidências por categoria (artigo)

Distribuição da análise temática em `main.tex`:

| Categoria | Evidências |
|-----------|------------|
| Espaciabilidade | 11 |
| Usabilidade | 7 |
| UX | 3 |
| MIE | 2 |
| **Total** | **23** |

Grande parte das falas acima alimentou especialmente **espaciabilidade**, **usabilidade** (login, menu, like/encerrar) e **UX** (potencial social, familiaridade com dados urbanos).

---

## 7. Recomendações consolidadas

### 7.1 Sistema (Mapa Cidadão)

| Prioridade | Recomendação | Dimensões | Fontes |
|------------|--------------|-----------|--------|
| Alta | Filtros por tipo de ocorrência e por bairro/região | D2, D4 | P1, P2, P3, Lorrane (entrevista) |
| Alta | Agregação/quantificação (nº ou % de ocorrências por região) | D2, D4 | P1 |
| Alta | Dado de **recorrência** de problemas | D4 | P1 |
| Alta | Revisar ícones: lâmpada (iluminação), pavimentação menos ambígua | D6 | P2, P3 |
| Alta | Diferenciar cores (pavimentação vs. sem pavimentação; acessibilidade) | D6 | P2 |
| Média | Integrar localização do usuário no mapa / proximidade | D1 | P2 |
| Média | Pop-up ou onboarding no primeiro acesso (objetivo + login) | Usabilidade, UX | P1, P3 |
| Média | Clarificar ações "like" e "encerrar"; exibir descrição no hover | Usabilidade | P1 |
| Média | Reposicionar "Minhas ocorrências" na barra superior | Usabilidade | P1 |
| Média | Filtros temporais (dia, semana) | D4, D5 | P2 |
| Baixa | Clustering/sobreposição em zoom amplo | D5 | P2 |
| Baixa | Tutorial interativo (highlight de botões) | UX | P1 |

### 7.2 Método (MIE)

| Recomendação | Fonte |
|--------------|-------|
| Tarefas mais claras e analíticas (mencionar histórico, filtros esperados) | P1 |
| Mais tarefas para cobrir gargalos | P3 |
| Relatório em **formato misto**: narrativa da persona + categorização por dimensão | Artigo (comparando P1 vs. P2/P3) |
| Rótulos para diferenciar evidências de espaciabilidade, usabilidade e UX | Artigo |
| Rótulos de intenção: compreensão, interpretação, tomada de decisão | Artigo |

---

## 8. Citações úteis para a defesa

**P1 (Lorrane) — UX / interpretação de dados sociais:**
> *"(...) ainda falta um pouco de vivência do usuário para que ele consiga entender e interpretar os dados mostrados no mapa."*

**P1 (Lorrane) — D2 / filtros:**
> *"[...] não encontrou formas de visualização no mapa, como um filtro ou agrupamento de locais cadastrados."*

**P1 (Lorrane) — D4 / recorrência:**
> *"[...] os pontos cadastrados não fornecem informações sobre recorrência."*

**P3 (Phelipe) — validação social:**
> *"[...] o 'likezinho' [...] em um cenário maior [...] conseguimos ter uma validação de quem mora em determinada área."*

**P2 (Luciano) — D6 / acessibilidade:**
> *"[...] problemas de pavimentação e sem pavimentação são similares em suas cores, o que pode ter problemas caso [...] baixa visão."*

---

## 9. Lacunas do acervo

- Não há `transcrição_luciano.pdf` (P2) — apenas relatório tabulado/narrativo parcial em `resultado_avaliacao.pdf`.
- `avaliacao_de_usabilidade_mapa_cidadao.pdf` não identifica avaliador nem data; tom diverge dos três especialistas — tratar como material complementar.
- PDFs extraídos com formatação irregular (espaços entre letras); conteúdo semanticamente conferido, mas transcrições originais devem prevalecer em caso de dúvida.

---

## 10. Relação com o artigo e a apresentação

O `main.tex` sintetiza corretamente os achados principais deste acervo. O que os materiais brutos acrescentam para a defesa:

1. **Detalhes de jornada** (fluxo login → cadastro → erro → sucesso) — slide de usabilidade.
2. **Exemplos concretos de ícones** (binóculo, lâmpada) — slide D6 e resposta a Josivan (visão/acessibilidade).
3. **Sugestões analíticas específicas** (filtro por bairro com contagem por tipo) — resposta a Vinicius (dados/indicadores).
4. **Divergência P1 vs. P3** sobre visualizador vs. analítico — nuance na discussão.
5. **Recomendações ao MIE** com base direta nas entrevistas de Lorrane e Phelipe.

Para roteiro oral enriquecido, ver também `apresentacao.md` na raiz do repositório.

---

*Documento gerado com base na leitura integral de `avaliacao.md`, `avaliacao.pdf`, `resultado_avaliacao.pdf`, `transcrição_lorrane.pdf`, `transcrição_phelipe.pdf` e `avaliacao_de_usabilidade_mapa_cidadao.pdf`.*
