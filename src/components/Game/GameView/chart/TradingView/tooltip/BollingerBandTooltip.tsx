import { functor, GenericChartComponent, last } from "../../core";
import { format } from "d3-format";
import * as React from "react";
import { ToolTipText } from "./ToolTipText";
import { ToolTipTSpanLabel } from "./ToolTipTSpanLabel";

export interface BollingerBandTooltipProps {
    readonly className?: string;
    readonly displayInit?: string;
    readonly displayValuesFor?: (props: BollingerBandTooltipProps, moreProps: any) => any;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly labelFill?: string;
    readonly labelFontWeight?: number;
    readonly onClick?: (event: React.MouseEvent) => void;
    readonly options: {
        movingAverageType: string;
        multiplier: number;
        sourcePath: string;
        windowSize: number;
    };
    readonly origin?: [number, number] | ((width: number, height: number) => [number, number]);
    readonly textFill?: string;
    readonly yAccessor?: (data: any) => { bottom: number; middle: number; top: number };
}

export class BollingerBandTooltip extends React.Component<BollingerBandTooltipProps> {
    public static defaultProps = {
        displayValuesFor: (_: any, props: any) => props.currentItem,
        displayInit: "n/a",
        origin: [8, 8],
        yAccessor: (data: any) => data.bb,
    };

    public render() {
        return <GenericChartComponent clip={false} svgDraw={this.renderSVG} drawOn={["mousemove"]} />;
    }

    private readonly renderSVG = (moreProps: any) => {
        const {
            onClick,
            yAccessor = BollingerBandTooltip.defaultProps.yAccessor,
            options,
            origin: originProp,
            textFill,
            labelFill,
            labelFontWeight,
            className,
            displayValuesFor = BollingerBandTooltip.defaultProps.displayValuesFor,
            displayInit,
            fontFamily,
            fontSize,
            fontWeight,
        } = this.props;

        const {
            chartConfig: { width, height },
            fullData,
        } = moreProps;


        const origin = functor(originProp);
        const [x, y] = origin(width, height);

        const { sourcePath, windowSize, multiplier, movingAverageType } = options;
        const tooltipLabel = `Bolinger Bands ${windowSize} . ${multiplier}`;

        return (
            <g transform={`translate(${x}, ${y})`} className={className} onClick={onClick}>
                <ToolTipText x={0} y={0} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight}>
                    <ToolTipTSpanLabel fill={labelFill} fontWeight={labelFontWeight}>
                        {tooltipLabel}
                    </ToolTipTSpanLabel>
                </ToolTipText>
            </g>
        );
    };
}
