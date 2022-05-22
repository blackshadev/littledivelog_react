import React from 'react';

import { getSamples } from '../../api/dives';
import useApi from '../../Context/Auth/callApi';
import DiveProfile from './DiveProfile';

type Props = {
    diveId: number;
};

const BoundDiveProfile: React.FC<Props> = ({ diveId }) => {
    const samples = useApi(getSamples, Number(diveId));

    if (samples.loading || !samples.data) {
        return <span>Loading...</span>;
    }

    return <DiveProfile samples={samples.data} />;
};

export default BoundDiveProfile;
