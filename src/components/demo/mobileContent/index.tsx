import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import linkPhone from 'assets/demoLink/demo-link-phone.svg'
import gatewayPhone from 'assets/demoLink/demo-gateway-phone.svg'
import placeholder from 'assets/placeholder.svg'
import { getCssVar } from 'theme'
import styles from './mobilecontent.module.css'
import PayCard from './payCard'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import './index.css'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'

interface Props {
  type: 'gateway' | 'link'
}

const MobileContent = ({ type }: Props): JSX.Element => {
  const demo = useSelector((state: RootState) => state.demo)
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
      >
        <img src={ type === 'link' ? linkPhone : gatewayPhone } alt='Phone' style={{ height: '100%' }} />
      </Box>
      <Box
        className={styles['custom-view']}
        id={'mobilecontent-custom-container'}
        sx={
          {
            left: '4.5%',
            height: '50%',
            boxShadow: '0px -3.3448px 6.68961px rgba(0, 0, 0, 0.12)'
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
            id={'mobilecontent-close'}
            sx={
              {
                color: getCssVar('--dark-gray-text')
              }
            }
          />
        </Box>
        <Box
          className={styles['text-box']}
        >
          {
            type === 'link'
              ? <Box
                  sx={
                    {
                      display: 'flex',
                      alignItems: 'center'
                    }
                  }
                >
                <Box
                  component={'figure'}
                  id={'mobilecontent-logo'}
                  className={styles.logo}
                >
                  <img src={demo.imgUrl ? demo.imgUrl : placeholder} alt='Logo' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Box>
                <Box>
                  <Typography
                    id={'mobilecontent-business'}
                    sx={
                      {
                        fontWeigth: '400 !important',
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
                        fontWeigth: '400 !important',
                        color: getCssVar('--demo-mobile-gray-l')
                      }
                    }
                  >
                    Receipt 123
                  </Typography>
                </Box>
                </Box>
              : <Box>
                  <Typography
                    className={styles.text}
                    id={'mobilecontent-text'}
                  >
                    Seleccione un método de pago
                  </Typography>
                </Box>
          }
          <Box>
            <Typography
              id={'mobilecontent-amount'}
              sx={
                {
                  fontWeigth: '700 !important',
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
                  fontWeigth: '400 !important',
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
            className={styles['arrow-box']}
            id={'mobilecontent-arrow-box'}
            sx={
              {
                top: '-10px',
                left: '50%'
              }
            }
          >
            <KeyboardArrowUpIcon
              id={'mobilecontent-arrow'}
              className={styles.arrow}
            />
          </Box>
          <Box
            sx={
              {
                width: '100%',
                display: 'flex',
                overflow: 'hidden',
                paddingLeft: '5px'
              }
            }
          >
            <PayCard type='card' />
            <PayCard type='paypal' />
          </Box>
          <Box>
            <Button
              className={styles.button}
              id={'mobilecontent-button'}
              sx={
                {
                  backgroundColor: `#${demo.button} !important`,
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
