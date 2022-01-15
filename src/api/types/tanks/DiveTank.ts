export type DiveTank = {
    volume: number;
    oxygen: number;
    pressure: {
        begin: number;
        end: number;
        type: 'bar' | 'psi';
    };
};
