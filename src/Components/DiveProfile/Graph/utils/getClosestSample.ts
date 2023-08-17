import * as d3 from 'd3';

import { DiveSample } from '../../../../api/types/dives/DiveProfile';
import GraphOptions from './GraphOptions';

const bisector = d3.bisector<DiveSample, number>((sample) => sample.Time).center;

export default function getClosestSample(samples: DiveSample[], target: number, options: GraphOptions): DiveSample {
    const mouseTime = options.xScale.invert(target - options.margin('left'));
    const iX = bisector(samples, mouseTime);
    return samples[iX];
}
