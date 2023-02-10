import { Box } from '@mui/material'
import support from 'assets/support/support.svg'
import Square from 'components/square'
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
              xs: '80px',
              lg: '0'
            },
            position: 'relative'
          }
        }
      >
        <Box
          sx={{
            display: {
              xs: 'none',
              lg: 'block',
              position: 'absolute',
              zIndex: -1
            }
          }}
        >
          <Square
            color="#0878FF20"
            top={'400'}
            left={'-180'}
            maxHeight={320}
            maxWidth={200}
          />
        </Box>
        <img className={styles.image} src={support} alt='support' />
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
              sm: '50px'
            },
            borderRadius: {
              xs: '0',
              sm: '8px'
            },
            boxShadow: {
              xs: 'none',
              sm: '3.6139px 3.6139px 13.5521px 1.80695px rgba(0, 0, 0, 0.04)'
            },
            position: 'relative'
          }
        }
      >
        <Info />
        <Box
          sx={{
            display: {
              xs: 'none',
              lg: 'block'
            }
          }}
        >
          <Square
            color="#5AE1E230"
            top={'100'}
            right={'-200'}
            maxHeight={150}
            maxWidth={200}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SupportForm
