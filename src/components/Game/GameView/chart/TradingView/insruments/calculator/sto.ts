import { max, mean, min, zip } from "d3-array";
import { slidingWindow } from "../utils";
import { FullStochasticOscillator as defaultOptions } from "./defaultOptionsForComputation";

export interface STOOptions {
    readonly windowSize: number;
    readonly kWindowSize: number;
    readonly dWindowSize: number;
}

export default function () {
    let options: STOOptions = defaultOptions;

    let source = (d: any) => ({ open: d.open, high: d.high, low: d.low, close: d.close });

    const calculator = (data: any[]) => {
        const { windowSize, kWindowSize, dWindowSize } = options;

        const high = (d: any) => source(d).high;
        const low = (d: any) => source(d).low;
        const close = (d: any) => source(d).close;

        const kWindow = slidingWindow()
            .windowSize(windowSize)
            .accumulator((values: any[]) => {
                const highestHigh = max<any, number>(values, high);
                if (highestHigh === undefined) {
                    return undefined;
                }

                const lowestLow = min<any, number>(values, low);
                if (lowestLow === undefined) {
                    return undefined;
                }

                const currentClose = close(values[values.length - 1]);
                const k = ((currentClose - lowestLow) / (highestHigh - lowestLow)) * 100;

                return k;
            });

        const kSmoothed = slidingWindow()
            .skipInitial(windowSize - 1)
            .windowSize(kWindowSize)
            .accumulator((values: any[]) => mean(values));

        const dWindow = slidingWindow()
            .skipInitial(windowSize - 1 + kWindowSize - 1)
            .windowSize(dWindowSize)
            .accumulator((values: any[]) => mean(values));

        const kData = kSmoothed(kWindow(data));
        const dData = dWindow(kData);

        // @ts-ignore
        const indicatorData = zip(kData, dData).map((d) => {
            return {
                K: d[0],
                D: d[1],
            };
        });

        return indicatorData;
    };

    calculator.undefinedLength = () => {
        const { windowSize, kWindowSize, dWindowSize } = options;
        return windowSize + kWindowSize + dWindowSize;
    };

    calculator.source = (newSource?: any) => {
        if (newSource === undefined) {
            return source;
        }

        source = newSource;

        return calculator;
    };

    calculator.options = (newOptions?: any) => {
        if (newOptions === undefined) {
            return options;
        }

        options = { ...defaultOptions, ...newOptions };

        return calculator;
    };

    return calculator;
}
