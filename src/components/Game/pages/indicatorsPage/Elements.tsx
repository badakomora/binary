import styled from "@emotion/styled";

export const IndicatorWrap = styled.div`
align-items: center;
cursor: pointer;
display: flex;
height: 3rem;
padding: 0 1rem;

.item{
    color: var(--contrast-alpha);
    flex: 1;
    font-size: 0.9rem;
}
.count{
    color: var(--contrast-beta);
}
&:hover{
    background: var(--bg-alpha);
}
`

export const Wrapper = styled.div`
background: transparent;
border-bottom: 0.0625rem solid var(--high-alpha);
border-radius: 0;
position: relative;
width: 100%;
`
export const BtnWrapper = styled.button`
align-items: center;
background: transparent;
border: none;
outline: none;
color: var(--contrast-alpha);
cursor: pointer;
display: flex;
justify-content: space-between;
margin: 0;
padding: 0.75rem 1rem;
position: relative;
transition: background .2s ease-in-out;
width: 100%;

&:hover{
    background: var(--base-beta);
}
`