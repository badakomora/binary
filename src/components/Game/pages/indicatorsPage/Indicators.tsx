import {  faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react"; 
import { useRecoilState } from "recoil";
import { useCloseTab } from "../../../../hooks/useCollapsible";
import { indicatorState } from "../../../../recoil/Atom";
import { BollingerBandIndicator } from "../../GameView/chart/TradingView/insruments/BollingerBandIndicator";
import { EmaIndicator } from "../../GameView/chart/TradingView/insruments/EmaIndicator";
import { SarIndicator } from "../../GameView/chart/TradingView/insruments/SarIndicator";
import { SmaIndicator } from "../../GameView/chart/TradingView/insruments/SmaIndicator";
import { WmaIndicator } from "../../GameView/chart/TradingView/insruments/WmaIndicator";
import { Indicator, Instrument } from "./Instrument";


export const Indicators = () =>{

    const{isShow,handleCollapsible} = useCloseTab()
    const [showIndicator, setShowIndicator] = useRecoilState(indicatorState)

    const indicatorList =[
        {
          name:'sma',
          component:<SmaIndicator/>
        },
        {
          name:'ema',
          component:<EmaIndicator/>,
        },
        {
          name:'Bollinger Bands',
          component:<BollingerBandIndicator/>,
        },
        {
          name:'wma',
          component: <WmaIndicator/>
        },
        {
          name:'Parabolic',
          component: <SarIndicator/>
        }
      ]
  
    const handleIndicator = (name:any, component:any) =>{
        setShowIndicator([
            ... showIndicator,
            {
                name,
                component
            }
        ])
    }

    return(
        <Instrument onclick={handleCollapsible} label={"Indicators"} icon={faCompassDrafting}>
        {!isShow && <div style={{
                position: 'relative',
                transition: 'height .3s ease-in-out',
            }}>
                <div>
                    {indicatorList.map(item =>(
                         <Indicator name={item.name} onclick={()=>handleIndicator(item.name, item.component)}/>
                    ))}
                </div>
            </div>
            }
        </Instrument>
    )
}