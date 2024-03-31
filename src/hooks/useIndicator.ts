import { bollingerBand, stochasticOscillator,  ema, sma, wma, sar, rsi, macd } from "../components/Game/GameView/chart/TradingView/insruments/indicator";


export const useIndicator = () =>{

const ema26 = ema()

.options({ windowSize: 20})
.merge((d:any, c:any) => {
  d.ema26 = c;
})
.accessor((d:any) => d.ema26);


const smaI = sma()
.options({windowSize:20, sourcePath:'close'})
.merge((d:any, c:any)=>{
  d.smaI = c;
})
.accessor((d:any) => d.smaI);


const wmaI = wma()
.options({windowSize:20, sourcePath:'close'})
.merge((d:any,c:any)=>{
  d.wmaI = c;
})
.accessor((d:any)=> d.wmaI);


const sarI = sar()
.options({accelerationFactor:0.02, maxAccelerationFactor:0.2})
.merge((d:any,c:any)=>{
  d.sarI = c;
})
.accessor((d:any)=> d.sarI);


const bollinger = bollingerBand()
.options({windowSize: 26, multiplier: 2, sourcePath:'close', movingAverageType:'ema'})
.merge((d:any, b:any) => {
  d.bollinger = b;
})
.accessor((d:any) => d.bollinger);


const rsiOsc = rsi()
.options({ windowSize: 14,sourcePath:'close',})
.merge((d:any, c:any) => {
  d.rsiOsc = c;
})
.accessor((d:any) => d.rsiOsc);


const macdOsc = macd()
.options({slow:26, fast:12, signal:9, sourcePath:'close'})
.merge((d:any , c:any) =>{
  d.macdOsc = c;
})
.accessor((d:any) => d.macdOsc);


const stochasticOsc = stochasticOscillator()
.options({windowSize:14, dWindowSize:3, kWindowSize:3})
.merge((d:any, c:any) => {
  d.stochasticOsc = c;
})
.accessor((d:any) => d.stochasticOsc);

    return{
        ema26,
        smaI,
        wmaI,
        bollinger,
        rsiOsc,
        macdOsc,
        stochasticOsc,
        sarI
    }
}

