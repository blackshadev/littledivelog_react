import React from 'react';

import { useParams } from 'react-router-dom';

import { getDive } from '../api/dives';
import Details from '../Components/Dives/Details';
import useApi from '../Context/Auth/callApi';

const DiveDetails: React.FC = () => {
    const { diveId } = useParams<{ diveId: string }>();
    const dive = useApi(getDive, Number(diveId));

    if (dive.loading || !dive.data) {
        return <span>Loading...</span>;
    }

    return <Details dive={dive.data} />;
};

export default DiveDetails;
