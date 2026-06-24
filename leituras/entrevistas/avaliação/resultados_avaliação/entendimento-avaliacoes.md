# Entendimento das avaliações — Mapa Cidadão (MIE)

Síntese interpretativa dos relatórios de inspeção de **P1**, **P2** e **P3**, com base no protocolo em `avaliacao.md` e nos resultados registrados em `resultado_avaliacao.pdf`.

**Correspondência dos participantes:**

| Código | Avaliador |
|--------|-----------|
| **P1** | Lorrane Nobre |
| **P2** | Luciano Teran |
| **P3** | Phelipe Feio |

---

## 1. Contexto da avaliação

Os três avaliadores atuaram como especialistas em IHC/design, simulando o uso do **Mapa Cidadão** conforme o **Método de Inspeção da Espaciabilidade (MIE)**. O protocolo define seis dimensões de raciocínio espacial (D1–D6) e quatro tarefas obrigatórias com as personas **João** (morador que registra iluminação e pavimentação) e **Ana** (estudante que consulta alagamentos e interpreta marcadores).

| Dimensão | Foco |
|----------|------|
| **D1** | Orientação e direção — entender onde está cada ocorrência |
| **D2** | Padrões espaciais — perceber áreas com mais ocorrências |
| **D3** | Localização ideal — identificar onde intervir primeiro |
| **D4** | Associações espaciais — relacionar tipos de problemas |
| **D5** | Sobreposição de camadas — analisar múltiplos dados no mapa |
| **D6** | Interpretação de tipos — diferenciar ícones e categorias |

---

## 2. P1 — abordagem narrativa (jornada do usuário)

P1 adotou um relatório **passo a passo**, descrevendo a experiência real de uso antes de comentar cada dimensão. Esse formato expõe barreiras de usabilidade que interferem no raciocínio espacial.

### 2.1 Fluxo de primeiro acesso

- No cenário D1, não havia ícone de iluminação visível no mapa; usou o botão de categoria e a opção "informar problema".
- Tentou "localização atual" e, ao informar ocorrência sem login, recebeu: *"Erro — Faça o login para informar uma ocorrência"*.
- Não havia botão de cadastro evidente; descobriu o fluxo via "Entrar" → "criar conta".
- Cadastro (nome, e-mail, data de nascimento, senha) concluiu com sucesso.
- Retornou à tarefa e conseguiu criar a ocorrência (endereço pré-preenchido, categoria iluminação, descrição "não tem luz na minha rua").

**Problemas de usabilidade observados nesse fluxo:**

- Ícone de contagem de palavras sobreposto ao corretor ortográfico.
- Após salvar, mensagem de sucesso sem nome ou ID da ocorrência.

### 2.2 Achados por dimensão

| Dim. | Persona / cenário | O que P1 entendeu |
|------|-------------------|-------------------|
| **D1** | João localiza iluminação | Ao clicar no marcador, as informações do local (tipo, endereço, like, encerrar, fechar) não são claras; o mesmo ocorre em pavimentação. Sugestões: verificar ortografia dos endereços; padronizar descrição dos ícones. |
| **D2** | Ana identifica alagamentos | Não encontrou filtro nem agrupamento para visualizar áreas com pontos de alagamento. Sugestão: ao clicar no nome do problema, exibir quantidade e localização dos cadastros. |
| **D4** | João relaciona pavimentação e alagamento | Não consegue sustentar a associação: os pontos mostram apenas horário de cadastro, sem informação de **recorrência**. |
| **D6** | Ana interpreta marcadores | Poucas informações nos pontos do mapa; buscou o menu "Sobre" para entender o sistema. |

**Leitura geral:** P1 percebe que o sistema permite registrar e visualizar ocorrências em nível básico, mas a **falta de filtros, agregação e metadados analíticos** (recorrência, quantidade por região) limita o raciocínio espacial nas dimensões D2 e D4. Problemas de login, clareza dos marcadores e consistência visual também aparecem como barreiras.

---

## 3. P2 — abordagem por dimensão (D1–D6)

P2 organizou o relatório **dimensão a dimensão**, registrando pontos positivos e negativos em cada uma. O tom é mais otimista quanto à espaciabilidade básica, mas converge com P1 e P3 na necessidade de filtros e melhor simbologia.

| Dim. | Avaliação | Entendimento |
|------|-----------|--------------|
| **D1** | Sim, com ressalva | O usuário entende onde estão as ocorrências, mas falta indicar a **posição do usuário** em relação ao problema; sugeriu notificação de proximidade (ex.: alagamento). |
| **D2** | Sim | Ao observar os ponteiros, percebe concentração de problemas em área específica. |
| **D3** | Sim | A localização do problema permite ir ao local afetado; **anonimato** do reportador é ponto positivo. |
| **D4** | Sim, com ressalva | No mesmo bairro, é possível ver conjunto de problemas (ex.: alagamento + falta de energia); **filtro temporal** (dia, semana) ajudaria na associação. |
| **D5** | Parcial | Sobreposição depende de zoom e distância; em escala da cidade, ponteiros se acumulam — sugere filtros por distância ou tipo espacial. |
| **D6** | Sim, com ressalva | Legenda à direita e clique no item ajudam; porém **pavimentação** e **sem pavimentação** têm cores similares — risco para pessoas com baixa visão. |

**Leitura geral:** P2 considera que o mapa já suporta orientação, padrões visuais e associações básicas, mas a experiência **degrada com zoom amplo** e sem filtros. Valoriza anonimato e sugere evoluções em localização do usuário, temporalidade e acessibilidade cromática.

---

## 4. P3 — abordagem tabular (percepção + desempenho)

P3 dividiu o relatório em duas partes: (1) avaliação geral por dimensão; (2) desempenho nos cenários com personas.

