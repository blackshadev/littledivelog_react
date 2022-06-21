import React from 'react';

import MUITab from '@mui/material/Tab';

import { TabsContainer } from './components';

type Props = {
    tabs: {
        id: string;
        label: string;
        disabled?: boolean;
    }[];
    value: string;
    onChange(event: React.SyntheticEvent, id: string): void;
};

const Tabs: React.FC<Props> = ({ tabs, value, onChange }) => {
    return (
        <TabsContainer value={value} onChange={onChange}>
            {tabs.map(({ id, label, disabled }) => (
                <MUITab
                    disabled={disabled}
                    value={id}
                    key={id}
                    label={label}
                    id={`${id}-tab`}
                    aria-controls={`${id}-tabpanel`}
                />
            ))}
        </TabsContainer>
    );
};

export default Tabs;
