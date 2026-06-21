# Code Conventions

## Naming Conventions

**Files (slides):**
Padrão `paginaN.html` com número sequencial (1–26).
Examples: `pagina1.html`, `pagina20.html`, `pagina26.html`

**Files (LaTeX):**
Nomes descritivos em snake_case para figuras; templates com prefixo `sbc-`.
Examples: `main.tex`, `sbc-template.sty`, `figura_mapa_cidadao_2.png`

**Files (markdown):**
Kebab-case ou snake_case descritivo.
Examples: `apresentacao.md`, `preparacao-banca.md`, `sintese-avaliacao.md`

**Functions/Methods (JS):**
camelCase para funções utilitárias no pipeline PDF.
Examples: `sortSlideFiles`, `renderSlide`, `mergePdfs`

**Variables (JS):**
SCREAMING_SNAKE para constantes de configuração; camelCase para locais.
Examples: `SLIDE_WIDTH`, `SLIDE_HEIGHT`, `OUTPUT`, `pdfBuffers`

**Constants (CSS slides):**
Paleta fixa reutilizada entre slides: `#F4F4F4` (fundo), `#2C3E50` (accent), `#34495E` (texto).

## Code Organization

**Import/Dependency Declaration (JS):**
ESM com imports no topo; `type: "module"` em `package.json`.
```javascript
import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import { readdir, writeFile } from 'fs/promises';
```

**File Structure (HTML slides):**
Ordem consistente: `<head>` (fonts CDN + `<style>`) → `<body>` → `.slide-container` → painéis de conteúdo.

**File Structure (LaTeX):**
Preâmbulo (pacotes, título, autores) → `\begin{document}` → seções numeradas → bibliografia.

## Type Safety/Documentation

**Approach:** JavaScript sem TypeScript; LaTeX auto-documentado por estrutura de seções; Markdown com headings hierárquicos.

**Markdown (apresentacao.md):**
Cada slide documentado com título, timing (`⏱`), versão "Texto (20 min)" e "Texto expandido".

## Error Handling

**Pattern (JS):** Fail-fast com mensagens em português; exit code 1 em falha.
```javascript
if (files.length === 0) {
  throw new Error('Nenhum arquivo pagina*.html encontrado.');
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

**Pattern (LaTeX):** `\sloppy` para evitar overfull hboxes; compilação manual com retry em caso de refs pendentes.

## Comments/Documentation

**Style:** Comentários mínimos no JS (código autoexplicativo); README na raiz e em convenções de build; roteiro oral detalhado em `apresentacao.md` serve como documentação da apresentação.

**CSS slides:** Comentários ocasionais para ajustes de padding/spacing (ex.: `/* keep top padding for title consistency */`).

## Idioma

- Artigo: português (resumo bilíngue PT/EN)
- Slides e roteiro: português
- Código (JS): mensagens de log/erro em português
- Commits: seguir estilo existente do repositório quando aplicável
