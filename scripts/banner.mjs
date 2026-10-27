// Generates the masthead banner: a pixel-art night sky with stars and cloud banks.
// Outputs public/banner.png (sky and clouds, 1 image pixel = 1 art pixel) and
// src/data/banner.json (size, palette and the star layer the page twinkles).
// Run: node scripts/banner.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

const W = 320;
const H = 40;

// Palette: stepped cool greys for the sky, DOS greys for clouds, cyan rim light, star colours.
const palette = [
  '#000000', // 0 sky top
  '#05090d', // 1
  '#0b1218', // 2
  '#121c25', // 3
  '#1a2632', // 4 horizon
  '#22313d', // 5 horizon glow
  '#1c2227', // 6 front cloud deep
  '#2b3238', // 7 front cloud body
  '#555555', // 8 back cloud body (DOS dark grey)
  '#8a8a8a', // 9 back cloud light
  '#aaaaaa', // a back cloud highlight (DOS light grey)
  '#55ffff', // b rim light
  '#00aaaa', // c rim shade
  '#e8eef0', // d star bright
  '#6b7579', // e star dim
  '#ffff55', // f star warm
  '#3e4448', // g back cloud shadow
  '#3a4248', // h front cloud upper
];

// Deterministic pseudo-random numbers so the art is stable between runs.
let seed = 20261026;
const random = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

// 4x4 Bayer matrix for ordered dithering between sky bands.
const bayer = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

const grid = Array.from({ length: H }, () => new Array(W).fill(0));

/* ---------- Sky: banded vertical gradient with a glow at the horizon centre ---------- */

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const vertical = y / (H - 1);
    const glow = Math.max(0, 1 - Math.abs(x - W / 2) / (W * 0.45)) * Math.max(0, vertical - 0.55) * 1.4;
    const level = vertical * 4.4 + glow * 1.8; // 0..~5
    const threshold = (bayer[y % 4][x % 4] + 0.5) / 16;
    const band = Math.min(5, Math.floor(level) + (level % 1 > threshold ? 1 : 0));
    grid[y][x] = band;
  }
}

/* ---------- Stars: kept out of the grid so the page can twinkle them ---------- */

const starCandidates = [];
for (let i = 0; i < 190; i++) {
  const x = Math.floor(random() * W);
  const y = Math.floor(random() * H * 0.72);
  starCandidates.push({ x, y, tone: random() < 0.25 ? 13 : 14, twinkle: random() < 0.35 });
}
const sparkleCandidates = [
  [34, 3, 15],
  [96, 9, 11],
  [152, 4, 15],
  [208, 12, 15],
  [262, 6, 11],
  [300, 15, 15],
  [128, 20, 11],
].map(([x, y, tone]) => ({ x, y, core: tone, arms: tone === 15 ? 9 : 12 }));

/* ---------- Clouds: puffy banks built from many ellipses ---------- */

/** A bank of puffs from x0 to x1 whose tops rise from top0 to top1. */
const bank = (x0, x1, top0, top1, rMin, rMax) => {
  const puffs = [];
  let x = x0;
  while (x <= x1) {
    const t = (x - x0) / (x1 - x0 || 1);
    const r = rMin + random() * (rMax - rMin);
    const top = top0 + (top1 - top0) * t + (random() - 0.5) * 4;
    puffs.push([x, top + r, r]);
    // A smaller puff riding on top every so often gives the cumulus its lumps.
    if (random() < 0.45) puffs.push([x + (random() - 0.5) * r, top + r * 0.35, r * 0.55]);
    x += r * (1.5 + random() * 0.6);
  }
  return puffs;
};

/** Marks the pixels covered by a set of puffs. */
const mass = (puffs) => {
  const width = W;
  const inside = Array.from({ length: H }, () => new Array(width).fill(false));
  for (const [cx, cy, r] of puffs) {
    for (let y = Math.max(0, Math.floor(cy - r)); y < H; y++) {
      for (let x = Math.max(0, Math.floor(cx - r * 1.3)); x <= Math.min(width - 1, Math.ceil(cx + r * 1.3)); x++) {
        // Wider than tall, and solid below the centre so banks have no gaps underneath.
        const dy = y < cy ? y - cy : 0;
        if (((x - cx) / 1.3) ** 2 + dy * dy <= r * r) inside[y][x] = true;
      }
    }
  }
  return inside;
};

const depthAt = (inside, x, y) => {
  let d = 0;
  while (y - d - 1 >= 0 && inside[y - d - 1][x]) d++;
  return d;
};

const emptyLayer = () => Array.from({ length: H }, () => new Array(W).fill(-1));

/** Shades a cloud mass from its lit top down into shadow with ordered dithering. */
const paint = (layer, inside, ramp, rim) => {
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < layer[0].length; x++) {
      if (!inside[y][x]) continue;
      const d = depthAt(inside, x, y);
      if (rim && d === 0) {
        layer[y][x] = rim[0];
        continue;
      }
      if (rim && d === 1) {
        layer[y][x] = rim[1];
        continue;
      }
      // Position along the ramp, with dithering between neighbouring tones.
      const level = Math.min(ramp.length - 1, d / 2.2);
      const base = Math.floor(level);
      const next = Math.min(ramp.length - 1, base + 1);
      const threshold = (bayer[y % 4][x % 4] + 0.5) / 16;
      layer[y][x] = level - base > threshold ? ramp[next] : ramp[base];
    }
  }
};

