import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface props{
    selected?:boolean
}
export const Backdrop = styled.div`
opacity: 1;
transition: opacity .25s ease-out,z-index 0ms 0ms;
z-index: 99;
background-color: rgba(0,0,0,0.6);
contain: layout;
height: 100%;
left: 0;
position: fixed;
top: 0;
width: 100%;
`

export const ModalWrapper = styled.div`
max-width: 22.5rem;
background-color: var(--bg-gamma) ;
right: 0;
transform: translateX(100%);
transition: transform .25s ease-out;
border: none;
display: block;
// position: fixed;
z-index: 100;
contain: layout;
box-sizing: border-box;
color: var(--contrast-alpha);
font-family: var(--main-font);
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
left:53%;
width: 100%;
`

export const PanelContainer = styled.div`
width: 100%;
margin: 0 auto;
max-width: 26.25rem;
display: flex;
flex-direction: column;
height: 100%;
`

export const Content = styled.div`
background-color: var(--bg-gamma) ;
height: 100%;
width: 100%;
`
const modalanime = keyframes`
0% {
    opacity: 0;
}

100% {
    opacity: 1;
}`

export const ModalBody = styled.div`
box-sizing: border-box;
height: 100%;
width: 100%;
animation: ${modalanime} 255ms ease-in-out;
`
export const H = {
    Wrapper: styled.div`
    max-width: 26.25rem;
    flex-shrink: 0;
    // position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    `,
    lheader: styled.div`
    max-width: 22.5rem;
    // background-color: var(--bg-alpha);
    opacity: 1;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: opacity 225ms;
    width: 100%;
    z-index: -1;
    `,
    Content:styled.div`
    height: var(--sidebar-header-height);
    align-items: center;
    box-sizing: border-box;
    color: var(--contrast-alpha);
    display: flex;
    position: relative;

    .header__center {
        height: 100%;
        overflow: hidden;
        width: 100%;
    }

    .header__center-inner {
        display: flex;
        opacity: 1;
        height: 100%;
        width: 100%;
    }
    .header__actions {
        align-items: center;
        display: flex;
        flex-shrink: 0;
        margin-left: auto;
    }
    .fa{
        fill: currentcolor;
        display: inline-block;
        flex-shrink: 0;
        font-size: 1.5rem;
        height: 1em;
        width: 1em;
    }
    `,
    title:styled.h3`
    opacity: 1;
    font-size: 1.4875rem;
    line-height: 1.3333;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    `,
    addBtn: styled.button`
    margin-left: 0.75rem;
    margin-right: 0.5rem;
    color: var(--accent-alpha);
    border:none;
    outline:none;
    cursor:pointer;
    border:none;
    background:transparent;
    `, 
    closeBtn: styled.button`
    margin-right: -0.75rem;
    position: relative;
    border-radius: var(--corner-radius-beta);
    // height: 2.5rem;
    width: 2.5rem;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    outline: none;
    border:none;
    background:transparent;
    vertical-align: middle;
    align-items:centre;
    `

}

export const B = {
    container:styled.div`
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 0;
    `,
    scrollWrapper:styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    height: calc(100% - var(--sidebar-header-height));
    margin-top: var(--sidebar-header-height);
    position: absolute;
    width: 100%;
    `,
    contentWrapper:styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    position: relative;
    z-index: 1;
    `
}

export const A = {
    wrapper:styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 0.875rem;

    .panel_list{
        flex-grow: 1
    }
    `,
    innerContent:styled.div<props>`
    align-items: center;
    background-color: ${(p) => (p.selected? 'var(--base-gamma)':'transparent')};
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    min-height: 6.75rem;
    padding: 1rem;

    .flag{
        margin-right: 1rem;
        display: flex;
        height: 1.25rem;
        justify-content: center;
        width: 1.25rem;
    }
    .account_type{
        align-items: center;
        display: flex;
        font-size: 1rem;
        line-height: 1.5;
    }
    .account_name{
        color:${(p) => (p.selected? 'var(--warning-alpha)':'var(--contrast-beta)')}
        font-weight:${(p) => (p.selected? '600':'400')}
    }
    .account_balance{
        color:${(p) => (p.selected? 'var(--contrast-alpha)':'var(--contrast-beta)')}
        line-height: 1.5;
        padding: 0.25rem 0;

    }
    `, 
}

export const Section = {
    main:styled.section`
    padding: 0.75rem 1rem;
    `,
    item: styled.div`
    position: relative;
    margin: 1rem 0px;

    .fa{
        fill: currentcolor;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
    height: 1em;
    overflow: hidden;
   
    user-select: none;
    width: 1em;
}
    }
    `,
    button:styled.button<props>`
    outline: none;
    background-color: ${(p) =>(p.selected? 'var(--accent-alpha)':' var(--high-gamma)')};
    color: var(--accent-on-accent);
    // border:${(p) =>(p.selected? ' 0.06rem solid var(--high-gamma)':' 0.06rem solid var(--accent-alpha)')};
    border-radius: 0.5rem;
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    padding: 0.75rem 1rem;
    text-align: center;
    width: 100%;
    transition: color 200ms ease-in-out 0s, background-color 200ms ease-in-out 0s;
    cursor: pointer;
    border:none;
    `
}



