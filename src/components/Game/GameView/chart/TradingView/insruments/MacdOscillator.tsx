import * as React from "react";
import { useIndicator } from "../../../../../../hooks/useIndicator";
import { YAxis } from "../axes";
import { MACDSeries } from "../series/MACDSeries";



export const MacdIndicator: React.FC = () =>{

const{macdOsc} = useIndicator();
        return (
        <>
          <YAxis tickValues={[0]} strokeStyle='rgba(26, 29, 33, 0.8)'/>
            <MACDSeries  yAccessor={macdOsc.accessor()}/>
        </>
        );
}



