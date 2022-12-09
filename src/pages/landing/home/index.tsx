import Typography from '@mui/material/Typography'
import home from './home.module.css'
import landing from '../landing.module.css'
import clsx from 'clsx'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import config from 'const'
import Nav from 'components/nav'

const Home = (): JSX.Element => {
  return (
    <>
      <Nav />
      <Box
        sx={{
          height: '1000px',
          padding: {
            xs: '0px',
            sm: '100px 0px'
          }
        }}
      >
        <Box
          className={home.container}
          sx={{
            flexDirection: {
              xs: 'column-reverse',
              sm: 'column-reverse',
              md: 'row'
            },
            justifyContent: {
              xs: 'center',
              sm: 'center'
            },
            gap: {
              sx: '0px',
              sm: '70px'
            },
            alignItems: {
              sm: 'center'
            }
          }}
        >
          <img
            className={home['content-img']}
            src={`${config.UrlBaseImg}homeImg.png`}
            alt="home"
          />
          <Box
            className={home['content-info']}
            sx={{
              padding: {
                xs: '0px 35.13px 65px;',
                sm: '0px 20px'
              },
              width: {
                xs: '100%',
                sm: '603px'
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
              We empower your business. Payments made easy for your consumer.
              All currencies and payment methods consolidated in one place with
              a straightforward management and reporting interface.
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
        </Box>
      </Box>
    </>
  )
}

export default Home
