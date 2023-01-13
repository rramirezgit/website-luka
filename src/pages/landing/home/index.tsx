import Typography from '@mui/material/Typography'
import landing from '../landing.module.css'
import clsx from 'clsx'
import Button from '@mui/material/Button'
import home from './home.module.css'
import Box from '@mui/material/Box'
import animation from 'assets/animation.json'
import Lottie from 'lottie-react'
import Nav from 'components/nav'
import bgRectangles from 'assets/bg-home_rectangles.png'
import Square from 'components/square'

const BoxInfo = (): JSX.Element => {
  return (
    <Box
      className={home['content-info']}
      sx={{
        padding: {
          xs: '100px 35.13px 0px;',
          sm: '100px 0px 0px 63px'
        },
        width: {
          xs: '100%'
        }
      }}
    >
      <Typography className={clsx(home.title, landing.title)}>
        Pay digitally simple
      </Typography>
      <Typography
        className={home.text}
        fontSize={{
          xs: 12,
          sm: 16
        }}
      >
        We empower your business. Payments made easy for your consumer. All
        currencies and payment methods consolidated in one place with a
        straightforward management and reporting interface.
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: {
            xs: '26px',
            sm: '61px'
          }
        }}
      >
        Contact us
      </Button>
    </Box>
  )
}

const Home = (): JSX.Element => {
  return (
    <Box
      className={home.content}
      sx={{
        height: {
          xs: '700px',
          sm: '762px',
          md: '1017px'
        },
        position: 'relative'
      }}
    >
      <Nav />
      <Box
        className={home.rentangles}
        sx={{
          height: {
            xs: '800px',
            sm: '762px',
            md: '1017px'
          },
          background: {
            xs: `url(${bgRectangles}) no-repeat -537px 195px`,
            xl: `url(${bgRectangles}) no-repeat center`
          },
          backgroundSize: 'cover !important'
        }}
      >
        <Box
          className={home.boxInfo}
          sx={{
            padding: {
              md: '0px 30px'
            }
          }}
        >
          <Box
            sx={{
              width: '1400px'
            }}
          >
            <BoxInfo />
          </Box>
        </Box>
        <Box className={home.boxLottie}>
          <Box
            className={home.triangle}
            sx={{
              clipPath: {
                xs: 'polygon(-34% 48%, 216% 4%, 801% 39%)',
                sm: 'polygon(-34% 62%, 215% -15%, 801% 67%)',
                md: 'polygon(-70% 125%, 208% 2%, 138% 100%)',
                lg: 'polygon(-54% 113%, 162% 2%, 138% 100%)',
                xl: 'polygon(-39% 114%, 106% 2%, 138% 100%)'
              }
            }}
          ></Box>
          <Lottie
            className={home.animation}
            animationData={animation}
            loop={true}
          />
        </Box>
      </Box>
      <Square color='#5AE1E230' bottom={'0'} right={'0'} maxHeight={120} maxWidth={120}/>
    </Box>
  )
}

export default Home
