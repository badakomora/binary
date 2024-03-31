import styled from "@emotion/styled";

export const PlatformMain = styled.div`
flex-direction: column;
// width: 100%;
width:fit-content;
`

export const TradingFrame = styled.div`
display: flex;
flex: 1;

.trade-frame{
    grid-template-columns: 1fr;
    display: grid;
    width: 100%;
}

.trade-frame-section {
    padding: 0;
    display: grid;
    grid-template-columns: auto 11rem;
    grid-template-rows: 1fr auto;
    width: 100%;
`

export const TradeFrameContent = styled.div`
max-width:970px;
display: flex;
flex-basis: auto;
flex-direction: column;
flex-grow: 1;
flex-shrink: 1;
height: 100%;
position: relative;
`

export const GraphContent = styled.div`
display: flex;
flex-basis: 0;
flex-grow: 1;
flex-shrink: 0;
position: relative;
z-index: 1;
`

export const GraphSettings = styled.ul`
fill: var(--contrast-alpha);
box-sizing: border-box;
color: var(--contrast-alpha);
display: flex;
flex-direction: row;
position: absolute;
top: 0.4375rem;
transform: translateX(0);
transition: transform .3s ease-in-out;
z-index: 8;
`

export const ChartWrapper = styled.div`
box-sizing: border-box;
height: 100%;
position: relative;
width: 100%;
`

export const TradeFrameForm = styled.div`
padding-top: 0;
background-color: var(--bg-alpha);
box-sizing: border-box;
padding: var(--space-8) var(--layout-spacer) var(--layout-spacer);
width: auto;
`

export const TradingPanel = styled.div`
display: flex;
flex-direction: column;
z-index: 1;
`

export const Asset = styled.div`
align-content: center;
box-sizing: border-box;
display: flex;
justify-content: flex-start;
left: 1rem;
position: absolute;
top: 0;
transition: color .2s ease-in-out,background-color .2s ease-in-out;
z-index: 999;

&:first-child{
    top: -4.1875rem!important;
}
`
export const MarketWrap = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
margin-bottom: var(--space-16);

.name{
    max-width: calc(100% - 1.5rem);
}
.fixed{
    color: var(--contrast-gamma);
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.33;
}
.icon{
    line-height: 0;
    min-width: 1.5rem;
}
`

export const FormWrap = styled.div`
position: relative;
`

