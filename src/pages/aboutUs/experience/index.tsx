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
              xs: '84px',
              sm: '100px',
              md: '243px',
              lg: '243px'
            },
            left: {
              xs: '-8px',
              sm: '-8px',
              md: '-23px',
              lg: '-23px'
            }
          }}
        >
          <Layout className={styles.layout}>
            <Box className={styles.contentInfo}>
              <Box className={styles.divTittle}>
                <Typography className={styles.tittle}>Experience</Typography>
                <Typography className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  vitae nibh at erat vulputate fringilla. Nulla consequat quam
                  ac hendrerit pharetra. Suspendisse eget interdum mag
                </Typography>
              </Box>
            </Box>
            <Box className={styles.contentDivCards}>
              <Box
                className={styles.divCards}
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
