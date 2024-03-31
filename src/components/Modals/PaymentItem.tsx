import { FC } from "react";
import { Section } from "./ModalElements";

interface paymentProps{
    icon:string
    type:string
    active?:boolean
    onclick:() => void
}

export const PaymentItem: FC<paymentProps> = ({icon,type,active,onclick}) =>{

    return(
        <Section.item>
            <i 
                style={{
                    color: 'var(--accent-on-accent)',
                    position: 'absolute',
                    left: '1rem',
                    top:'0px',
                    bottom:'0px',
                    margin: 'auto',
                    
                }}
                className={icon}
            ></i>
            <Section.button onClick={onclick} selected={active}>
                <span>{type}</span>
            </Section.button>
        </Section.item>
    )
}