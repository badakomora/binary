import styled from "@emotion/styled";
import React from "react";

export const PageContainer = styled.div`
position: relative;
z-index: 1;
display: flex;
background: var(--bg-alpha);
color: var(--contrast-alpha);
min-height: 100%;



@media (min-width: 960px)
{
    min-width: 58.125rem;
}

`

export const AppWrap = styled.div`
display: flex;
flex-basis: 100%;
flex-grow: 1;
flex-shrink: 0;
min-height: 100%;
position: relative;
width: 100%;
z-index: 1;
`

