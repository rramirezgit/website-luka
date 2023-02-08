// import Layout from 'components/layaouts/abousUs'
import styles from './ourCulture.module.css'
import { Box } from '@mui/material'
import Layout from 'components/layaouts/abousUs'
import Typography from '@mui/material/Typography'
import leaf from 'assets/aboutUs/ourCulture/leaf.svg'
import lovely from 'assets/aboutUs/ourCulture/lovely.svg'
import people from 'assets/aboutUs/ourCulture/people.svg'
import mobile from 'assets/aboutUs/ourCulture/mobile.svg'
import Card from './card'
// import Card from './card'

const cards = [
  {
    title: 'Purpose-driven',
    image: people,
    text: 'We focus on taking care of our clients, and team, and of course, on giving back to our communities'
  },
  {
    title: 'Passion for technology',
    image: lovely,
    text: 'We love innovation and we are passionate about being part of creating new solutions. '
  },
  {
    title: 'Early adopters',
    image: mobile,
    text: 'We are early costumers on new products and technologies.'
  },
  {
    title: 'Eco-friendly hands-on',
    image: leaf,
    text: 'We follow sustainability principles and respect for the Earth'
  }
]

const OurCulture = (): JSX.Element => {
  return (
    <Box
      className={styles.content}
      sx={{
        height: {
          xs: '1405.44px',
          sm: '889.61px'
        }
      }}
    >
      <Box
        className={styles.divRotate}
        sx={{
          height: {
            xs: '1405.44px',
            sm: '889.61px'
          }
        }}
      >
        <Box
          className={styles.rentangles}
          sx={{
            top: {
              xs: '30px',
              sm: '243px',
              md: '243px',
              lg: '243px'
            },
            left: {
              xs: '-4px',
              sm: '-23px',
              md: '-23px',
              lg: '-23px'
            }
          }}
        >
          <Layout className={styles.layout}>
            <Box className={styles.contentInfo}>
              <Box className={styles.divTittle}>
                <Typography className={styles.tittle}>Our Culture</Typography>
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
