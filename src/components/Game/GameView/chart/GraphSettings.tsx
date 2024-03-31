import styled from "@emotion/styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, MouseEventHandler} from "react";
import { DarkTooltip } from "../Tooltip/DarkTooltip";

const List = styled.li`
opacity: 1;
align-items: center;
color: currentColor;
display: flex;
line-height: normal;
list-style: none;

&:not(:last-child){
    margin-bottom: 0.125rem;
    margin-right: 0;
}

&:hover{
    background-color: var(--high-gamma);
}

`

const Button = styled.button`
align-items: center;
    background-color: var(--base-alpha);
    border: 0.0625rem solid var(--contrast-border-rgba);
    border-radius: var(--corner-radius-beta);
    display: flex;
    font-weight: 600;
    height: 2.5rem;
    justify-content: center;
    opacity: .6;
    position: relative;
    width: 2.625rem;
    -webkit-tap-highlight-color: transparent;
    color: inherit;
    cursor: pointer;
    text-decoration: none;

    .svg{
    color: currentcolor;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1rem;
    height: 1em;
    overflow: hidden;
    user-select: none;
    width: 1em;
    }

    
`

interface GraphSettingProps{
    onClick:MouseEventHandler
    icon: IconProp
    title?: string
}

export const Lists: FC<GraphSettingProps> = props =>{
    const{onClick, icon, title} = props
    return(

        <List>
            <div>
                <span>
                <DarkTooltip  
                    title={title} 
                    arrow 
                    placement="right" 
                    enterDelay={500} 
                >
                    <Button onClick={onClick}>
                        <FontAwesomeIcon icon={icon} className="svg"/>
                    </Button>
                </DarkTooltip>
                </span>
            </div>
        </List>
    )
}

export const FancyBtn: FC<GraphSettingProps> = ({onClick,icon}) =>{
    return(
            <Button onClick={onClick}>
                <FontAwesomeIcon icon={icon} className="svg"/>
            </Button>
    )
}