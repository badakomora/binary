import * as React from "react";

import { LineSeries } from "./LineSeries";
import { StraightLine } from "./StraightLine";

export interface StochasticSeriesProps {
    readonly className?: string;
    readonly overBought?: number;
    readonly overSold?: number;
    readonly middle?: number;
    readonly strokeStyle?: {
        top: string;
        middle: string;
        bottom: string;
        dLine: string;
        kLine: string;
    };
    readonly yAccessor: (data: any) => { K: number; D: number };
}

/**
 * The Stochastic Oscillator is a momentum indicator that shows the location of the close relative to the high-low range over a set number of periods.
 */
export class StochasticSeries extends React.Component<StochasticSeriesProps> {
    public static defaultProps = {
        className: "react-financial-charts-stochastic-series",
        strokeStyle: {
            top: "red",
            middle: "rgba(0, 0, 0, 0.3)",
            bottom: "green",
            dLine: "rgb(244, 121, 97)",
            kLine: "rgb(35, 95, 248)",
        },
        overSold: 80,
        middle: 50,
        overBought: 20,
    };

    public render() {
        const {
            className,
            strokeStyle = StochasticSeries.defaultProps.strokeStyle,
            overSold,
            middle,
            overBought,
        } = this.props;

        return (
            <g className={className}>
                <LineSeries yAccessor={this.yAccessorForD} strokeStyle={strokeStyle.dLine} strokeWidth={1.3} />
                <LineSeries yAccessor={this.yAccessorForK} strokeStyle={strokeStyle.kLine} strokeWidth={1.3}  />
                <StraightLine strokeStyle={strokeStyle.top} yValue={overSold} />
                <StraightLine strokeStyle={strokeStyle.middle} yValue={middle} />
                <StraightLine strokeStyle={strokeStyle.bottom} yValue={overBought} />
            </g>
        );
    }

    private readonly yAccessorForK = (d: any) => {
        const { yAccessor } = this.props;

        return yAccessor(d) && yAccessor(d).K;
    };

    private readonly yAccessorForD = (d: any) => {
        const { yAccessor } = this.props;

        return yAccessor(d) && yAccessor(d).D;
    };
}
