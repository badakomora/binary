import styled from "@emotion/styled";

export const AlphaWrapper = styled.div`
padding-bottom: var(--space-16);
padding-top: 0;
position: relative;
`
export const ProfitWrapper = styled.div`
overflow: hidden;
height: 60px;
display: block;

p{
    color: var(--contrast-gamma);
    display: block;
    text-align: left;
    font-weight: 400;
    font-size: .8125rem;
    line-height: 1rem;
}
.percent{
    font-weight:700;
    font-size: .8125rem;
    line-height: 1rem;
}
`
export const Container = styled.div`
align-items: center;
justify-content: center;
flex-direction: column;
box-sizing: border-box;
display: flex;
height: fit-content;
min-height: 0;
min-width: 0;
`

export const InputWrapper = styled.div`
position: relative!important;

.content{
    display: flex;
    position: relative;
    flex-direction: column;
    font-family: var(--main-font);
    gap: 0.5rem;
    max-width: 100%;
}

.input-with-step__content {
    padding-right: 0!important;
    background-color: var(--base-gamma)!important;
    padding-top: 0!important;
    align-items: center;
    border-radius: var(--corner-radius-beta);
    border:0.5px solid rgba(112, 128, 140, 0.2);
    box-sizing: border-box;
    // color: var(--contrast-alpha);
    cursor: text;
    justify-content: space-between;
    width: 100%;
}

.input-wrapper{
    flex-grow: 1;
    position: relative;
}
`

export const Input= styled.input`
    background: none;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: inherit;
    display: block;
    font: inherit;
    font-size: 1rem;
    line-height: 1.5;
    padding: 1.5rem 1rem 0.5rem 1rem;
    outline:none;
    height:3.5rem;
`
export const Label = styled.label`
    color: var(--contrast-gamma);
    font-size: 0.75rem;
    // top: 1rem;
    left:1rem;
    text-align: left;
    line-height: 1;
    position: absolute;
    top: 15%;
`

export const InputControls= styled.div`
direction: ltr;
display: flex;
justify-content: space-between;
margin: var(--space-8) 0 0;
width: 100%;
`