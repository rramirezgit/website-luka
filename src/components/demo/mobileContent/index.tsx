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
        <img loading='lazy' src={ type === 'link' ? linkPhone : gatewayPhone } alt='Phone' style={{ height: '100%' }} />
      </Box>
      <Box
        className={styles['custom-view']}
        id={'mobilecontent-custom-container'}
        sx={
          {
            height: '50%',
            boxShadow: '0px -3.3448px 6.68961px rgba(0, 0, 0, 0.12)'
          }
        }
      >
        <Box
          className={styles.close}
          sx={
            {
              margin: '10px 8px 8px 8px'
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
                      alignItems: 'flex-start'
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
                        color: getCssVar('--demo-mobile-gray'),
                        fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                      }
                    }
                  >
                    {demo.language?.value === 'EN' ? 'My business' : 'Mi negocio'}
                  </Typography>
                  <Typography
                    id={'mobilecontent-receipt'}
                    sx={
                      {
                        fontWeigth: '400 !important',
                        color: getCssVar('--demo-mobile-gray-l'),
                        fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                      }
                    }
                  >
                    {demo.language?.value === 'EN' ? 'Receipt 123' : 'Recibo 123'}
                  </Typography>
                </Box>
                </Box>
              : <Box>
                  <Typography
                    className={styles.text}
                    id={'mobilecontent-text'}
                    sx={
                      {
                        fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                      }
                    }
                  >
                    {demo.language?.value === 'EN' ? 'Select a payment method' : 'Seleccione un método'}
                  </Typography>
                </Box>
          }
          <Box>
            <Typography
              id={'mobilecontent-amount'}
              sx={
                {
                  fontWeigth: '700 !important',
                  color: getCssVar('--demo-mobile-gray-d'),
                  fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                }
              }
            >
              {`${demo.currency?.value ? demo.currency?.value : '$'}55,57 ${demo.currency?.value === '$' ? 'USD' : 'EUR'}`}
            </Typography>
            <Typography
              id={'mobilecontent-currency'}
              sx={
                {
                  fontWeigth: '400 !important',
                  color: getCssVar('--primary-buttons'),
                  fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                }
              }
            >
              {demo.language?.value === 'EN' ? 'Change currency' : 'Cambiar moneda'}
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
                left: '48%'
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
                paddingLeft: '8px'
              }
            }
          >
            <PayCard type='card' />
            <PayCard type='paypal' />
          </Box>
          <Box
            sx={
              {
                padding: '0 10px'
              }
            }
          >
            <Button
              className={styles.button}
              id={'mobilecontent-button'}
              sx={
                {
                  backgroundColor: `#${demo.button} !important`,
                  color: `${getCssVar('--white')} !important`,
                  fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                }
              }
            >
              {demo.language?.value === 'EN' ? 'Pay' : 'Pagar'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MobileContent
