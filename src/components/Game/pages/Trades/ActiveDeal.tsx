
import styled from "@emotion/styled";
import React, { FC } from "react";

interface activeDealProps{
    value:number
    label:string
    percent:number
    profit:number
}

const S = {
    Container:styled.div`
    border-top:0.0625rem solid var(--high-gamma);
    padding: 1rem;
    `,

    ItemWrapper:styled.div`
    align-items: flex-start;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;

    .deal-value .deal-label{
        color: var(--contrast-gamma);
        direction: ltr;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1.3;
    }

    .active{
        color: var(--contrast-alpha);
    }

`,
}

export const ActiveDeal: FC<activeDealProps> = ({value,label,percent,profit}) =>{
    return(
        <S.Container>
            <div style={{display:"flex"}}>
                <S.ItemWrapper>
                    <div className="deal-value">
                        <span>Đ {value}</span>
                    </div>
                    <div className="deal-label">{label}</div>
                </S.ItemWrapper>

                <S.ItemWrapper style={{alignItems:"flex-end"}}>  
                    <div className="deal-value active">
                            <span> +{percent}%</span>
                        </div>
                    <div className="deal-label active">+Đ{profit}</div>
                </S.ItemWrapper>
                
            </div>
        </S.Container>
    )
}