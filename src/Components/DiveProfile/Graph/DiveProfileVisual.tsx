import { MouseEvent, ReactNode, useRef, useState } from 'react';

import * as d3 from 'd3';

import { DiveProfile as DiveProfileData, DiveSample } from '../../../api/types/dives/DiveProfile';
import useGraphAxes from './hooks/useGraphAxes';
import useGraphCanvas from './hooks/useGraphCanvas';
import useGraphOptions from './hooks/useGraphOptions';
import getClosestSample from './utils/getClosestSample';
import { ProfileSvg } from './components';
import Cursor from './Cursor';
import DepthGraph from './DepthGraph';
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
    const [selectedSample, selectSample] = useState<DiveSample | undefined>(undefined);
    const [hover, setHover] = useState<{ sample: DiveSample; position: { x: number; y: number } } | undefined>(
        undefined,
    );

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

    function selectPoint(ev: MouseEvent<SVGElement>): void {
        const mouse = d3.pointer(ev);

        const sample = getClosestSample(samples, mouse[0], graphOptions);
        selectSample(sample);
        onSelectSample?.(sample, {
            x: graphOptions.xScale(sample.Time) + graphOptions.margin('left'),
            y: graphOptions.yScale(sample.Depth ?? 0) + graphOptions.margin('top'),
        });
    }

    return (
        <ProfileSvg
            ref={ref}
            onClick={selectPoint}
            onMouseMove={(ev): void => {
                const pos = d3.pointer(ev);
                const sample = getClosestSample(samples, pos[0], graphOptions);
                setHover({ position: { x: pos[0], y: pos[1] }, sample });
            }}
            onMouseLeave={(): void => setHover(undefined)}
        >
            <DepthGraph samples={samples} graphOptions={graphOptions} getPoint={getPoint} />
            <Selection sample={selectedSample} graphOptions={graphOptions} />
            <Cursor graphOptions={graphOptions} sample={hover?.sample} />
            <g className="left-axis" />
            <g className="bottom-axis" />
        </ProfileSvg>
    );
}
