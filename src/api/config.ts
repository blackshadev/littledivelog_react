declare const process: { env: { NODE_ENV: string } };

function isProd(): boolean {
    return process.env.NODE_ENV === 'production';
}

export const DOWNLOADER_REPO = `blackshadev/electron-dive-downloader`;

export const apiURL = isProd() || true ? 'https://api.dive.littledev.nl/api' : 'http://api.littledivelog.local/api';
