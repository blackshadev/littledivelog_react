import React from 'react';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildren';
import { NavItemsSection, NavSectionSeparator } from './components';

const NavSection: React.FC<ReactPropsWithChildren> = ({ children }) => {
    return (
        <>
            <NavSectionSeparator />
            <NavItemsSection>{children}</NavItemsSection>
        </>
    );
};

export default NavSection;
