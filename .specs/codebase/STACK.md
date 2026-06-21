# Tech Stack

**Analyzed:** 2026-06-18

## Core

- **Artigo:** LaTeX (`article` 12pt) + template SBC (`sbc-template.sty`)
- **Linguagem (slides):** JavaScript (ESM, Node.js 18+)
- **Runtime (slides):** Node.js com Playwright/Chromium headless
- **Package manager:** npm (`slides/package.json`)

## Frontend (slides)

- **UI:** HTML5 autocontido por slide (sem framework JS)
- **Styling:** CSS inline por arquivo, design system manual
- **Fontes:** Google Fonts (Space Grotesk, Inter) via CDN
- **Ícones:** Font Awesome 6 via CDN
- **Dimensões:** Viewport fixo 1280×720 px (`.slide-container`)

## Backend

_Não aplicável — repositório sem servidor ou API._

## Testing

_Nenhum framework de testes configurado._

## External Services

- **Fontes:** Google Fonts CDN (`fonts.googleapis.com`)
- **Ícones:** Cloudflare CDN (`cdnjs.cloudflare.com` — Font Awesome)
- **Browser automation:** Playwright Chromium (instalado localmente via `npx playwright install chromium`)

## Development Tools

- **Compilação LaTeX:** pdflatex + bibtex (TeX Live / MiKTeX)
- **Conversão PDF slides:** Playwright 1.52.0 + pdf-lib 1.17.1
- **Gráficos no artigo:** pgfplots 1.18
- **Controle de versão:** Git

## Aplicação Mapa Cidadão (externa)

O sistema web Mapa Cidadão **não está versionado neste repositório**. Trata-se de aplicação de crowdsourcing urbano com mapa interativo, referenciada no artigo e avaliada via MIE, mas hospedada/desenvolvida fora deste repo.
