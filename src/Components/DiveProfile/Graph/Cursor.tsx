import { ReactNode, useRef } from 'react';

import { DiveSample } from '../../../api/types/dives/DiveProfile';
import formatDivetime from '../../../Helpers/Formatters/formatDiveTime';
import GraphOptions from './utils/GraphOptions';
import { HoverGroup, HoverLine, HoverTextBottom, HoverTextLeft } from './components';

type Props = {
    graphOptions: GraphOptions;
    sample?: DiveSample;
};

export default function Cursor({ graphOptions, sample }: Props): ReactNode {
    const ref = useRef<SVGLineElement>(null);

    const x = graphOptions.xScale(sample?.Time ?? 0);
    const y = graphOptions.yScale(sample?.Depth ?? 0);

    return (
        <HoverGroup transform={`translate(${graphOptions.margin('left')}, ${graphOptions.margin('top')})`}>
            {sample && (
                <>
                    <HoverLine
                        ref={ref}
                        y1="0"
                        y2={graphOptions.canvasSize.height - graphOptions.margin('bottom')}
                        x1={x}
                        x2={x}
                    ></HoverLine>
                    <HoverTextBottom
                        y={graphOptions.canvasSize.height - graphOptions.margin('bottom')}
                        dy="0.71em"
                        x={x}
                    >
                        {formatDivetime(sample.Time)}
                    </HoverTextBottom>

                    <HoverTextLeft y={y} x={0}>
                        {(sample.Depth ?? 0).toFixed(1)}
                    </HoverTextLeft>
                </>
            )}
        </HoverGroup>
    );
}
