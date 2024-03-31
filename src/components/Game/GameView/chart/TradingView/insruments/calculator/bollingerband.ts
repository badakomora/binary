import { deviation, mean } from "d3-array";
import { path, slidingWindow, zipper } from "../utils";
import ema from "./ema";
import { BollingerBand as defaultOptions } from "./defaultOptionsForComputation";

export interface BollingerBandOptions {
    readonly windowSize: number;
    readonly sourcePath: string;
    readonly multiplier: number;
    readonly movingAverageType: string;
}

interface BollingerBandCalculator {
    (data: any[]): any;
    undefinedLength(): number;
    options(): BollingerBandOptions;
    options(newOptions: BollingerBandOptions): BollingerBandCalculator;
}

export default function () {
    let options: BollingerBandOptions = defaultOptions;

    const calculator = (data: any[]) => {
        const { windowSize, multiplier, movingAverageType, sourcePath } = options;

        const source = path(sourcePath);

        const meanAlgorithm =
            movingAverageType === "ema"
                ? ema().options({ windowSize, sourcePath })
                : slidingWindow()
                      .windowSize(windowSize)
                      .accumulator((values: any) => mean(values))
                      .sourcePath(sourcePath);

        const bollingerBandAlgorithm = slidingWindow()
            .windowSize(windowSize)
            .accumulator((values: any[]) => {
                const avg = values[values.length - 1].mean;
                const stdDev = deviation<any>(values, (each) => source(each.datum));
                if (stdDev === undefined) {
                    return undefined;
                }

                return {
                    top: avg + multiplier * stdDev,
                    middle: avg,
                    bottom: avg - multiplier * stdDev,
                };
            });

        const zip = zipper().combine((datum: any, meanValue: number) => ({ datum, mean: meanValue }));

        const tuples = zip(data, meanAlgorithm(data));

        return bollingerBandAlgorithm(tuples);
    };

    calculator.undefinedLength = () => {
        const { windowSize } = options;

        return windowSize - 1;
    };

    calculator.options = (newOptions?: BollingerBandOptions) => {
        if (newOptions === undefined) {
            return options;
        }

        options = { ...defaultOptions, ...newOptions };

        return calculator;
    };

    return calculator as BollingerBandCalculator;
}
