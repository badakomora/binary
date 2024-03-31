import styled from "@emotion/styled";
import React, { FC, useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useCloseTab } from "../../hooks/useCollapsible";
import { closeState, symbolState } from "../../recoil/Atom";
import { TabsType } from "../../utils/types";
import { AssetButton } from "../Game/Buttons";
import TabButton from "./TabButton";
import { TabsWrapper } from "./Tabs.Elements";

interface tabProps{
    tabs: TabsType[]
    defaultIndex?:number
    main?:boolean
}

const TradeTabs: FC<tabProps> = ({defaultIndex = 0, tabs,main}) =>{

    const[selectedTab, setSelectedTab] = useState<number>(defaultIndex)
    const symbolS = useRecoilValue(symbolState)
     const Panel2 = tabs[selectedTab];
     const{isShow,handleCollapsible} = useCloseTab()

     const handleOnclick = (index:number) =>{
        setSelectedTab(index);
        handleCollapsible();
    }
       

    return(
        <>
            <TabsWrapper>
                {tabs.map((tab,i) =>(  
                        <AssetButton 
                        onclick={()=>handleOnclick(i)}
                        flag="https://cdn2.olymptrade.com/assets1/instrument/vector/EURUSD.2d7d9de55f45290ec68a8cce3745ad1c.svg" 
                        currency={symbolS}
                        percent={80}                                                        
                        />            
                ))}   
            </TabsWrapper>

            {isShow &&
                 <AsidePanel 
                 role="tabpanel"
                 aria-labelledby={``}
                 id={``}
             >
                 <PanelContainer>
                 {Panel2 && <Panel2.component index={selectedTab} />}
                 </PanelContainer>
                
           </AsidePanel>
            }
            
            
        </>
    )
}

export default TradeTabs

const AsidePanel = styled.div`
width:20rem;
position: relative;
transform: none;
max-width: 20rem;
background-color: var(--bg-alpha);
--layout-panel-background-color: var(--bg-alpha);
border-right: 0.0625rem solid var(--bg-gamma);
z-index: 4;
`
const PanelContainer = styled.div`

`