import { faLineChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ FC} from "react";
import ReactDOM from "react-dom";
import { useRecoilState } from "recoil";
import { ChartCase, chartState } from "../../../../recoil/Atom";
import { ModalProps } from "../../../../utils/types";
import ChartButton from "../chart/ChartsBtn";
import Popup from "./Popup";


export const ChartsPopup: FC<ModalProps> = ({isShow,hide}) =>{
   
    const[showChart, setShowChart] = useRecoilState(chartState);
    
    const handleChart = (state:any) =>{
        setShowChart(state);
        hide();
    }

    const chartPopup = (
        <Popup hide={hide}>
            <div style={{background:'var(--base-alpha)'}}>
                <ChartButton 
                    main={true}
                    classname={showChart === ChartCase.Area? 'active':''}
                    onClick={() => handleChart(ChartCase.Area)}
                    title='Area Chart' 
                    smiley={<FontAwesomeIcon icon={faLineChart} className="icon"/>} 
                />
                 <ChartButton 
                    classname={showChart === ChartCase.Candlestick? 'active':''}
                    main={true}
                    onClick={() => handleChart(ChartCase.Candlestick)}
                    title='Candlestick' 
                    smiley={<FontAwesomeIcon icon={faLineChart} className="icon"/>} 
                />
                 <ChartButton 
                    classname={showChart === ChartCase.Ashi? 'active':''}
                    main={true}
                    onClick={() => handleChart(ChartCase.Ashi)}
                    title='Heikin Ashi' 
                    smiley={<FontAwesomeIcon icon={faLineChart} className="icon"/>} 
                />
                 <ChartButton 
                    classname={showChart === ChartCase.Bar? 'active':''}
                    main={true}
                    onClick={() => handleChart(ChartCase.Bar)}
                    title='Bars' 
                    smiley={<FontAwesomeIcon icon={faLineChart} className="icon"/>} 
                />
            </div>
        </Popup>
    )
    return isShow?  ReactDOM.createPortal(chartPopup, document.body): null;
}