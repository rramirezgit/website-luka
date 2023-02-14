// import Layout from 'components/layaouts/abousUs'
import styles from './experience.module.css'
import { Box } from '@mui/material'
import bgRectangles from 'assets/bg-home_rectangles.png'
import Layout from 'components/layaouts/abousUs'
import Typography from '@mui/material/Typography'
import Card from './card'

const cards = [
  {
    number: '+3M',
    color: 'rgba(111, 222, 246, 1)',
    text: 'MARKET SIZE'
  },
  {
    number: '30M',
    color: 'rgba(5, 22, 177, 1)',
    text: 'POPULATION'
  },
  {
    number: '100K',
    color: 'rgba(8, 120, 255, 1)',
    text: 'POPULATION SERVED'
  },
  {
    number: '25',
    color: 'rgba(5, 22, 177, 1)',
    text: 'POPULATION SERVED'
  }
]

const Experience = (): JSX.Element => {
  return (
    <Box
      className={styles.content}
      sx={{
        height: {
          xs: '889.61px',
          lg: '889.61px'
        }
      }}
    >
      <Box className={styles.divRotate}>
        <Box
          className={styles.rentangles}
          sx={{
            background: {
              xs: `url(${bgRectangles}) no-repeat`,
              xl: `url(${bgRectangles}) no-repeat botton`
            },
            backgroundSize: 'cover !important',
            top: {
              xs: '71px',
              sm: '96px',
              lg: '243px'
            },
            left: {
              xs: '-7px',
              sm: '-9px',
              lg: '-23px'
            }
          }}
        >
          <Layout className={styles.layout}>
            <Box className={styles.contentInfo}>
              <Box className={styles.divTittle}>
                <Typography className={styles.tittle}>Experience</Typography>
                <Typography className={styles.text}>
                  For over 10 years, Luka has been delivering solutions to
                  support businesses in need to access digital payments. Fit for
                  local and international use cases, we transact in multiple
                  currencies and payment methods. Our team has a solid track
                  record implementing and executing payment solutions.
                </Typography>
              </Box>
            </Box>
            <Box className={styles.contentDivCards}>
              <Box
                className={styles.divCards}
                sx={{
                  marginTop: {
                    xs: '72px',
                    lg: '100px'
                  },
                  gap: {
                    xs: '33px',
                    sm: '94px'
                  }
                }}
              >
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    number={card.number}
                    color={card.color}
                    text={card.text}
                  />
                ))}
              </Box>
            </Box>
          </Layout>
        </Box>
      </Box>
    </Box>
  )
}

export default Experience
