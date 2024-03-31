import styled from "@emotion/styled";

export const Layout = styled.div`
direction: ltr;
display: flex;
flex: 1;
flex-direction: row;
width:100%;
`

export const LayoutFloating = styled.div`
left: 0;
position: absolute;
right: 0;
top: 0;
width: 100%;
z-index: 13;
`

export const AsideContainer = styled.div`
display: flex;
flex-direction: row;
flex-shrink: 0;
width:25%
`

export const LayoutMain = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
width:75%;
`

export const LayoutOverlay = styled.div`
z-index: 10;
`