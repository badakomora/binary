import styled from "@emotion/styled";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";


const ButtonWrapper = styled.button`
margin-right: 1.5rem;
color: var(--contrast-alpha);
font-weight: 700;
justify-content: flex-start;
min-height: 2.5rem;
position: relative;
align-items: center;
border: 0;
cursor: pointer;
display: inline-flex;
background:transparent;
 
.btn-content{
    display: flex;
    flex-direction: column;
    padding: 0.25rem 0.75rem;
}
.account{
    text-align: left;
    color: var(--warning-alpha);
    align-items: center;
    display: flex;
    font-size: 0.85rem;
    line-height: 1.3;
    text-transform: uppercase;
}
.balance{
    align-items: center;
    display: flex;
    font-size: 1rem;
    line-height: 1.5;
    position: relative;
}

.drop-down{
    right: -1.5rem;
    bottom: 0;
    display: flex;
    position: absolute;
}

i{
    fill: currentcolor;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.3rem;
    font-weight:600;
    height: 1em;
    overflow: hidden;
    user-select: none;
    width: 1em;
}
`
interface walletButtonProps{
    onclick:() => void
}
export const WalletButton: FC<walletButtonProps> = ({onclick}) =>{

    return(
        <ButtonWrapper>
            <div className="btn-content" onClick={onclick}>
                <div className="account">Demo Account</div>
                <div className="balance">
                    <span>10,000,000</span>
                    <div className="drop-down">
                        <i className="fa fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </ButtonWrapper>
    )
}