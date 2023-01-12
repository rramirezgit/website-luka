import Carousel from 'components/carousel'
import Card from './card'
import clsx from 'clsx'
import ourProductsCSS from './ourProducts.module.css'
import lukaCSS from 'styles/luka.module.css'
import { Box, Typography } from '@mui/material'
import cardsArray from './ourProductsArray'

const OurProducts = (): JSX.Element => {
  const cardsInfo = cardsArray
  return (
    <Box
      className={
        clsx(ourProductsCSS['ourproducts-container'],
          lukaCSS['flex-column']
        )
      }
      sx={{
        padding: {
          xs: '75px 0',
          md: '150px 0'
        },
        height: {
          xs: '750px',
          md: '800px'
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
      <Carousel buttonsMargin={60} width='300' id={crypto.randomUUID()}>
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
