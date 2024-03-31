import { mean } from "d3-array";
import { path, slidingWindow } from "../utils";
import { RSI as defaultOptions } from "./defaultOptionsForComputation";

export interface RSIOptions {
    windowSize: number;
    sourcePath?: string;
}

export default function () {
    let options = defaultOptions;

    const calculator = (data: any[]) => {
        const { windowSize, sourcePath } = options;

        // @ts-ignore
        const source = path(sourcePath);

        let prevAvgGain: any;
        let prevAvgLoss: any;
        const rsiAlgorithm = slidingWindow()
            .windowSize(windowSize)
            .accumulator((values: any[]) => {
                const avgGain =
                    prevAvgGain !== undefined
                        ? (prevAvgGain * (windowSize - 1) + values[values.length - 1].gain) / windowSize
                        : mean<any>(values, (each) => each.gain);

                if (avgGain === undefined) {
                    return undefined;
                }

                const avgLoss =
                    prevAvgLoss !== undefined
                        ? (prevAvgLoss * (windowSize - 1) + values[values.length - 1].loss) / windowSize
                        : mean<any>(values, (each) => each.loss);

                if (avgLoss === undefined) {
                    return undefined;
                }

                const relativeStrength = avgGain / avgLoss;
                const rsi = 100 - 100 / (1 + relativeStrength);

                prevAvgGain = avgGain;
                prevAvgLoss = avgLoss;

                return rsi;
            });

        const gainsAndLossesCalculator = slidingWindow()
            .windowSize(2)
            .undefinedValue(() => [0, 0])
            .accumulator((tuple: any) => {
                const prev = tuple[0];
                const now = tuple[1];
                const change = source(now) - source(prev);
                return {
                    gain: Math.max(change, 0),
                    loss: Math.abs(Math.min(change, 0)),
                };
            });

        const gainsAndLosses = gainsAndLossesCalculator(data);

        const rsiData = rsiAlgorithm(gainsAndLosses);

        return rsiData;
    };

    calculator.undefinedLength = () => {
        const { windowSize } = options;

        return windowSize - 1;
    };

    calculator.options = (newOptions?: RSIOptions) => {
        if (newOptions === undefined) {
            return options;
        }

        options = { ...defaultOptions, ...newOptions };

        return calculator;
    };

    return calculator;
}
