import { path } from "../utils";
import { EMA as defaultOptions } from "./defaultOptionsForComputation";

export interface EMAOptions {
    readonly windowSize: number;
    readonly sourcePath?: string;
}

interface EMACalculator {
    (data: any[]): (number | undefined)[];
    undefinedLength(): number;
    options(): EMAOptions;
    options(newOptions: EMAOptions): EMACalculator;
}

export default function () {
    let options: EMAOptions = defaultOptions;

    const calculator = (data: any[]) => {
        const { windowSize, sourcePath } = options;

        const source = path(sourcePath);
        const alpha = 2 / (windowSize + 1);
        let previous: any;
        let initialAccumulator = 0;
        let skip = 0;

        return data.map(function (d, i) {
            const v = source(d, i);
            if (previous === undefined && v === undefined) {
                skip++;
                return undefined;
            } else if (i < windowSize + skip - 1) {
                initialAccumulator += v;
                return undefined;
            } else if (i === windowSize + skip - 1) {
                initialAccumulator += v;
                const initialValue = initialAccumulator / windowSize;
                previous = initialValue;
                return initialValue;
            } else {
                const nextValue = v * alpha + (1 - alpha) * previous;
                previous = nextValue;
                return nextValue;
            }
        });
    };
 
    calculator.undefinedLength = () => {
        const { windowSize } = options;

        return windowSize - 1;
    };

    calculator.options = (newOptions?: EMAOptions) => {
        if (newOptions === undefined) {
            return options;
        }

        options = { ...defaultOptions, ...newOptions };

        return calculator;
    };

    return calculator as EMACalculator;
}
