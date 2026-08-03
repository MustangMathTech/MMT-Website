import fs from 'fs';
import path from 'path';

export async function load() {
    const filePath = path.resolve('src/routes/potw/server/potw.json');
    const potwData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    const latestPotw = potwData.at(-1);
    const pastPotw = potwData.slice(0, -1);

    const { answer, solution, ...safeLatestPotw } = latestPotw;

    return {
        potw: safeLatestPotw,
        archive: pastPotw
    };
}
