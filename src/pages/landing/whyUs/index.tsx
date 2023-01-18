import Carousel from 'components/carousel'
import clsx from 'clsx'
import lukaCSS from 'styles/luka.module.css'
import whyUsCSS from './whyUs.module.css'
import { Box, Typography } from '@mui/material'
import placeholder from 'assets/placeholder.svg'
import Card from './card'
import Square from 'components/square'

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
        position: 'relative',
        padding: {
          xs: '70px 50px',
          md: '100px 100px'
        }
      }}
    >
      <Box
        className={whyUsCSS['title-box']}
      >
        <Typography
          className={whyUsCSS.title}
          sx={{
            fontSize: {
              xs: '40px !important',
              lg: '54px !important'
            },
            textAlign: 'center'
          }}
        >
          Why Us
        </Typography>
        <Typography
          className={whyUsCSS.text}
          sx={{
            fontSize: {
              xs: '20px !important',
              md: '24px !important'
            },
            textAlign: 'center',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          We make sure we understand each other. We focus to ease your payments capability so you concentrate on growing your business
        </Typography>
      </Box>
      <Box
        className={whyUsCSS['small-container']}
        sx={{
          height: {
            xs: '650px',
            md: '620px'
          },
          width: {
            xs: '100vw',
            md: '75%'
          },
          maxWidth: {
            md: '1100px'
          },
          padding: '30px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <Carousel width='300' height='520' id={crypto.randomUUID()}>
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
        <Box
          sx={
            {
              display: {
                xs: 'none',
                xl: 'block'
              }
            }
          }
        >
          <Square color='#5AE1E230' top={'-180'} left={'-180'} maxHeight={280} maxWidth={220}/>
        </Box>
      </Box>
      <Box
        sx={
          {
            display: {
              xs: 'none',
              xl: 'block'
            }
          }
        }
      >
        <Square color='#5AE1E230' top={'400'} right={'0'} maxHeight={300} maxWidth={160}/>
      </Box>
      <Square color='#5AE1E230' top={'0'} left={'0'} maxHeight={180} maxWidth={130}/>
      <Square color='#0878FF25' bottom={'0'} right={'0'} maxHeight={160} maxWidth={130}/>
    </Box>
  )
}

export default WhyUs
