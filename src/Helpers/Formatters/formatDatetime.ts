import dayjs from 'dayjs';

import { parseDiveDateTime } from '../parseDiveDateTime';

export default function formatDatetime(date?: Date | string): string {
    if (!date) {
        return '';
    }

    const normalizedDate = parseDiveDateTime(date);
    return dayjs(normalizedDate).format('YYYY-MM-DD HH:mm:ss');
}
