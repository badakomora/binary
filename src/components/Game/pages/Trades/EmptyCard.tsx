import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { EmptyWrapper } from "./TradesElements";

interface emptyProps{
    title:string
}
const EmptyCard: FC<emptyProps> = ({title}) =>{

    return(
        <EmptyWrapper>
            <FontAwesomeIcon icon={faArrowsRotate} className='icon'/> 
            <span className="title">{title}</span>
        </EmptyWrapper>
    )
}

export default EmptyCard