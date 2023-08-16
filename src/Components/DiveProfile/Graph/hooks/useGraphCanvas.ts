import { RefObject, useEffect } from "react";

import * as d3 from 'd3';

export default function useGraphCanvas(ref: RefObject<Element>, canvasSize: {height: number, width: number}): void {
    useEffect(() => {
        if (ref.current === null) {
            return;
        }

        d3
            .select(ref.current)
            .attr('height', canvasSize.height)
            .attr('width', canvasSize.width);

        return () => {
            /**/
        };
    }, [ref, canvasSize]);

}