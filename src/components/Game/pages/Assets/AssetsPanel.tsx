import { faBarsStaggered, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ FC } from "react";
import { useCurrency } from "../../../../hooks/useCurrency";
import {FancyBtn} from "../../GameView/chart/GraphSettings";
import { currencyList } from "../../GameView/chart/TradingView/currencyList";
import { AssetMenu, AssetMenuList, AssetSearch, AssetsHeader, AssetsLabel, AssetSort, TabContent } from "./AssetElements";
import { AssetItem } from "./AssetItem";
import AssetScroll from "./ScrollAssets";
import { Search } from "./Search";
// import Asia from "../../../../images/"


const AssetsPanel: FC = () =>{
   const{assetSymbol, handleCurrency} = useCurrency();
    
    return(
       <TabContent>
            <AssetMenu>
                <div className="asset-menu__list">
                    <AssetMenuList>
                        <AssetsHeader>
                            <div className="header-search">
                                <AssetSearch>
                                    <Search/>
                                </AssetSearch>
                                <AssetSort>
                                   <FancyBtn 
                                        onClick={()=>{}}
                                        icon={faBarsStaggered}
                                   />      
                                </AssetSort>
                            </div>
                            <div className="header-tags">
                                <div className="asset-tags">
                                    <button className="scroll-button">
                                        <i className="fa fa-angle-right"></i>                                        
                                    </button>
                                    <AssetScroll/>
                                </div>
                            </div>
                        </AssetsHeader>
                        <AssetsLabel>
                            <div className="label">Name</div>
                            <div className="label">
                                <span>Profitability</span>
                                <span style={{marginLeft:'0.2rem'}}>
                                    <FontAwesomeIcon icon={faCircleQuestion}/>
                                </span>
                            </div>
                        </AssetsLabel>

                        {currencyList.map((currency)=>
                             <AssetItem 
                                flag={currency.flag}
                                symbol={currency.symbol} 
                                profit={currency.profit}
                                onclick={() => handleCurrency(currency.symbol)}
                           />
                        )}
                    </AssetMenuList>
                </div>
            </AssetMenu>
       </TabContent>
    )
}
export default AssetsPanel