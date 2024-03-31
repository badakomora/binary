import { type } from "os";
import { atom } from "recoil";

export enum ChartCase {
  Area = "AREA",
  Candlestick = "CANDLESTICK",
  Ashi = "ASHI",
  Bar = "BAR",
}


type instrument = {
  name:string,
  component:any
}


export type Trade = {
  id: number
  symbol: string
  isActive: boolean
  amount:number
  duration:string
  openTime: number
  openPrice:any
  closingPrice:any
  tradeType: string
  closeAt:number
}


export type Tick = {
  ask: number;
  bid: number;
  mid: number;
  symbol: string;
  ts: number;
};
export type OHLCTick = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
};

export type SymbolTick = Record<string, Tick[]>;

export const symbolTickState = atom<SymbolTick>({
  key: "symbolTickState",
  default: {},
});

export const timeTypeState = atom({
  key: "timeTypeState",
  default: {
    label: "5s",
    ms: 5000,
  },
});

export const chartState = atom<ChartCase>({
  key: "chartState",
  default: ChartCase.Candlestick,
});

export const symbolState = atom({
  key: "symbolState",
  default: "AUDCAD",
});

export const closeState = atom({
  key: "closeState",
  default: true,
});

export const selectedIndex = atom({
  key: "selectedIndex ",
  default: 0,
});

export const tabState = atom({
  key: "tabState",
  default: 0,
});

export const indicatorState = atom<instrument []>({
  key:'indicatorState ',
  default:[]
})

export const oscillatorState = atom<instrument []>({
  key:'oscillatorState ',
  default:[]
})

export const tradeState = atom<Trade[]>({
  key:'tradeState',
  default:[]
})
