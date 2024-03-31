import React, { FC, ReactEventHandler } from "react";
import SmallButton from "../chart/SmallButton";
import { Input, InputControls, InputWrapper, Label } from "./Form.Elements";

interface InputProps{
    value:number|string
    label: string
    placeholder ?:string
    onChange:ReactEventHandler
}


const FancyInput: FC<InputProps> = props =>{
    const{value,label,placeholder,onChange} = props;
    return(
       <div>
            <InputWrapper>
                <div className="content">
                    <div className="input-with-step__content">
                        <div className="input-wrapper">
                            <Input
                                type="text"
                                placeholder={placeholder}
                                onChange={onChange}
                                value={value}
                            />
                            <Label>{label}</Label>
                        </div>
                    </div>
                </div>
            </InputWrapper>
            {/* <InputControls>
                <SmallButton text={"-"} onClick={() =>{}} unique={true}/>
                <SmallButton text={"+"} onClick={() =>{}} unique={true }/>
            </InputControls> */}
       </div>
    )
}

export default FancyInput