import styled from "@emotion/styled";
import React, { Children, FC } from "react";
import GameTabs from "../../../tabs/GameTabs";
import { tabs } from "../../../tabs/TabsIndex";
import { Panel } from "../../sideNav/Panel";
import { ContentWrapper, Wrapper } from "./TradesElements";

export const Trades: FC = props =>{

    return(
          <Panel header={"Trades"} onClick={() =>{}} >
                <Wrapper>
                    <ContentWrapper>
                        <div className="content-inner">
                           <GameTabs tabs={tabs} />
                        </div>
                    </ContentWrapper>
                </Wrapper>
          </Panel>
    )
}