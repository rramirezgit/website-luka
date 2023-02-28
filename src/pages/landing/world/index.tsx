import { Box, Typography } from '@mui/material'
import Ready from 'components/ready'
import style from './world.module.css'
import Square from 'components/square'
import config from 'const'
import LottiePlayer from 'components/lottiePlayer'

const World = (): JSX.Element => {
  return (
    <>
      <Box
        position={'relative'}
        className={style.content}
        sx={{
          height: {
            xs: '1102px',
            md: '1298px',
            lg: '1537px'
          },
          padding: {
            xs: '0 0 0 0',
            md: '129px 0 0 0'
          },
          gap: {
            xs: '20px',
            md: '80px'
          },
          background: `url(${config.UrlBaseImg}world/texturaMalla.png) no-repeat
          var(--dark-blue)`
        }}
      >
        <Box
          className={style.info}
          sx={{
            marginTop: {
              xs: '80px',
              md: '0px'
            },
            gap: {
              xs: '25px',
              md: '40px'
            }
          }}
        >
          <Typography
            classes={{ root: style.title }}
            sx={{
              fontSize: {
                xs: '37.5882px',
                lg: '56.6667px'
              }
            }}
          >
            A service made as
            <Box
              component={'span'}
              sx={{
                fontSize: {
                  xs: '37.5882px',
                  lg: '56.6667px'
                },
                margin: '0 12px'
              }}
              className={style['title-blue']}
            >
              competitive
            </Box>
            as it gets!
          </Typography>
          <Typography
            classes={{ root: style.subtitle }}
            sx={{
              fontSize: {
                xs: '15.9197px',
                lg: '24px'
              }
            }}
          >
            We empower your use cases, your operation, your business!
          </Typography>
        </Box>
        <Box
          className={style.worldImg}
          sx={{
            backgroundSize: 'contain',
            width: {
              xs: '891.84px',
              sm: '1200.84px',
              lg: '1400px'
            },
            height: {
              xs: '891.84px',
              sm: '1200.84px',
              lg: '1400px'
            },
            bottom: {
              xs: '84px',
              sm: '111px',
              md: '132px'
            }
          }}
        >
          <LottiePlayer path="world/world.json" loop={true} />
        </Box>
        <Box className={style.contentReady}>
          <Ready />
        </Box>
        <Square
          color="#0878FF25"
          top={'0'}
          right={'0'}
          maxHeight={160}
          maxWidth={130}
        />
      </Box>
    </>
  )
}

export default World
