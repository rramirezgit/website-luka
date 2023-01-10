import { ChangeEventHandler, Dispatch, SetStateAction } from "react"

export interface OptionsProps {
    label: string
    value: string
}

export interface FooterBoxProps {
    title: boolean
    text: string
}

export interface FooterListProps {
    texts: FooterBoxProps[]
}

export interface FooterSelectProps {
    options: Array<OptionsProps>
    value: string
}