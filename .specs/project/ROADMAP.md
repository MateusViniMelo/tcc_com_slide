# Roadmap

**Current Milestone:** Defesa de TCC
**Status:** In Progress

---

## Milestone 1 — Pesquisa e Desenvolvimento

**Goal:** Sistema Mapa Cidadão concebido com espaciabilidade e avaliado empiricamente com MIE
**Target:** Concluído (pré-repositório de documentação)

### Features

**Fundamentação teórica (espaciabilidade + MIE)** - COMPLETE

- Conceito operacionalizado a partir de Neto & Mota (IHC 2025)
- Dimensões D1–D6 mapeadas ao contexto do Mapa Cidadão
- Trabalhos relacionados e lacuna identificada

**Desenvolvimento do Mapa Cidadão** - COMPLETE

- Aplicação de crowdsourcing urbano com foco em raciocínio espacial
- Interface cartográfica com categorias de ocorrência (alagamento, iluminação, lixo, pavimentação)

**Avaliação MIE com especialistas** - COMPLETE

- 3 avaliadores (IHC/design)
- Dimensões priorizadas: D1, D2, D4, D6
- Transcrições, síntese e resultados documentados em `leituras/`

---

## Milestone 2 — Documentação Acadêmica

**Goal:** Artigo e materiais de suporte prontos para submissão e defesa
**Target:** Pré-defesa (novembro/2026)

### Features

**Artigo LaTeX (SBC)** - COMPLETE

- `main.tex` com 13 páginas
- Referências BibTeX, figuras, resumo PT/EN
- Compilação pdflatex + bibtex documentada

**Apresentação de defesa (26 slides)** - COMPLETE

- Slides HTML (`pagina1.html`–`pagina26.html`)
- Roteiro oral calibrado para 20 min (`apresentacao.md`)
- Pipeline PDF via `npm run pdf`

**Materiais de preparação para banca** - IN PROGRESS

- Perfil da banca e orientadores (`preparacao-banca.md`) ✅
- Informações formais da defesa (`informacoes_defesa.txt`) ✅
- Ensaio final e revisão de slides pendentes de validação

---

## Milestone 3 — Defesa e Encerramento

**Goal:** Defesa realizada com sucesso e repositório arquivado
**Target:** 25/11/2026

### Features

**Apresentação oral (20 min + perguntas)** - PLANNED

- Ensaio com timing ~45 s/slide
- Demonstração do Mapa Cidadão (se aplicável)
- Respostas preparadas para limitações (amostra, D3/D5, interdependência com usabilidade/UX)

**Ajustes pós-banca** - PLANNED

- Correções solicitadas pela banca no artigo
- Atualização de slides e materiais conforme feedback

**Arquivamento do repositório** - PLANNED

- Versão final do PDF da apresentação
- Commit/tag de release pós-defesa

---

## Future Considerations

- Submissão do artigo a evento/periódico da SBC ou área afim
- Extensão da avaliação MIE (mais avaliadores, dimensões D3/D5)
- Evolução do Mapa Cidadão (camadas, sobreposição, localização ideal)
- Publicação do código-fonte da aplicação em repositório separado
- Replicação do MIE em outros sistemas cartográficos colaborativos
