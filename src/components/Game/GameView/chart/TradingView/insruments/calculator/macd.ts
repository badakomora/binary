import { zip } from "d3-array";
import { MACD as defaultOptions } from "./defaultOptionsForComputation";
import ema from "./ema";

export interface MACDOptions {
    readonly fast: number;
    readonly slow: number;
    readonly signal: number;
    readonly sourcePath?: string;
}

interface MACDCalculator {
    (data: any[]): {
        macd: number | undefined;
        signal: number | undefined;
        divergence: number | undefined;
    }[];
    undefinedLength(): number;
    options(): MACDOptions;
    options(newOptions: MACDOptions): MACDCalculator;
}

export default function () {
    let options: MACDOptions = defaultOptions;

    const calculator = (data: any[]) => {
        const { fast, slow, signal, sourcePath } = options;

        const fastEMA = ema().options({ windowSize: fast, sourcePath });

        const slowEMA = ema().options({ windowSize: slow, sourcePath });

        const signalEMA = ema().options({ windowSize: signal, sourcePath: undefined });

        const diff = zip(fastEMA(data), slowEMA(data)).map((d) =>
            d[0] !== undefined && d[1] !== undefined ? d[0] - d[1] : undefined,
        );

        const averageDiff = signalEMA(diff);

        return zip(diff, averageDiff).map((d) => ({
            macd: d[0],
            signal: d[1],
            divergence: d[0] !== undefined && d[1] !== undefined ? d[0] - d[1] : undefined,
        }));
    };

    calculator.undefinedLength = () => {
        const { slow, signal } = options;

        return slow + signal - 1;
    };

    calculator.options = (newOptions?: MACDOptions) => {
        if (newOptions === undefined) {
            return options;
        }

        options = { ...defaultOptions, ...newOptions };

        return calculator;
    };

    return calculator as MACDCalculator;
}
