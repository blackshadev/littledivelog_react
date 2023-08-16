import { ReactNode } from 'react';

import { getSamples } from '../../api/dives';
import useApiData from '../../Context/Auth/callApi';
import DepthGraph from './Graph/DepthGraph';

type Props = {
    diveId: number;
};

export default function DiveProfile({ diveId }: Props): ReactNode {
    const samples = useApiData(getSamples, Number(diveId));

    if (samples.loading || !samples.data) {
        return <span>Loading...</span>;
    }

    return <DepthGraph samples={samples.data} />;
};

