import {  IconProp } from "@fortawesome/fontawesome-svg-core"
import { FC } from "react"

export type TabsType = {
    title: string
    icon: IconProp
    component:any
    close?:boolean
}

export interface ModalProps {
  isShow ?: boolean;
  hide: () => void;
  modalContent ?: JSX.Element;
  headerText ?: string;
}
