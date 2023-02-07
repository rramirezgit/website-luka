export interface OptionsProps {
  label: string
  value: string
}

export interface FooterBoxProps {
  title: boolean
  text: string
  id?: string
}

export interface FooterListProps {
  texts: FooterBoxProps[]
}

export interface FooterSelectProps {
  options: OptionsProps[]
  value: string
}
