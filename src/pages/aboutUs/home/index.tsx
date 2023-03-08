import Layout from 'components/layaouts/abousUs'
import Nav from 'components/nav'
import { Box } from '@mui/material'
import style from './homeAboutUs.module.css'
import Typography from '@mui/material/Typography'
import LottiePlayer from 'components/lottiePlayer'

const ImgHome = (): JSX.Element => {
  return (
    <Box className={style.contentImg}>
      <LottiePlayer
        path={'AboutUs_animacion.json'}
        autoplay
        loop
        style={{
          position: 'relative',
          zIndex: 1,
          width: '754px',
          height: '548px',
          top: '-97px',
          left: '-25px'
        }}
      />
    </Box>
  )
}

const Home = (): JSX.Element => {
  return (
    <>
      <Nav ButtonColor="primary" ButtonVariant="contained" />
      <Layout>
        <Box
          className={style.content}
          sx={{
            flexDirection: {
              xs: 'column-reverse',
              md: 'column-reverse',
              lg: 'row'
            }
          }}
        >
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'none',
                lg: 'block'
              },
              margin: {
                lg: '139px 0 0 0'
              }
            }}
          >
            <ImgHome />
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              margin: '89px 0 16px 0'
            }}
          >
            <Box
              className={style.contentInfo}
              sx={{
                margin: {
                  xs: '37px 0 0 0',
                  md: '37px 0 0 0',
                  lg: '0 0 0 0'
                }
              }}
            >
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
                International payments for everyone
              </Typography>
              <Typography className={style.text}>
                We offer local & international payment tech-services for
                businesses and consumers. We enable simple interfaces, easy to
                use, and secure for the two to interact. Our focus is to make
                your business thrive.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Layout>
      <Box
        sx={{
          display: {
            xs: 'block',
            md: 'block',
            lg: 'none'
          }
        }}
      >
        <ImgHome />
      </Box>
    </>
  )
}

export default Home
