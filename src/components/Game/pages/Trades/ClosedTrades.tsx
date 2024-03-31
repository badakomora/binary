import {  faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { useCollapsible } from "../../../../hooks/useCollapsible";
import { symbolState } from "../../../../recoil/Atom";
import { DataField } from "./DataField";
import { TradeCard } from "./DealCard";
import { CloseWrapper, CollapseWrap, DealCard, DealHeader } from "./TradesElements";

interface closedProps{
    date:any
    Trades:number
    symbol:string
    market:number
    amount:number
    duration:string

}

const ClosedTrades: FC<{}> = () =>{
   const{isShow, handleCollapsible} = useCollapsible()
   const symbolS = useRecoilValue(symbolState)
    return(
        <CloseWrapper>
            <div style={{padding: '0 1rem'}}>
                <div className="card__data-label">
                    <span>03 July 2020</span>
                    <span>
                    <span data-trans="cabinet_tab_deals">Trades: </span>
                        3
                    </span>
                </div>
                
                <TradeCard 
                    symbol={symbolS} 
                    market={80} 
                    amount={20} 
                    duration={"2 min"} 
                    profit={16.50}
                />

            </div>
        </CloseWrapper>
    )
}
export default ClosedTrades