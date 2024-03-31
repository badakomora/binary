import styled from "@emotion/styled";
import React, { FC } from "react";

interface dataFieldProps{
    text:string
    value:string
    topColor?:boolean
}

export const DataField: FC<dataFieldProps> = ({text,value,topColor}) =>{
    return(
        <FieldWrapper>
            <span className="data-value-field__line"> </span>
            <span className="text-data text">
                <span className="text-wrapper_data text-wrapper_type-deal text-wrapper">{text}</span>
            </span>
            <span className="text-value_highlighted text"> 
                <span 
                className="text-wrapper_value text-wrapper_type-deal text-wrapper" color={topColor? "color: var(--contrast-alpha)":"var(--contrast-gamma)"}>{value}</span>
             </span>
        </FieldWrapper>
    )
}

const FieldWrapper = styled.div`
align-items: flex-start;
display: flex;
justify-content: space-between;
line-height: 1.3;
padding: 0.0625rem 0;
position: relative;
font-size: .875rem;

.data-value-field__line {
    border-bottom: 0.0625rem dashed;
    bottom: auto;
    color: var(--high-alpha);
    height: 0.0625rem;
    left: 0.3125rem;
    position: absolute;
    right: 0.3125rem;
    top: 1em;
}
.text-data {
    color: var(--contrast-gamma);
    transition: color .3s ease-in-out;
}
.text {
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
}
.text-value_highlighted {
    // color: var(--contrast-alpha);
    font-weight: 700;
}

.text-wrapper_data {
    padding-right: 0.3125rem;
}
.text-wrapper_value{
    float:right;
    padding-left: 0.3125rem;
}
.text-wrapper_type-deal {
    background-color: var(--bg-alpha);
}
.text-wrapper {
    transition: background .3s ease-in-out;
    align-items: center;
    display: inline-flex;
    position: relative;
}
`