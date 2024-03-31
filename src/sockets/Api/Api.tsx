import axios from 'axios'
import React from 'react'

const wsocket = new WebSocket("wss://marketdata.tradermade.com/feedadv")

export const wsocketContext = React.createContext(wsocket)