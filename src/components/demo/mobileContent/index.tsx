/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable multiline-ternary */
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { getCssVar } from 'theme'
import styles from './mobilecontent.module.css'
import PayCard from './payCard'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'
import { currencyValues } from 'logic'
import config from 'const'
import './index.css'

interface Props {
  type: 'gateway' | 'link'
  onLoad: () => void
}

const MobileContent = ({ type, onLoad }: Props): JSX.Element => {
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <Box id={'mobilecontent-container'}>
        <img
          loading="lazy"
          src={
            type === 'link'
              ? `${config.UrlBaseImg}demoLink/demo-link-phone.svg`
              : `${config.UrlBaseImg}demoLink/demo-gateway-phone.svg`
          }
          alt="Phone"
          style={{ height: '100%' }}
          onLoad={() => onLoad()}
        />
      </Box>
      <Box
        className={styles['custom-view']}
        id={'mobilecontent-custom-container'}
        sx={{
          height: '50%',
          boxShadow: '0px -3.3448px 6.68961px rgba(0, 0, 0, 0.12)'
        }}
      >
        <Box
          className={styles.close}
          sx={{
            margin: '10px 8px 4px 8px'
          }}
        >
          <CloseIcon
            id={'mobilecontent-close'}
            sx={{
              color: getCssVar('--dark-gray-text')
            }}
          />
        </Box>
        <Box className={styles['text-box']}>
          {type === 'link' ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              <Box
                component={'figure'}
                id={'mobilecontent-logo'}
                className={styles.logo}
              >
                <img
                  src={
                    demo.imgUrl
                      ? demo.imgUrl
                      : `${config.UrlBaseImg}placeholder.svg`
                  }
                  alt="Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
              <Box>
                <Typography
                  id={'mobilecontent-business'}
                  sx={{
                    fontWeigth: '400 !important',
                    color: getCssVar('--demo-mobile-gray'),
                    fontFamily: demo.font?.label
                      ? `${demo.font?.label} !important`
                      : 'Open Sans'
                  }}
                >
                  {demo.language?.value === 'EN' ? 'My business' : 'Mi negocio'}
                </Typography>
                <Typography
                  id={'mobilecontent-receipt'}
                  sx={{
                    fontWeigth: '400 !important',
                    color: getCssVar('--demo-mobile-gray-l'),
                    fontFamily: demo.font?.label
                      ? `${demo.font?.label} !important`
                      : 'Open Sans'
                  }}
                >
                  {demo.language?.value === 'EN' ? 'Receipt 123' : 'Recibo 123'}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography
                className={styles.text}
                id={'mobilecontent-text'}
                sx={{
                  fontFamily: demo.font?.label
                    ? `${demo.font?.label} !important`
                    : 'Open Sans'
                }}
              >
                {demo.language?.value === 'EN'
                  ? 'Select a payment method'
                  : 'Seleccione un método'}
              </Typography>
            </Box>
          )}
          <Box>
            <Typography
              id={'mobilecontent-amount'}
              sx={{
                fontWeigth: '700 !important',
                color: getCssVar('--demo-mobile-gray-d'),
                fontFamily: demo.font?.label
                  ? `${demo.font?.label} !important`
                  : 'Open Sans'
              }}
            >
              {`${demo.currency?.value ? demo.currency?.value : '$'}55,57 ${
                demo.currency?.value
                  ? currencyValues.filter(
                      value => value.label === demo.currency?.label
                    )[0].value
                  : 'USD'
              }`}
            </Typography>
            <Typography
              id={'mobilecontent-currency'}
              sx={{
                fontWeigth: '400 !important',
                color: getCssVar('--primary-buttons'),
                fontFamily: demo.font?.label
                  ? `${demo.font?.label} !important`
                  : 'Open Sans'
              }}
            >
              {demo.language?.value === 'EN'
                ? 'Change currency'
                : 'Cambiar moneda'}
            </Typography>
          </Box>
        </Box>
        <Box className={styles['custom-payment']}>
          <Box
            className={styles['arrow-box']}
            id={'mobilecontent-arrow-box'}
            sx={{
              top: '-10px',
              left: '46%'
            }}
          >
            <KeyboardArrowUpIcon
              id={'mobilecontent-arrow'}
              className={styles.arrow}
            />
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              overflow: 'hidden',
              paddingLeft: '8px'
            }}
          >
            <PayCard type="card" />
            <PayCard type="paypal" />
          </Box>
          <Box
            sx={{
              padding: '0 10px'
            }}
          >
            <Button
              className={styles.button}
              id={'mobilecontent-button'}
              sx={{
                backgroundColor: `#${demo.button} !important`,
                color: `${getCssVar('--white')} !important`,
                fontFamily: demo.font?.label
                  ? `${demo.font?.label} !important`
                  : 'Open Sans',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img id='mobilecontent-lock' alt='Lock' src={`${config.UrlBaseImg}demo/lock.svg`} style={{ marginRight: '10px' }} />
              {demo.language?.value === 'EN' ? 'Pay' : 'Pagar'} {demo.currency?.value ? demo.currency?.value : '$'} 55,57
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MobileContent
