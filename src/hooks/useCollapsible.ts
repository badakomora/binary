import { useState } from "react"

export const useCollapsible = () =>{
    const[isShow, setIsShow] = useState(false)

    const handleCollapsible = () => setIsShow(!isShow)
    return{
        isShow,
        handleCollapsible
    }
}


export const useCloseTab = () =>{
    const[isShow, setIsShow] = useState(true)

    const handleCollapsible = () => setIsShow(!isShow)
    return{
        isShow,
        handleCollapsible
    }
}