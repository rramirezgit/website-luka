import { CardInterface } from './ourProducts.interface'
import gatewayImg from 'assets/ourProducts/image-1.svg'
import linkImg from 'assets/ourProducts/image-2.svg'
import vposImg from 'assets/ourProducts/image-3.svg'

const cardsArray: CardInterface[] = [
  {
    id: 'gateway-box-id',
    key: crypto.randomUUID(),
    title: 'Multi Currency Gateway',
    text: 'B2B Payment gateway embedded solution. Manages multi currency and multi payment methods with an online conciliation dashboard.',
    imageUrl: gatewayImg
  },
  {
    id: 'Paylink-box-id',
    key: crypto.randomUUID(),
    title: 'In&Out Payment Link',
    text: 'B2B electronic pay-in and pay-out management system. Links are enabled through multiple messaging services.',
    imageUrl: linkImg
  },
  {
    id: 'vpos-box-id',
    key: crypto.randomUUID(),
    title: 'Virtual Point of Sale',
    text: 'Hardware-free point of sales that enables QR payments and contactless transactions. Scalable multi-device integration.',
    imageUrl: vposImg
  }
]

export default cardsArray
