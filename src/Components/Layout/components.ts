import styled from 'styled-components';

import navigationWidth from '../../Helpers/navigationWidth';
import spacing from '../../Styling/Constants/spacing';
import { transition } from '../Navigation/components';

export const Main = styled.div`
    padding: ${spacing.xs};
`;

export const Container = styled.div<{ $menuIsCollapsed: boolean }>`
    display: flex;

    ${Main} {
        flex: 1;

        position: absolute;
        flex-grow: 1;
        left: ${({ $menuIsCollapsed }): number => navigationWidth($menuIsCollapsed)}px;
        padding: ${spacing.md} ${spacing.xxl};
        min-height: 100%;
        transition: ${transition('left')};
        top: 0;
        right: 0;
    }
`;
