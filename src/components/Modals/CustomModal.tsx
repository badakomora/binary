import { faCross, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { B, Backdrop, Content, H, ModalWrapper, PanelContainer } from "./ModalElements";

interface modalProps{
    header:string
    hide ?: () => void
    children:React.ReactNode
}

const Modal: FC<modalProps> = ({header,hide,children}) =>{
    return(
        <>
        <Backdrop onClick={hide}/>
        <ModalWrapper>
            <PanelContainer>
                <Content>
                    <H.Wrapper>
                        <H.lheader></H.lheader>
                        <H.Content>
                            <div className="header__center">
                                <div className="header__center-inner">
                                    <H.title> 
                                        <span>{header}</span>
                                    </H.title>
                                    <div className="header__actions">
                                        <H.addBtn>
                                            {/* <FontAwesomeIcon icon={faPlus} className="fa"/> */}
                                        </H.addBtn>
                                    </div>
                                </div>
                            </div>
                            <H.closeBtn onClick={hide}>
                                <FontAwesomeIcon icon={faXmark} className="fa"/>
                            </H.closeBtn>
                        </H.Content>
                       
                    </H.Wrapper>
                    <B.container>
                        <B.scrollWrapper>
                            <B.contentWrapper>
                                {children}
                            </B.contentWrapper>
                        </B.scrollWrapper>
                    </B.container>
                </Content>
            </PanelContainer>
        </ModalWrapper>
        </>
    
    )
}

export default Modal