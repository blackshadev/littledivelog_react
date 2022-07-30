export function parseDiveDateTime(diveDate: undefined | null | string | Date): string | null {
    if (!diveDate) {
        return null;
    }

    if (diveDate instanceof Date) {
        diveDate = diveDate.toISOString();
    }

    if (diveDate.indexOf('+') === -1) {
        return diveDate;
    }

    const [dateTimePart, timezone] = diveDate.split('+');
    if (timezone === '00:00') {
        return dateTimePart;
    }

    return diveDate;
}
