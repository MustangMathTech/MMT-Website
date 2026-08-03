import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const TOLERANCE = 1e-9;

function numbersMatch(a, b) {
    const diff = Math.abs(a - b);
    const scale = Math.max(1, Math.abs(a), Math.abs(b));
    return diff <= TOLERANCE * scale;
}

export async function POST({ request }) {
    const { answer, potwId } = await request.json();

    if (answer.trim() === '') {
        return json({ feedback: null });
    }

    const filePath = path.resolve('src/routes/potw/server/potw.json');
    const potwData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const potw = potwData.find(p => p.id === potwId);

    if (!potw) {
        return json({ feedback: 'invalid' });
    }

    const userAnswer = parseFloat(answer);
    if (isNaN(userAnswer)) {
        return json({ feedback: 'invalid' });
    }

    const correctAnswer = parseFloat(potw.answer);
    if (isNaN(correctAnswer)) {
        console.error('Correct answer is not a number for potwId:', potwId);
        return json({ feedback: 'invalid' });
    }

    const feedback = numbersMatch(userAnswer, correctAnswer) ? 'correct' : 'incorrect';

    return json({ feedback });
}
