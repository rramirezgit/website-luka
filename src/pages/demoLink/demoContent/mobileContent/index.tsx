import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import phone from 'assets/demoLink/demo-link-phone.svg'
import placeholder from 'assets/placeholder.svg'
import { getCssVar } from 'theme'
import styles from './mobilecontent.module.css'
import PayCard from './payCard'

const MobileContent = (): JSX.Element => {
  return (
    <Box
      sx={
        {
          position: 'relative'
        }
      }
    >
      <Box
        sx={
          {
            height: {
              xs: '500px',
              md: '650px'
            }
          }
        }
      >
        <img src={ phone } alt='Phone' style={{ height: '100%' }} />
      </Box>
      <Box
        className={styles['custom-view']}
        sx={
          {
            bottom: '2%',
            left: '5%',
            height: {
              xs: '55%',
              md: '50%'
            }
          }
        }
      >
        <Box
          className={styles.close}
        >x</Box>
        <Box
          className={styles['text-box']}
        >
          <Box
            sx={
              {
                display: 'flex',
                alignItems: 'center'
              }
            }
          >
            <Box
              component={'figure'}
              className={styles.logo}
            >
              <img src={placeholder} alt='Logo' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Box>
            <Box>
              <Typography
                sx={
                  {
                    fontSize: '10px',
                    fontWeigth: '400',
                    color: getCssVar('--demo-mobile-gray')
                  }
                }
              >
                My business
              </Typography>
              <Typography
                sx={
                  {
                    fontSize: '7px',
                    fontWeigth: '400',
                    color: getCssVar('--demo-mobile-gray-l')
                  }
                }
              >
                Receipt 123
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={
                {
                  fontSize: '15px',
                  fontWeigth: '700',
                  color: getCssVar('--demo-mobile-gray-d')
                }
              }
            >
              $55,57 USD
            </Typography>
            <Typography
              sx={
                {
                  fontSize: '10px',
                  fontWeigth: '400',
                  color: getCssVar('--primary-buttons')
                }
              }
            >
              Cambiar moneda
            </Typography>
          </Box>
        </Box>
        <Box
          className={styles['custom-payment']}
        >
          <Box
            sx={
              {
                width: '100%',
                display: 'flex',
                overflow: 'hidden'
              }
            }
          >
            <PayCard />
            <PayCard />
          </Box>
          <Box>
            <Button
              className={styles.button}
              sx={
                {
                  backgroundColor: `${getCssVar('--primary-buttons')} !important`,
                  color: `${getCssVar('--white')} !important`
                }
              }
            >
              Pagar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MobileContent
