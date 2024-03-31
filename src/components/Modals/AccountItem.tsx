import { FC } from "react";
import { A } from "./ModalElements";

interface accountItemProps{
    name:string
    balance:number
    classname?:boolean
}
export const AccountItem: FC<accountItemProps> = ({name, balance,classname}) =>{
    return(
        <A.innerContent selected={classname} >
            <div className="flag">
                <i className="fa fa-globe"> </i>
            </div>
            <div style={{flexGrow:1}}>
                <div className="account_type">
                    <span className="account_name">{name}</span>
                </div>
                <div className="account_balance">
                    <span>Đ{balance}</span>
                </div>
            </div>
        </A.innerContent>
    )
}