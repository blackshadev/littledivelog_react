import { ReactNode, useMemo } from 'react';

import { DiveSample } from '../../../api/types/dives/DiveProfile';
import GraphOptions from './utils/GraphOptions';
import { EventsGroup } from './components';

type Props = {
    samples: DiveSample[];
    graphOptions: GraphOptions;
};

export default function Events({ samples, graphOptions }: Props): ReactNode {
    const eventSamples = useMemo(() => samples.filter((s) => !!s.Events?.length), [samples]);
    console.log(eventSamples);

    return (
        <EventsGroup transform={`translate(${graphOptions.margin('left')}, ${graphOptions.margin('top')})`}>
            {eventSamples.map((s, iX) => (
                <circle key={iX} r={3} cx={graphOptions.xScale(s.Time)} cy={graphOptions.yScale(s.Depth ?? 0)} />
            ))}
        </EventsGroup>
    );
}
