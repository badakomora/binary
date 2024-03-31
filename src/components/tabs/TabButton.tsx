import styled from "@emotion/styled";
import React, { FC, MouseEventHandler } from "react";


const Button = styled.button`
text-align: left!important;
align-items: center;
cursor: pointer;
display: inline-flex;
user-select: none;
vertical-align: middle;
color: #fff;
flex-grow: 1!important;
font-size: 0.85rem!important;
font-weight: 600!important;
height: 2.5rem!important;
justify-content: start!important;
outline: none!important;
padding: 0!important;
position: relative!important;
text-transform: capitalize!important;
width: calc(100%/var(--tabs-length))!important;
background:none;
border:none;
border-bottom:2px solid var(--base-alpha);
outline:none;

&.active{
    color:var(--accent-alpha);
    border-bottom:2px solid var(--accent-alpha);

}
`

interface tabBtnProps{
    onClick: MouseEventHandler
    title: string
    classname:string
}

const TabButton : FC<tabBtnProps> = ({onClick, title, classname}) =>{
    return(
        <Button onClick={onClick} className={classname}>
            <span
                style={{
                    lineHeight: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}
            >
                {title}
            </span>
        </Button>
    )
}

export default TabButton