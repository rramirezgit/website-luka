import { Box, Typography } from '@mui/material'
import styles from './desktopcontent.module.css'
import { getCssVar } from 'theme'
import Details from './details'
import Custom from './custom'

const DesktopContent = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
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
            className={styles.title}
          >
            Your website
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
