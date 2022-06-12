import styled from 'styled-components';

import colors from '../../Styling/Constants/colors';
import misc from '../../Styling/Constants/misc';
import spacing from '../../Styling/Constants/spacing';

export const navWidth = '150px';

export const Nav = styled.nav`
    position: fixed;
    height: 100%;
    background-color: ${colors.accent};
    width: ${navWidth};

    ul {
        list-style: none;
        margin-top: 1rem;
    }
`;

export const NavItem = styled.li`
    a {
        display: flex;
        padding: 0.5rem 1rem;
        text-decoration: none;
        width: 100%;
        color: ${colors.background};
        align-items: center;
        white-space: nowrap;

        &:hover {
            text-decoration: underline;
        }

        svg {
            vertical-align: middle;
            display: inline-block;
            height: 24px;
            width: 24px;
            margin-right: ${spacing.md};
        }
    }
`;

export const NavSectionSeparator = styled.hr`
    &:first-child {
        display: none;
    }

    margin: ${spacing.md};
    border: 0;
    background-color: transparent;
    border-top: 2px solid ${colors.highlight};
    border-radius: ${misc.roundedBorders};
`;

export const NavItemsSection = styled.ul``;
