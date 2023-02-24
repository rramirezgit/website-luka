import config from 'const'

interface CardInterface {
  key: string
  title: string
  tags: string[]
  text: string[]
  imageUrl: string
}

const cardsInfo: CardInterface[] = [
  {
    key: crypto.randomUUID(),
    title: 'Embedded solution',
    tags: ['GATEWAY'],
    text: [
      'One integration to empower your access to currencies and payment methods to process your payment transactions'
    ],
    imageUrl: `${config.UrlBaseImg}whyus/whyus-1.svg`
  },
  {
    key: crypto.randomUUID(),
    title: 'Plug and play solution',
    tags: ['PAYMENT LINK', 'VPOS'],
    text: ['Hassle free payment management web interface'],
    imageUrl: `${config.UrlBaseImg}whyus/whyus-2.svg`
  },
  {
    key: crypto.randomUUID(),
    title: 'Hardwareless onsite payments',
    tags: ['VPOS'],
    text: [
      'Friendly and simple app',
      'Scalable solution, from a single VPOS to a bespoke cluster of point of sales',
      'Device friendly but not required.'
    ],
    imageUrl: `${config.UrlBaseImg}whyus/whyus-3.svg`
  }
]

export default cardsInfo
