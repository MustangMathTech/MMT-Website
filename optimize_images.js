import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputDir = path.join(__dirname, 'static/about-us-images/serious'); // or silly
const outputDir = path.join(__dirname, 'static/about-us-images/serious');
const csvPath = path.join(__dirname, 'static/about-us-images/image_report_serious.csv');
const targetWidth = 512;
const targetHeight = 512;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(csvPath, 'Filename,Original Size (KB),Original Dimensions,Optimized Size (KB),Optimized Dimensions\n');

let totalOriginalSize = 0;
let totalOptimizedSize = 0;

async function processImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const ext = path.extname(filename);
  const baseName = path.basename(filename, ext);
  const outputName = baseName + '.webp';
  const outputPath = path.join(outputDir, outputName);

  try {
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = originalStats.size / 1024;
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const originalDimensions = `${metadata.width}x${metadata.height}`;

    await image
      .resize(targetWidth, targetHeight, {
        fit: sharp.fit.cover,
        kernel: sharp.kernel.lanczos3,
      })
      .webp({ quality: 95 })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSizeKB = newStats.size / 1024;
    const newImage = sharp(outputPath);
    const newMetadata = await newImage.metadata();
    const newDimensions = `${newMetadata.width}x${newMetadata.height}`;
    const csvLine = `${filename},${originalSizeKB.toFixed(2)},${originalDimensions},${newSizeKB.toFixed(2)},${newDimensions}\n`;
    fs.appendFileSync(csvPath, csvLine);
    totalOriginalSize += originalSizeKB;
    totalOptimizedSize += newSizeKB;
    console.log(`processed: ${filename}`);
  } catch (err) {
    console.error(`error processing ${filename}:`, err);
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

  const totalReducedKB = totalOriginalSize - totalOptimizedSize;
  console.log(`\nsaved at ${csvPath}`);
  console.log(`total original size: ${totalOriginalSize.toFixed(2)} KB`);
  console.log(`total optimized size: ${totalOptimizedSize.toFixed(2)} KB`);
  console.log(`total reduction: ${totalReducedKB.toFixed(2)} KB`);
}
main();