import fs from 'fs';
import path from 'path';

export async function load() {
    const filePath = path.resolve('src/routes/potw/server/potw.json');
    const potwData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    // START TIME. MODIFY TO CHANGE POTW SELECTION instead of server/potw.json
    const startDate = new Date('2026-08-05T08:00:00Z');
    const now = new Date();
    const weekIndex = Math.floor((now-startDate)/(1000*60*60*24*7));
    const problemIndex = weekIndex % potwData.length;
    const archive = potwData.filter((_, index) => index < problemIndex).reverse();

    return {
        archive: archive
    };
}
