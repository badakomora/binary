import styled from "@emotion/styled";

export const SummaryWrap = styled.div`
    margin-top:1rem;
    // background: var(--bg-alpha);
    border: 0.0625rem solid var(--contrast-border-rgba);
    border-radius: var(--corner-radius-alpha);
    position: relative;
    transition: background 0.3s ease-in-out;

    .header{
        cursor: pointer;
        padding: 1rem;
        position: relative;
    }
    .title{
        color: var(--contrast-alpha);
        font-size: 1.2125rem;
        font-weight: 700;
        padding-bottom: 1rem;
    }
    .toggle{
        position: absolute;
        right: 1rem;
        top: 1rem;
    }
    .info{
        display: flex;
    }
    .column-left{
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
    }
    .column-right{
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
    }
    .deal-summary__label {
        color: var(--contrast-gamma);
        font-size: .75rem;
        font-weight: 400;
        line-height: 1.3;
    }
    .deal-summary__column_right {
        align-items: flex-end;
    }
    .deal-summary__column {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
    }
`

export const Wrapper = styled.div`
background-color: inherit;
display: flex;
flex-direction: column;
height: calc(100% - 3.5rem);
height: calc(100% - var(--sidebar-header-height));
margin-top: 3.5rem;
margin-top: var(--sidebar-header-height);
position: absolute;
width: 100%;
overflow-y: auto;
overflow-y: overlay;

@media (min-width: 768px){
    box-sizing: border-box;
    height: calc(100% - var(--sidebar-header-height) - 0.875rem);
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

.content-inner{
    padding: 0 0 1.25rem;
    background-color: inherit;
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.5rem 1rem 1.5rem;
    position: relative;
}
`

export const EmptyWrapper =  styled.div`
color: var(--contrast-gamma);
line-height: 1rem;
text-align: center;

.icon{
    display: block;
    height: 2.5rem;
    margin: 0 auto;
    padding: 2.1875rem 0;
    width: 2.5rem;
}
.title{
    display: inline-block;
    font-size: 1rem;
    line-height: 1.1875rem;
    margin-bottom: 2.5rem;
    max-width: 7.8125rem;
}
`

export const CloseWrapper = styled.div`
flex-grow: 1;
box-sizing: border-box;
padding-bottom: 0.5rem;
padding-top: 0.5rem;
position: relative;
z-index: 11;

.card__data-label {
    color: var(--contrast-gamma);
    display: flex;
    font-size: .75rem;
    font-weight: 700;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0;
    text-transform: uppercase;
}
`

export const DealCard = styled.div`
background: var(--bg-alpha);
border: 0.0625rem solid var(--contrast-border-rgba);
border-radius: var(--corner-radius-alpha);
margin: 0.5rem 0;
overflow: hidden;
padding-bottom: 0.5rem;
padding-bottom: var(--deal-card-padding);
padding-top: 0.5rem;
padding-top: var(--deal-card-padding);
position: relative;
transition: background .3s ease-in-out;


`

export const DealHeader = styled.div`
padding-left: var(--deal-card-padding);
padding-right: var(--deal-card-padding);

.deal-card__toggle {
    position: absolute;
    right: 1rem;
    top: 0.75rem;
}
.collapsible-arrows {
    color: #fff;
    cursor: pointer;
    display: block;
    height: 1.5rem;
    line-height: 0;
    width: 1.5rem;
}

.deal-card-header__block {
    align-items: flex-end;
    display: flex;
    flex: 1 0 auto;
    justify-content: space-between;
    padding-bottom: 0.25rem;
}
.deal-card-title {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.deal-card-amount {
    white-space: nowrap;
}
.deal-card-title__asset {
    font-size: 0;
    height: 2.5rem;
    line-height: 0;
    padding: 0;
    position: relative;
    width: 2.5rem;
}
.deal-card-title__heading {
    // padding-left: 0.75rem;
}
.deal-card-title__main {
    color: var(--contrast-gamma);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
}
.deal-card-subtitle {
    color: var(--contrast-beta);
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.5;
    text-transform: uppercase;
}
.deal-card-amount__pic{
    color: var(--negative-alpha);
    display: inline-block;
    height: 1rem;
    margin: 0;
    position: relative;
    vertical-align: middle;
    width: 1rem;
}
.deal-card-amount__value {
    color: var(--contrast-gamma);
    direction: ltr;
    display: inline-block;
    font-size: .75rem;
    font-weight: 700;
    line-height: 1.4;
    vertical-align: middle;
}

.card__duration {
    align-items: center;
    color: var(--contrast-gamma);
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    margin-right: 0.5rem;
    line-height: 1.4;
}
.colored-amount{
    color: var(--positive-alpha);
    direction: ltr;
}
.deal-card-ftt-body-slot, .deal-card-fx-body-slot {
    margin: 0.5rem 0 1rem;
    width: 100%;
}
`

export const CollapseWrap = styled.div`
height: auto;
overflow: initial;
opacity: 1;
transition: height .3s ease-in-out,opacity .3s ease-in-out;

.mini-chart-wrapper {
    cursor:pointer;
    margin: 0.25rem -0.5625rem 0;
    position: relative;
}
.deal-card-details {
    padding: 1rem 0.5rem 0.5rem;
}
.goto-button-container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
}
.goto-button {
    background: var(--base-alpha);
    border-radius: 1.875rem;
    box-sizing: border-box;
    color: var(--contrast-alpha);
    font-size: 1rem;
    font-weight: 700;
    min-height: 2rem;
    min-width: 9.6875rem;
    padding: 0.5625rem 1.5rem;
    position: absolute;
    text-align: center;
    z-index: 1;
    display:none;
}

.field__column {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.card__row_double-row {
    align-items: baseline;
    flex-direction: column;
    width: 50%;
    font-size: .875rem;
}

.card__row_double-row:first-child {
    text-align: left;
    margin-right: 0.25rem;
    align-items: flex-start;
}

.card__row_double-row:last-child {
    text-align: right;
    margin-left: 0.25rem;
    align-items: flex-end;
}


.data-value-field {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    line-height: 1.3;
    padding: 0.0625rem 0;
    position: relative;
}

`