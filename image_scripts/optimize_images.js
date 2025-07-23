import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'static/about-us-images/silly'); //change to serious also
const outputDir = path.join(__dirname, 'static/about-us-images/optimized');

const targetWidth = 130;
const targetHeight = 130;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function cleanFilename(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-\.]/g, '');
}

async function processImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const ext = path.extname(filename).toLowerCase();
  const baseName = path.basename(filename, ext);
  const cleanName = cleanFilename(baseName);

  const outputName = cleanName + '.webp';
  const outputPath = path.join(outputDir, outputName);

  try {
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`\nProcessing: ${filename}`);
    console.log(`Original - Size: ${originalSizeKB} KB, Dimensions: ${metadata.width}x${metadata.height}`);

    await image
      .resize(targetWidth, targetHeight, {
        fit: sharp.fit.cover,
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSizeKB = (newStats.size / 1024).toFixed(2);

    const newImage = sharp(outputPath);
    const newMetadata = await newImage.metadata();

    console.log(`Optimized - Size: ${newSizeKB} KB, Dimensions: ${newMetadata.width}x${newMetadata.height}`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}

async function main() {
  const files = fs.readdirSync(inputDir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.png', '.jpg', '.jpeg'].includes(ext);
  });

  for (const file of files) {
    await processImage(file);
  }

  console.log('\nAll images processed.');
}

main();
