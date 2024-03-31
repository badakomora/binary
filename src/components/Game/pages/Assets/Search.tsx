import styled from "@emotion/styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

const SearchWrap = styled.div`
align-items: center;
background-color: var(--base-gamma);
border:1px solid  rgba(112, 128, 140, 0.3); 
border-radius: var(--corner-radius-beta);
box-sizing: border-box;
color: var(--contrast-alpha);
cursor: text;
justify-content: space-between;
transition: background-color 0.2s ease-in-out;
width: 100%;
display: flex;
position: relative;
height:100%;
padding-left: 1rem;

.search-icon{
    color: var(--contrast-gamma);
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
    height: 1em;
    width: 1em;
}
`
const SearchInput = styled.input`
height: 2.5rem;
background: none;
border: 0;
box-sizing: border-box;
caret-color: var(--contrast-alpha);
color: currentcolor;
cursor: inherit;
display: block;
font: inherit;
font-size: 1rem;
line-height: 1.5;
padding: 0.5rem 1rem;
outline:none;
`

export const Search: FC = () =>{
    
    return(
        <SearchWrap>
            <FontAwesomeIcon icon={faSearch} className='search-icon'/>
            <div style={{
                flexGrow: 1,
                position: 'relative',
            }}>
                <SearchInput
                    type='text'
                    placeholder='Search'
                />
            </div>
        </SearchWrap>
    )
}