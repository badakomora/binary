import styled from "@emotion/styled";
import React, { FC } from "react";

const AssetContent = styled.div`
display: flex;
width: max-content;
`
const AssetTag = styled.div`
padding-left: 0.75rem;
padding-right: 0.75rem;
margin-right: 0.5rem;
align-content: center;
background-color: rgba(var(--base-alpha-rgb),.9);
border-radius: 2rem;
color: var(--contrast-alpha);
cursor: pointer;
display: flex;
font-size: .8125rem;
font-weight: 400;
line-height: 1.2308;
padding-bottom: 0.5rem;
padding-top: 0.5rem;
`

const AssetScroll: FC<{}> = () =>{
    const profitArr = ['Favourites','90%','80%','70%','currencies','metals','commodities','stocks','indices']
    return(
        <AssetContent>
            {profitArr.map(item =>(
                 <AssetTag>
                     <span>{item}</span>
                </AssetTag>
            ))}
        </AssetContent>
    )
}

export default AssetScroll