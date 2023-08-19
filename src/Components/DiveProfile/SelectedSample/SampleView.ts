import { DiveSample, SampleEventType } from '../../../api/types/dives/DiveProfile';
import formatDivetime from '../../../Helpers/Formatters/formatDiveTime';

function formatEvent(ev: { Type: SampleEventType; Value?: number }): string {
    switch (ev.Type) {
        case SampleEventType.Heading:
            return `Set heading to ${ev.Value}`;
        default:
            return `${SampleEventType[ev.Type]}: ${ev.Value}`;
    }
}

function formatSampleValues<T extends keyof DiveSample>(key: T, value: DiveSample[T]): string[] {
    if (value === undefined || value === null) {
        return [];
    }

    if (key === 'Time' && typeof value === 'number') {
        return [formatDivetime(value)];
    }

    if (key === 'Pressure' && Array.isArray(value)) {
        const pressures = value as { Pressure: number; Tank: number }[];
        return pressures.length === 1
            ? [pressures[0].Pressure.toFixed(0)]
            : pressures.map((p) => `${p.Tank}: ${p.Pressure.toFixed(0)}`);
    }

    if (key === 'Pressure' && typeof value === 'object') {
        const pressure = value as { Value: number; Tank: number };
        return [pressure.Value.toFixed(0)];
    }

    if (key === 'Events' && Array.isArray(value)) {
        const events = value as { Type: SampleEventType; Value?: number }[];
        return events.map(formatEvent);
    }

    if (typeof value === 'number') {
        return [value.toFixed(1)];
    }

    if (typeof value === 'string') {
        return [value];
    }

    return [];
}

export default class SampleView {
    public static fromSample(sample?: DiveSample): SampleView {
        if (sample === undefined) {
            return this.empty();
        }

        const data: Record<string, string[]> = {};

        for (const key of Object.keys(sample)) {
            const sampleKey = key as keyof DiveSample;
            const formattedValues = formatSampleValues(sampleKey, sample[sampleKey]);
            if (formattedValues.length === 0) {
                continue;
            }

            data[sampleKey] = formattedValues;
        }

        return new this(data);
    }

    public static empty(): SampleView {
        return new this({});
    }

    public constructor(private readonly data: Record<string, string[]>) {}

    public values(): [string, string[]][] {
        return Object.entries(this.data);
    }
}
