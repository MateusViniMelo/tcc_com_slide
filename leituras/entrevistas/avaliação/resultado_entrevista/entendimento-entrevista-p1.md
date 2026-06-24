# Entendimento da entrevista semiestruturada — P1

Síntese interpretativa da entrevista pós-inspeção com **P1** (especialista em IHC), conduzida por videoconferência após a avaliação do Mapa Cidadão pelo MIE. O roteiro segue `entrevista-semiestruturada.md`; o conteúdo deriva da transcrição da sessão.

**Participante:** P1 (Lorrane Nobre)

---

## 1. Contexto e perfil do participante

### 1.1 Experiência prévia com mapas interativos

P1 tem familiaridade com aplicativos de geolocalização voltados principalmente a **transporte e busca de locais**:

| Aplicativo | Uso |
|------------|-----|
| Google Maps | Transporte e buscas gerais de locais |
| Waze | Navegação e alertas de trânsito |
| Citymapper | Transporte público (usado em intercâmbio na Alemanha) |

Não há experiência prévia relatada com mapas colaborativos para **questões sociais ou urbanas** — o repertório é de apps de mobilidade e localização imediata.

### 1.2 Primeira impressão sobre o Mapa Cidadão

P1 avalia a proposta como **importante, distinta e útil** em relação a outros apps de geolocalização. A comparação com o Waze é central:

- O Waze permite reportar buracos e acidentes, mas no contexto do **trânsito**.
- As informações no Waze são **momentâneas** — se o problema some, o alerta desaparece após validação.
- O Mapa Cidadão propõe algo diferente: registro de **questões sociais e urbanas** com caráter mais **persistente** e participativo.

**Leitura:** P1 reconhece valor na proposta social do sistema e posiciona o Mapa Cidadão como complementar — não concorrente — aos mapas de trânsito que já conhece.

---

## 2. Espaciabilidade e design

### 2.1 Visualizador ou ferramenta analítica?

P1 classifica o mapa hoje como **visualizador de ocorrências**, não como ferramenta analítica. A justificativa:

- A interface é **imediata**, mas falta **vivência do usuário** para interpretar dados sociais no mapa.
- No trânsito (Google Maps, Waze), a interpretação já está mais consolidada — engarrafamento, acidentes, buracos são leituras familiares.
- Para questões **sociais e urbanas**, o usuário ainda não tem o mesmo repertório interpretativo.

> *"(...) ainda falta um pouco de vivência do usuário para que ele consiga entender e interpretar os dados mostrados no mapa."*

**Leitura:** A lacuna não é só de interface, mas de **literacia espacial-social** — o cidadão precisa de mais suporte para transformar pontos no mapa em compreensão territorial.

### 2.2 Elementos de design (camadas, zoom, simbologia, cores)

P1 considera que o design **potencializa** a espaciabilidade:

- Filtros, cores, disposição de botões e funcionalidades **facilitam** entender o que o sistema propõe.
- Ao ver o mapa e as opções de interação, fica mais claro o que o usuário pode fazer.

**Observação:** na inspeção, P1 também apontou limitações (filtros ausentes, ícones pouco claros). Na entrevista, o tom sobre design é mais sobre o **potencial** da abordagem visual do que sobre o estado atual completo do sistema.

---

## 3. Uso e interação com o aplicativo

### 3.1 Aspectos positivos

| Aspecto | O que P1 valorizou |
|---------|-------------------|
| Botão de cadastro | Balão explícito "cadastrar uma ocorrência" — mais claro que em outros apps, onde o cadastro só aparece após clique |
| Alinhamento com o objetivo | O usuário usa o mapa para **registrar** ocorrências georreferenciadas, não necessariamente para se localizar |

**Leitura:** A **descoberta imediata** da função principal (cadastrar) é um diferencial positivo de UX em relação a apps como Waze/Google Maps.

### 3.2 Aspectos negativos

P1 identificou problemas no **hover/interação com marcadores** já cadastrados:

| Problema | Detalhe |
|----------|---------|
| Informações pouco claras | Ao passar o mouse, aparecem endereço, like e encerrar — mas sem contexto suficiente |
| Descrição ausente | A descrição inserida no cadastro **não é exibida** no hover |
| Significado ambíguo | Não fica claro o que "like" e "encerrar" significam — encerrar seria marcar como resolvida? |

**Leitura:** O feedback pós-cadastro é insuficiente para sustentar compreensão e acompanhamento das ocorrências — conecta-se diretamente às dimensões D1 e D6 da inspeção.

### 3.3 Melhorias recomendadas (design)

| Melhoria | Justificativa |
|----------|---------------|
| Pop-up no primeiro acesso | Perguntar se o usuário tem cadastro ou deseja se cadastrar |
| Reposicionar "Minhas ocorrências" | Mover da área de perfil para a **barra superior**, entre "Início" e "Sobre" |
| "Sobre" no menu de perfil | Liberar espaço na barra superior para funções de uso frequente |
| Histórico acessível | P1 não conseguiu encontrar facilmente informações sobre a ocorrência que cadastrou |

**Leitura:** As sugestões apontam para **reduzir atrito na jornada** (login, histórico) e **melhorar a arquitetura de informação** do menu principal.

---

## 4. Avaliação do método (MIE)

### 4.1 Adequação das tarefas e personas

