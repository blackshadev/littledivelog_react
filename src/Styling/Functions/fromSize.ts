import { css } from 'styled-components';

import breakpoints from '../Constants/breakpoints';

// eslint-disable-next-line @typescript-eslint/ban-types
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => unknown ? A : never;

type BreakpointKeys = keyof typeof breakpoints;
type Media = { [key in BreakpointKeys]: (cssString: ArgumentTypes<typeof css>[0]) => ReturnType<typeof css> };

const fromSize: Media = Object.entries(breakpoints).reduce((acc, [label, size]: [string, string]) => {
    return {
        ...acc,
        [label]: (content: string) => css`
            @media (min-width: ${size}) {
                ${content}
            }
        `,
    };
}, {}) as Media;

export default fromSize;
