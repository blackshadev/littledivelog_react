export type DiveProfile = DiveSample[];

export type DiveSample = {
    Time: number;
    Depth?: number;
    Temperature?: number;
    Pressure?: { Pressure: number; Tank: number }[] | { Tank: number; Value: number };
    Events?: { Type: SampleEventType; Value?: number }[];
};

export enum SampleEventType {
    None = 0,
    Deco = 1,
    RBT,
    Ascent,
    Ceiling,
    Workload,
    Transmitter,
    Violation,
    Bookmark,
    Surface,
    'Safety Stop',
    'Gas Change',
    'Voluntary Safety Stop',
    'Mandatory Safety Stop',
    'Deep Stop',
    'Ceiling (safety stop)',
    'Floor',
    Divetime,
    'Max Depth',
    OLF,
    PO2,
    'Air Time',
    RGBM,
    Heading,
    'Tissue level warning',
    'gaschange2',
}
