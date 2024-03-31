import React, { FC } from "react";
import { useIndicator } from "../../../../../../hooks/useIndicator";
import { BollingerSeries } from "../series/BollingerSeries";
import { BollingerBandTooltip } from "../tooltip";

export const BollingerBandIndicator: FC = () =>{
    const {bollinger} = useIndicator()

    return(
        <>
            <BollingerSeries yAccessor={bollinger.accessor()}/>

            <BollingerBandTooltip
                origin={[8,24]}
                yAccessor={bollinger.accessor()}
                options={  
                    {    
                    windowSize:bollinger.options().windowSize,
                    sourcePath:bollinger.options().sourcePath,
                    movingAverageType:bollinger.options().movingAverageType,
                    multiplier:bollinger.options().multiplier
                    }
                }
               
            /> 
        </>
    )
}