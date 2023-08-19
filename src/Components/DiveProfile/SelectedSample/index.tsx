import { ReactNode } from 'react';

import { DiveSample } from '../../../api/types/dives/DiveProfile';
import { SelectedSampleContainer, SelectedSampleLabel, SelectedSampleValue } from './components';
import SampleView from './SampleView';

export default function SelectedSample({
    sample,
    position,
}: {
    sample: DiveSample | undefined;
    position: { x: number; y: number } | undefined;
}): ReactNode {
    const view = SampleView.fromSample(sample);

    return (
        <SelectedSampleContainer $position={position} $isAbove={position !== undefined && position.y > 100}>
            {view.values().map(([label, value]) => (
                <>
                    <SelectedSampleLabel>{label}</SelectedSampleLabel>
                    <SelectedSampleValue>
                        {value.length === 1 ? (
                            value
                        ) : (
                            <ul>
                                {value.map((v) => (
                                    <li key={v}>{v}</li>
                                ))}
                            </ul>
                        )}
                    </SelectedSampleValue>
                </>
            ))}
        </SelectedSampleContainer>
    );
}
