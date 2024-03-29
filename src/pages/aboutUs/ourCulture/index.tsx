// import Layout from 'components/layaouts/abousUs'
import styles from './ourCulture.module.css'
import { Box } from '@mui/material'
import Layout from 'components/layaouts/abousUs'
import Typography from '@mui/material/Typography'
import Card from './card'
import config from 'const'
// import Card from './card'

const cards = [
  {
    title: 'Purpose-driven',
    image: `${config.UrlBaseImg}aboutUs/ourCulture/people.svg`,
    text: 'We focus on taking care of our clients, consumers,  and of course, our team.'
  },
  {
    title: 'Passion for technology',
    image: `${config.UrlBaseImg}aboutUs/ourCulture/lovely.svg`,
    text: 'We love technology and we are passionate about generating value to people where we are present.'
  },
  {
    title: 'Early adopters',
    image: `${config.UrlBaseImg}aboutUs/ourCulture/mobile.svg`,
    text: 'We love innovation and we bring solutions built with new and proven technology.'
  },
  {
    title: 'Eco-friendly hands-on',
    image: `${config.UrlBaseImg}aboutUs/ourCulture/leaf.svg`,
    text: 'We love our planet and we follow sustainability principles in everything we do.  Please do so too ;-).'
  }
]

const OurCulture = (): JSX.Element => {
  return (
    <Box
      className={styles.content}
      sx={{
        height: {
          xs: '1280.44px',
          sm: '767.61px',
          md: '800.61px'
        }
      }}
    >
      <Box
        className={styles.divRotate}
        sx={{
          height: {
            xs: '1280.44px',
            sm: '767.61px',
            md: '800.61px'
          }
        }}
      >
        <Box
          className={styles.rentangles}
          sx={{
            top: {
              xs: '30px',
              sm: '93px',
              md: '95px',
              lg: '180px'
            },
            left: {
              xs: '-4px',
              sm: '-8px',
              md: '-8px',
              lg: '-5px'
            }
          }}
        >
          <Layout className={styles.layout}>
            <Box className={styles.contentInfo}>
              <Box className={styles.divTittle}>
                <Typography
                  className={styles.tittle}
                  sx={{
                    fontSize: {
                      xs: '32px',
                      md: '40px',
                      lg: '40px'
                    }
                  }}
                >
                  Our Culture
                </Typography>
              </Box>
            </Box>
            <Box
              className={styles.divCards}
              sx={{
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  md: 'space-between',
                  lg: 'space-between',
                  xl: 'space-between'
                },
                marginTop: {
                  xs: '40px',
                  sm: '40px',
                  lg: '100px'
                }
              }}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  text={card.text}
                />
              ))}
            </Box>
          </Layout>
        </Box>
      </Box>
    </Box>
  )
}

export default OurCulture
