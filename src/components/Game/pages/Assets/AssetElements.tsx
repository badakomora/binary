import styled from "@emotion/styled";

export const AssetWrapper = styled.div`
background-color: inherit;
display: flex;
flex-direction: column;
height: 100%;
margin-top: var(--sidebar-header-height);
position: absolute;
width:100%;

@media (min-width: 768px) {
    box-sizing: border-box;
    height: calc(100% - var(--sidebar-header-height) - 0.875rem);
    margin-top: calc(56px + 0.875rem);
    margin-top: calc(var(--sidebar-header-height) + 0.875rem);
}
`

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
height: 100%;
position: relative;
z-index: 1;
padding:0.5rem;

.icon{
    font-size: 1.3rem;
    height: 1em;
    overflow: hidden;
    width: 1em;
    
}
`

export const TabContent = styled.div`
height: 100% !important;
flex-grow: 1;
box-sizing: border-box;
padding-bottom: 0.5rem;
padding-top: 0.5rem;
position: relative;
z-index: 11;
`

export const AssetMenu = styled.div`
bottom: 0;
display: flex;
flex-direction: column;
height: 100%;
padding-top: 0.5rem;
position: absolute;
top: 0;
width: 100%;

.asset-menu__list{
    flex-grow: 1;
    position: relative;
}
`

export const AssetMenuList = styled.div`
height: 100%;
left: -0.0625rem;
position: absolute;
top: 0;
width: 100%;
overflow-y:overlay;

::-webkit-scrollbar {
    height: 100%;
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    margin: 0.85rem 0 0.85rem 0;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    // background-color: rgba(153, 164, 176, 0.1);
  }
`

export const AssetsHeader = styled.div`
// background-color: var(--bg-alpha);
margin-bottom: 0.75rem;

.header-search{
    display: flex;
    justify-content: space-between;
    margin: 0rem 3.1rem 0rem 0rem;
    position: relative;
}
.header-tags{
    margin-top: 0.75rem;
}
.asset-tags{
    padding-right: 0rem;
    position: relative;
}
.scroll-button{
    box-shadow: 0 0 0.5rem 0.4375rem var(--bg-alpha);
    right: 0.1875rem;
    align-content: center;
    background: var(--bg-alpha);
    color: var(--contrast-alpha);
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 2.25rem;
    z-index: 1;
    outline:none;
    border:none;
}
.fa{
    margin-left: 0.625rem;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
    height: 1em;
    overflow: hidden;
    user-select: none;
    width: 1em;
}
`
export const AssetSearch = styled.div`
flex-grow: 1;
display: flex;
position: relative;
flex-direction: column;
gap: 0.5rem;
max-width: 100%;
`
export const AssetSort = styled.div`
padding-left: 0.5rem;
`

export const AssetsLabel =  styled.div`
// background-color: var(--bg-alpha);
display: flex;
justify-content: space-between;
margin-bottom: 0.25rem;

.label{
    align-items: center;
    color: var(--contrast-gamma);
    display: flex;
    flex-direction: row;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.8462;
}

`