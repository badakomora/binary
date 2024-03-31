import styled from "@emotion/styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface BtnProps{
    title: string
    icon:IconProp
    background?: boolean
    onclick: () => void
}

const BuyButton: FC<BtnProps> = props =>{

    const Button = styled.button`
    background-color: ${props.background? "var(--positive-alpha)":"var(--negative-alpha)"};
    align-items: center;
    border-radius: var(--corner-radius-beta);
    color: var(--accent-on-accent);
    font-weight: 700;
    height: 3.5rem;
    justify-content: space-between;
    min-width: 5.75rem;
    overflow: hidden;
    padding: 0 1rem;
    width: 100%;
    cursor:pointer;
    display:flex;
    border:none;
    margin-top:0.4rem;

    &:hover{
        background-color: ${props.background? "var(--positive-beta)":"var(--negative-beta)"};
    }
    `
    return(
        <Button onClick={props.onclick}>
            <div style={{textAlign:"left",position:"relative"}}>
                <span>{props.title}</span>
            </div>
            <div style={{textAlign:"right"}}>
                <span>
                    <FontAwesomeIcon icon={props.icon} className="icon"/>
                </span>
            </div>
        </Button>
    )
}

export default BuyButton