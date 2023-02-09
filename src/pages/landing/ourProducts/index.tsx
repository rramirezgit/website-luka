import Carousel from 'components/carousel'
import Card from './card'
import clsx from 'clsx'
import ourProductsCSS from './ourProducts.module.css'
import lukaCSS from 'styles/luka.module.css'
import { Box, Typography } from '@mui/material'
import cardsArray from './ourProductsArray'
import Square from 'components/square'

const OurProducts = (): JSX.Element => {
  const cardsInfo = cardsArray
  return (
    <Box
      className={clsx(
        ourProductsCSS['ourproducts-container'],
        lukaCSS['flex-column']
      )}
      sx={{
        padding: {
          xs: '70px 0',
          md: '100px 0'
        },
        position: 'relative'
      }}
    >
      <Typography
        className={ourProductsCSS.title}
        sx={{
          fontSize: {
            xs: '45px !important'
          }
        }}
      >
        Our Products
      </Typography>
      <Carousel
        buttonsMargin={60}
        height="410"
        width="300"
        id={crypto.randomUUID()}
      >
        {cardsInfo.map(card => {
          return (
            <Card
              id={card.key}
              key={card.key}
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
            />
          )
        })}
      </Carousel>
      <Square
        color="#0878FF20"
        bottom={'0'}
        right={'0'}
        maxHeight={180}
        maxWidth={120}
      />
    </Box>
  )
}

export default OurProducts
