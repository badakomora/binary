import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import React from "react"; 
import { useRecoilState } from "recoil";
import { useCloseTab } from "../../../../hooks/useCollapsible";
import { oscillatorState } from "../../../../recoil/Atom";
import { MacdIndicator } from "../../GameView/chart/TradingView/insruments/MacdOscillator";
import { RsiIndicator } from "../../GameView/chart/TradingView/insruments/RsiOscillator";
import { StochasticOsc } from "../../GameView/chart/TradingView/insruments/StochasticOsc";
import { Indicator, Instrument } from "./Instrument";


export const Oscillators = () =>{

    const{isShow,handleCollapsible} = useCloseTab()
    const[showOsc, setShowOsc] = useRecoilState(oscillatorState)
    // const OscillatorsArray = ['MACD','RSI','Stochastic', 'Demarker','Aroon', 'Bears Power','Bulls Power', 'CCI', 'Rate of Change', 'Momentum','Awesome Oscillator']

    const oscillatorList = [
        {
            name:'RSI',
            component:<RsiIndicator/>
        },
        {
            name:'Stochastic',
            component: <StochasticOsc/>
        },
        {
            name:'MACD',
            component:<MacdIndicator/>
        },
    ]
    const DisOsc = ['']

    const handleOsc = (name:string, component:any) =>{
        setShowOsc([...showOsc, {name, component}])
    }
    

    return(
        <Instrument onclick={handleCollapsible} label={"Oscillators"}  icon={faBarsStaggered}>
        {!isShow && <div style={{
                position: 'relative',
                transition: 'height .3s ease-in-out',
            }}>
                <div>
                {oscillatorList.map(item =>(
                    <Indicator name={item.name} onclick={()=> handleOsc(item.name, item.component)}/>
                ))}
                  
              
                </div>
            </div>
            }
        </Instrument>
    )
}