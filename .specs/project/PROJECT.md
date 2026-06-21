# Mapa Cidadão — TCC

**Vision:** Documentar e apresentar academicamente o Mapa Cidadão — sistema colaborativo de mapeamento urbano orientado por espaciabilidade — incluindo artigo, defesa e materiais de avaliação com o MIE.

**For:** Banca examinadora (UFPA), comunidade acadêmica de IHC e autores do trabalho (Mateus Melo, André Neto, Marcelle Mota).

**Solves:** Lacuna entre coleta colaborativa de dados georreferenciados e apoio efetivo ao raciocínio espacial, operacionalizando o critério de espaciabilidade e validando empiricamente o Método de Inspeção da Espaciabilidade (MIE) em aplicação real.

## Goals

- **Defesa aprovada:** Apresentação de 20 min (26 slides) conduzida com clareza teórica, metodológica e de resultados perante a banca em 25/11/2026.
- **Artigo publicável:** Documento LaTeX (template SBC, 13 páginas) compilável e coerente com slides, avaliação e referências bibliográficas.
- **Evidência empírica documentada:** Avaliação MIE com 3 especialistas registrada, sintetizada e rastreável nos materiais do repositório.

## Tech Stack

**Core (artigo):**

- LaTeX: `article` 12pt + template SBC (`sbc-template.sty`)
- Bibliografia: BibTeX (`sbc-template.bib`, `sbc.bst`)
- Gráficos: `pgfplots` 1.18

**Core (apresentação):**

- Slides: HTML autocontido (1280×720 px), CSS inline
- Conversão PDF: Node.js ESM + Playwright 1.52 + pdf-lib 1.17

**Materiais de pesquisa:**

- Markdown para roteiros, sínteses e leituras
- Entrevistas e avaliação MIE em `leituras/`

**Key dependencies:** Playwright (Chromium), pdf-lib, Google Fonts CDN, Font Awesome CDN

## Scope

**v1 includes:**

- Artigo acadêmico completo (`main.tex`) com fundamentação, sistema, MIE, resultados e conclusões
- Apresentação de defesa (26 slides HTML + gerador PDF + roteiro oral em `apresentacao.md`)
- Materiais de avaliação MIE (entrevistas, síntese, preparação para banca)
- Documentação de build (README) e specs do projeto (`.specs/`)

**Explicitly out of scope:**

- Código-fonte da aplicação Mapa Cidadão (hospedada externamente; não versionada neste repositório)
- Testes automatizados de build ou CI/CD
- Publicação final em evento/periódico (pós-defesa)
- Evoluções futuras do sistema (camadas D3/D5, novos avaliadores)

## Constraints

- **Timeline:** Defesa em 25/11/2026, 17:00 (Google Meet, remoto)
- **Técnico:** Artigo deve compilar com pdflatex + bibtex; slides devem gerar PDF via Playwright/Chromium
- **Acadêmico:** Trabalho em coautoria; orientação Marcelle Mota, coorientação André Neto; avaliação preliminar com 3 participantes (limitação reconhecida no artigo)
- **Recursos:** Repositório acadêmico local; sem infraestrutura de deploy ou backend
