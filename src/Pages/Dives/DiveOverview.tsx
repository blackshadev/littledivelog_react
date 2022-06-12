import React from 'react';

import { listDives } from '../../api/dives';
import DiveList from '../../Components/Listing/DiveList';
import useApiData from '../../Context/Auth/callApi';

const DiveOverview: React.FC = () => {
    const dives = useApiData(listDives);

    if (dives.loading) {
        return <span>Loading...</span>;
    }

    return <DiveList dives={dives.data} />;
};

export default DiveOverview;
