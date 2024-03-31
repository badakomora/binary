import React, { FC } from "react";
import { useIndicator } from "../../../../../../hooks/useIndicator";
import { CurrentCoordinate } from "../coordinates";
import { LineSeries } from "../series/LineSeries";
import { MovingAverageTooltip } from "../tooltip";

export const EmaIndicator: FC = () =>{
    const {ema26} = useIndicator()
    
    return(
        <>
        
         <LineSeries yAccessor={ema26.accessor()} strokeStyle='rgb(237, 213, 2)' strokeWidth={1.2} />
            <CurrentCoordinate
              yAccessor={ema26.accessor()}
              fillStyle={ema26.stroke()}
         /> 


            <MovingAverageTooltip
                origin={[8, 24]}
                options={[
                  {
                    yAccessor: ema26.accessor(),
                    type: "EMA",
                    stroke: ema26.stroke(),
                    windowSize: ema26.options().windowSize
                  },
                  
                ]}
              /> 
        </>
    )
}