### 4.1 Percepção geral por dimensão

| Dim. | Status | Sugestão |
|------|--------|----------|
| D1 | OK | Manter clareza visual |
| D2 | OK | Manter ícone de alagamento |
| D3 | OK | Manter click-to-identify |
| D4 | OK | Manter flexibilidade para diversos tipos de problemas |
| D5 | **Não entendido** | Conceito de sobreposição de camadas não ficou claro |
| D6 | **Atenção** | Iluminação: ícone mais direto (lâmpada); pavimentação: de longe parece binóculo |

### 4.2 Desempenho nos cenários

| Cenário | Resultado | Entendimento |
|---------|-----------|--------------|
| D1 — João localiza iluminação | **OK** | Localização e identificação de padrões próximos funcionam. |
| D2 — Ana identifica alagamentos | **Falha/limitação** | Não foi possível filtrar e analisar apenas um tipo de padrão espacial. |
| D4 — João relaciona pavimentação/alagamento | **OK** | Percebe potencial analítico (relacionamento de dados), mas ícones de D6 ainda precisam melhorar. |
| D6 — Clareza dos ícones | **Atenção** | Ícones são claros em parte, mas as sugestões de iluminação e pavimentação (seção 1) permanecem. |

**Leitura geral:** P3 avalia positivamente a localização pontual e o potencial de cruzar variáveis, mas aponta **D2 como principal limitação** (ausência de filtros) e **D5 como conceito pouco compreensível** na interface atual. A iconografia de iluminação e pavimentação é o ponto crítico em D6.

---

## 5. Convergências entre P1, P2 e P3

1. **D1 funciona em nível básico** — é possível localizar ocorrências no mapa (P2 e P3 confirmam; P1 ressalva clareza dos detalhes ao clicar).
2. **D2 é a dimensão mais criticada** — P1 e P3 registram impossibilidade ou grande dificuldade de filtrar/agrupar por tipo; P2 vê concentração visual, mas também sugere filtros.
3. **D4 tem potencial, mas falta suporte analítico** — P2 e P3 percebem associações espaciais; P1 destaca ausência de **recorrência** e dados temporais além do horário de cadastro.
4. **D6 precisa revisão de ícones** — convergência em iluminação (lâmpada mais direta) e pavimentação (confusão com binóculo); P2 acrescenta cores similares entre categorias.
5. **Login e onboarding** — P1 documenta barreira concreta (erro ao informar sem login); fluxo de cadastro funciona, mas não é evidente no primeiro acesso.
6. **Filtros e agregação** são a principal lacuna transversal para raciocínio espacial analítico (tipo, bairro, tempo, quantidade).

---

## 6. Divergências relevantes

| Tema | Visão mais crítica | Visão mais otimista |
|------|-------------------|---------------------|
| D2 (padrões) | P1, P3: sem filtros, tarefa falha ou fica limitada | P2: concentração visível nos ponteiros |
| D4 (associações) | P1: falta recorrência para sustentar hipótese | P2, P3: potencial analítico percebido |
| D5 (camadas) | P3: não entendido | P2: possível com zoom/filtros |
| D6 (ícones) | P1, P3: ambiguidade e pouca informação no marcador | P2: legenda e clique ajudam |
| Formato do relatório | P1: narrativa rica em usabilidade | P2/P3: estruturado por dimensão ou tabela |

Essas divergências não invalidam os achados; indicam que o sistema atende melhor a **consulta pontual** do que a **análise territorial sistemática**.

---

## 7. Recomendações consolidadas (a partir dos três relatórios)

### Prioridade alta

- Filtros por **tipo de ocorrência** e por **bairro/região**, com contagem de pontos.
- Informação de **recorrência** e filtros **temporais** (dia, semana).
- Revisão de **ícones**: lâmpada para iluminação; pavimentação menos ambígua que binóculo.
- Diferenciação de **cores** entre categorias próximas (pavimentação vs. sem pavimentação).

### Prioridade média

- **Onboarding** no primeiro acesso (objetivo do sistema + necessidade de login).
- Clarificar ações nos marcadores (like, encerrar) e exibir **ID/nome** ao salvar ocorrência.
- Indicar **localização do usuário** em relação aos problemas (P2).
- Ao clicar no nome do problema, mostrar **resumo quantitativo** por região (P1).

### Prioridade baixa / evolução futura

- Clustering ou filtros de distância em zoom amplo (D5, P2).
- Notificação de proximidade a riscos (ex.: alagamento).

---

## 8. Síntese final

As três avaliações confirmam que o Mapa Cidadão cumpre funções centrais de **registro georreferenciado** e **visualização pontual** de ocorrências urbanas. Para as dimensões D1 e D3, o desempenho é em geral satisfatório. As limitações mais consistentes aparecem em **D2** (detecção de padrões sem ferramentas analíticas), **D4** (associações sem recorrência ou temporalidade) e **D6** (simbologia e clareza dos marcadores).

P1 contribui com a **jornada detalhada** (login, cadastro, erros de interface), revelando barreiras de usabilidade que os formatos mais sintéticos de P2 e P3 não detalham tanto. P2 oferece visão equilibrada por dimensão e antecipa necessidades de **acessibilidade** e **filtros temporais**. P3 categoriza explicitamente **falha em D2** e **atenção em D6**, alinhando-se à crítica de P1 sobre filtros e iconografia.

Em conjunto, os relatórios sustentam que o sistema é hoje mais um **visualizador colaborativo** do que uma **ferramenta analítica espacial** — e que fechar essa lacuna (filtros, agregação, recorrência, simbologia) é o caminho principal para melhorar a espaciabilidade no Mapa Cidadão.

---

*Baseado em `avaliacao.md` (protocolo MIE) e nos relatórios de inspeção de P1, P2 e P3.*
