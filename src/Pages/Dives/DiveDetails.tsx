import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import { getDive } from '../../api/dives';
import * as api from '../../api/dives';
import DiveProfile from '../../Components/DiveProfile';
import DiveDetailsForm from '../../Components/Forms/DiveDetails';
import { TabPanel } from '../../Components/Tabs';
import Tabs from '../../Components/Tabs/Tabs';
import { useApiCall, useApiState } from '../../Context/Auth/callApi';
import useNotification from '../../Context/Notifications/useNotification';
import Notification from '../../Helpers/Notification';

export default function DiveDetails(): React.ReactElement {
    const { diveId } = useParams<{ diveId: string }>();
    const notify = useNotification();
    const [dive, setDive] = useApiState(getDive, Number(diveId));
    const [selectedTab, setSelectedTab] = useState('dive');

    const updateDive = useApiCall(api.updateDive);

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
                        const newDive = await updateDive(dive.data.dive_id, {
                            ...data,
                            computer_id: data.computer?.computer_id,
                        });
                        setDive({
                            data: newDive,
                            loading: false,
                        });
                        notify(Notification.success('Dive saved successfully').withTimeout());
                    }}
                />
            </TabPanel>

            <TabPanel id="profile" selectedTab={selectedTab}>
                <DiveProfile diveId={dive.data.dive_id} />
            </TabPanel>
        </>
    );
}
