import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import { getDive } from '../../api/dives';
import DiveProfile from '../../Components/DiveProfile';
import DiveDetailsForm from '../../Components/Forms/DiveDetails';
import { TabPanel } from '../../Components/Tabs';
import Tabs from '../../Components/Tabs/Tabs';
import useApiData from '../../Context/Auth/callApi';

const DiveDetails: React.FC = () => {
    const { diveId } = useParams<{ diveId: string }>();
    const dive = useApiData(getDive, Number(diveId));
    const [selectedTab, setSelectedTab] = useState('dive');

    if (dive.loading) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <Tabs
                value={selectedTab}
                onChange={(_, tab): void => setSelectedTab(tab)}
                tabs={[
                    { id: 'dive', label: 'Dive' },
                    { id: 'profile', label: 'Profile' },
                ]}
            />
            <TabPanel id="dive" selectedTab={selectedTab}>
                <DiveDetailsForm
                    dive={dive.data}
                    onUpdate={async (data): Promise<void> => {
                        console.log(data);
                    }}
                />
            </TabPanel>

            <TabPanel id="profile" selectedTab={selectedTab}>
                <DiveProfile diveId={dive.data.dive_id} />
            </TabPanel>
        </>
    );
};

export default DiveDetails;
