import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import { useRecoilValue } from "recoil";
import { useCloseTab, useCollapsible } from "../../hooks/useCollapsible";
import { symbolState } from "../../recoil/Atom";
import { TabsType } from "../../utils/types";
import { AssetButton } from "../Game/Buttons";
import { AsideContainer } from "../Game/Elements";
import { SideFooter } from "../Game/sideNav/footer/SideFooter";
import { Btn, List, SideSpan, UnorderedList } from "../Game/sideNav/lists/ListElements";
import { AsidePanel, LayoutAside, LayoutAsideInner, PanelContainer, SideBarWrapper } from "../Game/sideNav/SideNav.Elements";


interface TabsProps {
    tabs: TabsType[],
    defaultIndex?: number,
    orientation?: "horizontal" | "vertical",
    main? : boolean
}

export const VerticalTabs: FC<TabsProps> = props => {
    const{tabs, defaultIndex = 0, orientation = "vertical" , main} = props;

    const[selected, setSelected] = useState(defaultIndex)
    const[selectedTab, setSelectedTab] = useState(defaultIndex)
    const symbolS = useRecoilValue(symbolState)

    const{isShow,handleCollapsible} = useCloseTab()
    
    const panel = tabs[selected]
    const panel2 = tabs[selectedTab]

    const handleOnclick = (index:number) =>{
        setSelected(index);
        setSelectedTab(index)
        handleCollapsible();
    }


    
 const AsidePanel = styled.div`
// max-width: 20rem;
background-color: var(--bg-gamma);
--layout-panel-background-color: var(--bg-gamma);
z-index: 4;
color: var(--contrast-alpha);
font-family: var(--main-font);
position:relative;
transition: max-width 0.25s ease-out;
display:flex;
flex-direction:row;
width:80%;
`
    return(
        <AsideContainer >
            <LayoutAside aria-orientation={orientation}> 
            <LayoutAsideInner>
            <SideBarWrapper>
            <div className="sidebar-menu-vertical__body">
                <UnorderedList>  
                    {tabs.map((tab, i) => (
                        <List>
                             {!main? (
                            <Btn
                                style={{
                                    color:selected === i ? "#0076cc" : ""
                                }}
                                onClick={()=>handleOnclick(i)}
                                key={i}
                            >
                                <SideSpan>
                                <FontAwesomeIcon icon={tab.icon} className="icon"/>
                                </SideSpan>
                                <span className="title">
                                    {tab.title}
                                </span>
                            </Btn>  
                            ):(

                                <AssetButton 
                                onclick={() => handleOnclick(i)}
                                flag="https://cdn2.olymptrade.com/assets1/instrument/vector/EURUSD.2d7d9de55f45290ec68a8cce3745ad1c.svg" 
                                currency={symbolS}
                                percent={80}                                                        
                                />  
                                )} 
                        </List>
                        ))}
                    </UnorderedList> 
                    </div>
                    {!main?(
                        <div className="sidebar-menu-vertical__footer">
                        <SideFooter/>
                        </div> 
                    ):(<></>)} 
                </SideBarWrapper>
                </LayoutAsideInner>
            </LayoutAside>
            {main? (
                <>
                { isShow &&
                    <AsidePanel 
                    role="tabpanel"
                    aria-labelledby={``}
                    id={``}
                >
                    <PanelContainer>
                        {panel && <panel.component index={selected}/>}   
                    </PanelContainer>  
                </AsidePanel>
              }
              </>
            ):(
                <>
                {!main && isShow&&
                 <AsidePanel 
                 role="tabpanel"
                 aria-labelledby={``}
                 id={``}
             >
                    <PanelContainer>
                    {panel2 && <panel.component index={selectedTab}/>}
                    
                </PanelContainer>
                </AsidePanel>
            }
            </>
            )}
            

          
          
            
            <AsidePanel style={{maxWidth: "0",borderRight: "0.0625rem solid var(--bg-gamma)"}}>
            </AsidePanel> 

        </AsideContainer>
    )
}