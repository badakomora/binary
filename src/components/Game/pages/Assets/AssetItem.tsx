import styled from "@emotion/styled";
import { faCircleInfo, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, MouseEventHandler, ReactElement } from "react";

interface assetItemProps{
    flag:any
    symbol:string
    profit:number
    onclick:MouseEventHandler
}

export const AssetItem: FC<assetItemProps> = props =>{

    const{flag,symbol,profit,onclick} = props

    return(
        <ItemContainer onClick={onclick} >
            <span className="item-flag">
                <span style={{
                    transition:"background-image 0.1s ease-in-out",
                    height: "1.5rem",
                    width: "1.5rem",
                    // background: "50%/contain no-repeat",
                    display: "inline-block",
                }}> <img src={flag}/></span>
            </span>
            <div style={{
                color: "var(--contrast-alpha)",
                flexGrow: 1,
                fontSize: "0.7125rem",
                fontWeight:"600",
                textAlign: "left",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            }}>
                {symbol}
            </div>
            <div style={{
                textAlign: "right",
                marginLeft: "0.4rem",
                flexShrink: 0,
                minWidth: "2.1875rem",
                fontWeight:"600",
            }}>
                <div style={{
                    background: "var(--accent-alpha)",
                    color: "var(--accent-on-accent)",
                    borderRadius: "var(--corner-radius-gamma)",
                    height: "1.05rem",
                    justifyContent: "center",
                    padding: "0 0.2rem",
                    fontSize:"0.8025rem"
                    
                }}>
                    {profit}%
                </div>
            </div>
            <Button>
                <FontAwesomeIcon icon={faCircleInfo} className="icon"/>
            </Button>
            <Button>
                <FontAwesomeIcon icon={faStar} className="icon"/>
            </Button>
            
        </ItemContainer>
    )
}


const ItemContainer = styled.div`
padding-left: 0.875rem;
border-bottom: 0.125rem solid var(--bg-alpha);
align-items: center;
background: transparent;
box-sizing: border-box;
cursor: pointer;
display: flex;
height: 3rem;
padding-top: 0.0625rem;
position: relative;
transition: background .3s ease-out,border .3s ease-out;

.active{
    border-left:0.125rem solid var(--accent-alpha);
}
.item-flag{
    margin-right: 0.75rem;
    display: block;
    min-width: 1.5rem;
}
`

const Button = styled.button`
margin-left: 0.7125rem;
color: var(--contrast-gamma);
align-items: center;
border: 0;
cursor: pointer;
display: inline-flex;
justify-content: center;
outline: 0;
position: relative;
background:none;
`