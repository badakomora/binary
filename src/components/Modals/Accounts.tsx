import React, { FC } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "../../utils/types";
import { AccountItem } from "./AccountItem";
import Modal from "./CustomModal";
import { A } from "./ModalElements";

const AccountsModal: FC<ModalProps> = ({isShow,hide}) =>{
    
    const accounts = (
        <Modal header={"Accounts"} hide={hide}>
            <A.wrapper>
                <div className="panel_list">
                    <div style={{overflowY:"auto"}}>
                        <AccountItem 
                            name={"Demo Account"} 
                            balance={10234.45}
                            classname={true}
                        />
                        <AccountItem 
                            
                            name={"USD Account"} 
                            balance={100.55}
                        />
                    </div>
                </div>
            </A.wrapper>
        </Modal>
    )

    return isShow? ReactDOM.createPortal(accounts,document.body):null
}

export default AccountsModal