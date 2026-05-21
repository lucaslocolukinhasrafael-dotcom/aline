import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const publicDir = './public/images';

async function convertDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const input = path.join(dir, file);
      const output = path.join(dir, `${base}.webp`);
      console.log(`Converting ${input} to ${output}`);
      await sharp(input).webp({ quality: 80 }).toFile(output);
      // optionally delete original
      // fs.unlinkSync(input);
    }
  }
}

async function run() {
  await convertDir(assetsDir);
  await convertDir(publicDir);
  console.log('Conversion complete.');
}
run();
