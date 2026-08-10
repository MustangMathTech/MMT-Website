import fs from 'fs';
import path from 'path';

export async function GET({ params }) {
    const imagePath = params.path;
    const sanitizedPath = path.normalize(imagePath).replace(/^(\.\.(\/|\|$))+/, '');
    const filePath = path.resolve('src/routes/potw/server/images', sanitizedPath);

    if (!filePath.startsWith(path.resolve('src/routes/potw/server/images'))) {
        return new Response('Forbidden', { status: 403 });
    }

    try {
        if (fs.existsSync(filePath)) {
            const image = fs.readFileSync(filePath);
            const extension = path.extname(filePath).toLowerCase();
            let contentType = 'application/octet-stream';

            if (extension === '.png') {
                contentType = 'image/png';
            } else if (extension === '.jpg' || extension === '.jpeg') {
                contentType = 'image/jpeg';
            } else if (extension === '.gif') {
                contentType = 'image/gif';
            } else if (extension === '.svg') {
                contentType = 'image/svg+xml';
            } else if (extension === '.pdf') {
                contentType = 'application/pdf';
            }

            return new Response(image, {
                headers: {
                    'Content-Type': contentType
                }
            });
        } else {
            return new Response('Not Found', { status: 404 });
        }
    } catch (error) {
        console.error('Error reading image file:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
