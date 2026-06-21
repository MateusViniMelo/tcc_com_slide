# External Integrations

## CDN — Google Fonts

**Service:** Google Fonts
**Purpose:** Tipografia dos slides (Space Grotesk, Inter)
**Implementation:** `<link>` em cada `slides/paginaN.html`
**Configuration:** URL fixa `https://fonts.googleapis.com/css2?family=Space+Grotesk...`
**Authentication:** N/A (público)

## CDN — Font Awesome

**Service:** Cloudflare CDN (cdnjs)
**Purpose:** Ícones nos slides
**Implementation:** `<link>` em cada slide que usa ícones
**Configuration:** `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css`
**Authentication:** N/A (público)

## Playwright / Chromium

**Service:** Playwright (local)
**Purpose:** Renderização headless dos slides HTML para captura PNG → PDF
**Implementation:** `slides/convert-to-pdf.mjs` — `chromium.launch()`, `page.goto(file://...)`
**Configuration:** Viewport 1280×720; seletor `.slide-container`; `waitUntil: 'networkidle'`
**Authentication:** N/A — requer `npx playwright install chromium` na máquina local

## pdf-lib

**Service:** Biblioteca npm (local)
**Purpose:** Criação e merge de páginas PDF a partir de screenshots PNG
**Implementation:** `PDFDocument.create()`, `embedPng()`, `copyPages()`, `mergePdfs()`
**Configuration:** Dimensões PDF calculadas de pixels (96 DPI → 72 pt)

## Mapa Cidadão (aplicação web)

**Service:** Aplicação de crowdsourcing urbano (externa ao repo)
**Purpose:** Sistema avaliado no TCC; demonstrado na defesa
**Implementation:** Não versionada neste repositório
**Configuration:** URL/host não documentados no repo
**Authentication:** N/A neste contexto documental

## API Integrations

_Nenhuma integração de API no código versionado._

## Webhooks

_Nenhum._

## Background Jobs

_Nenhum._

## Dependência de rede na geração de PDF

O pipeline Playwright carrega fontes e ícones via CDN durante a renderização. **Conexão com internet é necessária** na execução de `npm run pdf` para garantir fidelidade visual. Alternativa futura: embed/localizar fontes e ícones offline.
