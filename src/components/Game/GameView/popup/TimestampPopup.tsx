import { FC } from "react";
import ReactDOM from "react-dom";
import { useRecoilState } from "recoil";
import { timeTypeState } from "../../../../recoil/Atom";
import { ModalProps } from "../../../../utils/types";
import ChartButton from "../chart/ChartsBtn";
import Popup from "./Popup";


export const TimestampPopup: FC<ModalProps> = ({isShow, hide}) =>{

     const [timeType , setTimeType] = useRecoilState(timeTypeState);

     const changeChartTime = (interval:number, title:string) =>{
          setTimeType({label: title, ms: interval})
          hide()
     }
 

    const timestampPop = (
        <Popup hide={hide} pop={true}>
               <div style={{
                    gridGap: 4,
                    display: 'grid',
                    gridTemplateColumns: '2.5rem 2.5rem 2.5rem',
               }}>
               
               {timestamps.map(item => (
                       <ChartButton
                       onClick={()=>changeChartTime(item.ts, item.type)}
                       title={item.type}
                  />
               ))}

               </div>
        </Popup>
    )

    return isShow? ReactDOM.createPortal(timestampPop, document.body):null;
}


const timestamps = [
     {
          ts:5000,
          type:'5s',
     },
     {
          ts:15000,
          type:'15s',
     },
     {
          ts:60000,
          type:'1m',
     },
     {
          ts:300000,
          type:'5m',
     },
     {
          ts:10*60*1000,
          type:'10m',
     },
     {
          ts:15*60*1000,
          type:'15m',
     },
     {
          ts:30*60*1000,
          type:'30m',
     },
     {
          ts:1*60*60*1000,
          type:'1h',
     },
     {
          ts:4*60*60*1000,
          type:'4h',
     },
]
