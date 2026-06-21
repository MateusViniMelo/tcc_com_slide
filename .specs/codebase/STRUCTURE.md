# Project Structure

**Root:** `c:\Users\mateu\OneDrive\Documentos\TCC_Mateus`

## Directory Tree

```
TCC_Mateus/
├── .specs/                      # Especificação tlc-spec-driven
│   ├── project/                 # PROJECT, ROADMAP, STATE
│   └── codebase/                # Documentação brownfield
├── main.tex                     # Artigo principal
├── sbc-template.sty             # Estilo SBC
├── sbc-template.bib             # Referências
├── sbc-template-copy.bib        # Cópia/backup de referências
├── sbc.bst                      # Estilo BibTeX
├── README.md                    # Documentação geral
├── apresentacao.md              # Roteiro oral da defesa
├── preparacao-banca.md          # Perfis da banca e orientadores
├── informacoes_defesa.txt       # Dados formais da defesa
├── figuras/                     # Imagens do artigo (referenciadas, ver CONCERNS)
├── leituras/                    # Materiais de pesquisa
│   ├── artigos/                 # Artigos lidos (ex.: IHC_25_Andre.md)
│   └── entrevistas/
│       └── avaliação/           # MIE: transcrições, síntese, avaliação
└── slides/                      # Apresentação HTML + PDF
    ├── pagina1.html … pagina26.html
    ├── convert-to-pdf.mjs
    ├── package.json
    ├── package-lock.json
    └── .gitignore
```

## Module Organization

### Artigo (LaTeX)

**Purpose:** Documento científico do TCC (13 páginas, template SBC)
**Location:** Raiz do repositório
**Key files:** `main.tex`, `sbc-template.sty`, `sbc-template.bib`, `sbc.bst`, `figuras/*`

### Apresentação (slides)

**Purpose:** Defesa oral — 26 slides, 20 minutos
**Location:** `slides/`
**Key files:** `pagina*.html`, `convert-to-pdf.mjs`, `apresentacao.md` (roteiro na raiz)

### Materiais de pesquisa

**Purpose:** Fundamentação, entrevistas MIE e sínteses
**Location:** `leituras/`
**Key files:** `leituras/artigos/IHC_25_Andre.md`, `leituras/entrevistas/avaliação/sintese-avaliacao.md`

### Especificação do projeto

**Purpose:** Memória persistente, roadmap e docs de codebase
**Location:** `.specs/`
**Key files:** `PROJECT.md`, `ROADMAP.md`, `STATE.md`, `codebase/*.md`

## Where Things Live

**Artigo acadêmico:**

- Conteúdo: `main.tex`
- Estilo: `sbc-template.sty`
- Referências: `sbc-template.bib`
- Figuras: `figuras/`

**Apresentação de defesa:**

- Slides visuais: `slides/paginaN.html`
- Roteiro oral: `apresentacao.md`
- Gerador PDF: `slides/convert-to-pdf.mjs`
- PDF de saída: `slides/apresentacao.pdf` (gitignored)

**Avaliação MIE:**

- Síntese: `leituras/entrevistas/avaliação/sintese-avaliacao.md`
- Instrumento: `leituras/entrevistas/avaliação/avaliacao.md`
- Transcrições: `leituras/entrevistas/avaliação/` (PDFs removidos/migrados)

**Preparação para banca:**

- Perfis: `preparacao-banca.md`
- Dados formais: `informacoes_defesa.txt`

## Special Directories

**`slides/`:**
Arquivos HTML autocontidos + pipeline Node.js. Cada slide é editável isoladamente. PDF gerado localmente, não versionado.

**`leituras/`:**
Material de apoio à pesquisa — não entra na compilação automática; referenciado manualmente no artigo e slides.

**`.specs/`:**
Documentação de gestão do projeto (tlc-spec-driven). Não faz parte dos entregáveis acadêmicos formais.

**`figuras/`:**
Imagens embutidas no artigo LaTeX. Referenciadas em `main.tex` linhas 107 e 118.
