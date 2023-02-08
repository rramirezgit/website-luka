import { Box } from '@mui/material'
import placeholder from 'assets/support/media-placeholder.svg'
import Info from './Info'
import styles from './supportform.module.css'

const SupportForm = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
      sx={
        {
          width: '100%',
          maxWidth: '1254px',
          padding: {
            xs: '0 70px',
            xl: '0 35px'
          },
          flexDirection: {
            xs: 'column',
            lg: 'row'
          },
          justifyContent: {
            xs: 'center',
            lg: 'space-between'
          }
        }
      }
    >
      <Box
        className={styles.figure}
        sx={
          {
            marginBottom: {
              xs: '100px',
              lg: '0'
            }
          }
        }
      >
        <img className={styles.image} src={placeholder} alt='Placeholder' />
      </Box>
      <Box
        className={styles['form-container']}
        sx={
          {
            width: {
              xs: '100%',
              sm: '530px'
            },
            padding: {
              xs: '0',
              sm: '30px'
            },
            borderRadius: {
              xs: '0',
              sm: '8px'
            },
            boxShadow: {
              xs: 'none',
              sm: '3.6139px 3.6139px 13.5521px 1.80695px rgba(0, 0, 0, 0.04)'
            }
          }
        }
      >
        <Info />
      </Box>
    </Box>
  )
}

export default SupportForm
