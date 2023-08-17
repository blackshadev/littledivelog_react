import { RefObject, useMemo } from 'react';

import * as d3 from 'd3';

import useResize from '../../../../Helpers/useResize';
import GraphOptions from '../GraphOptions';

type NumericalKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export default function useGraphOptions<T extends object, X extends NumericalKeys<T>, Y extends NumericalKeys<T>>(
    ref: RefObject<Element>,
    data: T[],
    options: {
        x: X;
        y: Y;
        padding: number;
        margins: {
            top: number;
            left: number;
            right: number;
            bottom: number;
        };
    },
): GraphOptions {
    const [{ window, element }] = useResize(ref);

    return useMemo(() => {
        const [minX, maxX] = [
            d3.min(data, (d): number => d[options.x]) ?? 0,
            d3.max(data, (d): number => d[options.x]) ?? 0,
        ];
        const [minY, maxY] = [
            d3.min(data, (d): number => d[options.y]) ?? 0,
            d3.max(data, (d): number => d[options.y]) ?? 0,
        ];

        return GraphOptions.Linear()
            .withCanvasSize({
                height: window.height - element.top - options.padding,
                width: window.width - element.left - options.padding,
            })
            .withMargins(options.margins)
            .withDomain({
                x: [minX, maxX],
                y: [minY, maxY],
            });
    }, [data, window, element, options]);
}
