import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
padding: 16px 0px;
width: 100%;
align-items: center;
flex-direction: column;
box-sizing: border-box;
display: flex;
height: fit-content;
min-height: 0;
min-width: 0;

 p{
    text-rendering: geometricprecision;
    color: inherit;
    font: var(--main-font);
    font-style: normal;
    margin: 0;
    padding: 0;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    font-weight: 700;
}
.online{
    color: var(--contrast-gamma);
    display: block;
    font-weight: 400 !important;
}
`