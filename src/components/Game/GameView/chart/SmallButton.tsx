import styled from "@emotion/styled";
import React, { FC, MouseEventHandler } from "react";
import { DarkTooltip } from "../Tooltip/DarkTooltip";

interface smallProps{
    text:string
    onClick:MouseEventHandler
    unique?: boolean
    title?:string
}

const SmallButton: FC<smallProps>  = ({text, onClick, unique,title}) =>{
    const Button = styled.button`
    background-color: var(--base-alpha);
    border: 0.0625rem solid var(--contrast-border-rgba);
    color: var(--contrast-alpha);
    align-items: center;
    cursor:pointer;
    width:100%;
    max-width:47%;

    &:first-child {
        border-radius: ${unique? "0.0625rem":"0.5rem 0.125rem 0.125rem 0.5rem"};
        margin-right: 0.125rem;
    }
    &:last-child {
        border-radius: ${unique? "0.0625rem":"0.125rem 0.5rem 0.5rem 0.125rem"};
        margin-left: 0.125rem;
    }

    &:hover{
        background-color: var(--base-beta);
    }
    .text{
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.0rem;
    height: 1em;
    padding:0 1rem ;
    }
`

    return(
    <DarkTooltip  
        title={title} 
        arrow 
        placement="top" 
        enterDelay={500} 
    >
        <Button onClick={onClick}  >
            <span className="text">{text}</span>
        </Button>
    </DarkTooltip>
    )
}
export default SmallButton