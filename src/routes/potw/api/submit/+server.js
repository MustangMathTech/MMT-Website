import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { evaluate } from 'mathjs';

const TOLERANCE = 1e-9;

function safeEvaluate(expr) {
    try {
        const value = evaluate(expr);
        if (typeof value !== 'number' || !Number.isFinite(value)) {
            return { valid: false };
        }
        return { valid: true, value };
    } catch (err) {
        return { valid: false };
    }
}

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

    const userResult = safeEvaluate(answer);
    if (!userResult.valid) {
        return json({ feedback: 'invalid' });
    }

    const correctResult = safeEvaluate(potw.answer);
    if (!correctResult.valid) {
        console.error('Correct answer is not a valid expression for potwId:', potwId);
        return json({ feedback: 'invalid' });
    }

    const feedback = numbersMatch(userResult.value, correctResult.value) ? 'correct' : 'incorrect';

    return json({ feedback });
}
