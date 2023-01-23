import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import phone from 'assets/demoLink/demo-link-phone.svg'
import placeholder from 'assets/placeholder.svg'
import { getCssVar } from 'theme'
import styles from './mobilecontent.module.css'
import PayCard from './payCard'
import CloseIcon from '@mui/icons-material/Close'
import './index.css'

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
        id={'mobilecontent-container'}
        sx={
          {
            height: {
              xs: '400px',
              md: '650px'
            }
          }
        }
      >
        <img src={ phone } alt='Phone' style={{ height: '100%' }} />
      </Box>
      <Box
        className={styles['custom-view']}
        id={'mobilecontent-custom-container'}
        sx={
          {
            bottom: {
              xs: '2.5%',
              md: '2%'
            },
            left: '5%',
            height: {
              xs: '45%',
              md: '50%'
            }
          }
        }
      >
        <Box
          className={styles.close}
          sx={
            {
              margin: {
                xs: '3px 3px 3px 0',
                md: '5px 5px 5px 0'
              }
            }
          }
        >
          <CloseIcon
            sx={
              {
                fontSize: {
                  xs: '12px',
                  md: '18px',
                  color: getCssVar('--dark-gray-text')
                }
              }
            }
          />
        </Box>
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
                id={'mobilecontent-business'}
                sx={
                  {
                    fontSize: {
                      xs: '8px',
                      md: '10px'
                    },
                    fontWeigth: '400',
                    color: getCssVar('--demo-mobile-gray')
                  }
                }
              >
                My business
              </Typography>
              <Typography
                id={'mobilecontent-receipt'}
                sx={
                  {
                    fontSize: {
                      xs: '5px',
                      md: '7px'
                    },
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
              id={'mobilecontent-amount'}
              sx={
                {
                  fontSize: {
                    xs: '12px',
                    md: '15px'
                  },
                  fontWeigth: '700',
                  color: getCssVar('--demo-mobile-gray-d')
                }
              }
            >
              $55,57 USD
            </Typography>
            <Typography
              id={'mobilecontent-currency'}
              sx={
                {
                  fontSize: {
                    xs: '8px',
                    md: '10px'
                  },
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
              id={'mobilecontent-button'}
              sx={
                {
                  backgroundColor: `${getCssVar('--primary-buttons')} !important`,
                  color: `${getCssVar('--white')} !important`,
                  height: {
                    xs: '25px !important',
                    md: '40px !important'
                  }
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
