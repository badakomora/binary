import styled from "@emotion/styled";
import React, { FC, MouseEventHandler } from "react";

const ButtonWrapper = styled.button`
    min-height: 3.25rem!important;
    -webkit-font-smoothing: antialiased;
    color: var(--contrast-gamma);
    display: inline-block;
    font-family: inherit;
    font-size: 1rem;
    height: 100%;
    line-height: 1.125;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    background-color: initial;
    border: 0;
    border-radius: 0;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    position: relative;
    text-decoration: none;
    outline: none;
    text-transform: none;
    font-weight: 700;
`
const Container = styled.div`
align-items: center;
display: flex;
position: relative;
text-align: center;
transform: translateY(-7px) scale(0.8);
z-index: 1;

.item{
    display: block;
    width: 100%;
}
.span1{
    opacity: 1;
    font-weight: 400;
}
.span2{
    opacity: 0;
    font-weight: 700;
    position: absolute;
    color: var(--accent-alpha);
    left: 0;
    top: 0;
}
`
const Span = styled.span`
transform: translateY(-4px) scale(1);
opacity: 1;
color: var(--contrast-alpha);
display: block;
font-size: 0.75rem;
width: 100%;
z-index: 1;
position: absolute;

.duration-value{
    display:inline-block;
}
`

interface Props{
    duration : string
    durationValue : number
    onClick : MouseEventHandler
}

export const TabButton: FC<Props> = props =>{
    const{duration,durationValue, onClick} = props;
    return(
        <ButtonWrapper>
            <Container>
                <span className="item span1">
                    <span data-trans="duration">{duration}</span>
                </span>
                <span className="item span2">
                <span data-trans="duration">{duration}</span>
                </span>
            </Container>
            <Span>
                <div className="duration-value">{durationValue}&nbsp;min</div>
            </Span>
        </ButtonWrapper>
    )
}