import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as api from '../../api/dives';
import DiveDetailsForm from '../../Components/Forms/DiveDetails';
import { TabPanel } from '../../Components/Tabs';
import Tabs from '../../Components/Tabs/Tabs';
import { useApiCall } from '../../Context/Auth/callApi';
import Route, { route } from '../../Routing/Routes';

export default function DiveDetailsNew(): React.ReactElement {
    const [selectedTab, setSelectedTab] = useState('dive');
    const navigate = useNavigate();

    const newDive = useApiCall(api.newDive);

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
                        const newDiveData = await newDive(data);
                        navigate(route(Route.DiveDetail, { diveId: newDiveData.dive_id + '' }));
                    }}
                />
            </TabPanel>

            <TabPanel id="profile" selectedTab={selectedTab}></TabPanel>
        </>
    );
}
