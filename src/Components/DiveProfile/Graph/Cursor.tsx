import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';

import { DiveSample } from '../../../api/types/dives/DiveProfile';
import formatDivetime from '../../../Helpers/Formatters/formatDiveTime';
import getClosestSample from './utils/getClosestSample';
import GraphOptions from './utils/GraphOptions';
import { HoverGroup, HoverLine, HoverTextBottom, HoverTextLeft } from './components';

type Props = {
    graphOptions: GraphOptions;
    samples: DiveSample[];
    target: RefObject<SVGSVGElement>;
};

function useMouseToFindSample({ graphOptions, samples, target }: Props): [DiveSample | undefined] {
    const [sample, setSample] = useState<DiveSample | undefined>(undefined);

    useEffect(() => {
        const eventTarget = target.current;
        if (!eventTarget) {
            return;
        }

        const mouseMove = (ev: MouseEvent): void => {
            const pos = d3.pointer(ev);
            const sample = getClosestSample(samples, pos[0], graphOptions);
            setSample(sample);
        };
        const mouseLeave = (): void => {
            setSample(undefined);
        };

        eventTarget.addEventListener('mousemove', mouseMove);
        eventTarget.addEventListener('mouseleave', mouseLeave);

        return () => {
            if (!eventTarget) {
                return;
            }

            eventTarget.removeEventListener('mousemove', mouseMove);
            eventTarget.removeEventListener('mouseleave', mouseLeave);
        };
    }, [target, graphOptions, samples]);

    return [sample];
}

export default function Cursor({ graphOptions, samples, target }: Props): ReactNode {
    const [sample] = useMouseToFindSample({ graphOptions, samples, target });

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
