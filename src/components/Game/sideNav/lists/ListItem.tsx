import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, MouseEventHandler } from "react";
import { Btn, List, SideSpan } from "./ListElements";

interface listProps{
    smiley: IconProp
    title: string
    onClick: MouseEventHandler
}
export const ListItem: FC<listProps> = props =>{
    const{smiley,title, onClick} = props;

    return(
        <List>
            <Btn onClick={onClick}>
                <SideSpan>
                    <FontAwesomeIcon icon={smiley} className="icon"/>
                </SideSpan>
                <span className="title">
                    {title}
                </span>
            </Btn>
        </List>
    )
}