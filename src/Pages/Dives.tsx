import React from 'react';

import { listDives } from '../api/dives';
import DiveListing from '../Components/Listing/DiveListing';
import useApi from '../Context/Auth/callApi';

const Dives: React.FC = () => {
    const dives = useApi(listDives);

    if (dives.loading) {
        return <span>Loading...</span>;
    }

    return <DiveListing dives={dives.data ?? []} />;
};

export default Dives;
