import breakpoints from '../../Styling/Constants/breakpoints';

export type ApplicationContextType = {
    menu: { isCollapsed: boolean };
};

export const initialState: ApplicationContextType = {
    menu: { isCollapsed: false },
};

export function initializeState(): ApplicationContextType {
    const m = window.matchMedia(`(max-width: ${breakpoints.md})`);

    return {
        menu: {
            isCollapsed: m.matches,
        },
    };
}
