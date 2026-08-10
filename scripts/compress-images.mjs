/* --------------------------------------------------------------------------
   Converts the PNG photography under `public/images` to WebP at the same
   pixel dimensions, then removes the source PNGs.

   `public/logo`, `app/icon.png` and `app/apple-icon.png` are deliberately out
   of scope: the browser favicon conventions need real PNG input. The share
   card is handled separately by `scripts/build-share-image.mjs`.

   Usage: node scripts/compress-images.mjs [--keep] [--quality 90]
   -------------------------------------------------------------------------- */

import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, relative } from "node:path";
import sharp from "sharp";

const ROOT = new URL("..", import.meta.url).pathname;
const SOURCE_DIR = join(ROOT, "public/images");

const args = process.argv.slice(2);
const keepOriginals = args.includes("--keep");
const quality = Number(args[args.indexOf("--quality") + 1]) || 90;

async function collectPngs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return collectPngs(path);
      return extname(entry.name).toLowerCase() === ".png" ? [path] : [];
    }),
  );
  return files.flat();
}

function kb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

const pngs = (await collectPngs(SOURCE_DIR)).sort();

if (pngs.length === 0) {
  console.log("No PNGs found under public/images - nothing to do.");
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const source of pngs) {
  const target = source.replace(/\.png$/i, ".webp");

  await sharp(source)
    .webp({ quality, alphaQuality: 95, effort: 6 })
    .toFile(target);

  const before = (await stat(source)).size;
  const after = (await stat(target)).size;
  totalBefore += before;
  totalAfter += after;

  if (!keepOriginals) await unlink(source);

  const percent = Math.round((after / before) * 100);
  console.log(
    `${relative(ROOT, target).padEnd(44)} ${kb(before).padStart(9)} -> ${kb(after).padStart(8)}  (${percent}%)`,
  );
}

console.log(
  `\n${pngs.length} images: ${kb(totalBefore)} -> ${kb(totalAfter)} ` +
    `(saved ${kb(totalBefore - totalAfter)}, ${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`,
);
if (keepOriginals) console.log("Source PNGs kept (--keep).");
