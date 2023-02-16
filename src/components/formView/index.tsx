import { Box } from '@mui/material'
import Square from 'components/square'
import styles from './formview.module.css'

interface Props {
  children: JSX.Element
  image: string
}

const FormView = ({ children, image }: Props): JSX.Element => {
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
            maxWidth: {
              xs: '530px',
              lg: '600px'
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
            top={'500'}
            left={'-140'}
            maxHeight={250}
            maxWidth={150}
          />
        </Box>
        <img className={styles.image} src={image} alt='support' />
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
        {children}
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

export default FormView
