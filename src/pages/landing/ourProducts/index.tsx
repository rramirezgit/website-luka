import Carousel from 'components/carousel'
import Card from './card'
import clsx from 'clsx'
import ourProductsCSS from './ourProducts.module.css'
import lukaCSS from 'styles/luka.module.css'
import { Box, Typography } from '@mui/material'

interface CardInterface {
  key: string
  title: string
  text: string
}

const OurProducts = (): JSX.Element => {
  const cardsInfo: CardInterface[] = [
    {
      key: crypto.randomUUID(),
      title: 'Gateway',
      text: 'B2B Payment gateway embedded solution. Manages multi currency and multi payment methods with an online conciliation dashboard.'
    },
    {
      key: crypto.randomUUID(),
      title: 'Pay Link',
      text: 'B2B electronic pay-in and pay-out management system. Links are enabled through multiple messaging services.'
    },
    {
      key: crypto.randomUUID(),
      title: 'VPOS',
      text: 'Hardware-free point of sales that enables QR payments and contactless transactions. Scalable multi-device integration.'
    }
  ]
  return (
    <Box
      className={
        clsx(ourProductsCSS['ourproducts-container'],
          lukaCSS['flex-column']
        )
      }
      sx={{
        padding: {
          xs: '53px 0 75px 0',
          md: '60px 0 150px 0'
        },
        height: {
          xs: '628px',
          md: '716px'
        }
      }}
    >
      <Typography
        className={ourProductsCSS.title}
        sx={{
          fontSize: {
            xs: '40px',
            md: '54px'
          }
        }}
      >
        Our Products
      </Typography>
      <Carousel buttonsMargin={60} width='300' height='auto' id={crypto.randomUUID()}>
        {
          cardsInfo.map((card) => {
            return (
              <Card
                id={card.key}
                key={card.key}
                title={card.title}
                text={card.text}
              />
            )
          })
        }
      </Carousel>
    </Box>
  )
}

export default OurProducts
