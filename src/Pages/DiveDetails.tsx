import React from 'react';

import { useParams } from 'react-router-dom';

import { getDive } from '../api/dives';
import DiveDetailsForm from '../Components/Forms/DiveDetails';
import useApi from '../Context/Auth/callApi';

const DiveDetails: React.FC = () => {
    const { diveId } = useParams<{ diveId: string }>();
    const dive = useApi(getDive, Number(diveId));

    if (dive.loading || !dive.data) {
        return <span>Loading...</span>;
    }

    return <DiveDetailsForm dive={dive.data} />;
};

export default DiveDetails;
