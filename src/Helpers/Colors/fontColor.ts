export default function fontColor(backgroundColor: string): 'black' | 'white' {
    if (backgroundColor[0] === '#') {
        backgroundColor = backgroundColor.substring(1);
    }

    const r = parseInt(backgroundColor.substring(0, 2), 16);
    const g = parseInt(backgroundColor.substring(2, 4), 16);
    const b = parseInt(backgroundColor.substring(4, 6), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
}
