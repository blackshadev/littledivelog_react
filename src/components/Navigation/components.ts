import styled from 'styled-components';

import colors from '../../styling/colors';

export const Nav = styled.nav`
    position: fixed;
    height: 100%;
    background-color: ${colors.accent};

    ul {
        list-style: none;
        margin-top: 1rem;
    }

    a {
        display: block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        width: 100%;
        white-space: nowrap;
        color: ${colors.background};

        &:hover {
            text-decoration: underline;
        }
    }
`;
