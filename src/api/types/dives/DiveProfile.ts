export type DiveProfile = DiveSample[];

export type DiveSample = {
    Time: number;
    Depth?: number;
    Temperature?: number;
    Pressure?: { Pressure: number; Tank: number }[];
    Events?: unknown[];
};
