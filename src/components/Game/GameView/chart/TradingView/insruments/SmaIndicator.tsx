import React, { FC } from "react";
import { useIndicator } from "../../../../../../hooks/useIndicator";
import { CurrentCoordinate } from "../coordinates";
import { LineSeries } from "../series/LineSeries";
import { MovingAverageTooltip } from "../tooltip";

export const SmaIndicator: FC = () =>{
    const{smaI} = useIndicator()

    return(
        <>
            <LineSeries yAccessor={smaI.accessor()} strokeStyle='rgb(238, 159, 7)' strokeWidth={1.2} />
            <CurrentCoordinate
                yAccessor={smaI.accessor()}
                fillStyle={smaI.stroke()}
            /> 

            <MovingAverageTooltip
                origin={[8, 24]}
                options={[
                {
                    yAccessor: smaI.accessor(),
                    type: "SMA",
                    stroke: smaI.stroke(),
                    windowSize: smaI.options().windowSize
                },
                
                ]}
            /> 
        </>
    )
}