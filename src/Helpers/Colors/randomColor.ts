import leftpad from '../leftpad';

export function randomColor(): string {
    const r = leftpad(2, Math.floor(Math.random() * 255).toString(16));
    const g = leftpad(2, Math.floor(Math.random() * 255).toString(16));
    const b = leftpad(2, Math.floor(Math.random() * 255).toString(16));
    return `#${r}${g}${b}`;
}
