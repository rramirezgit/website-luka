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
          xs: '57px 34px 0 34px',
          sm: '57px 34px 0 34px',
          md: '57px 0 0 0',
          lg: '57px 0 0 0'
        },
        width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '50%'
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
        color="white"
        sx={{
          marginTop: {
            xs: '26px',
            sm: '24px'
          },
          width: {
            xs: '144px'
          },
          height: {
            sm: '48px'
          },
          fontSize: {
            xs: '16px'
          },
          color: 'rgba(5, 22, 177, 1) !important',
          fontWeight: '600 !important'
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
          xs: '796px',
          sm: '831px',
          md: '884px'
        },
        position: 'relative'
      }}
    >
      <Nav ButtonColor="white" ButtonVariant="outlined" />
      <Box
        className={home.rentangles}
        sx={{
          height: {
            xs: '800px',
            sm: '762px',
            md: '851px'
          },
          background: {
            xs: `url(${bgRectangles}) no-repeat`,
            xl: `url(${bgRectangles}) no-repeat center`
          },
          backgroundSize: 'cover !important'
        }}
      >
        <Box
          className={home.boxInfo}
          sx={{
            padding: {
              md: '0px 34px'
            }
          }}
        >
          <Box
            sx={{
              width: '1300px'
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
                sm: 'polygon(-36% 77%, 143% -5%, 801% 67%)',
                md: 'polygon(-135% 127%, 124% 3%, 146% 112%)',
                lg: 'polygon(-78% 99%, 107% 1%, 135% 112%);',
                xl: 'polygon(-90% 114%, 106% 2%, 138% 100%)'
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
      <Square
        color="#5AE1E230"
        bottom={'0'}
        right={'0'}
        maxHeight={120}
        maxWidth={120}
      />
    </Box>
  )
}

export default Home
