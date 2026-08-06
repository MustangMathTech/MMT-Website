import fs from 'fs';
import path from 'path';

export async function load() {
    const filePath = path.resolve('src/routes/potw/server/potw.json');
    const potwData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const startDate = new Date('2024-01-01T00:00:00Z');
    const now = new Date();
    const weekIndex = Math.floor((now - startDate) / (1000 * 60 * 60 * 24 * 7));
    const problemIndex = weekIndex % potwData.length;
    const archive = potwData.filter((_, index) => index !== problemIndex).reverse();



    return {
        archive: archive
    };
}
