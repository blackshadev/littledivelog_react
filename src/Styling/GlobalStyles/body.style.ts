import { createGlobalStyle } from 'styled-components';

import colors from '../Constants/colors';

const BodyStyle = createGlobalStyle`
    body {
        background: ${colors.background};
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
    }
`;

export default BodyStyle;
