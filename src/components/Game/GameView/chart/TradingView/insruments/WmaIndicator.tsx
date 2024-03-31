import React, { FC } from "react";
import { useIndicator } from "../../../../../../hooks/useIndicator";
import { CurrentCoordinate } from "../coordinates";
import { LineSeries } from "../series/LineSeries";
import { MovingAverageTooltip } from "../tooltip";


export const WmaIndicator: FC =() =>{
    const{wmaI} = useIndicator()
    return(
        <>
            <LineSeries yAccessor={wmaI.accessor()} strokeStyle='rgb(31, 191, 117)' strokeWidth={1.2} />
            <CurrentCoordinate
              yAccessor={wmaI.accessor()}
              fillStyle={wmaI.stroke()}
            /> 


            <MovingAverageTooltip
                origin={[8, 24]}
                options={[
                  {
                    yAccessor: wmaI.accessor(),
                    type: "WMA",
                    stroke: wmaI.stroke(),
                    windowSize: wmaI.options().windowSize
                  },
                  
                ]}
              /> 
          
        </>
    )
}