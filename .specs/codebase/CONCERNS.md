# Concerns

Priorizados por impacto na defesa (25/11/2026).

---

## C-001: Código-fonte do Mapa Cidadão ausente do repositório

**Severity:** Média (documentação) / Baixa (defesa, se demo ao vivo disponível)
**Evidence:** README descreve o sistema, mas nenhum código de frontend/backend está versionado; apenas artefatos acadêmicos.
**Impact:** Impossível evoluir ou auditar a aplicação a partir deste repo; specs de software limitadas a slides e LaTeX.
**Fix:** Criar repositório separado para a app ou adicionar link permanente no README/PROJECT.md; registrar URL de demo.

---

## C-002: Diretório `figuras/` referenciado mas ausente no workspace

**Severity:** Alta (compilação do artigo)
**Evidence:** `main.tex` linhas 107 e 118 referenciam `figuras/figura_etapas_3.jpg` e `figuras/figura_mapa_cidadao_2.png`; glob não encontrou arquivos em `figuras/`.
**Impact:** Compilação LaTeX falha ou produz placeholders ausentes.
**Fix:** Restaurar figuras no diretório `figuras/` ou atualizar caminhos; adicionar ao git se intencionalmente omitidas.

---

## C-003: Inconsistência no nome do PDF da apresentação

**Severity:** Baixa
**Evidence:** `convert-to-pdf.mjs` gera `slides/apresentacao.pdf`; git status mostra `slides/apresentacao_slide.pdf` como untracked; README documenta `apresentacao.pdf`.
**Impact:** Confusão sobre qual arquivo enviar à banca ou arquivar.
**Fix:** Padronizar nome (`apresentacao.pdf`), remover duplicatas, atualizar referências se necessário.

---

## C-004: Slides dependem de CDN (fontes e ícones)

**Severity:** Média
**Evidence:** Cada `paginaN.html` carrega Google Fonts e Font Awesome via CDN; `convert-to-pdf.mjs` usa `networkidle`.
**Impact:** Geração de PDF offline ou com CDN indisponível produz slides com tipografia/ícones degradados.
**Fix:** Para build reprodutível pré-defesa, garantir internet na geração; opcionalmente embed fonts localmente.

---

## C-005: Ausência de testes e CI

**Severity:** Baixa (projeto acadêmico de prazo fixo)
**Evidence:** `package.json` só tem script `pdf`; nenhum workflow CI; TESTING.md confirma 0% automatizado.
**Impact:** Regressões visuais em slides ou erros LaTeX só detectados manualmente.
**Fix:** Gate manual documentado em TESTING.md; CI opcional pós-defesa.

---

## C-006: PDFs de entrevistas removidos do controle de versão

**Severity:** Baixa
**Evidence:** Git status mostra deletions em `leituras/entrevistas/avaliação/*.pdf`; substituídos parcialmente por `sintese-avaliacao.md`.
**Impact:** Perda de rastreabilidade das transcrições originais se não arquivadas externamente.
**Fix:** Confirmar backup externo; manter síntese markdown como fonte canônica no repo.

---

## C-007: Informações da defesa incompletas

**Severity:** Média (logística)
**Evidence:** `informacoes_defesa.txt` linha 8: `[preencher com o link da chamada]` para Google Meet.
**Impact:** Risco operacional no dia da defesa.
**Fix:** Preencher link antes de 25/11/2026; registrar em STATE.md todos quando feito.

---

## C-008: Duplicação de estilos entre 26 slides HTML

**Severity:** Baixa (manutenção)
**Evidence:** CSS inline repetido em cada `paginaN.html`; alteração de design exige editar múltiplos arquivos.
**Impact:** Inconsistência visual se um slide for atualizado isoladamente.
**Fix:** Aceitável para entrega; refatoração para CSS compartilhado só se houver tempo pós-ensaio.

---

## C-009: Amostra pequena na avaliação MIE (3 especialistas)

**Severity:** Baixa (limitação acadêmica reconhecida)
**Evidence:** Artigo e apresentação descrevem estudo preliminar com 3 participantes.
**Impact:** Generalização limitada; pergunta provável da banca.
**Fix:** Preparar resposta na banca (`preparacao-banca.md`); apontar como direção futura no roadmap.
