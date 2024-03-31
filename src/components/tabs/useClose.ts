import { useRecoilState, useRecoilValue } from "recoil";
import { closeState, selectedIndex } from "../../recoil/Atom";

export const  useHandleClose = () =>{
    const[close, setClose] = useRecoilState(closeState);
    const selected = useRecoilValue(selectedIndex)
    const closeTab = () => {
            setClose(!close)
    }
    return{
        closeTab,
        close,
    }
}