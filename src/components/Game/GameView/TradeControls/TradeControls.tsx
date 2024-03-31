import React, { FC, useEffect } from "react";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@mui/material";
import BuyButton from "../forms/BuyButton";
import FancyInput from "../forms/FancyInput";
import { AlphaWrapper, InputControls, ProfitWrapper } from "../forms/Form.Elements";
import { FormWrap } from "../platform/PlatformElements";
import { useTrade } from "./useAmount";
import SmallButton from "../chart/SmallButton";
import { useData } from "../../../../hooks/useData";


const TradeControls: FC = props =>{
    const{wsData, plain} = useData()
    const{addition,minus,amount, minutes,timeFormated,handleInput, plusMin,minusMin, handleAmount,Buy,trades} = useTrade();

    // console.log(trades)
   
    return(
        <FormWrap>
            <AlphaWrapper>
                <FancyInput 
                    value={amount} 
                    label={"Amount"} 
                    onChange={handleAmount}
                />

                <InputControls>
                    <SmallButton text={"-"} onClick={minus} unique={true}/>
                    <SmallButton text={"+"} onClick={addition} unique={true }/>
                </InputControls>
            </AlphaWrapper>

            <AlphaWrapper>
                <FancyInput 
                    value={timeFormated}
                    label={"Duration"} 
                    onChange={handleInput}
                />
                
                <InputControls>
                    <SmallButton text={"-"} onClick={minusMin} unique={true}/>
                    <SmallButton text={"+"} onClick={plusMin} unique={true }/>
                </InputControls>
            </AlphaWrapper>

            <AlphaWrapper>
                <BuyButton 
                    title={"UP"} 
                    icon={faArrowUp} 
                    background={true}
                    onclick={()=> Buy(true)}
                />
                <BuyButton 
                    title={"DOWN"} 
                    icon={faArrowDown} 
                    onclick={()=> Buy( false)}
                />
            </AlphaWrapper>
            <ProfitWrapper>
                <div style={{paddingTop: '1.125rem'}}>
                    <Container>
                        <p>
                            <span>
                                Profitability: 
                                <span className="percent">82%</span>
                            </span>
                        </p>
                        <Container>
                            <p>
                                <span className="percent">+ D16.40</span>
                            </p>
                        </Container>
                    </Container>
                </div>

            </ProfitWrapper>
        </FormWrap>
    )
}

export default TradeControls