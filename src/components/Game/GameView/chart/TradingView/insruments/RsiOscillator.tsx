import React from "react";
import { useIndicator } from "../../../../../../hooks/useIndicator";
import { YAxis } from "../axes";
import { RSISeries } from "../series/RSISeries";
import { RSITooltip } from "../tooltip";

export const RsiIndicator: React.FC = () =>{

    const{rsiOsc} = useIndicator();
            return (
            <>
              <YAxis 
                tickValues={[30,50,70]} 
                strokeStyle='rgba(26, 29, 33, 0.8)'
              />

              <RSISeries  yAccessor={rsiOsc.accessor()}/>

              <RSITooltip 
                origin={[8, 16]} 
                yAccessor={rsiOsc.accessor()} 
                options={
                  {
                    windowSize:rsiOsc.options().windowSize,
                  }
                } 
              />
            </>
            );
    }