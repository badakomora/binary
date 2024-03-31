import { format } from "d3-format";
import React, { FC } from "react";
import { useIndicator } from "../../../../../../hooks/useIndicator";
import { YAxis } from "../axes";
import { MouseCoordinateY } from "../coordinates";
import { StochasticSeries } from "../series/StochasticSeries";
import { StochasticTooltip } from "../tooltip";


export const StochasticOsc: FC = () =>{
    const {stochasticOsc} = useIndicator()
    const stoDisplayFormat = format(".2f");

    return(
        <>
            <YAxis 
                strokeStyle='transparent' 
                axisAt="right" 
                orient="right" 
                tickValues={[20, 80]} 
            />

            <MouseCoordinateY 
                rectWidth={100} 
                displayFormat={stoDisplayFormat}
             />

            <StochasticSeries yAccessor={stochasticOsc.accessor()} />
            <StochasticTooltip
                origin={[8, 16]}
                yAccessor={stochasticOsc.accessor()}
                options={
                    {
                        windowSize:stochasticOsc.options().windowSize,
                        dWindowSize:stochasticOsc.options().dWindowSize,
                        kWindowSize:stochasticOsc.options().kWindowSize
                    }
                }
                appearance={
                    { stroke: {
                        dLine:'rgb(244, 121, 97)', 
                        kLine:' rgb(35, 95, 248)'
                    } }
                }
                label="Stochastic"
            />
        </>
    )
}