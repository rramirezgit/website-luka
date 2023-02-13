import { FooterBoxProps, OptionsProps } from './footer.interface'

export const productsArray: FooterBoxProps[] = [
  {
    title: true,
    text: 'Products'
  },
  {
    title: false,
    text: 'Gateway'
  },
  {
    title: false,
    text: 'Link'
  },
  {
    title: false,
    text: 'VPOS'
  }
]

export const useCasesArray: FooterBoxProps[] = [
  {
    title: true,
    text: 'Use Cases'
  },
  {
    title: false,
    text: 'Gateway'
  },
  {
    title: false,
    text: 'Link'
  },
  {
    title: false,
    text: 'VPOS'
  }
]

export const forDevelopersArray: FooterBoxProps[] = [
  {
    title: true,
    text: 'Resources'
  },
  {
    title: false,
    text: 'Payment Link Demo',
    id: 'demo-link'
  },
  {
    title: false,
    text: 'Gateway Demo',
    id: 'demo-gateway'
  }
]

export const aboutUsArray: FooterBoxProps[] = [
  {
    title: true,
    text: 'About Us'
  },
  {
    title: false,
    text: 'Company',
    id: 'about-us'
  },
  {
    title: false,
    text: 'Supported Currencies',
    id: 'currency'
  },
  {
    title: false,
    text: 'Support',
    id: 'support'
  },
  {
    title: false,
    text: 'Terms and Conditions',
    id: 'terms-conditions'
  }
]

export const countryArray: OptionsProps[] = [
  {
    label: 'United States',
    value: 'United States'
  },
  {
    label: 'Venezuela',
    value: 'Venezuela'
  },
  {
    label: 'Spain',
    value: 'Spain'
  },
  {
    label: 'United Kingdom',
    value: 'United Kingdom'
  }
]
