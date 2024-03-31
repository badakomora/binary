import styled from "@emotion/styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Children, FC } from "react";
import { useCloseTab } from "../../../../hooks/useCollapsible";
import { Wrapper, BtnWrapper, IndicatorWrap } from "./Elements";

interface props{
    onclick:() => void
    label:string
    icon: IconProp
    children?: React.ReactNode

}

interface indicatorProps{
    onclick?:() => void
    name:string
    stat?:number

}

export const Instrument: FC<props> = ({onclick,label,icon, children}) =>{
    const{isShow,handleCollapsible} = useCloseTab()
    return(
        <Wrapper>
            <BtnWrapper onClick={onclick}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.125rem',
                    textAlign: 'left',
                }}>
                    <span style={{
                        fontSize: '1rem',
                        lineHeight: '1.25rem',
                    }}>
                        <div style={{
                            alignItems: 'center',
                            display: 'flex',
                        }}>
                            <span style={{paddingRight: '0.75rem'}}> <FontAwesomeIcon icon={icon}/></span>
                            <span>{label}</span>

                        </div>
                    </span>
                </div>
                <div>
                    <i className={isShow? "fa fa-angle-down":"fa fa-angle-up" }></i>
                </div>
                
            </BtnWrapper>
        
              {children}
           
        </Wrapper>
    )
}

export const Indicator: FC<indicatorProps> = ({onclick,name,stat}) =>{
    return(
    <IndicatorWrap onClick={onclick}>
        <div className="item">
            <span>{name}</span>&nbsp;
            <span className="count"> {stat}</span>
        </div>
    </IndicatorWrap>
    )
}