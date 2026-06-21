import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCALE = 2 / 3;

function scaleNumber(value) {
  const scaled = parseFloat(value) * SCALE;
  return Math.round(scaled * 10) / 10;
}

function formatNumber(value) {
  const n = scaleNumber(value);
  return Number.isInteger(n) ? String(n) : String(n);
}

function scalePxInText(text) {
  return text.replace(/(\d+(?:\.\d+)?)px/g, (_, num) => `${formatNumber(num)}px`);
}

function scalePathData(d) {
  return d.replace(/-?\d*\.?\d+/g, (match) => formatNumber(match));
}

function scaleStrokeWidth(text) {
  return text.replace(/stroke-width="(\d+(?:\.\d+)?)"/g, (_, num) => {
    const scaled = scaleNumber(num);
    const value = scaled < 1 ? 1 : Math.round(scaled * 10) / 10;
    return `stroke-width="${value}"`;
  });
}

function transformSlide(content) {
  let result = content;

  result = result.replace(/viewBox="0 0 1920 1080"/g, 'viewBox="0 0 1280 720"');
  result = result.replace(/d="([^"]+)"/g, (_, pathData) => `d="${scalePathData(pathData)}"`);
  result = scaleStrokeWidth(result);
  result = scalePxInText(result);

  result = result.replace(/\bwidth:\s*1280px\b/g, 'width: 1280px');
  result = result.replace(/\bheight:\s*720px\b/g, 'height: 720px');
  result = result.replace(/\bmax-height:\s*720px\b/g, 'max-height: 720px');

  return result;
}

async function main() {
  const files = (await readdir(__dirname))
    .filter((f) => /^pagina\d+\.html$/i.test(f))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

  let count = 0;

  for (const file of files) {
    const filePath = path.join(__dirname, file);
    const original = await readFile(filePath, 'utf8');

    if (!/1920|1080/.test(original)) {
      continue;
    }

    const scaled = transformSlide(original);
    await writeFile(filePath, scaled, 'utf8');
    console.log(`  ${file} → 1280×720`);
    count += 1;
  }

  console.log(`\n${count} slides convertidos para 1280×720.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
