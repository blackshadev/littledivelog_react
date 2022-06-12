import React from 'react';

import { useParams } from 'react-router-dom';

import * as api from '../../api/buddies';
import BuddyForm from '../../Components/Forms/BuddyForm';
import { useApiCall, useApiState } from '../../Context/Auth/callApi';

const BuddyDetail: React.FC = () => {
    const { buddyId } = useParams<{ buddyId: string }>();
    const [buddy, setBuddy] = useApiState(api.getBuddy, Number(buddyId));
    const saveBuddy = useApiCall(api.saveBuddy);

    if (buddy.loading) {
        return <span>Loading...</span>;
    }

    return (
        <BuddyForm
            buddy={buddy.data}
            onSubmit={async (data): Promise<void> => {
                const newBuddyData = await saveBuddy(buddy.data.buddy_id, {
                    color: data.color,
                    text: data.text,
                });

                setBuddy({
                    data: newBuddyData,
                    loading: false,
                });
            }}
        />
    );
};

export default BuddyDetail;
