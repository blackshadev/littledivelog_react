import { RefObject, useEffect } from 'react';

import * as d3 from 'd3';

import formatDivetime from '../../../../Helpers/Formatters/formatDiveTime';
import GraphOptions from '../utils/GraphOptions';

export default function useGraphAxes(
    ref: RefObject<Element>,
    graphOptions: GraphOptions,
    axesSelectors: { bottom: string; left: string },
): void {
    useEffect(() => {
        if (ref.current === null) {
            return;
        }

        const svg = d3.select(ref.current);

        const axes = {
            bottom: d3.axisBottom(graphOptions.xScale).ticks(5).tickFormat(formatDivetime),
            left: d3.axisRight(graphOptions.yScale),
        };

        svg.select<SVGSVGElement>(axesSelectors.left).attr('transform', graphOptions.leftAxisPosition).call(axes.left);

        svg.select<SVGSVGElement>(axesSelectors.bottom)
            .attr('transform', graphOptions.bottomAxisPosition)
            .call(axes.bottom);

        return () => {
            /**/
        };
    }, [ref, graphOptions, axesSelectors]);
}
