import React, { useState } from "react";

export const useModal = () =>{
    const[isShow, setIsShow] = useState(false)

    const toggleMini = () => setIsShow(!isShow);
    return{
        isShow,
        toggleMini,
    }
}

export const usePayments = () =>{
    const[isPayments, setIsPayments] = useState(false)

    const togglePayments = () => setIsPayments(!isPayments);
    return{
        isPayments,
        togglePayments,
    }
}

export const useProfile = () =>{
    const[isProfile, setIsProfile] = useState(false)

    const toggleProfile = () => setIsProfile(!isProfile);
    return{
        isProfile,
        toggleProfile,
    }
}

export const useDeposit = () =>{
    const[isDeposit, setIsDeposit] = useState(false)

    const toggleDeposit = () => setIsDeposit(!isDeposit);

    return{
        isDeposit, toggleDeposit
    }
}