import styled from 'styled-components';

import spacing from '../../Styling/Constants/spacing';
import { navWidth } from '../Navigation/components';

export const Main = styled.div`
    padding: ${spacing.xs};
`;

export const Container = styled.div`
    display: flex;

    ${Main} {
        flex: 1;

        position: absolute;
        flex-grow: 1;
        left: ${navWidth};
        padding: ${spacing.md} ${spacing.xxl};
        min-height: 100%;
        top: 0;
        right: 0;
    }
`;
