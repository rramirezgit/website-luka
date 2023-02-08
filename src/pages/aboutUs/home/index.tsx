import Layout from 'components/layaouts/abousUs'
import Nav from 'components/nav'
import img from 'assets/aboutUs/home/Group.svg'
import { Box } from '@mui/material'
import style from './homeAboutUs.module.css'
import Typography from '@mui/material/Typography'

const ImgHome = (): JSX.Element => {
  return (
    <Box className={style.contentImg}>
      <Box
        component={'img'}
        src={img}
        alt="About us"
        className={style.img}
        sx={{
          position: 'relative',
          zIndex: 1
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
              margin: '46px 0 16px 0'
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar
                tempor.
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
