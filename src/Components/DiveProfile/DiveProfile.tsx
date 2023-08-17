import { ReactNode, useState } from 'react';

import { getSamples } from '../../api/dives';
import { DiveSample } from '../../api/types/dives/DiveProfile';
import useApiData from '../../Context/Auth/callApi';
import formatDivetime from '../../Helpers/Formatters/formatDiveTime';
import DepthGraph from './Graph/DepthGraph';
import { SelectedSampleContainer, SelectedSampleLabel, SelectedSampleValue } from './components';

type Props = {
    diveId: number;
};

export default function DiveProfile({ diveId }: Props): ReactNode {
    const samples = useApiData(getSamples, Number(diveId));
    const [selectedSample, setSelectedSample] = useState<DiveSample | undefined>(undefined);

    if (samples.loading || !samples.data) {
        return <span>Loading...</span>;
    }

    return (
        <div>
            <SelectedSampleContainer>
                <SelectedSampleLabel>Time:</SelectedSampleLabel>
                <SelectedSampleValue>
                    {selectedSample ? formatDivetime(selectedSample.Time) : '00:00:00'}
                </SelectedSampleValue>
                <SelectedSampleLabel>Depth:</SelectedSampleLabel>
                <SelectedSampleValue>{(selectedSample?.Depth ?? 0).toFixed(1)}</SelectedSampleValue>
                <SelectedSampleLabel>Temperature:</SelectedSampleLabel>
                <SelectedSampleValue>{selectedSample?.Temperature ?? '0.0'}</SelectedSampleValue>
            </SelectedSampleContainer>

            <DepthGraph samples={samples.data} onSelectSample={(sample): void => setSelectedSample(sample)} />
        </div>
    );
}
