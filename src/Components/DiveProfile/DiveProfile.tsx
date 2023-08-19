import { ReactNode, useState } from 'react';

import { getSamples } from '../../api/dives';
import { DiveSample } from '../../api/types/dives/DiveProfile';
import useApiData from '../../Context/Auth/callApi';
import DiveProfileVisual from './Graph/DiveProfileVisual';
import { DiveProfileContainer } from './components';
import SelectedSample from './SelectedSample';

type Props = {
    diveId: number;
};

export default function DiveProfile({ diveId }: Props): ReactNode {
    const samples = useApiData(getSamples, Number(diveId));
    const [selectedSample, setSelectedSample] = useState<DiveSample | undefined>(undefined);
    const [samplePosition, setSamplePosition] = useState<{ x: number; y: number } | undefined>(undefined);

    if (samples.loading || !samples.data) {
        return <span>Loading...</span>;
    }

    return (
        <DiveProfileContainer>
            <SelectedSample sample={selectedSample} position={samplePosition} />

            <DiveProfileVisual
                samples={samples.data}
                onSelectSample={(sample, position): void => {
                    setSelectedSample(sample);
                    setSamplePosition(position);
                }}
            />
        </DiveProfileContainer>
    );
}
