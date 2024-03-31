export const BollingerBand = {
    windowSize: 20,
    sourcePath: "close",
    multiplier: 2,
    movingAverageType: "sma",
};

export const SAR = {
    accelerationFactor: 0.02,
    maxAccelerationFactor: 0.2,
};

export const MACD = {
    fast: 12,
    slow: 26,
    signal: 9,
    sourcePath: "close", // "high", "low", "open", "close"
};

export const FullStochasticOscillator = {
    windowSize: 12,
    kWindowSize: 3,
    dWindowSize: 3,
};

export const RSI = {
    windowSize: 14,
    sourcePath: "close", // "high", "low", "open", "close"
};

export const EMA = {
    sourcePath: "close",
    windowSize: 10,
};

export const SMA = {
    sourcePath: "close",
    windowSize: 10,
};

export const WMA = {
    sourcePath: "close",
    windowSize: 10,
};
