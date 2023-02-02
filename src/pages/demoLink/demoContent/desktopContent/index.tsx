import { Box, Typography, Button } from '@mui/material'
import placeholder from 'assets/placeholder.svg'
import { getCssVar } from 'theme'
import PaymentBox from '../../../../components/demo/paymentBox'
import styles from './desktopcontent.module.css'
import zelle from 'assets/demoLink/payment/zelle.png'
import paypal from 'assets/demoLink/payment/paypal.png'
import card from 'assets/demoLink/payment/card.png'
import './index.css'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'

const DesktopContent = (): JSX.Element => {
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box
      className={styles.container}
      id={'demolink-desktop-container'}
      sx={
        {
          backgroundColor: demo.background ? `#${demo.background}` : getCssVar('--primary-buttons-a')
        }
      }
    >
      <Box
        className={styles.header}
      >
        <Box
          className={styles['header-flex']}
        >
          <Box
            className={styles.circle}
            sx={
              {
                backgroundColor: 'red'
              }
            }
          ></Box>
          <Box
            className={styles.circle}
            sx={
              {
                backgroundColor: 'yellow'
              }
            }
          ></Box>
          <Box
            className={styles.circle}
            sx={
              {
                backgroundColor: 'green'
              }
            }
          ></Box>
        </Box>
      </Box>
      <Box
        className={styles.content}
      >
        <Box
          className={styles.product}
          sx={
            {
              padding: {
                xs: '20px 20px'
              }
            }
          }
        >
          <Box
            id={'demolink-desktop-logo'}
            className={styles.logo}
            sx={
              {
                height: '55px',
                width: '55px'
              }
            }
          >
            <img src={demo.imgUrl ? demo.imgUrl : placeholder} alt='Logo' style={{ maxHeight: '100%', maxWidth: '100%' }} />
          </Box>
          <Box
            className={styles['text-box']}
          >
            <Typography
              id={'demolink-desktop-title'}
              className={styles.title}
              sx={
                {
                  fontSize: {
                    xs: '18px !important'
                  }
                }
              }
            >
              Invoice
            </Typography>
            <Typography
              id={'demolink-desktop-text'}
              className={styles.message}
              sx={
                {
                  fontSize: {
                    xs: '10px !important'
                  }
                }
              }
            >
              {demo.title}
            </Typography>
          </Box>
          <Typography
            id={'demolink-desktop-amount'}
            className={styles.amount}
            sx={
              {
                fontSize: {
                  xs: '30px !important'
                }
              }
            }
          >
            100 <span id={'demolink-desktop-span'} className={styles.span}>USD</span>
          </Typography>
          <Typography
            id={'demolink-desktop-title'}
            className={styles.currency}
            sx={
              {
                fontSize: {
                  xs: '10px !important'
                }
              }
            }
          >
            Pagar en otra moneda
          </Typography>
          <Box
            className={styles.payment}
          >
            <PaymentBox
              borderColor={demo.button ? `#${demo.button}` : getCssVar('--primary-buttons')}
              text='Crédito'
              img={card}
              borderRadius={demo.border}
            />
            <PaymentBox
              text='Paypal'
              img={paypal}
              borderRadius={demo.border}
            />
            <PaymentBox
              text='Zelle'
              img={zelle}
              borderRadius={demo.border}
            />
          </Box>
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
            sx={
              {
                backgroundColor: demo.button ? `#${demo.button} !important` : getCssVar('--primary-buttons'),
                color: `${getCssVar('--white')} !important`,
                borderRadius: `${demo.border}px !important`
              }
            }
          >
            Pagar
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DesktopContent
