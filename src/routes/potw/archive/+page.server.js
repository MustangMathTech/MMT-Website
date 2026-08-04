import fs from 'fs';
import path from 'path';

export async function load() {
    const filePath = path.resolve('src/routes/potw/server/potw.json');
    const potwData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Return all but the most recent problem
    const archive = potwData.slice(0, -1).reverse();
    return {
        archive
    };
}
