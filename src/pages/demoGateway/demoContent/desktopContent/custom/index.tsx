import { Box, Typography, Button } from '@mui/material'
import PaymentBox from 'components/demo/paymentBox'
import { getCssVar } from 'theme'
import styles from './custom.module.css'
import zelle from 'assets/demoLink/payment/zelle.png'
import paypal from 'assets/demoLink/payment/paypal.png'
import card from 'assets/demoLink/payment/card.png'

const Custom = (): JSX.Element => {
  return (
    <Box>
        <Box>
            <Typography
              className={styles.title}
            >
              Payments
            </Typography>
        </Box>
        <Box
          id={'demogateway-desktop-custom-container'}
          className={styles.container}
        >
          <Box
            className={styles.paybox}
          >
            <PaymentBox
              borderColor={getCssVar('--primary-buttons')}
              text='Crédito'
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
            id={'demogateway-desktop-graybox-1'}
            className={styles['gray-box']}
          ></Box>
          <Box
            id={'demogateway-desktop-graybox-2'}
            className={styles['gray-box']}
          ></Box>
          <Box
            id={'demogateway-desktop-graybox-3'}
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
  )
}

export default Custom
