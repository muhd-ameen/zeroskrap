/* --------------------------------------------------------------------------
   Builds `public/og-image.jpg` - the link preview card used by WhatsApp,
   Facebook, LinkedIn, X and iMessage - from the source artwork in `assets`.

   The output is locked to 1200x630 (the 1.91:1 ratio scrapers expect) and
   letterboxed on white rather than cropped, so nothing in the source is cut
   off. WhatsApp silently falls back to a tiny thumbnail when the image is
   heavy, hence JPEG instead of PNG.

   Usage: node scripts/build-share-image.mjs [--source seo-pop.webp] [--quality 84]
   `--source` is resolved relative to `assets`.
   -------------------------------------------------------------------------- */

import { stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = new URL("..", import.meta.url).pathname;

const args = process.argv.slice(2);
const sourceName = args.includes("--source")
  ? args[args.indexOf("--source") + 1]
  : "seo-pop.webp";
const quality = Number(args[args.indexOf("--quality") + 1]) || 84;

const source = join(ROOT, "assets", sourceName);
const target = join(ROOT, "public/og-image.jpg");

/* The screenshot opens on a sliver of the row above; drop it so the card
   starts on a full row of tiles. */
const TRIM_TOP = 50;

const { width = 0, height = 0 } = await sharp(source).metadata();

await sharp(source)
  .extract({ left: 0, top: TRIM_TOP, width, height: height - TRIM_TOP - 14 })
  .resize(1200, 630, { fit: "contain", background: "#ffffff" })
  .flatten({ background: "#ffffff" })
  .jpeg({ quality, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(target);

const { size } = await stat(target);
console.log(
  `public/og-image.jpg  1200x630  ${Math.round(size / 1024)} KB` +
    (size > 300 * 1024 ? "  (over 300 KB - lower --quality)" : ""),
);
