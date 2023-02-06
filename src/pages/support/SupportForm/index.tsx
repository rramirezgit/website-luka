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
              xs: '50px',
              ls: '0'
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
