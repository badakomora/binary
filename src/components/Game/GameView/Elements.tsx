import styled from "@emotion/styled";

 export const Header = styled.header`
    direction: ltr;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
 `
  
 export const HeaderBody = styled.div`
    padding: 12px;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    justify-content: flex-end;
    flex-direction: row;
    gap: 12px;
    box-sizing: border-box;
    display: flex;
    height: fit-content;
 `

 export const UserProfile = styled.div`
    width: 7.4375rem;
    border-radius: var(--corner-radius-beta);
    flex-shrink: 0;
    height: 3rem;
    transition: background-color 0.2s linear;
    // width: 3rem;
    will-change: background-color;
    background-color: initial;
    color: var(--contrast-alpha);
    font-family: var(--main-font);
    font-size: 0.75rem;
    min-height: 2rem;
    min-width: 2rem;
    position: relative;

    .profile-content {
        border-radius: var(--corner-radius-beta);
        cursor: pointer;
        display: flex ;
        justify-content: space-between;
        height: 100%;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    @media (max-height: 375px) and (orientation: landscape)
    {
        height: 2.5rem;
        width: 5.5rem;
    }
 `

 export const Progress = styled.div`
 border: 0.0625rem solid var(--contrast-border-rgba);
 border-radius: var(--corner-radius-beta);
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 margin: 0 0.5rem;
 overflow: hidden;

 .progress-status{
    align-items: center;
    display: flex;
    font-size: .75rem;
    font-weight: 700;
    height: 100%;
    justify-content: center;
    padding: 0 0.625rem;
 }


`

export const StatusImg = styled.img`
    margin-right: 0.25rem;
    display: inline-block;
    height: auto;
    width: 1rem;
    border: none;
`

export const ProgressLine = styled.div`

    background-color: var(--high-alpha);
    border-radius: 0;
    flex-shrink: 0;
    min-height: 0.3125rem;
    align-items: center;
    // background-color: var(--bg-beta);
    display: flex;
    justify-content: center;
    position: relative;

    .progress-line{
    height: 100%;
    width: 100%;
    border-radius: inherit;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 0;

    }

    .line{
        transform: translateX(0%);
        transition: transform .3s linear;
        background-color: currentcolor;
        height: 100%;
        left: -100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 100%;
    }
    .line:before{
        background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.502) 50%,hsla(0,0%,100%,0));
        content: "";
        height: 100%;
        position: absolute;
        left:0;
        top: 0;
        transform: translateX(-100%);
        width: 100%;
        z-index: 2;
    }
`
 export const Avatar = styled.div`
    background-color: var(--bg-beta);
    flex-shrink: 0;
    height: 100%;
    min-width: 2.5rem;
    position: relative;
    width: 45%;
    z-index: 1;
    border-radius: var(--corner-radius-beta);
    color: var(--contrast-alpha);
    overflow: hidden;

    .avatar__content {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: 100%;
    }
    .avatar{
        fill: currentColor!important;
        box-sizing: border-box;
        // height: 100%!important;
        padding: 0.5rem;
        // width: 100%!important;
        font-size: 1.5rem;
    }
 `

 export const ProfileNotification = styled.div`
    right: -0.125rem;
    display: flex;
    position: absolute;
    top: -0.125rem;
    z-index: 3;
    align-items: center;
    display: flex;
    height: 1rem;
    justify-content: center;
    min-width: 1rem;

    .notification-content{
        background: var(--accent-alpha);
        color: var(--accent-on-accent);
        align-items: center;
        border-radius: 1rem;
        box-sizing: border-box;
        display: inline-flex;
        font-size: 0.75rem;
        font-weight: 700;
        height: 100%;
        justify-content: center;
        line-height: 1;
        min-width: 100%;
        padding: 0 0.25rem;
    }
 `



 export const LayoutBody = styled.div`
    background-color: var(--bg-alpha);
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;
 `

 export const PlatformContainer = styled.div`
    display: flex;
    flex: 1;
 `

 export const LayoutFooter = styled.div`
 
 `