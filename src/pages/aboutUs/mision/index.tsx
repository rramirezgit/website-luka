import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Layout from 'components/layaouts/abousUs'
import style from './mision.module.css'
import image1 from 'assets/aboutUs/mision/image1.svg'
import image2 from 'assets/aboutUs/mision/image2.svg'
import image3 from 'assets/aboutUs/mision/image3.svg'
import Card from './card'

const cards = [
  {
    image: image1,
    text: 'Provide solutions through a Marketplace'
  },
  {
    image: image2,
    text: 'Offer international and multi-currency payment methods.'
  },
  {
    image: image3,
    text: 'Provide an economical, efficient and highly technological service.'
  }
]

const Mision = (): JSX.Element => {
  return (
    <Box className={style.content}>
      <Box
        className={style.contentInfo}
        sx={{
          position: 'relative',
          top: {
            xs: '84px',
            sm: '84px',
            md: '243px',
            lg: '243px'
          },
          left: {
            xs: '0px',
            sm: '0px',
            md: '-1px',
            lg: '-1px'
          }
        }}
      >
        <Layout className={style.layout}>
          <Typography
            className={style.title}
            sx={{
              fontSize: {
                xs: '32px',
                md: '40px',
                lg: '40px'
              }
            }}
          >
            Mision
          </Typography>
          <Box
            className={style.divCards}
            sx={{
              marginTop: {
                xs: '50px',
                sm: '50px',
                md: '50px',
                lg: '100px'
              }
            }}
          >
            {cards.map((card, index) => (
              <Card key={index} image={card.image} text={card.text} />
            ))}
          </Box>
        </Layout>
      </Box>
    </Box>
  )
}

export default Mision
