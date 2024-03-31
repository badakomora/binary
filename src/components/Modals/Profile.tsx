import React, { FC } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "../../utils/types";
import Modal from "./CustomModal";

export const ProfileModal: FC<ModalProps> = ({isShow,hide}) =>{
    
    const accounts = (
        <Modal header={"Profile"} hide={hide}>
            
        </Modal>
    )

    return isShow? ReactDOM.createPortal(accounts,document.body):null
}