P1 considera as tarefas **bem direcionadas** e as personas **bem construídas**. A ressalva está nos **cenários/enunciados**:

- Durante o uso com personas, não encontrou o menu "Minhas ocorrências".
- Os cenários poderiam indicar explicitamente que o usuário buscará **histórico** ou **filtros** de ocorrências.
- Exemplo sugerido: *"O usuário pode procurar algum menu ou filtro que mostre as ocorrências cadastradas."*

**Leitura:** P1 propõe duas saídas — ajustar o **design** para facilitar as tarefas ou adaptar os **enunciados** ao design atual. Prefere implicitamente a primeira (menu na barra superior).

### 4.2 As tarefas refletem situações reais?

P1 responde **não** — no estado atual do sistema, as tarefas analíticas (padrões, associações, filtros) **não correspondem** às funcionalidades disponíveis.

Argumento central:

> Cadastrar e ver ocorrências não basta; para percepção espacial, o usuário precisa **visualizar** dados agregados.

Sugestões analíticas concretas:

1. **Filtro por bairro** → exibir: *"Neste bairro há X ocorrências de lixo, Y de pavimentação, Z de alagamento"*
2. **Filtro por tipo** → exibir: *"Há N pontos de alagamento no bairro X, M no bairro Y"*

**Leitura:** Há um **desalinhamento** entre o que o MIE pede (raciocínio espacial analítico em D2/D4) e o que o sistema entrega hoje (visualização pontual). P1 não invalida o método — aponta que o **design precisa evoluir** para as tarefas fazerem sentido.

### 4.3 Melhorias ao instrumento de avaliação

P1 sugere um **onboarding/tutorial no primeiro acesso**:

- Pop-ups que destacam botões e links (*"Isto é o menu inicial; aqui você pode..."*)
- Explicação de tema claro/escuro, perfil, funcionalidades
- Informações institucionais permanecem em "Sobre"

**Objetivo:** aumentar usabilidade e conforto do usuário antes de executar tarefas de inspeção ou uso cotidiano.

---

## 5. Síntese transversal

### 5.1 Posicionamento do Mapa Cidadão (visão de P1)

```
Apps de trânsito (Waze, Google Maps)     Mapa Cidadão (hoje)          Mapa Cidadão (desejado)
────────────────────────────────────     ─────────────────────        ──────────────────────────
Foco: mobilidade imediata                Foco: registro social        Foco: registro + análise
Dados: momentâneos                       Dados: persistentes          Dados: agregados/filtráveis
Usuário: já sabe interpretar             Usuário: precisa de vivência Usuário: suportado por UI
```

### 5.2 Categorias analíticas alimentadas pela entrevista

| Categoria | Evidências principais na entrevista |
|-----------|-------------------------------------|
| **Espaciabilidade** | Mapa como visualizador; falta filtros/agregação para padrões e associações |
| **Usabilidade** | Login no primeiro acesso; "Minhas ocorrências" oculto; hover sem descrição |
| **UX** | Proposta social valorizada; comparação com Waze; onboarding sugerido |
| **Avaliação do MIE** | Personas ok; cenários pouco claros; tarefas não refletem realidade atual |

### 5.3 Convergência com o relatório de inspeção

A entrevista **aprofunda e confirma** achados do relatório narrativo de P1:

| Tema | Inspeção | Entrevista |
|------|----------|------------|
| Filtros/agrupamento (D2) | Ana não encontrou filtros | Tarefas não refletem realidade; sugere filtro por bairro/tipo |
| Detalhe dos marcadores (D1/D6) | Informações pouco claras ao clicar | Hover sem descrição; like/encerrar ambíguos |
| Login/cadastro | Erro ao informar sem login | Pop-up de cadastro no primeiro acesso |
| Histórico | Mensagem sem ID da ocorrência | Dificuldade em encontrar "Minhas ocorrências" |

### 5.4 Citações úteis

**Visualizador vs. analítico:**
> *"Acho que a primeira opção [visualizador] é por causa disso: como a interface é algo mais imediato, ainda falta um pouco de vivência do usuário para que ele consiga entender e interpretar os dados mostrados no mapa."*

**Tarefas e realidade do sistema:**
> *"Eu acho que não [refletem situações reais]. Porque, do jeito que o sistema está agora — você cadastra a ocorrência e pode ver as ocorrências cadastradas —, ainda falta algo."*

**Percepção espacial:**
> *"Para que o usuário desenvolva uma percepção espacial, ele precisa visualizar essas informações, entende? Não basta apenas cadastrar; ele precisa conseguir visualizar."*

---

## 6. Implicações para o TCC

1. **Problema de pesquisa:** P1 articula com clareza a tensão entre registro colaborativo e interpretação territorial — núcleo do argumento sobre espaciabilidade.
2. **Recomendações de design:** filtros por bairro/tipo, onboarding, reorganização do menu e clareza nos marcadores são prioridades com respaldo qualitativo.
3. **Validação crítica do MIE:** o método é considerado adequado em estrutura (personas, dimensões), mas os cenários precisam ser mais explícitos ou o sistema precisa evoluir para suportá-los.
4. **Triangulação:** entrevista + inspeção de P1 formam o conjunto de evidências mais rico do estudo — narrativa de uso + reflexão metodológica.

---

*Baseado no roteiro em `entrevista-semiestruturada.md` e na transcrição da entrevista com P1.*
