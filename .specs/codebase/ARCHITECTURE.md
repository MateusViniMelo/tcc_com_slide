# Architecture

**Pattern:** Repositório monolítico de artefatos acadêmicos desacoplados (artigo LaTeX + slides HTML + materiais de pesquisa)

## High-Level Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    TCC_Mateus (repositório)                  │
├──────────────┬────────────────────┬─────────────────────────┤
│   Artigo     │    Apresentação    │   Materiais pesquisa   │
│  main.tex    │  pagina*.html      │  leituras/             │
│  sbc-*.sty   │  convert-to-pdf    │  apresentacao.md       │
│  sbc-*.bib   │  package.json      │  preparacao-banca.md   │
└──────────────┴────────────────────┴─────────────────────────┘
                              │
                              ▼
              Mapa Cidadão (aplicação externa, não versionada)
```

## Identified Patterns

### Slide autocontido (HTML + CSS inline)

**Location:** `slides/paginaN.html`
**Purpose:** Cada slide é editável e visualizável independentemente no navegador
**Implementation:** Arquivo HTML completo com `<style>` embutido, container `.slide-container` 1280×720
**Example:** `slides/pagina1.html` — capa com grid two-column, tipografia Inter/Space Grotesk

### Pipeline de conversão HTML → PDF

**Location:** `slides/convert-to-pdf.mjs`
**Purpose:** Gerar PDF único da apresentação para defesa
**Implementation:**
1. Lista e ordena `pagina*.html` numericamente
2. Playwright abre cada arquivo via `file://`, captura screenshot PNG de `.slide-container`
3. pdf-lib embute PNG em página PDF individual
4. Merge de todos os PDFs em `apresentacao.pdf`

**Example:** `renderSlide()` → `mergePdfs()` → `writeFile(OUTPUT)`

### Artigo acadêmico modular (LaTeX SBC)

**Location:** `main.tex` + `sbc-template.sty` + `sbc-template.bib`
**Purpose:** Documento científico com seções Introdução → Conclusão
**Implementation:** Classe `article`, pacotes SBC, figuras em `figuras/`, citações BibTeX
**Example:** `\includegraphics{figuras/figura_mapa_cidadao_2.png}`

### Roteiro de apresentação espelhado nos slides

**Location:** `apresentacao.md`
**Purpose:** Texto oral calibrado (20 min) e expandido por slide
**Implementation:** Seções numeradas alinhadas a `pagina1.html`–`pagina26.html`, timing por slide
**Example:** `## Slide 1 — Capa ⏱ ~30 s`

## Data Flow

### Compilação do artigo

```
main.tex → pdflatex → main.aux
sbc-template.bib → bibtex → main.bbl
main.tex → pdflatex (×2) → main.pdf
```

### Geração da apresentação PDF

```
pagina*.html → Playwright (Chromium) → screenshot PNG
PNG → pdf-lib → página PDF individual
N páginas → pdf-lib merge → slides/apresentacao.pdf
```

### Fluxo de avaliação MIE (documentação)

```
Especialistas → entrevistas → leituras/entrevistas/avaliação/
Resultados → sintese-avaliacao.md → artigo (main.tex) + slides
```

## Code Organization

**Approach:** Organização por tipo de artefato acadêmico (não por feature de software)

**Structure:**

| Área | Conteúdo |
|------|----------|
| Raiz | Artigo LaTeX, templates SBC, README |
| `slides/` | Apresentação HTML + pipeline Node |
| `leituras/` | Artigos, entrevistas, sínteses |
| `.specs/` | Especificação e memória do projeto |

**Module boundaries:** Artigo, slides e materiais de pesquisa são independentes; compartilham apenas conteúdo temático (Mapa Cidadão, MIE, espaciabilidade).
