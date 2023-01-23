import { Box, Typography, Button } from '@mui/material'
import placeholder from 'assets/placeholder.svg'
import { getCssVar } from 'theme'
import PaymentBox from './paymentBox'
import styles from './desktopcontent.module.css'
import zelle from 'assets/demoLink/payment/zelle.png'
import paypal from 'assets/demoLink/payment/paypal.png'
import card from 'assets/demoLink/payment/card.png'

const DesktopContent = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
      sx={
        {
          backgroundColor: getCssVar('--primary-buttons-a')
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
            className={styles.logo}
            sx={
              {
                height: {
                  xs: '55px'
                },
                width: {
                  xs: '55px'
                }
              }
            }
          >
            <img src={placeholder} alt='Logo' style={{ maxHeight: '100%', maxWidth: '100%' }} />
          </Box>
          <Box
            className={styles['text-box']}
          >
            <Typography
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
              className={styles.message}
              sx={
                {
                  fontSize: {
                    xs: '10px !important'
                  }
                }
              }
            >
              Luka te ha solicitado un pago
            </Typography>
          </Box>
          <Typography
            className={styles.amount}
            sx={
              {
                fontSize: {
                  xs: '30px !important'
                }
              }
            }
          >
            100 <span className={styles.span}>USD</span>
          </Typography>
          <Typography
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
              borderColor={getCssVar('--primary-buttons')}
              text='Crédito / Débito'
              img={card}
            />
            <PaymentBox
              text='Paypal'
              img={paypal}
            />
            <PaymentBox
              text='Zelle'
              img={zelle}
            />
          </Box>
          <Box
            className={styles['gray-box']}
          ></Box>
          <Box
            className={styles['gray-box']}
          ></Box>
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
  )
}

export default DesktopContent
