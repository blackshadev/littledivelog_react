import React from 'react';

import { useParams } from 'react-router-dom';

import { getBuddy } from '../api/buddies';
import BuddyForm from '../Components/Forms/BuddyForm';
import useApi from '../Context/Auth/callApi';

const BuddyDetail: React.FC = () => {
    const { buddyId } = useParams<{ buddyId: string }>();
    const buddy = useApi(getBuddy, Number(buddyId));

    if (buddy.loading) {
        return <span>Loading...</span>;
    }

    return <BuddyForm buddy={buddy.data} />;
};

export default BuddyDetail;
