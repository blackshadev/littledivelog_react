declare const process: { env: { NODE_ENV: string } };

function isProd(): boolean {
    return process.env.NODE_ENV === 'production';
}

export const apiURL = isProd() ? 'https://api.dive.littledev.nl/api' : 'http://localhost:8000/api';
