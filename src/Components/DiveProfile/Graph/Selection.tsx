import { ReactNode, useEffect, useRef } from 'react';

import * as d3 from 'd3';

import { DiveSample } from '../../../api/types/dives/DiveProfile';
import { SelectionGroup } from './components';
import GraphOptions from './GraphOptions';

type Props = { sample: DiveSample | undefined; graphOptions: GraphOptions };

export default function Selection({ sample, graphOptions }: Props): ReactNode {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (ref.current === null) {
            return;
        }

        const selection = d3
            .select(ref.current)
            .attr('transform', `translate(${graphOptions.margin('left')}, ${graphOptions.margin('top')})`)
            .selectAll('circle')
            .data(sample ? [sample] : []);

        selection.enter().append('circle').attr('r', 7);

        selection
            .transition()
            .duration(500)
            .attr('cx', (s: DiveSample) => graphOptions.xScale(s.Time))
            .attr('cy', (s: DiveSample) => graphOptions.yScale(s.Depth ?? 0));

        selection.exit().remove();

        return () => {
            /**/
        };
    }, [sample, ref, graphOptions]);

    return <SelectionGroup ref={ref} />;
}
