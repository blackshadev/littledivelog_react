import React from 'react';

import { NavLink } from 'react-router-dom';

import { NavItem as StyledNavItem } from './components';

type Props = {
    icon: React.ReactElement;
    onClick?: React.MouseEventHandler;
    to?: string;
};

const NavItem: React.FC<React.PropsWithChildren<Props>> = ({ to = undefined, onClick = undefined, icon, children }) => {
    if (typeof to === 'string') {
        return (
            <StyledNavItem>
                <NavLink to={to}>
                    {icon}
                    <span>{children}</span>
                </NavLink>
            </StyledNavItem>
        );
    }

    if (typeof onClick === 'function') {
        return (
            <StyledNavItem>
                <button onClick={onClick}>
                    {icon}
                    <span>{children}</span>
                </button>
            </StyledNavItem>
        );
    }

    return <></>;
};

export default NavItem;
