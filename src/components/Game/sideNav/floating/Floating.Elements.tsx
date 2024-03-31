import styled from "@emotion/styled";


export const Tooltip = styled.div`
width:100%;
left: 0;
position: absolute;
right: 0;
top: 0;
z-index: 13;
`

export const NotificationContainer = styled.div`
.tooltips-container .tooltips-container-portal-only {
    z-index: 10005;
    left: 0;
    position: absolute;
    top: 0;
}

//  {
//     left: 0;
//     position: absolute;
//     top: 0;
//     width: 100%;
//     z-index: 1005;
// }

@media (max-width: 1250px)
.tooltips-container-portal-only {
    z-index: 1001;
}
`

export const BottomSheet = styled.div`
transform: translateY(100%);
opacity: 0;
touch-action: auto;
pointer-events: none;
background: #000;
height: 100%;
position: fixed;
top: 0;
user-select: none;
width: 100%;
will-change: transform,opacity;
`

export const BottomItem = styled.div`
display: none;
transform: translateY(309px);
height: 409px;
width: 768px;
left: 49.5px;
top: 303px;
background: var(--bg-alpha);
border-radius: var(--corner-radius-alpha) var(--corner-radius-alpha) 0 0;
bottom: -6.25rem;
height: 100%;
left: 0;
position: fixed;
touch-action: none;
width: 100%;
will-change: transform;
`

export const InnerItem1 = styled.div`
background-color: var(--high-alpha);
border-radius: 0.125rem;
height: 0.25rem;
left: 50%;
pointer-events: none;
position: absolute;
top: 0.25rem;
transform: translateX(-50%);
width: 2.25rem;
z-index: 2;
`

export const InnerItem2 = styled.div`
height: 100%;
position: relative;
width: 100%;
`
export const Item = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const ItemHeader = styled.header`
background-color: initial!important;
margin: 1rem 1rem 0!important;
overflow: visible!important;
width: auto!important;
background-color: var(--bg-beta);
overflow: hidden;
position: relative;
width: 100%;
z-index: 1;
`
export const ItemHeaderCont = styled.div`
width: 50%;
transform: translateX(100%);
bottom: 0;
left: 0;
height: 0.125rem;
pointer-events: none;
position: absolute;
background-color: var(--accent-alpha);
border-radius: 0.25rem;
`
export const ItemContent = styled.div`
overflow-x: hidden;
`
