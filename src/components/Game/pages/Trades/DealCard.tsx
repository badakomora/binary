import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useCollapsible } from "../../../../hooks/useCollapsible";
import { DataField } from "./DataField";
import { CloseWrapper, CollapseWrap, DealHeader, DealCard, } from "./TradesElements";

interface dealProps{
    symbol:string
    market:number
    amount:number
    duration:string
    profit:number
    
}

export const TradeCard: FC<dealProps> = ({symbol,market,amount,duration,profit}) =>{
    const{isShow, handleCollapsible} = useCollapsible()
    return(
        <CloseWrapper>
              <DealCard>
                    <div>
                        <div className="deal-card__modal"></div>
                        <DealHeader>
                            <div className="deal-card__toggle">
                                <span className="collapsible-arrows" onClick={handleCollapsible}>
                                     <i className= {isShow? "fa fa-angle-up" :"fa fa-angle-down"}></i> 
                                </span>
                            </div>
                            <div style={{cursor:'pointer'}}>
                                <div style={{padding:'.25rem .5rem .5rem'}}>
                                    <div className="deal-card-header__block">
                                        <div className="deal-card-title">
                                            <div className="deal-card-title__asset">
                                                <span style={{
                                                    height: "2.5rem",
                                                    width: "2.5rem",
                                                    display: "inline-block",
                                                }}> 
                                                    <img src='https://cdn2.olymptrade.com/assets1/instrument/vector/EURUSD.2d7d9de55f45290ec68a8cce3745ad1c.svg'/>
                                                </span>
                                        
                                            </div>
                                            <div className="deal-card-title__heading">
                                                <div className="deal-card-title__main">{symbol}</div>
                                                <div className="deal-card-subtitle">
                                                    FTT <span>{market}%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="deal-card-amount">
                                            <span className="deal-card-amount__pic">
                                                <i className="fa fa-arrow-down"></i> 
                                            </span> 
                                            &nbsp;
                                            <span className="deal-card-amount__value">
                                                Đ{amount}
                                            </span>
                                        </div>

                                    </div>
                                    <div className="deal-card-header__block">
                                            <div className="card__duration">
                                                 <FontAwesomeIcon icon={faClock}/>&nbsp;  {duration}
                                            </div>
                                            <div className="colored-amount">+Đ{profit}</div>
                                    </div>
                                </div>
                            </div>
                        </DealHeader>
                        {isShow &&
                               <CollapseWrap>
                               <div>
                                   <DealHeader>
                                       <div className="deal-card-ftt-body-slot"></div>
                                       <div className="mini-chart-wrapper">
                                           <div className="goto-button-container">
                                                <div className="mini-chart-wrapper__paranga"></div>
                                                <div className="goto-button ">
                                                   <span>Show on the Chart</span>
                                                </div>
                                           </div>
                                           <div className=""></div>
                                       </div>
                                       <div className="deal-card-details">
                                           <DataField text={"Income"} value={"Đ5.46"}/>
                                           <DataField text={"Closed"} value={"With a profit"}/>

                                           <div style={{marginBottom: '1rem'}}></div>

                                           <DataField text={"Duration"} value={"1 min"}/>
                                           <DataField text={"Opening quote"} value={"1.0123"}/>
                                           <DataField text={"Closing quote"} value={"1.0133"}/>
                                           <DataField text="Trade id" value={"6450592494"}/>

                                           <div style={{marginBottom: '1rem'}}></div>

                                           <div className="field__column">
                                                <div className="card__row_double-row data-value-field">
                                                    <span></span>
                                                </div>
                                                <div className="card__row_double-row data-value-field"></div>

                                           </div>
                                       </div>
                                   </DealHeader>
                               </div>
                           </CollapseWrap>
                        }
                     
                    </div>
                </DealCard>
        </CloseWrapper>
    )
}