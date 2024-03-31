import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, MouseEventHandler, ReactElement } from "react";

const Button = styled.button`
border-radius: var(--corner-radius-beta);
color: var(--contrast-beta);
display: flex;
font-size: 0.75rem;
height: 2.5rem;
margin-bottom: 0.25rem;
padding: 0 0.75rem;
align-items:centre;
justify-content:centre;
width: 100%;
position: relative;
cursor:pointer;
border:none;
outile:none;
background:none;

&.active{
    background-color: var(--base-gamma);
    color: var(--contrast-alpha);
    cursor: default;
}

&:hover{
    background-color: var(--base-beta);
    color: var(--contrast-alpha);
}

.icon{
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 1.125rem;
    width: 1.5rem;
}
`

interface chartBtnProps{
    onClick: MouseEventHandler
    title: string
    smiley?: ReactElement
    classname?:string
    main?:boolean
}

const ChartButton : FC<chartBtnProps> = ({onClick, title,smiley,classname,main}) =>{
    return(
        <Button onClick={onClick} className={classname}>
            <div style={{paddingTop:'0.85rem', display:'flex'}}>
                {
                    main? (
                        <>
                            <span className='icon'>
                              {smiley}
                            </span>
                            <span>
                              {title}
                            </span>
                        </>
                    ) :(
                        <span >
                         {title}
                        </span>
                    )
                }
            
            </div>
        </Button>
    )
}

export default ChartButton