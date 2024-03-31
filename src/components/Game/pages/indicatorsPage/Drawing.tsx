import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { useCloseTab } from "../../../../hooks/useCollapsible";
import { Indicator, Instrument } from "./Instrument";


export const Drawing:FC = () =>{

    const{isShow,handleCollapsible} = useCloseTab()

    const DrawArr = ['Horizontal line','Vertical line', 'Trend line','Ray','Fibonacci levels', 'Fibonacci fan']

    return(
        <Instrument onclick={ handleCollapsible} label={"Drawing"} icon={faPenFancy}>
             {!isShow && <div style={{
                position: 'relative',
                transition: 'height .3s ease-in-out',
            }}>
                <div>
                {DrawArr.map(item =>(
                    <Indicator name={item}/>
                ))}
                  
              
                </div>
            </div>
            }
        </Instrument>
    )
}