import React from 'react';

import { Link } from 'react-router-dom';

import { NavItem as StyledNavItem } from './components';

type Props = {
    to: string;
    icon: React.ReactElement;
};

const NavItem: React.FC<React.PropsWithChildren<Props>> = ({ to, icon, children }) => {
    return (
        <StyledNavItem>
            <Link to={to}>
                {icon}
                <span>{children}</span>
            </Link>
        </StyledNavItem>
    );
};

export default NavItem;
