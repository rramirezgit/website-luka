import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Layout from 'components/layaouts/abousUs'
import style from './mision.module.css'
import Card from './card'
import config from 'const'

const cards = [
  {
    image: `${config.UrlBaseImg}aboutUs/mision/image1.svg`,
    text: 'Provide solutions through a Marketplace'
  },
  {
    image: `${config.UrlBaseImg}aboutUs/mision/image2.svg`,
    text: 'Offer international and multi-currency payment methods.'
  },
  {
    image: `${config.UrlBaseImg}aboutUs/mision/image3.svg`,
    text: 'Provide an economical, efficient and highly technological service.'
  }
]

const Mision = (): JSX.Element => {
  return (
    <Box
      className={style.content}
      sx={{
        background: `url(${config.UrlBaseImg}aboutUs/mision/Rings.svg) no-repeat`
      }}
    >
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
