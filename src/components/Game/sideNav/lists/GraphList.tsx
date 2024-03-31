import styled from "@emotion/styled";
import { FC, ReactElement, ReactHTMLElement } from "react";


const ListWrapper = styled.li`
opacity: 1;
margin-right: 0.125rem;
fill: currentColor;
align-items: center;
color: currentColor;
display: flex;
line-height: normal;
list-style: none;
`

const ContentWrap = styled.div`

align-content: center;
box-sizing: border-box;
display: flex;
justify-content: flex-start;
left: 1rem;
position: absolute;
// top: 0;
transition: color 0.2s ease-in-out,background-color 0.2s ease-in-out;
z-index: 999;
top: -3.6875rem;

first-child{
    top: -4.1875rem!important;
}

@media (max-height: 375px) and (min-width: 769px) and (orientation: landscape)
first-child {
    left: 0.5rem;
    // top: -3.6875rem;
}
`

interface graphListProps{
    content? : ReactElement
}

export const GraphList: FC<graphListProps> = ({content}) =>{
    return(
        <ListWrapper>
            <ContentWrap>
                 {content}
            </ContentWrap>
           
        </ListWrapper>
    )
}