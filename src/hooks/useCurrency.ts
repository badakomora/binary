import { useContext } from "react";
import { useRecoilState } from "recoil";
import { wsocketContext } from "../sockets/Api/Api";
import { symbolState } from "../recoil/Atom";

export const useCurrency = () =>{
    const[assetSymbol, setAssetSymbol] = useRecoilState(symbolState)    
    const wsocket = useContext(wsocketContext)
    const handleCurrency = (currencyS:string) =>{

        setAssetSymbol(currencyS);
    }

    return{
        handleCurrency,
        assetSymbol,
    }
}
