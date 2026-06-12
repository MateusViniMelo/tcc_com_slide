import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import { readdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SLIDES_DIR = __dirname;
const OUTPUT = path.join(SLIDES_DIR, 'apresentacao.pdf');

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;
const PDF_WIDTH = (SLIDE_WIDTH / 96) * 72;
const PDF_HEIGHT = (SLIDE_HEIGHT / 96) * 72;

function sortSlideFiles(files) {
  return files
    .filter((f) => /^pagina\d+\.html$/i.test(f))
    .sort((a, b) => {
      const num = (name) => Number(name.match(/\d+/)[0]);
      return num(a) - num(b);
    });
}

async function renderSlide(browser, htmlFile) {
  const page = await browser.newPage();
  const fileUrl = `file:///${path.join(SLIDES_DIR, htmlFile).replace(/\\/g, '/')}`;

  await page.setViewportSize({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT });
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForSelector('.slide-container', { state: 'visible' });

  const png = await page.locator('.slide-container').screenshot({ type: 'png' });
  await page.close();

  const doc = await PDFDocument.create();
  const image = await doc.embedPng(png);
  const pdfPage = doc.addPage([PDF_WIDTH, PDF_HEIGHT]);
  pdfPage.drawImage(image, { x: 0, y: 0, width: PDF_WIDTH, height: PDF_HEIGHT });

  return doc.save();
}

async function mergePdfs(pdfBuffers) {
  const merged = await PDFDocument.create();

  for (const buffer of pdfBuffers) {
    const doc = await PDFDocument.load(buffer);
    const [page] = await merged.copyPages(doc, [0]);
    merged.addPage(page);
  }

  return merged.save();
}

async function main() {
  const files = sortSlideFiles(await readdir(SLIDES_DIR));
  if (files.length === 0) {
    throw new Error('Nenhum arquivo pagina*.html encontrado.');
  }

  console.log(`Convertendo ${files.length} slides...`);

  const browser = await chromium.launch();
  const pdfs = [];

  try {
    for (const file of files) {
      process.stdout.write(`  ${file}... `);
      const pdf = await renderSlide(browser, file);
      pdfs.push(pdf);
      console.log('ok');
    }
  } finally {
    await browser.close();
  }

  const merged = await mergePdfs(pdfs);
  await writeFile(OUTPUT, merged);

  console.log(`\nPDF gerado: ${OUTPUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
