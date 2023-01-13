import { Box, Typography } from '@mui/material'
import Ready from 'components/ready'
import style from './world.module.css'
const World = (): JSX.Element => {
  return (
    <>
      <Box
        position={'relative'}
        className={style.content}
        sx={{
          height: {
            xs: '1102px',
            md: '1698px'
          },
          padding: {
            xs: '0 0 0 0',
            md: '129px 0 0 0'
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
                }
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
            }
          }}
        ></Box>
        <Box className={style.contentReady}>
          <Ready />
        </Box>
      </Box>
    </>
  )
}

export default World
