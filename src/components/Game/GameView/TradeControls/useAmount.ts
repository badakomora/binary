import { utcFormat } from "d3-time-format";
import { ChangeEventHandler, useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { useData } from "../../../../hooks/useData";
import { symbolState, Trade, tradeState } from "../../../../recoil/Atom"



export const useTrade = () =>{

    const [amount, setAmount] = useState<number>(10);
    const [timer, setTimer] = useState<Date>(new Date());
    const[minutes, setMinutes] = useState<number>(2)
    const[trades, setTrade] = useRecoilState(tradeState);
    const symbolS = useRecoilValue(symbolState)
    const{wsData, plain} = useData()


    const addition = () =>{
        if(amount < 3000){
            setAmount(amount + 1);
        }
    }

    const minus = () =>{
        if(amount > 10){
            setAmount(amount - 1)
        } 
    }


    // Trade Duration

    const convertMin = new Date(minutes*60000)
    const dateFormat = minutes > 59 ? utcFormat("%H h %M m") : utcFormat("%M min")
    const timeFormated = dateFormat(convertMin)


    const plusMin = () =>{
        setMinutes(minutes + 1)
    }

    const minusMin = () =>{
        if(minutes > 1){
            setMinutes(minutes - 1)
        }  
    }


    const handleAmount:ChangeEventHandler<HTMLInputElement> = (event) =>{
        const newValue = Number(event.target.value);
            setAmount(newValue);
    }

    const handleInput:ChangeEventHandler<HTMLInputElement> = (event) =>{
        const newValue = Number(event.target.value);
            setMinutes(newValue);
    }

//Buy OR Sell

const id = trades.length > 0 ? trades[trades.length-1].id+1:1

    const Buy = ( isBuy?:boolean) =>{
       
        const newTrade: Trade = {
            id ,
            symbol: symbolS,
            isActive: true,
            amount:amount,
            duration:timeFormated,
            openPrice:[...plain].sort((a,b)=>Number(b.ts) - Number(a.ts))[0]?.bid,
            closingPrice:null,
            openTime:Date.now(),
            closeAt:new Date(timer.getTime() + minutes * 60000).getTime(),
            tradeType:isBuy? 'buy': 'sell'
         }

        setTrade([...trades, newTrade])
 
    }

    useEffect(() => {
        trades.forEach((trade) => {
          const durationMs = minutes*60000; 

          const timer = setTimeout(() => {
            setTrade((prevTrades) =>
              prevTrades.map((prevTrade) =>{ 
                return prevTrade.id === trade.id ? { ...prevTrade, isActive: false , closingPrice:[...plain].sort((a,b)=>Number(b.ts) - Number(a.ts))[0]?.bid} : prevTrade
            }
              )
            
            );

          }, durationMs);
    
          return () => clearTimeout(timer);
        });

        // console.log(trades)

      }, [trades, plain]);


    return{
        handleAmount,
        addition,
        minus,
        amount,
        minutes,
        handleInput,
        plusMin,
        minusMin,
        timeFormated,
        Buy,
        trades,
    }
}