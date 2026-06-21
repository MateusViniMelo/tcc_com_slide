# State

**Last Updated:** 2026-06-18
**Current Work:** Setup do projeto (tlc-spec-driven) — documentação inicial `.specs/`

---

## Recent Decisions (Last 60 days)

### AD-001: Repositório como artefato acadêmico, não codebase da aplicação (2026-06-18)

**Decision:** Tratar este repositório como hub de documentação do TCC (artigo, slides, avaliação), separado do código da aplicação Mapa Cidadão.
**Reason:** O README e a estrutura confirmam que o foco versionado é LaTeX + slides HTML + materiais de pesquisa; a app não está no repo.
**Trade-off:** Specs de brownfield descrevem pipeline de documentação, não arquitetura de software da aplicação.
**Impact:** Features futuras devem focar em entregáveis acadêmicos (artigo, slides, materiais), não em deploy da app.

---

## Active Blockers

_Nenhum bloqueador ativo registrado._

---

## Lessons Learned

_Nenhuma lição registrada ainda._

---

## Quick Tasks Completed

| #   | Description                              | Date       | Commit | Status  |
| --- | ---------------------------------------- | ---------- | ------ | ------- |
| 001 | Setup inicial `.specs/` (PROJECT, ROADMAP, STATE, codebase) | 2026-06-18 | —      | ✅ Done |

---

## Deferred Ideas

- [ ] Versionar código-fonte do Mapa Cidadão em repositório separado — Captured during: setup
- [ ] CI para compilar LaTeX e gerar PDF dos slides automaticamente — Captured during: setup
- [ ] Adicionar diretório `figuras/` ao controle de versão (referenciado em `main.tex`) — Captured during: setup

---

## Todos

- [ ] Validar compilação completa do artigo (`pdflatex` + `bibtex`)
- [ ] Regenerar PDF dos slides (`npm run pdf`) e confirmar 26 páginas
- [ ] Ensaio final da apresentação com cronômetro (20 min)
- [ ] Preencher link do Google Meet em `informacoes_defesa.txt`

---

## Preferences

**Model Guidance Shown:** never
