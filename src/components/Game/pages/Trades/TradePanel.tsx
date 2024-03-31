import React, { FC, useState } from "react";
import { useRecoilValue } from "recoil";
import { useCollapsible } from "../../../../hooks/useCollapsible";
import { symbolState } from "../../../../recoil/Atom";
import { TradeCard } from "./DealCard";
import EmptyCard from "./EmptyCard";
import { SummaryWrap } from "./TradesElements";


const TradePanel: FC = () =>{
    const symbolS = useRecoilValue(symbolState)
    const{isShow, handleCollapsible} = useCollapsible()
    return(
       <>
       <SummaryWrap>
            <div>
                <div className="header">
                    <div className="title">Active Trades</div>
                    <div className="info">
                        <div className="column-left">
                            <div className="deal-summary__label">
                                <span data-trans="deals_list_summary_label_invested">Invested</span>
                            </div>
                            <div className="deal-summary__value deal-summary__value_no-deals">
                                <span dir="ltr" className="">Đ0.00</span>
                            </div>
                            
                        </div>
                            <div className="column-right">
                                <div className="deal-summary__column deal-summary__column_right">
                                    <div className="deal-summary__label">
                                            <span data-trans="deals_list_summary_label_total">Profit and Loss</span>
                                    </div>
                                    <div className="deal-summary__value deal-summary__value_no-deals">
                                        <span dir="ltr" className="">Đ0.00</span>
                                    </div>
                                
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <TradeCard 
                    symbol={symbolS} 
                    market={80} 
                    amount={20} 
                    duration={"2 min"} 
                    profit={16.50}
            />
            {/* {isShow && 
                <CollapseWrap>
                <div>
                    <div className="">
                        <ActiveDeal 
                            value={0.00} 
                            label={"0 FX"}
                            percent={0}
                            profit={0.00}
                        />
                        <ActiveDeal 
                            value={20.00} 
                            label={"1 FTT"}
                            percent={82}
                            profit={16.84}
                        />
                         <ActiveDeal 
                            value={0.00} 
                            label={"0 FX"}
                            percent={0}
                            profit={0.00}
                        />
                        
                    </div>
                </div>
            </CollapseWrap>
            } */}
            
        </SummaryWrap>

            <EmptyCard 
                 title="You have no open trades on this account" 
            />
        </>
    )
}

export default TradePanel