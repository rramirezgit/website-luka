import { Box, Typography, Button } from '@mui/material'
import { getCssVar } from 'theme'
import styles from './desktopcontent.module.css'
import './index.css'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'
import { currencyValues } from 'logic'
import config from 'const'
import PaymentSlider from 'components/demo/paymentSlider'

const DesktopContent = (): JSX.Element => {
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box
      className={styles.container}
      id={'demolink-desktop-container'}
      sx={{
        backgroundColor: demo.background
          ? `#${demo.background}`
          : getCssVar('--primary-buttons-a'),
        width: {
          xs: '90%',
          md: '80%'
        }
      }}
    >
      <Box className={styles.header}>
        <Box className={styles['header-flex']}>
          <Box
            className={styles.circle}
            sx={{
              backgroundColor: 'red'
            }}
          ></Box>
          <Box
            className={styles.circle}
            sx={{
              backgroundColor: 'yellow'
            }}
          ></Box>
          <Box
            className={styles.circle}
            sx={{
              backgroundColor: 'green'
            }}
          ></Box>
        </Box>
      </Box>
      <Box className={styles.content}>
        <Box
          className={styles.product}
          sx={{
            padding: {
              xs: '20px 20px'
            }
          }}
        >
          <Box
            className={styles['logo-container']}
            id={'demolink-desktop-logo-container'}
          >
            <Box
              id={'demolink-desktop-logo'}
              className={styles.logo}
              sx={{
                height: '55px',
                width: '55px'
              }}
            >
              <img
                src={
                  demo.imgUrl
                    ? demo.imgUrl
                    : `${config.UrlBaseImg}placeholder.svg`
                }
                alt="Logo"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </Box>
          </Box>
          <Box className={styles['text-box']}>
            <Typography
              id={'demolink-desktop-title'}
              className={styles.title}
              sx={{
                fontSize: {
                  xs: '18px !important',
                  fontFamily: demo.font?.label
                    ? `${demo.font?.label} !important`
                    : 'Open Sans'
                }
              }}
            >
              {demo.language?.value === 'EN' ? 'Invoice' : 'Factura'}
            </Typography>
            <Typography
              id={'demolink-desktop-text'}
              className={styles.message}
              sx={{
                fontSize: {
                  xs: '10px !important',
                  fontFamily: demo.font?.label
                    ? `${demo.font?.label} !important`
                    : 'Open Sans'
                }
              }}
            >
              {demo.title}
            </Typography>
          </Box>
          <Typography
            id={'demolink-desktop-amount'}
            className={styles.amount}
            sx={{
              fontSize: {
                xs: '30px !important',
                fontFamily: demo.font?.label
                  ? `${demo.font?.label} !important`
                  : 'Open Sans'
              }
            }}
          >
            100{' '}
            <span
              id={'demolink-desktop-span'}
              className={styles.span}
              style={{
                fontFamily: demo.font?.label
                  ? `${demo.font?.label} !important`
                  : 'Open Sans'
              }}
            >
              {demo.currency?.value
                ? currencyValues.filter(
                  value => value.label === demo.currency?.label
                )[0].value
                : 'USD'}
            </span>
          </Typography>
          <Typography
            id={'demolink-desktop-title'}
            className={styles.currency}
            sx={{
              fontSize: {
                xs: '10px !important',
                fontFamily: demo.font?.label
                  ? `${demo.font?.label} !important`
                  : 'Open Sans'
              }
            }}
          >
            {demo.language?.value === 'EN'
              ? 'Pay with another currency'
              : 'Pagar en otra moneda'}
          </Typography>
          <PaymentSlider />
          <Box
            className={styles['gray-box']}
            id={'demolink-desktop-gray-1'}
          ></Box>
          <Box
            className={styles['gray-box']}
            id={'demolink-desktop-gray-2'}
          ></Box>
          <Button
            id={'demolink-desktop-button'}
            className={styles.button}
            sx={{
              backgroundColor: demo.button
                ? `#${demo.button} !important`
                : getCssVar('--primary-buttons'),
              color: `${getCssVar('--white')} !important`,
              borderRadius: `${
                typeof demo.border === 'number' ? demo.border : 8
              }px !important`,
              fontFamily: demo.font?.label
                ? `${demo.font?.label} !important`
                : 'Open Sans',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={`${config.UrlBaseImg}demo/lock.svg`}
              style={{ marginRight: '10px', height: '15px' }}
              alt="Lock"
            />
            {demo.language?.value === 'EN' ? 'Pay' : 'Pagar'}{' '}
            {demo.currency?.value ? demo.currency?.value : '$'} 55,57
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DesktopContent
