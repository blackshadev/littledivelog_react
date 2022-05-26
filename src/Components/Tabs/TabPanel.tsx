import React from 'react';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildren';

type Props = {
    id: string;
    selectedTab: string;
};

const TabPanel: React.FC<ReactPropsWithChildren<Props>> = ({ id, children, selectedTab }) => {
    const isSelected = selectedTab === id;

    if (!isSelected) {
        return <></>;
    }

    return (
        <div id={`${id}-tabpanel`} hidden={!isSelected} aria-labelledby={`${id}-tab`}>
            {children}
        </div>
    );
};

export default TabPanel;
