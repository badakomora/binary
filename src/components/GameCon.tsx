import React,{ FC } from "react";
import { AsideContainer, Layout,  LayoutOverlay } from "./Game/Elements";
import Floating from "./Game/sideNav/floating/Floating";
import GameMain from "./Game/GameView/GameMain";
import { VerticalTabs } from "./tabs/Tabs";
import { navTabs } from "./tabs/TabsIndex";

const GameCon: FC = () =>{
    return(
        <Layout>
            {/* <Floating/> */}
            <VerticalTabs tabs={navTabs}/>

            <GameMain/>

            {/* <LayoutOverlay></LayoutOverlay> */}
        </Layout>
    )
}

export default GameCon