// Back layer: grey banks framing the centre, lit from above.
const backRamp = [10, 9, 9, 8, 8, 16, 16];
const leftBank = bank(-6, 96, 6, 24, 4, 9);
const rightBank = bank(224, 326, 24, 5, 4, 9);
const middleBank = bank(132, 188, 36, 36, 2, 3);
// Front layer: dark banks with a cyan rim along their tops; it stays still.
const frontPuffs = [...bank(-8, 100, 14, 40, 4, 8), ...bank(220, 328, 40, 12, 4, 8)];

/**
 * A tapering tail of shrinking puffs that slopes down into the scene, so a bank's
 * inner end trails off instead of stopping in a vertical wall. Deterministic, and
 * computed after every random bank so the rest of the art is unchanged.
 */
const tail = (x0, x1, top0, top1, r0, r1) => {
  const puffs = [];
  const steps = 9;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const ease = t * t; // drops slowly at first, then faster toward the tip
    const r = r0 + (r1 - r0) * t;
    const top = top0 + (top1 - top0) * ease + Math.sin(i * 1.7) * 0.8;
    puffs.push([x0 + (x1 - x0) * t, top + r, r]);
  }
  return puffs;
};
const leftTail = tail(90, 121, 20, 38, 6.5, 1.2);
const rightTail = tail(230, 199, 21, 38, 6.5, 1.2);

// The left bank (with the low middle bank) and the right bank are shaded as separate
// masses, then share one layer.
const back = emptyLayer();
paint(back, mass([...leftBank, ...leftTail, ...middleBank]), backRamp);
paint(back, mass([...rightBank, ...rightTail]), backRamp);

const front = emptyLayer();
paint(front, mass(frontPuffs), [17, 7, 7, 6, 6], [11, 12]);

// Flatten the layers into one picture: sky, then grey banks, then the front banks.
const picture = grid.map((row, y) =>
  row.map((sky, x) => (front[y][x] >= 0 ? front[y][x] : back[y][x] >= 0 ? back[y][x] : sky)),
);

// Only keep stars that sit on open sky, never on a cloud.
const onSky = (x, y) => picture[y]?.[x] !== undefined && back[y][x] < 0 && front[y][x] < 0;
const stars = starCandidates.filter(({ x, y }) => onSky(x, y));
const sparkles = sparkleCandidates.filter(({ x, y }) => onSky(x, y) && onSky(x - 1, y) && onSky(x + 1, y));

/** Minimal PNG encoder (8-bit RGBA, no filtering) so the script needs no dependencies. */
const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buffer) => {
  let c = 0xffffffff;
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
};
const encodePng = (pixels) => {
  const W = pixels[0].length;
  const H = pixels.length;
  const header = Buffer.alloc(13);
  header.writeUInt32BE(W, 0);
  header.writeUInt32BE(H, 4);
  header[8] = 8; // bit depth
  header[9] = 6; // colour type: RGBA
  const raw = Buffer.alloc((W * 4 + 1) * H);
  pixels.forEach((row, y) =>
    row.forEach((tone, x) => {
      if (tone < 0) return; // transparent
      const hex = palette[tone];
      const offset = y * (W * 4 + 1) + 1 + x * 4;
      raw[offset] = Number.parseInt(hex.slice(1, 3), 16);
      raw[offset + 1] = Number.parseInt(hex.slice(3, 5), 16);
      raw[offset + 2] = Number.parseInt(hex.slice(5, 7), 16);
      raw[offset + 3] = 255;
    }),
  );
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
};

writeFileSync(new URL('../public/banner.png', import.meta.url), encodePng(picture));

// README copy: stars baked in and scaled 4x with nearest neighbour, because GitHub
// cannot render the 320x40 original with crisp pixels.
const SCALE = 4;
const withStars = picture.map((row) => [...row]);
for (const { x, y, tone } of stars) withStars[y][x] = tone;
for (const { x, y, core, arms } of sparkles) {
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    if (withStars[y + dy]?.[x + dx] !== undefined) withStars[y + dy][x + dx] = arms;
  }
  withStars[y][x] = core;
}
const scaled = withStars.flatMap((row) => {
  const wide = row.flatMap((tone) => new Array(SCALE).fill(tone));
  return new Array(SCALE).fill(null).map(() => wide);
});
mkdirSync(new URL('../docs/', import.meta.url), { recursive: true });
writeFileSync(new URL('../docs/banner.png', import.meta.url), encodePng(scaled));
writeFileSync(
  new URL('../src/data/banner.json', import.meta.url),
  JSON.stringify({ width: W, height: H, palette, stars, sparkles }) + '\n',
);
console.log(`banner ${W}x${H} written`);
