import { Box, Typography } from '@mui/material'
import Ready from 'components/ready'
import style from './world.module.css'
import Square from 'components/square'

const World = (): JSX.Element => {
  return (
    <>
      <Box
        position={'relative'}
        className={style.content}
        sx={{
          height: {
            xs: '1102px',
            md: '1537px'
          },
          padding: {
            xs: '0 0 0 0',
            md: '129px 0 0 0'
          },
          gap: {
            xs: '20px',
            md: '80px'
          }
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
              xs: '0px',
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
            backgroundSize: {
              xs: 'contain',
              md: 'contain'
            },
            width: {
              xs: '478.75px',
              md: '100%',
              lg: '910.84px'
            },
            height: {
              xs: '478.75px',
              md: '100%',
              lg: '910.84px'
            }
          }}
        ></Box>
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
