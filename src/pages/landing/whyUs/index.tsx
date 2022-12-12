import Carousel from 'components/carousel'
import clsx from 'clsx'
import lukaCSS from 'styles/luka.module.css'
import whyUsCSS from './whyUs.module.css'
import { Box, Typography } from '@mui/material'
import placeholder from 'assets/placeholder.svg'
import Card from './card'

interface CardInterface {
  key: string
  title: string
  tags: string[]
  text: string[]
  imageUrl: string
}

const WhyUs = (): JSX.Element => {
  const cardsInfo: CardInterface[] = [
    {
      key: crypto.randomUUID(),
      title: 'Embedded solution',
      tags: [
        'GATEWAY'
      ],
      text: [
        'One integration to empower your access to currencies and payment methods to process your payment transactions'
      ],
      imageUrl: placeholder
    },
    {
      key: crypto.randomUUID(),
      title: 'Plug and play solution',
      tags: [
        'PAYMENT LINK',
        'VPOS'
      ],
      text: [
        'Hassle free payment management web interface'
      ],
      imageUrl: placeholder
    },
    {
      key: crypto.randomUUID(),
      title: 'Hardwareless onsite payments',
      tags: [
        'VPOS'
      ],
      text: [
        'Friendly and simple app',
        'Scalable solution, from a single VPOS to a bespoke cluster of point of sales',
        'Device friendly but not required.'
      ],
      imageUrl: placeholder
    }
  ]
  return (
    <Box
      className={
        clsx(whyUsCSS['whyus-container'],
          lukaCSS['flex-column']
        )
      }
      sx={{
        height: {
          xs: '958px',
          md: '1110px'
        }
      }}
    >
      <Typography
        className={whyUsCSS.title}
        sx={{
          fontSize: {
            xs: '40px',
            md: '54px'
          },
          padding: {
            xs: '0 25px',
            sm: '0 50px',
            md: '0 105px'
          }
        }}
      >
        Why Us
      </Typography>
      <Typography
        className={whyUsCSS.text}
        sx={{
          fontSize: {
            xs: '14px',
            md: '24px'
          },
          padding: {
            xs: '0 25px',
            sm: '0 50px',
            md: '0 105px'
          }
        }}
      >
        We make sure we understand each other. We focus to ease your payments capability so you concentrate on growing your business
      </Typography>
      <Box
        className={whyUsCSS['small-container']}
        sx={{
          height: {
            xs: '620px',
            md: '620px'
          },
          width: {
            xs: '100vw',
            md: '75%'
          },
          maxWidth: {
            md: '1100px'
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Carousel height='500px' id={crypto.randomUUID()}>
          {
            cardsInfo.map((card) => {
              return (
                <Card
                  id={card.key}
                  key={card.key}
                  title={card.title}
                  tags={card.tags}
                  text={card.text}
                  imageUrl={card.imageUrl}
                />
              )
            })
          }
        </Carousel>
      </Box>
    </Box>
  )
}

export default WhyUs
