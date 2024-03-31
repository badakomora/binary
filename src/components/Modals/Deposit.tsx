import styled from "@emotion/styled";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "../../utils/types";
import Modal from "./CustomModal";

interface depositProps{

}

export const Deposit: FC<ModalProps> = ({isShow,hide}) =>{

    const depositModal = (
       <Modal hide={hide} header='Deposit' >
            <Container1>
                <div className="item">
                    <p> <span>USD Account #1413490906</span></p>
                    <hr/>
                </div>
                <div className="item amount">
                    <Dcontent>
                        <Button>
                            <InnerBtn>
                                <div className="item_container">
                                    <InnerBtn style={{gap:'8px'}}>
                                        <div style={{
                                            textAlign:'left',
                                            marginRight:'auto',
                                            display: 'inline-flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            minHeight: '1.5rem'
                                        }}>
                                            <span style={{
                                                color: 'var(--contrast-beta)',
                                                padding:' 0.125rem 0',
                                            }}>Deposit Amount</span>

                                            <span style={{fontWeight:700, fontSize:'1.2rem'}}>USD 30</span>
                                        </div>
                                    </InnerBtn>
                                    <InnerBtn style={{gap:'4px',textAlign:'right'}}>
                                        <i className=" fa fa-angle-right" style={{fontSize:'1.5rem'}}></i>
                                    </InnerBtn>
                                </div>
                            </InnerBtn>
                        </Button>
                    </Dcontent>
                </div>
            </Container1>
            <Container2>

            </Container2>
    </Modal>
    );

    return isShow? ReactDOM.createPortal(depositModal, document.body): null
}

const Container1 = styled.div`
flex: 1 0 auto;
padding-left: 1rem;
padding-right: 1rem;

.item{
    margin-top:0.5rem;
}
hr{
    border: none;
    background-color: var(--high-alpha);
    height: 0.06rem;
    margin: 0.5rem 0rem 0rem;
}
p{
    color: var(--contrast-beta);
    display: block;
    text-align: left;
    font-weight: 400;
    font-size: .8125rem;
    line-height: 1.25rem;
}
.amount{
    margin-top:1rem;
}
`
const Dcontent = styled.div`
flex-direction: column;
gap: 1px;
box-sizing: border-box;
display: flex;
height: fit-content;
`
const Button = styled.button`
outline: none;
color: var(--contrast-alpha);
background-color: var(--base-alpha);
box-shadow: inset 0 0 0 0.0625rem var(--contrast-border-rgba);
width: 100%;
align-items: center;
appearance: none;
border: none;
border-radius: var(--corner-radius-beta);
box-sizing: border-box;
cursor: pointer;
display: inline-flex;
position: relative;
text-align: center;
user-select: none;
`
const InnerBtn = styled.div`
padding: 6px 8px;
width: 100%;
max-height: 100%;
max-width: 100%;
align-items: center;
justify-content: start;
flex-direction: row;

.item_container{
    gap: 0.75rem;
    height: 100%;
    justify-content: space-between;
    opacity: 1;
    transition: opacity .1s ease-in-out;
    align-items: center;
    display: flex;
    min-width: 100%;
}
`


const Container2 = styled.div`
margin-top: 1rem;
padding: 1rem 0rem 2rem;
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
flex-shrink: 0;
max-width: 60%;
margin-left: auto;
margin-right: auto;
`
