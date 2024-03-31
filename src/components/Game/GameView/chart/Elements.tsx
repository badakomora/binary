import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
position: relative;
height: 100%;
width: 100%;
background-color: var(--bg-alpha);
`

export const ChartMain = styled.div`
position: static;
`

export const ChartBottom = styled.div`
bottom: 1.5625rem;
justify-content: center;
left: 50%;
min-width: 10rem;
transform: translate(-50%);
display: flex;
flex-wrap: wrap;
position: absolute;

.bottom-content{
    display: flex;
    height: 2.5rem;
    justify-content: center;
    opacity: 0.6;
    pointer-events: auto;
    position: relative;
}

@media (min-width: 480px){
    bottom: 2.0625rem;
    z-index: 7;
}
`

export const GraphSettingsWrapper = styled.ul`
    bottom: 2.0625rem;
    flex-direction: column;
    left: 1rem;
    top: auto;
    box-sizing: border-box;
    color: var(--contrast-alpha);
    display: flex;
    position: absolute;
    z-index: 8;
`


export const St = {
  ChartContainer: styled.section`
    width: 100%;
    height: 500px;
    background-color: #0e0f12;
  `,
  HiddenH3: styled.h3`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0);
    clip-path: polygon(0, 0);
    overflow: hidden;
    text-indent: -9999px;
  `,
};

