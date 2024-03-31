import styled from "@emotion/styled";
import { faBarsStaggered, faCompassDrafting, faLightbulb, faPen, faPercentage } from "@fortawesome/free-solid-svg-icons";
import  { FC } from "react";
import { useCloseTab } from "../../../../hooks/useCollapsible";
import { Panel } from "../../sideNav/Panel";
import { AssetSearch, ContentWrapper } from "../Assets/AssetElements";
import { Search } from "../Assets/Search";
import { Drawing } from "./Drawing";
import { IndicatorWrap } from "./Elements";
import { Indicators } from "./Indicators";
import { Indicator, Instrument } from "./Instrument";
import { Oscillators } from "./Oscillators";

export const Instruments: FC = () =>{
    const{isShow,handleCollapsible} = useCloseTab()

   
    
    return(
        <Panel header="Instruments" >
            <ContentWrapper>
                <div>
                    <div style={{margin:'1rem 0rem'}}>
                    <div className="header-search">
                        <AssetSearch>
                            <Search/>
                        </AssetSearch>             
                    </div>

                    </div>
                    <div>
                      <Indicators/>
                      <Oscillators/>
                       <Drawing/>
                        <Instrument onclick={()=>{}} label={"Strategies"}  icon={faPercentage}/>
                        <Instrument onclick={()=>{}} label={"Advisers"}  icon={faLightbulb}/>
                    </div>
                </div>
                <div>

                </div>
               
            </ContentWrapper>
        </Panel>
    )
}

