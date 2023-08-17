import { MouseEvent, ReactNode, useRef, useState } from 'react';

import * as d3 from 'd3';

import { DiveProfile as DiveProfileData, DiveSample } from '../../../api/types/dives/DiveProfile';
import useGraphAxes from './hooks/useGraphAxes';
import useGraphCanvas from './hooks/useGraphCanvas';
import useGraphOptions from './hooks/useGraphOptions';
import { ProfileSvg } from './components';
import GraphOptions from './GraphOptions';
import Line from './Line';
import Selection from './Selection';

type Props = {
    samples: DiveProfileData;
    onSelectSample?: (dive: DiveSample, position: { x: number; y: number }) => void;
};
type SamplesWithDepth = Array<DiveSample & { Depth: number }>;

function getPoint(datum: DiveProfileData[number]): { x: number; y: number } {
    return { x: datum.Time, y: datum.Depth ?? 0 };
}

const bisector = d3.bisector<DiveSample, number>((sample) => sample.Time).center;

function getClosestSample(samples: DiveProfileData, target: number, options: GraphOptions): DiveSample {
    const mouseTime = options.xScale.invert(target - options.margin('left'));
    const iX = bisector(samples, mouseTime);
    return samples[iX];
}

export default function DepthGraph({ samples, onSelectSample }: Props): ReactNode {
    const ref = useRef<SVGSVGElement>(null);
    const [selectedSample, selectSample] = useState<DiveSample | undefined>(undefined);

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
        <ProfileSvg ref={ref} onClick={selectPoint}>
            <Line samples={samples} graphOptions={graphOptions} getPoint={getPoint} />
            <Selection sample={selectedSample} graphOptions={graphOptions} />
            <g className="left-axis" />
            <g className="bottom-axis" />
        </ProfileSvg>
    );
}
