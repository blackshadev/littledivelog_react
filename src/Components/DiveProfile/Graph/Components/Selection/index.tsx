import { ReactNode, RefObject, useEffect, useState } from 'react';

import * as d3 from 'd3';

import { DiveSample } from '../../../../../api/types/dives/DiveProfile';
import getClosestSample from '../../utils/getClosestSample';
import GraphOptions from '../../utils/GraphOptions';
import { SelectionGroup } from './components';

type Props = {
    samples: DiveSample[];
    graphOptions: GraphOptions;
    target: RefObject<SVGSVGElement>;
    onSelect?: (dive: DiveSample, position: { x: number; y: number }) => void;
};

function useClickToSelectSample({ samples, graphOptions, target, onSelect }: Props): [DiveSample | undefined] {
    const [sample, setSample] = useState<DiveSample | undefined>();

    useEffect(() => {
        const eventTarget = target.current;
        if (!eventTarget) {
            return;
        }

        const selectSample = (ev: MouseEvent): void => {
            const pos = d3.pointer(ev);
            const sample = getClosestSample(samples, pos[0], graphOptions);
            setSample(sample);

            onSelect?.(sample, {
                x: graphOptions.xScale(sample.Time),
                y: graphOptions.yScale(sample.Depth ?? 0),
            });
        };

        eventTarget.addEventListener('click', selectSample);

        return () => {
            if (!eventTarget) {
                return;
            }
            eventTarget.removeEventListener('click', selectSample);
        };
    }, [target, graphOptions, samples, onSelect]);

    return [sample];
}

export default function Selection({ samples, graphOptions, target, onSelect }: Props): ReactNode {
    const [sample] = useClickToSelectSample({ graphOptions, onSelect, samples, target });

    return (
        <SelectionGroup>
            {sample && (
                <circle
                    r={7}
                    transform={`translate(${graphOptions.margin('left')}, ${graphOptions.margin('top')})`}
                    cx={graphOptions.xScale(sample.Time)}
                    cy={graphOptions.yScale(sample.Depth ?? 0)}
                ></circle>
            )}
        </SelectionGroup>
    );
}
