import dayjs from 'dayjs';

export default function formatDatetime(date?: Date): string {
    if (!date) {
        return '';
    }
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

export function parseDatetime(date: string): Date {
    return dayjs(date, 'YYYY-MM-DD HH:mm:ss').toDate();
}
