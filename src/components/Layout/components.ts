import styled from 'styled-components';

import { Nav } from '../Navigation/components';

export const Main = styled.div``;

const navWidth = '9rem';
export const Container = styled.div`
    display: flex;

    ${Nav} {
        width: ${navWidth};
    }

    ${Main} {
        flex: 1;

        position: absolute;
        flex-grow: 1;
        left: ${navWidth};
        min-height: 100%;
        top: 0;
        right: 0;
    }
`;
