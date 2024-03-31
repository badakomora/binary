import {faArrowRightArrowLeft, faBagShopping, faChampagneGlasses, faCircleQuestion,faLineChart } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { UnorderedList } from "./ListElements";
import { ListItem } from "./ListItem";


export const VerticalList: FC = () =>{
    return(
        <UnorderedList>
            <ListItem smiley={faLineChart} onClick={() => { } } title={""}/>
            <ListItem smiley={faArrowRightArrowLeft} onClick={() => { } } title={"Trades"}/>
            <ListItem smiley={faBagShopping} onClick={() => { } } title={"Market"}/>
            <ListItem smiley={faChampagneGlasses} onClick={() => { } } title={"Events"}/>
            <ListItem smiley={faCircleQuestion} onClick={() => { } } title={"Help"}/>
           
        </UnorderedList>
    )
}