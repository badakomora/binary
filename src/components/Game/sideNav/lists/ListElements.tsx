import styled from "@emotion/styled";

export const UnorderedList = styled.ul`
display: flex;
flex-direction: column;
height: 100%;
justify-content: space-around;
width: 100%;
margin-inline-start: 0px;
margin-inline-end: 0px;


@media (min-width: 768px) and (min-height: 480px)
 {
    justify-content: flex-start;
}
`

export const List = styled.li`
padding:0.85rem;
flex-grow: 1;
max-height: 4.5rem;
min-height: 2.5rem;
position: relative;
line-height: normal;
list-style: none;
display: list-item;
text-align: -webkit-match-parent;

`
export const Btn = styled.button`
color: var(--contrast-gamma);
align-items: center;
box-sizing: border-box;
cursor: pointer;
display: flex;
flex-direction: column;
font-size: 0;
height: 100%;
justify-content: center;
padding: 0.25rem;
text-align: center;
width: 100%;
background: none;
border: 0;
outline: none;
line-height: 1.15;
margin: 0;
-webkit-appearance: button;

&:hover { 
    color: var(--contrast-alpha) !important;
}

.title {
    padding-top: 0.15rem;
    font-size: 0.625rem;
    line-height: 1.8;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
}


@media (min-width: 1280px) and (min-height: 480px)
.title {
    display: block;
    font-size: 0.75rem;
    line-height: 1.333;
}
@media (min-width: 480px)
.title {
    padding-top: 0.25rem;
}

`
export const SideSpan = styled.span`
display: inline-block;
font-size: 0;
line-height: 0;
position: relative;

.icon{
    fill: currentcolor;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
    height: 1em;
    overflow: hidden;
    user-select: none;
    width: 1em;
}
`