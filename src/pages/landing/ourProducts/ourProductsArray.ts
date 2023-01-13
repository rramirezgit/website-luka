import { CardInterface } from './ourProducts.interface'
import gatewayImg from 'assets/ourProducts/image-1.png'
import linkImg from 'assets/ourProducts/image-2.png'
import vposImg from 'assets/ourProducts/image-3.png'

const cardsArray: CardInterface[] = [
  {
    key: crypto.randomUUID(),
    title: 'Gateway',
    text: 'B2B Payment gateway embedded solution. Manages multi currency and multi payment methods with an online conciliation dashboard.',
    imageUrl: gatewayImg
  },
  {
    key: crypto.randomUUID(),
    title: 'Pay Link',
    text: 'B2B electronic pay-in and pay-out management system. Links are enabled through multiple messaging services.',
    imageUrl: linkImg
  },
  {
    key: crypto.randomUUID(),
    title: 'VPOS',
    text: 'Hardware-free point of sales that enables QR payments and contactless transactions. Scalable multi-device integration.',
    imageUrl: vposImg
  }
]

export default cardsArray
