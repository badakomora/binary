import styled from "@emotion/styled";
import React, { FC, ReactHTMLElement } from "react";
import FocusLock from "react-focus-lock";

interface props{
    main?: boolean
}

const Backdrop = styled.div`
position: fixed;
width: 100%;
height: 100vh;
z-index: 1;
top: 0;
left: 0;
`
const Wrapper = styled.div<props>`
top:${(props) => props.main? '63%':'53.05%'};
left:${(props) => props.main? '27.55%':'49.1%'};
position: absolute;
z-index: 101;
margin: 0px;
transform: translate3d(44px, 0px, 0px);
`
const Content = styled.div<props>`
border-radius: var(--corner-radius-alpha);
box-sizing: border-box;
padding: 0.75rem;
background-color: var(--base-alpha);
width:  ${(props) => props.main? '13.3125rem':'10.05rem'};
`
interface popupProps{
   children:React.ReactNode
   hide: () => void;
   pop?: any
}
const Popup: FC<popupProps> = ({children,hide, pop}) =>{

    return(
        <>
        <Backdrop onClick={hide}/>
        <FocusLock>
            <Wrapper main={pop? false:true} >
                <div style={{outline:'none',position:'relative'}}>
                    <Content main={pop? false:true}>
                        {children}
                    </Content>
                </div>
            </Wrapper>

        </FocusLock>
       
        </>
 
    )
}

export default Popup