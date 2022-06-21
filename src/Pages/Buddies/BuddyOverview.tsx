import React from 'react';

import { listBuddies } from '../../api/buddies';
import AddButton from '../../Components/Buttons/AddButton/AddButton';
import BuddyList from '../../Components/Listing/BuddyList';
import useApiData from '../../Context/Auth/callApi';
import Route from '../../Routing/Routes';

const BuddyOverview: React.FC = () => {
    const buddy = useApiData(listBuddies);

    return (
        <>
            <AddButton to={Route.BuddyDetailNew} />
            {buddy.loading ? <span>Loading...</span> : <BuddyList buddies={buddy.data} />}
        </>
    );
};

export default BuddyOverview;
