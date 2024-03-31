import styled from "@emotion/styled";


export const LayoutAside = styled.div`
flex-shrink: 0;
height: 100%;
position: relative;
width: 20%;
z-index: 10;
`
export const LayoutAsideInner = styled.div`
bottom: 0;
display: flex;
height: 100%;
left: 0;
position: relative;
right: auto;
top: 0;
width: auto;

@media (min-width: 768px)
    height: 100%;
    position: relative;
`

export const SideBarWrapper = styled.div`
background: var(--bg-gamma);
display: flex;
flex-direction: column;
height: 100%;
justify-content: space-between;
min-width: 2.5rem;
position: relative;
width: 100%;
z-index: 2;

.sidebar-menu-vertical__body {
    flex: 1;
}

@media (min-width: 768px)
.sidebar-menu-vertical__footer {
    display: block;
}

`

export const AsidePanel = styled.div`
// max-width: 20rem;
background-color: var(--bg-gamma);
--layout-panel-background-color: var(--bg-gamma);
z-index: 4;
color: var(--contrast-alpha);
font-family: var(--main-font);
position:relative;
transition: max-width 0.25s ease-out;
`

export const PanelContainer = styled.div`
// width: 20rem;
display: flex;
// display:none;
flex-direction: column;
height: 100%;
width:100%;
`

export const PanelHeader = styled.div`
flex-shrink: 0;
top: 0;
width: 100%;
z-index: 1;
box-sizing: border-box;
padding: 0rem 1rem;
position: relative;
margin-top:0.875rem;
`

export const HeaderBg = styled.div`
align-items: center;
box-sizing: border-box;
color: var(--contrast-alpha);
display: flex;
position: relative;
height: var(--sidebar-header-height);
justify-content:space-between;
`
export const HeaderContent = styled.div`
height: 3.5rem;
color: #fff;
align-items: center;
margin-top: 0.875rem;

`
export const Header = styled.h3`
    // opacity: 0;
    transition: opacity 225ms ease-out;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.6875rem;
    line-height: 1.3333;
    font-weight: 700;
}

`
export const CloseBtn = styled.div`
margin-right: -0.75rem;
position: relative;
border-radius: var(--corner-radius-beta);
height: 2.5rem;
width: 2.5rem;
font-size:1.5rem;
align-items: center;
appearance: none;
color: inherit;
cursor: pointer;
display: inline-flex;
justify-content: center;
`

// export const PanelWrapper = styled.div`
// max-width: 20rem;
// box-sizing: border-box;
// height: 100%;
// overflow: hidden;
// position: relative;
// z-index: 0;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
// `