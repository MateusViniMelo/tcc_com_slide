# Testing Infrastructure

## Test Frameworks

**Unit/Integration:** Nenhum configurado
**E2E:** Nenhum configurado
**Coverage:** Nenhuma ferramenta

## Test Organization

**Location:** N/A — projeto sem suite de testes
**Naming:** N/A
**Structure:** N/A

## Testing Patterns

### Unit Tests

**Approach:** Não implementado
**Location:** N/A

### Integration Tests

**Approach:** Não implementado
**Location:** N/A

### E2E Tests

**Approach:** Não implementado
**Location:** N/A

## Test Execution

**Commands:** Nenhum script de teste em `package.json` (apenas `"pdf": "node convert-to-pdf.mjs"`)

## Coverage Targets

**Current:** 0% automatizado
**Goals:** Não definidos
**Enforcement:** Manual — compilação LaTeX e geração PDF verificadas ad hoc

## Test Coverage Matrix

| Code Layer              | Required Test Type | Location Pattern        | Run Command              |
| ----------------------- | ------------------ | ----------------------- | ------------------------ |
| Artigo LaTeX            | none (manual)      | `main.tex`, `figuras/*` | `pdflatex main.tex` + bibtex |
| Slides HTML             | none (manual)      | `slides/pagina*.html`   | Abrir no navegador       |
| Pipeline PDF            | none (manual)      | `slides/convert-to-pdf.mjs` | `cd slides && npm run pdf` |
| Materiais Markdown      | none               | `*.md`, `leituras/**`   | Revisão manual           |

## Parallelism Assessment

| Test Type | Parallel-Safe? | Isolation Model | Evidence                          |
| --------- | -------------- | --------------- | --------------------------------- |
| N/A       | N/A            | N/A             | Sem testes no repositório       |

## Gate Check Commands

| Gate Level | When to Use                         | Command                                      |
| ---------- | ----------------------------------- | -------------------------------------------- |
| Quick      | Após editar slides                  | `cd slides && npm run pdf`                   |
| Full       | Antes da defesa                     | Compilar LaTeX (4 passos) + `npm run pdf`    |
| Build      | Release pré-defesa                  | LaTeX completo + PDF slides + revisão manual dos 26 HTML |

## Verificação manual recomendada

1. **Artigo:** `pdflatex main.tex` → `bibtex main` → `pdflatex main.tex` (×2) — verificar warnings e figuras
2. **Slides:** Abrir `pagina1.html` e amostra de slides intermediários/finais no Chrome
3. **PDF apresentação:** `npm run pdf` — confirmar 26 páginas, fontes carregadas, layout 1280×720
4. **Consistência:** Comparar números/resultados entre `main.tex`, slides e `sintese-avaliacao.md`
