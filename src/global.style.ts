import { createGlobalStyle } from 'styled-components';

import colors from './styling/colors';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${colors.background};
        font-family: Helvetica, Arial, sans-serif;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
    }
`;

export default GlobalStyle;
