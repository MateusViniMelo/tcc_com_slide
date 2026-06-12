# Mapa Cidadão — TCC

Repositório do Trabalho de Conclusão de Curso sobre o **Mapa Cidadão**, uma aplicação de *crowdsourcing* urbano com ênfase em **espaciabilidade** — a capacidade de interfaces cartográficas apoiarem o raciocínio espacial.

**Instituição:** Universidade Federal do Pará (UFPA) — Faculdade de Computação  
**Autores:** Mateus Vinicius S. Melo, André Avelino da Silva Neto, Marcelle Pereira Mota

---

## Sobre o projeto

O Mapa Cidadão é um sistema colaborativo de mapeamento urbano desenvolvido a partir do conceito de espaciabilidade. O trabalho inclui:

- Artigo acadêmico em LaTeX (template SBC)
- Apresentação em slides HTML (26 páginas)
- Materiais de avaliação e entrevistas com especialistas (MIE)

A avaliação foi conduzida com o **Método de Inspeção da Espaciabilidade (MIE)**, investigando dimensões como orientação espacial (D1), padrões (D2), associações (D4) e tipos espaciais (D6), além de critérios de usabilidade e UX.

---

## Estrutura do repositório

```
TCC_Mateus/
├── main.tex                 # Artigo principal
├── sbc-template.sty         # Estilo SBC
├── sbc-template.bib         # Referências bibliográficas
├── sbc.bst                  # Estilo BibTeX
├── figuras/                 # Imagens do artigo
├── leituras/                # Materiais de leitura e avaliação
│   └── entrevistas/         # Transcrições e resultados das entrevistas
└── slides/                  # Apresentação (HTML + gerador de PDF)
    ├── pagina1.html … pagina26.html
    ├── convert-to-pdf.mjs
    └── package.json
```

---

## Compilar o artigo (LaTeX)

Requisitos: distribuição LaTeX com `pdflatex` e `bibtex` (TeX Live, MiKTeX, etc.).

```bash
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

---

## Gerar a apresentação em PDF

Os slides são arquivos HTML independentes (1280×720 px), convertidos para um único PDF com Playwright.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)

### Primeira execução

```powershell
cd slides
npm install
npx playwright install chromium
```

### Gerar o PDF

```powershell
cd slides
npm run pdf
```

Saída: `slides/apresentacao.pdf` (26 slides em ordem numérica).

---

## Slides

Cada slide é um arquivo `paginaN.html` autocontido (HTML + CSS inline). Para editar:

1. Abra o `.html` no navegador para visualizar
2. Ajuste o conteúdo ou estilo
3. Execute `npm run pdf` para regenerar a apresentação

O script `convert-to-pdf.mjs` captura a área `.slide-container` de cada página e monta o PDF final.

---

## Licença e uso

Material acadêmico vinculado ao TCC na UFPA. Consulte os autores antes de reutilizar o conteúdo em outros trabalhos.
