import React, { FC, useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { closeState, symbolState, tabState } from "../../recoil/Atom";
import { TabsType } from "../../utils/types";
import { AssetButton } from "../Game/Buttons";
import TabButton from "./TabButton";
import { TabsWrapper } from "./Tabs.Elements";

interface tabProps{
    tabs: TabsType[]
    defaultIndex?:number
    main?:boolean
}

const GameTabs: FC<tabProps> = ({defaultIndex = 0, tabs,main}) =>{

    const[selectedTab, setSelectedTab] = useRecoilState(tabState)
    const symbolS = useRecoilValue(symbolState)
     const Panel2 = tabs[selectedTab];
       

    return(
        <>
            <TabsWrapper>
                {tabs.map((tab,i) =>(  
                    <>
                        {!main? (
                        <TabButton
                        classname={selectedTab === i? 'active':''}
                        onClick={() => setSelectedTab(i)}
                        key={i}
                        title={tab.title} />  
                    ):(

                        <AssetButton 
                        onclick={() => setSelectedTab(i)}
                        flag="https://cdn2.olymptrade.com/assets1/instrument/vector/EURUSD.2d7d9de55f45290ec68a8cce3745ad1c.svg" 
                        currency={symbolS}
                        percent={80}                                                        
                        />  
                    )}
                    </>
                
                           
                ))}   
            </TabsWrapper>
           
            <div
               role="tabpanel"
               style={{height:'100%'}}
           >
               {Panel2 && <Panel2.component index={selectedTab} />}
           </div>
            
        </>
    )
}

export default GameTabs
