import React, { FC } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "../../utils/types";
import Modal from "./CustomModal";
import { Deposit } from "./Deposit";
import { A, Section } from "./ModalElements";
import { PaymentItem } from "./PaymentItem";
import { useDeposit } from "./UseModal";

 export const PaymentsModal: FC<ModalProps> = ({isShow,hide}) =>{
    const{isDeposit, toggleDeposit} = useDeposit()
    const accounts = (
        <Modal header={"Payments"} hide={hide}>
            <Deposit 
                hide={ toggleDeposit} 
                isShow={isDeposit}
            />
            <A.wrapper>
                <Section.main>
                    <PaymentItem 
                        icon="fa fa-wallet"
                        type={"Deposit"} 
                        active={true} 
                        onclick={toggleDeposit}
                    />
                    <PaymentItem 
                        icon={""} 
                        type={"Withdraw"} 
                        active={false} 
                        onclick={() =>{}}
                    />
                      <PaymentItem 
                        icon='fa fa-arrow-right-arrow-left'
                        type={"Transfer"} 
                        active={false} 
                        onclick={() =>{}}
                    />
                      <PaymentItem 
                        icon='fa fa-clock-rotate-left' 
                        type={"Transactions"} 
                        active={false} 
                        onclick={() =>{}}
                    />

                </Section.main>
            </A.wrapper>
        </Modal>
    )

    return isShow? ReactDOM.createPortal(accounts,document.body):null
}

