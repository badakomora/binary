import { useContext, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { wsocketContext } from "../sockets/Api/Api";
import { convertToOHLC } from "../components/Game/GameView/chart/TradingView/OhlcData";
import {
  Tick,
  symbolState,
  symbolTickState,
  timeTypeState,
} from "../recoil/Atom";


export const useData = () => {
  const wsocket = useContext(wsocketContext);

  const { ms: timeSegment } = useRecoilValue(timeTypeState);

  const [symbolTick, setSymbolTick] = useRecoilState(symbolTickState);

  const symbolS = useRecoilValue(symbolState);

 

  useEffect(() => {
     
    wsocket.onopen = (e) => {
      const apiCall = {
        userKey: "wsxnLY1nTCa1fSsyrzEw",
        symbol: "GBPUSD,GBPCAD,GBPJPY,EURUSD,EURCAD,AUDCAD,AUDUSD,EURJPY,AUDJPY,AUSJPY",
      };

      wsocket.send(JSON.stringify(apiCall));
    };

    wsocket.onmessage = (e) => {
      const data: Tick = e.data !== "Connected" && JSON.parse(e.data);

      const tempData = symbolTick[data.symbol]
        ? [...symbolTick[data.symbol], data]
        : [data];

      if (data && data.symbol) {
        setSymbolTick({
          ...symbolTick,
          [data.symbol]: tempData,
        });
      }
    };
    wsocket.onerror = (error) => {
      alert(`[error]`);
    };
  });
  return {
    wsData: convertToOHLC(symbolTick[symbolS], timeSegment),
    plain: symbolTick[symbolS]
  };
};
