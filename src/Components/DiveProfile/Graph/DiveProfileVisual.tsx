import { ReactNode, useRef } from 'react';

import { DiveProfile as DiveProfileData, DiveSample } from '../../../api/types/dives/DiveProfile';
import useGraphAxes from './hooks/useGraphAxes';
import useGraphCanvas from './hooks/useGraphCanvas';
import useGraphOptions from './hooks/useGraphOptions';
import { ProfileSvg } from './components';
import Cursor from './Cursor';
import DepthGraph from './DepthGraph';
import Events from './Events';
import Selection from './Selection';

type Props = {
    samples: DiveProfileData;
    onSelectSample?: (dive: DiveSample, position: { x: number; y: number }) => void;
};
type SamplesWithDepth = Array<DiveSample & { Depth: number }>;

function getPoint(datum: DiveProfileData[number]): { x: number; y: number } {
    return { x: datum.Time, y: datum.Depth ?? 0 };
}

export default function DiveProfileVisual({ samples, onSelectSample }: Props): ReactNode {
    const ref = useRef<SVGSVGElement>(null);

    const samplesWithDepth = samples.filter((s) => s.Depth !== null) as SamplesWithDepth;

    const graphOptions = useGraphOptions(ref, samplesWithDepth, {
        margins: {
            bottom: 30,
            left: 5,
            right: 5,
            top: 10,
        },
        padding: 20,
        x: 'Time',
        y: 'Depth',
    });

    useGraphCanvas(ref, graphOptions.canvasSize);
    useGraphAxes(ref, graphOptions, { bottom: '.bottom-axis', left: '.left-axis' });

    return (
        <ProfileSvg ref={ref}>
            <DepthGraph samples={samples} graphOptions={graphOptions} getPoint={getPoint} />
            <Selection target={ref} samples={samples} graphOptions={graphOptions} onSelect={onSelectSample} />
            <Cursor target={ref} graphOptions={graphOptions} samples={samples} />
            <Events graphOptions={graphOptions} samples={samples} />
            <g className="left-axis" />
            <g className="bottom-axis" />
        </ProfileSvg>
    );
}
