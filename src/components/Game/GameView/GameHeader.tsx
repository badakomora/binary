import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import AccountsModal from "../../Modals/Accounts";
import { PaymentsModal } from "../../Modals/Payments";
import { ProfileModal } from "../../Modals/Profile";
import { useModal, usePayments, useProfile } from "../../Modals/UseModal";
import { Payments } from "../Buttons";
import { WalletButton } from "../Wallet/Button";
import { Header, HeaderBody, UserProfile, Progress, StatusImg, ProgressLine, Avatar, ProfileNotification } from "./Elements";


const GameHeader: FC = () =>{

    const{isShow,toggleMini}= useModal()
    const{isPayments,togglePayments}= usePayments()
    const{isProfile,toggleProfile}= useProfile()
    
    return(
        <Header>
            
            <AccountsModal 
                hide={toggleMini} 
                isShow={isShow}
            />
            <PaymentsModal 
                hide={ togglePayments}
                isShow={isPayments}
            />

            <ProfileModal
                hide={ toggleProfile}
                isShow={isProfile}
            />


                <HeaderBody>
                    <WalletButton onclick={toggleMini}/>
                    <Payments onclick={togglePayments}/>
                    <UserProfile>
                        <div className="profile-content" >
                            <Progress>
                                <div className="progress-status">
                                    <StatusImg src="https://cdn2.olymptrade.com/v5/public/images/starter.34ba090e.svg"/>
                                    <span>1</span>
                                </div>
                                <ProgressLine>
                                    <div className="progress-line">
                                        <div >
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </ProgressLine>
                                
                            </Progress>
                            <Avatar onClick={toggleProfile}>
                                <div className="avatar_content">
                                    <FontAwesomeIcon icon={faUser} className="avatar"/>
                                </div>
                            </Avatar>
                        </div>

                        <ProfileNotification>
                            <span className="notification-content">35</span>
                        </ProfileNotification>
                    </UserProfile>
                </HeaderBody>
            </Header>
    )
}

export default GameHeader