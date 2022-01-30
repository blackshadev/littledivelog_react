export default function formatDivetime(value: number | null): string {
    if (!value) {
        return '';
    }

    const t = {
        hh: leftpad(2, Math.floor(value / 3600).toFixed(0), '0'),
        mm: leftpad(2, (Math.floor(value / 60) % 60).toFixed(0), '0'),
        ss: leftpad(2, Math.floor(value % 60).toFixed(0), '0'),
    };

    return `${t.hh}:${t.mm}:${t.ss}`;
}

export function parseDivetime(divetime: string): number {
    const parts = divetime.split(':').map(Number);
    let hh = 0,
        mm = 0,
        ss = 0;
    if (parts.length === 1) {
        mm = parts[0];
    } else {
        hh = parts[0] ?? 0;
        mm = parts[1] ?? 0;
        ss = parts[2] ?? 0;
    }

    return hh * 3600 + mm * 60 + ss;
}

function leftpad(length: number, str: string, char = '0'): string {
    for (let i = str.length; i < length; i++) {
        str = char + str;
    }

    return str;
}
