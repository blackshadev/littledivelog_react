import React, { useState } from 'react';

import DiveDetailsForm from '../../Components/Forms/DiveDetails';
import { TabPanel } from '../../Components/Tabs';
import Tabs from '../../Components/Tabs/Tabs';

const DiveDetailsNew: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('dive');

    return (
        <>
            <Tabs
                value={selectedTab}
                onChange={(_, tab): void => setSelectedTab(tab)}
                tabs={[
                    { id: 'dive', label: 'Dive' },
                    { disabled: true, id: 'profile', label: 'Profile' },
                ]}
            />
            <TabPanel id="dive" selectedTab={selectedTab}>
                <DiveDetailsForm
                    dive={{}}
                    onUpdate={async (data): Promise<void> => {
                        console.log(data);
                    }}
                />
            </TabPanel>

            <TabPanel id="profile" selectedTab={selectedTab}></TabPanel>
        </>
    );
};

export default DiveDetailsNew;
