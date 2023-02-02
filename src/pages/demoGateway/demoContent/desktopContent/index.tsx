import { Box, Typography } from '@mui/material'
import styles from './desktopcontent.module.css'
import { getCssVar } from 'theme'
import Details from './details'
import Custom from './custom'
import './index.css'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'

const DesktopContent = (): JSX.Element => {
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box
      className={styles.container}
      id={'demogateway-container'}
      sx={
        {
          backgroundColor: getCssVar('--white')
        }
      }
    >
      <Box
        className={styles.header}
      >
        <Box
          className={styles['header-flex']}
        >
          <Box
            className={styles.circle}
            sx={
              {
                backgroundColor: 'red'
              }
            }
          ></Box>
          <Box
            className={styles.circle}
            sx={
              {
                backgroundColor: 'yellow'
              }
            }
          ></Box>
          <Box
            className={styles.circle}
            sx={
              {
                backgroundColor: 'green'
              }
            }
          ></Box>
        </Box>
      </Box>
      <Box
        className={styles.content}
      >
        <Box>
          <Typography
            id={'demogateway-title'}
            className={styles.title}
            sx={
              {
                fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
              }
            }
          >
            {demo.language?.value === 'EN' ? 'Your website' : 'Tu sitio web'}
          </Typography>
        </Box>
        <Box
          className={styles.product}
          sx={
            {
              flexDirection: {
                xs: 'column',
                lg: 'row'
              }
            }
          }
        >
          <Box
            sx={
              {
                width: {
                  xs: '100%',
                  lg: 'calc(100% - 430px)'
                },
                maxWidth: {
                  xs: 'none',
                  lg: '320px'
                },
                display: {
                  xs: 'none',
                  lg: 'block'
                }
              }
            }
          >
            <Details />
          </Box>
          <Box
            sx={
              {
                width: {
                  xs: '100%',
                  lg: '400px'
                }
              }
            }
          >
            <Custom />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DesktopContent
