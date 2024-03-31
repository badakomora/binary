import React, { FC } from "react";
import { LayoutFloating } from "../../Elements";
import { BottomItem, BottomSheet, InnerItem1, InnerItem2, Item, ItemContent, ItemHeader, ItemHeaderCont, NotificationContainer, Tooltip } from "./Floating.Elements";
import { TabButton } from "./HeaderButton";

const Floating: FC = () =>{
    return(
        <LayoutFloating>
            <Tooltip></Tooltip>
            <NotificationContainer>
                <div className="tooltips-container"></div>
                <div className="installer-container"></div>
                <div className="tooltips-container-portal-only"></div>
            </NotificationContainer>
            <div className="bottom-container">
                <BottomSheet></BottomSheet>
                <BottomItem>
                    <InnerItem1></InnerItem1>
                    <InnerItem2>
                        <Item>
                            <ItemHeader role="tablist">
                                <TabButton 
                                    duration={"Duration"} 
                                    durationValue={2} 
                                    onClick={() =>{}}
                                />
                                <TabButton 
                                    duration={"Duration"} 
                                    durationValue={2} 
                                    onClick={() =>{}}
                                />
                                <ItemHeaderCont>
                                    &nbsp;
                                </ItemHeaderCont>
                            </ItemHeader>

                            <ItemContent>
                                incomplete
                            </ItemContent>
                        </Item>
                    </InnerItem2>
                    
                </BottomItem>

            </div>
        </LayoutFloating>
    )
}

export default Floating