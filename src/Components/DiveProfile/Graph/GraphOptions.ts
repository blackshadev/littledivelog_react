import * as d3 from 'd3';

type Margins = {
    bottom: number;
    top: number;
    left: number;
    right: number;
};
type Size = {
    width: number;
    height: number;
};

type Axis = {
    x: d3.ScaleContinuousNumeric<number, number, never>;
    y: d3.ScaleContinuousNumeric<number, number, never>;
};

const emptyMargins: Margins = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
};

const emptySize: Size = {
    height: 0,
    width: 0,
};

export default class GraphOptions {
    public static Linear(): GraphOptions {
        return new GraphOptions(
            {
                x: d3.scaleLinear(),
                y: d3.scaleLinear(),
            },
            emptySize,
            emptyMargins,
        );
    }

    private constructor(private axis: Axis, private _canvas: Size, private margins: Margins) {
        axis.x.range([0, this.graphSize.width]);
        axis.y.range([0, this.graphSize.height]);
    }

    public withCanvasSize(canvas: Size): GraphOptions {
        const axis = {
            x: this.axis.x.copy(),
            y: this.axis.y.copy(),
        };

        return new GraphOptions(
            axis,
            { height: Math.max(canvas.height, 0), width: Math.max(canvas.width, 0) },
            this.margins,
        );
    }

    public withMargins(margins: Margins): GraphOptions {
        return new GraphOptions(this.axis, this.canvasSize, margins);
    }

    public withDomain(domain: { x: [number, number]; y: [number, number] }): GraphOptions {
        const axis = {
            x: this.axis.x.copy(),
            y: this.axis.y.copy(),
        };
        axis.x.domain(domain.x);
        axis.y.domain(domain.y);

        return new GraphOptions(axis, this.canvasSize, this.margins);
    }

    public margin(key: keyof Margins): number {
        return this.margins[key];
    }

    public get graphSize(): Size {
        return {
            height: this.canvasSize.height - this.margins.top - this.margins.bottom,
            width: this.canvasSize.width - this.margins.left - this.margins.right,
        };
    }

    public get bottomAxisPosition(): string {
        return `translate(${this.margins.left}, ${this.canvasSize.height - this.margins.bottom})`;
    }

    public get leftAxisPosition(): string {
        return `translate(${this.margins.left}, ${this.margins.top})`;
    }

    public get xScale(): d3.ScaleContinuousNumeric<number, number, never> {
        return this.axis.x;
    }

    public get yScale(): d3.ScaleContinuousNumeric<number, number, never> {
        return this.axis.y;
    }

    public get canvasSize(): Size {
        return this._canvas;
    }
}
