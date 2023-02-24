import { CardInterface } from './ourProducts.interface'
import config from 'const'

const cardsArray: CardInterface[] = [
  {
    id: 'gateway-box-id',
    idCard: crypto.randomUUID(),
    title: 'Multi Currency Gateway',
    text: 'B2B Payment gateway embedded solution. Manages multi currency and multi payment methods with an online conciliation dashboard.',
    imageUrl: `${config.UrlBaseImg}ourProducts/image-1.svg`
  },
  {
    id: 'Paylink-box-id',
    idCard: crypto.randomUUID(),
    title: 'In&Out Payment Link',
    text: 'B2B electronic pay-in and pay-out management system. Links are enabled through multiple messaging services.',
    imageUrl: `${config.UrlBaseImg}ourProducts/image-2.svg`
  },
  {
    id: 'vpos-box-id',
    idCard: crypto.randomUUID(),
    title: 'Virtual Point of Sale',
    text: 'Hardware-free point of sales that enables QR payments and contactless transactions. Scalable multi-device integration.',
    imageUrl: `${config.UrlBaseImg}ourProducts/image-3.svg`
  }
]

export default cardsArray
