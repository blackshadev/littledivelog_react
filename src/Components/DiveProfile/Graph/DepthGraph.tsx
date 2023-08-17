import React, { ReactNode, useRef } from 'react';

import * as d3 from 'd3';

import { DiveProfile, DiveSample } from '../../../api/types/dives/DiveProfile';
import GraphOptions from './utils/GraphOptions';
import { StyledLineGroup } from './components';

type Props = {
    samples: DiveProfile;
    graphOptions: GraphOptions;
    getPoint(d: DiveSample, index: number, data: DiveSample[]): { x: number; y: number };
};

export default function DepthGraph({ samples, graphOptions, getPoint }: Props): ReactNode {
    const ref = useRef<SVGSVGElement>(null);

    React.useEffect(() => {
        if (ref.current === null) {
            return;
        }

        const group = d3
            .select(ref.current)
            .attr('transform', `translate(${graphOptions.margin('left')}, ${graphOptions.margin('top')})`)
            .selectAll('path')
            .data([samples]);

        const line = d3
            .line<DiveSample>()
            .curve(d3.curveMonotoneX)
            .x((datum, index, data) => graphOptions.xScale(getPoint(datum, index, data).x))
            .y((datum, index, data) => graphOptions.yScale(getPoint(datum, index, data).y));

        group.enter().append('path').attr('d', line(samples));

        group.transition().duration(500).attr('d', line(samples));

        group.exit().remove();

        return () => {};
    }, [samples, graphOptions, getPoint]);

    return <StyledLineGroup ref={ref}></StyledLineGroup>;
}
