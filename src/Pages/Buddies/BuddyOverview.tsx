import React from 'react';

import { listBuddies } from '../../api/buddies';
import BuddyList from '../../Components/Listing/BuddyList';
import useApiData from '../../Context/Auth/callApi';

const BuddyOverview: React.FC = () => {
    const buddy = useApiData(listBuddies);

    if (buddy.loading) {
        return <span>Loading...</span>;
    }

    return <BuddyList buddies={buddy.data} />;
};

export default BuddyOverview;
