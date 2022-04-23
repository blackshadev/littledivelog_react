export default function leftpad(length: number, str: string, char = '0'): string {
    for (let i = str.length; i < length; i++) {
        str = char + str;
    }

    return str;
}
