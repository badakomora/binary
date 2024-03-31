import { strokeDashTypes } from "@react-financial-charts/core";
import { ScaleContinuousNumeric } from "d3-scale";
import { CurveFactory } from "d3-shape";
import React, { Component } from "react";
import { AreaOnlySeries } from "./AreaOnlySeries";
import { LineSeries } from "./LineSeries";

export interface AreaSeriesProps {
    readonly baseAt?:
        | number
        | ((yScale: ScaleContinuousNumeric<number, number>, d: [number, number], moreProps: any) => number);
    readonly canvasClip?: (context: CanvasRenderingContext2D, moreProps: any) => void;
    readonly connectNulls?: boolean;
    readonly fillStyle?:
        | string
        | ((context: CanvasRenderingContext2D, moreProps: any) => string | CanvasGradient | CanvasPattern);
    readonly curve?: CurveFactory;
    readonly strokeStyle?: string;
    readonly strokeDasharray?: strokeDashTypes;
    readonly strokeWidth?: number;
    readonly yAccessor: (data: any) => number | undefined;
}

export class AreaSeries extends Component<AreaSeriesProps> {
    public static defaultProps: Partial<AreaSeriesProps> = {
        fillStyle: "rgba(51, 169, 255, 0.04)",
        strokeStyle: "#2196f3",
        strokeWidth: 1,
        strokeDasharray: "Solid",
        yAccessor: (data) => data.open
    };

    public render() {
        const {
            baseAt,
            connectNulls,
            strokeStyle,
            strokeWidth,
            strokeDasharray,
            fillStyle,
            curve,
            yAccessor,
            canvasClip,
           
        } = this.props;

        return (
            <g>
                <AreaOnlySeries
                    connectNulls={connectNulls}
                    yAccessor={yAccessor}
                    curve={curve}
                    base={baseAt}
                    fillStyle={fillStyle}
                    canvasClip={canvasClip}
                />
                <LineSeries
                    connectNulls={connectNulls}
                    yAccessor={yAccessor}
                    strokeStyle={strokeStyle}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                    curve={curve}
                    canvasClip={canvasClip}
                    highlightOnHover={false}
                />
            </g>
        );
    }
}
