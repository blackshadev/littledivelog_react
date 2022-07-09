import styled from 'styled-components';

import navigationWidth from '../../Helpers/navigationWidth';
import colors from '../../Styling/Constants/colors';
import misc from '../../Styling/Constants/misc';
import spacing from '../../Styling/Constants/spacing';

export function transition(property: string): string {
    return `${property} ease-out 0.5s`;
}

export const Nav = styled.nav<{ isCollapsed: boolean }>`
    position: fixed;
    height: 100%;
    background-color: ${colors.accent};
    width: ${({ isCollapsed }): number => navigationWidth(isCollapsed)}px;
    transition: ${transition('width')};
    overflow: hidden;

    ul {
        list-style: none;
        margin-top: 1rem;
    }
`;

export const NavItem = styled.li`
    a,
    button {
        cursor: pointer;
        background: transparent;
        border: 0;
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

        &.active {
            background-color: ${colors.highlight};
        }

        svg {
            vertical-align: middle;
            display: inline-block;
            height: 24px;
            width: 24px;
            margin-right: ${spacing.md};
        }
    }

    span {
        font-size: 1rem;
    }
`;

export const NavToggler = styled(NavItem)<{ menuIsCollapsed: boolean }>`
    svg {
        color: white;
        transition: ${transition('transform')};
        transform: ${({ menuIsCollapsed }): string => (menuIsCollapsed ? `rotate(180deg)` : '0')};
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
