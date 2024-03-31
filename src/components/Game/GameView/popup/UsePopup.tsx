import React, { useState } from "react";

export const usePopup = () =>{
    const[openPopup, setOpenPopup] = useState(false);
    const togglePopup = () => setOpenPopup(!openPopup);
    return{
        openPopup,
        togglePopup,
    }
}

export const useTimestamp = () =>{
    const[showTime, setShowTime] = useState(false);
    const toggleTimestamp = () => setShowTime(!showTime);
    return{showTime, toggleTimestamp}
}

