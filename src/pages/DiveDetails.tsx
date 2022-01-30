import React from 'react';

import { useParams } from 'react-router-dom';

import { getDive } from '../api/dives';
import Details from '../components/Dives/Details';
import useApi from '../context/auth/callApi';

const DiveDetails: React.FC = () => {
    const { diveId } = useParams<{ diveId: string }>();
    const dive = useApi(getDive, Number(diveId));

    if (dive.loading || !dive.data) {
        return <span>Loading...</span>;
    }

    return <Details dive={dive.data} />;
};

export default DiveDetails;
