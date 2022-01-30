import React from 'react';

import { listDives } from '../api/dives';
import DiveList from '../components/Dives/List';
import useApi from '../context/auth/callApi';

const Dives: React.FC = () => {
    const dives = useApi(listDives);

    if (dives.loading) {
        return <span>Loading...</span>;
    }

    return <DiveList dives={dives.data ?? []} />;
};

export default Dives;