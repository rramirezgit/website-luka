import Carousel from 'components/carousel'
import Card from './card'
import clsx from 'clsx'
import ourProductsCSS from './ourProducts.module.css'
import lukaCSS from 'styles/luka.module.css'
import { Box, Typography } from '@mui/material'
import config from 'const'

interface CardInterface {
  key: string
  title: string
  text: string
  imageUrl?: string
}

const OurProducts = (): JSX.Element => {
  const cardsInfo: CardInterface[] = [
    {
      key: crypto.randomUUID(),
      title: 'Gateway',
      text: 'B2B Payment gateway embedded solution. Manages multi currency and multi payment methods with an online conciliation dashboard.',
      imageUrl: `${config.UrlBaseImg}OurProducts-Gateway.png`
    },
    {
      key: crypto.randomUUID(),
      title: 'Pay Link',
      text: 'B2B electronic pay-in and pay-out management system. Links are enabled through multiple messaging services.',
      imageUrl: `${config.UrlBaseImg}OurProducts-Link.png`
    },
    {
      key: crypto.randomUUID(),
      title: 'VPOS',
      text: 'Hardware-free point of sales that enables QR payments and contactless transactions. Scalable multi-device integration.',
      imageUrl: `${config.UrlBaseImg}OurProducts-VPOS.png`
    }
  ]
  return (
    <Box
      className={
        clsx(ourProductsCSS['ourproducts-container'],
          lukaCSS['flex-column'],
          lukaCSS['vertical-horizontal-center']
        )
      }
      sx={{
        height: {
          xs: '628px',
          md: '716px'
        }
      }}
    >
      <Typography
        className={ourProductsCSS.title}
      >
        Our Products
      </Typography>
      <Carousel>
        {
          cardsInfo.map((card) => {
            return (
              <Card
                id={card.key}
                key={card.key}
                title={card.title}
                text={card.text}
                imageUrl={card.imageUrl}
              />
            )
          })
        }
      </Carousel>
    </Box>
  )
}

export default OurProducts
