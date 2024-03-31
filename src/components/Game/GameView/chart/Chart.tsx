import { faBoxes, faCompassDrafting, faLineChart, faSignal } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { timeTypeState } from "../../../../recoil/Atom";
import Loading from "../../Loading";
import { ChartsPopup } from "../popup/ChartsPopup";
import { TimestampPopup } from "../popup/TimestampPopup";
import { usePopup, useTimestamp } from "../popup/UsePopup";
import { ChartBottom, ChartMain, ChartWrapper, GraphSettingsWrapper } from "./Elements";
import { Lists } from "./GraphSettings";
import SmallButton from "./SmallButton";
import StockChart from "./TradingView/StockChart";




const Chart: FC = () =>{
      const timetype = useRecoilValue(timeTypeState)
      const{openPopup, togglePopup} = usePopup();
      const{showTime, toggleTimestamp} = useTimestamp();

    return(
        <ChartWrapper>
            {/* DISPLAY CHARTS */}
                 <StockChart/> 
 
            <ChartMain>
                
                <ChartsPopup 
                    isShow={openPopup} 
                    hide={togglePopup} 
                />
                <TimestampPopup
                    isShow={showTime}
                    hide={toggleTimestamp}
                />

                <div></div>
                <div className="techAnalysis"></div>
                <GraphSettingsWrapper>
                    
                        <Lists 
                            title="Signals" 
                            onClick={() =>{}} 
                            icon={faSignal}
                        />
                        <Lists 
                            title="Chart Types" 
                            onClick={togglePopup} 
                            icon={faLineChart}
                        />
                        <Lists 
                            title="Technical Analysis" 
                            onClick={()=>{}} 
                            icon={faCompassDrafting}
                        />
                        <Lists  
                            title="Multiple Charts" 
                            onClick={() =>{}} 
                            icon={faBoxes}
                        />
                </GraphSettingsWrapper>
            </ChartMain>

            <ChartBottom>
                <div className="bottom-content">
                    <SmallButton text={"-"} onClick={() =>{}}/>
                    <SmallButton text={timetype.label} title="Timeframe" onClick={toggleTimestamp}/>
                    <SmallButton text={"+"} onClick={() =>{}}/>
                </div>
            </ChartBottom>
        </ChartWrapper>
    )
}

export default Chart