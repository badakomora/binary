import styled from "@emotion/styled";
import React, { FC } from "react";

interface paymentProps{
    main? : boolean
    onclick?: () => void
}

interface AssetProps {
    flag : string
    currency: string
    percent: number
    onclick: () => void
}
const ButtonWrap = styled.button<paymentProps>`
box-shadow:  ${(props) => props.main? "":"inset 0 0 0 0.0625rem var(--contrast-border-rgba)"};
background-color: ${(props) => props.main? "var(--base-alpha)":"var(--accent-alpha)"} ;
color: var(--accent-on-accent);
align-items: center;
border: none;
border-radius: var(--corner-radius-beta);
box-sizing: border-box;
cursor: pointer;
display: inline-flex;
height: fit-content;
outline: none;
position: relative;
text-align: center;
min-height: 2.5rem;

.content{
    padding: 14px 16px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    height: fit-content;
    font-size:1rem;
    font-weight:700;
}
`
const Asset = styled.div`
display: flex;
gap: 0.75rem;
height: 100%;

.flag{
    align-items: center;
    display: inline-flex;
    flex-shrink: 0;
}
.item{
    box-sizing: border-box;
    display: flex;
    height: fit-content;
    padding-top:2px;}

.currency{
    flex-direction: column;
    font-size: 1rem;
    line-height: 1.25rem;
}
.percent{
    flex-direction: row;
    background: var(--accent-alpha) !important;
    border-radius: var(--corner-radius-gamma);
    padding: 0 0.25rem;
    box-sizing: border-box;
    display: inline-flex;
    height: 1.25rem;
    justify-content: center;
    align-items:centre;
}
span{
    transition: background-image .1s ease-in-out;
    height: 1.5rem;
    width: 1.5rem;
    background: 50%/contain no-repeat;
    display: inline-block;
}
`
 export const Payments: FC<paymentProps> = ({onclick}) =>{

    return(
        <ButtonWrap onClick={onclick} >
            <div className="content">
            Payments
            </div>
        </ButtonWrap>
    )
}

export const AssetButton: FC<AssetProps> = ({flag,currency,percent,onclick}) =>{
    return(
        <ButtonWrap main={true} onClick={onclick}>
            <div className="content">
                <Asset>
                    <div className="flag">
                        <img src={flag}/>
                    </div>
                    <div className="item currency">{currency}</div>
                    <div className="item percent">{percent}%</div>
                </Asset>
            </div>
        </ButtonWrap>
    )
}

