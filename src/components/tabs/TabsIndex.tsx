import { fa0, faArrowRightArrowLeft, faBagShopping, faChampagneGlasses, faCompassDrafting, faFileCircleQuestion, faLineChart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { TabsType} from "../../utils/types";
import Events from "../Game/pages/Events/Events";
import Market from "../Game/pages/market/Market";
import Help from "../Game/pages/Help";
import { Trades } from "../Game/pages/Trades/Trades";
import TradePanel from "../Game/pages/Trades/TradePanel";
import Assets from "../Game/pages/Assets/Assets";
import AssetsPanel from "../Game/pages/Assets/AssetsPanel";
import ClosedTrades from "../Game/pages/Trades/ClosedTrades";
import { Instruments } from "../Game/pages/indicatorsPage/IndicatorsPanel";


export const tabs: TabsType[] = [
    {
        title: "Active",
        component: TradePanel,
        icon:fa0
    },
    {
        title: "Closed",
        component:ClosedTrades,
        icon:fa0
    },
    
    {
        title: "Portfolio",
        component: TradePanel,
        icon:fa0
    },
   
];

export const assetTabs: TabsType[] = [
    {
        title: "Fixed Time",
        component: AssetsPanel,
        icon:fa0
    },
    {
        title: "Forex",
        component:AssetsPanel,
        icon:fa0
    },
    
    {
        title: "Stocks",
        component: AssetsPanel,
        icon:fa0
    },
   
];


export const navTabs: TabsType[] = [
    {
        title: "",
        icon: faLineChart,
        component: Assets,
        close: true
    },
    {
        title: "indicators",
        icon: faCompassDrafting,
        component: Instruments,
        close: true
    },
    {
        title: "Trades",
        icon: faArrowRightArrowLeft,
        component: Trades,
        close: false
    },
    {
        title: "Market",
        icon: faBagShopping,
        component: Market,
        close: true
    },
    {
        title: "Events",
        icon: faChampagneGlasses,
        component: Events,
        close: false
    },
    {
        title: "Help",
        icon: faFileCircleQuestion,
        component: Help,
        close: true
    },
];

export const currencyTabs:TabsType[] = [
    {
        title: "",
        icon: fa0,
        component: Assets,
        close: true
    },
]