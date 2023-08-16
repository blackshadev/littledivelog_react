import { ReactNode, useRef } from 'react';

import { DiveProfile as DiveProfileData, DiveSample } from '../../../api/types/dives/DiveProfile';
import useGraphAxes from './hooks/useGraphAxes';
import useGraphCanvas from './hooks/useGraphCanvas';
import useGraphOptions from './hooks/useGraphOptions';
import { ProfileSvg } from './components';
import Line from './Line';

type Props = {
    samples: DiveProfileData;
};
type SamplesWithDepth = Array<DiveSample&{Depth: number}>;

function getPoint(datum: DiveProfileData[number]): {x: number, y: number} {
    return { x: datum.Time, y: datum.Depth ?? 0 } 
}

export default function DepthGraph({ samples }: Props): ReactNode {
    const ref = useRef<SVGSVGElement>(null);
    
    const samplesWithDepth = samples.filter((s) => s.Depth !== null) as SamplesWithDepth;

    const graphOptions = useGraphOptions(
        ref, 
        samplesWithDepth,
        { 
            margins: {
                bottom: 30,
                left: 5,
                right: 5,
                top: 10,
            },
            padding: 20,
            x: 'Time',
            y: 'Depth',
        },
    );

    useGraphCanvas(ref, graphOptions.canvasSize);
    useGraphAxes(ref, graphOptions, { bottom: 'bottom-axis', left: 'left-axis' });

    return (
        <ProfileSvg ref={ref}>
            <Line
                samples={samples}
                graphOptions={graphOptions}
                getPoint={getPoint}
            />
            <g className="left-axis" />
            <g className="bottom-axis" />
        </ProfileSvg>
    );
};
