import React, { FC, useState } from "react";
import { useCloseTab, useCollapsible } from "../../../../hooks/useCollapsible";
import GameTabs from "../../../tabs/GameTabs";
import { assetTabs} from "../../../tabs/TabsIndex";
import { useHandleClose } from "../../../tabs/useClose";
import { Panel } from "../../sideNav/Panel";
import { AssetWrapper, ContentWrapper } from "./AssetElements";


const Assets: FC = () =>{
    const{isShow,handleCollapsible} = useCloseTab()
    return(
        <Panel header={"Assets"} onClick={handleCollapsible} >
                <ContentWrapper>
                    <GameTabs tabs={assetTabs} />  
                </ContentWrapper>
        </Panel>
        
        
    )
}

export default Assets