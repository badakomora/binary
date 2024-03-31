import React,{ FC } from "react";
import { GraphList } from "../../sideNav/lists/GraphList";
import { AssetButton } from "../../Buttons";
import { ChartWrapper, GraphContent, GraphSettings, MarketWrap, PlatformMain, TradeFrameContent, TradeFrameForm, TradingFrame, TradingPanel } from "./PlatformElements";
import Chart from "../chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import TradeControls from "../TradeControls";
import { useRecoilValue } from "recoil";
import { symbolState } from "../../../../recoil/Atom";


const Platform: FC = () =>{
    const symbolS = useRecoilValue(symbolState)
    
return(
<PlatformMain >
    <TradingFrame>
        <div className="trade-frame">
            <div className="trade-frame-section">
                <TradeFrameContent>
                        <GraphContent>
                            <GraphSettings>
                                <GraphList 
                                    content={
                                        <AssetButton 
                                            flag="https://cdn2.olymptrade.com/assets1/instrument/vector/EURUSD.2d7d9de55f45290ec68a8cce3745ad1c.svg" 
                                            currency={symbolS}
                                            percent={80}  
                                            onclick={()=>{}}                                                      
                                        />
                                        // <VerticalTabs tabs={currencyTabs} main={true}/>
                                       
                                    }
                                />
                                <GraphList/>
                                <GraphList/>
                                <GraphList/>
                            </GraphSettings>

                            <ChartWrapper>
                                <Chart/>
                            </ChartWrapper>

                        </GraphContent>
                </TradeFrameContent>

                <TradeFrameForm>
                    <MarketWrap>
                        <div className="name">
                            <h4 >{symbolS}</h4>
                            <span className="fixed">Fixed Time</span>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faInfoCircle} style={{fontSize:"1.5rem", color:"var(--contrast-gamma)"}}/>
                        </div>
                    </MarketWrap>
                    <TradeControls/>
                </TradeFrameForm>
            </div>
        </div>
    </TradingFrame>
    <TradingPanel>

    </TradingPanel>
</PlatformMain>
)
}

export default Platform