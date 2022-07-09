import { css } from 'styled-components';

import breakpoints from '../Constants/breakpoints';

type BreakpointKeys = keyof typeof breakpoints;
type Media = { [key in BreakpointKeys]: (cssString: ReturnType<typeof css>) => string };

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
