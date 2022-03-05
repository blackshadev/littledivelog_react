export default function formatDepth(value: number | null): string {
    return value?.toFixed(2) ?? '';
}

export function parseFormattedDepth(value: string): number {
    return parseFloat(value);
}
