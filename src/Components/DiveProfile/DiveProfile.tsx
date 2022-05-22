import React, { useMemo, useRef } from 'react';

import * as d3 from 'd3';

import { DiveProfile as DiveProfileData } from '../../api/types/dives/DiveProfile';
import formatDivetime from '../../Helpers/Formatters/formatDiveTime';
import GraphOptions from './Graph/GraphOptions';
import Line from './Graph/Line';
import { ProfileSvg } from './components';

type Props = {
    samples: DiveProfileData;
};

const DiveProfile: React.FC<Props> = ({ samples }) => {
    const ref = useRef<SVGSVGElement>(null);
    samples = samples.filter((s) => s.Depth !== null);

    const graphOptions = useMemo(() => {
        const [minTime, maxTime] = [d3.min(samples, (d) => d.Time) ?? 0, d3.max(samples, (d) => d.Time) ?? 0];
        const [minDepth, maxDepth] = [d3.min(samples, (d) => d.Depth) ?? 0, d3.max(samples, (d) => d.Depth) ?? 0];

        return GraphOptions.Linear()
            .withCanvasSize({ height: 500, width: 500 })
            .withMargins({
                bottom: 30,
                left: 5,
                right: 0,
                top: 10,
            })
            .withDomain({
                x: [minTime, maxTime],
                y: [minDepth, maxDepth],
            });
    }, [samples]);

    React.useEffect(() => {
        if (ref.current === null) {
            return;
        }

        const svg = d3.select(ref.current).attr('width', 500).attr('height', 500);

        const axes = {
            bottom: d3
                .axisBottom(graphOptions.x)
                .ticks(5)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .tickFormat(formatDivetime as any),
            left: d3.axisRight(graphOptions.y),
        };

        svg.select<SVGSVGElement>('.left-axis').attr('transform', graphOptions.leftAxisPosition).call(axes.left);
        svg.select<SVGSVGElement>('.bottom-axis').attr('transform', graphOptions.bottomAxisPosition).call(axes.bottom);

        return () => {
            /**/
        };
    }, [samples, graphOptions]);

    return (
        <ProfileSvg ref={ref}>
            <Line
                samples={samples}
                graphOptions={graphOptions}
                getPoint={(datum): { x: number; y: number } => ({ x: datum.Time, y: datum.Depth ?? 0 })}
            />
            <g className="left-axis" />
            <g className="bottom-axis" />
        </ProfileSvg>
    );
};

export default DiveProfile;
