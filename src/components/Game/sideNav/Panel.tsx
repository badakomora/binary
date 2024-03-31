import styled from "@emotion/styled";
import React, { Children, FC, MouseEventHandler, useState } from "react";
import { useHandleClose } from "../../tabs/useClose";
import { CloseBtn, Header, HeaderBg,  PanelHeader } from "./SideNav.Elements";


interface panelProps{
    header : string
    onClick?: MouseEventHandler
    children: React.ReactNode
}
export const Panel: FC<panelProps> = ({header, onClick, children}) =>{
   
    const{close,closeTab} = useHandleClose()

const PanelWrapper = styled.div`
max-width: ${close? "20rem":"0rem"};
box-sizing: border-box;
height: 100%;
overflow: hidden;
position: relative;
z-index: 0;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
`

    return(
        <>
        {close &&
        <>
               <PanelHeader>
               <HeaderBg>
                   <div className="header">
                       <div className="header-inner">
                           <Header>
                               <span>{header}</span>
                           </Header>
                       </div>
                   </div>
                   <CloseBtn onClick={onClick}>x</CloseBtn>
               </HeaderBg>
           </PanelHeader>
          <PanelWrapper>
           {children}
          </PanelWrapper>
          </>
        }
     
        </>
    )
}