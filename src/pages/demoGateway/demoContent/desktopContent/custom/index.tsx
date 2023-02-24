import { Box, Typography, Button } from '@mui/material'
import PaymentBox from 'components/demo/paymentBox'
import { getCssVar } from 'theme'
import styles from './custom.module.css'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'
import config from 'const'

const Custom = (): JSX.Element => {
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box>
        <Box>
            <Typography
              className={styles.title}
              sx={
                {
                  fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                }
              }
            >
              {demo.language?.value === 'EN' ? 'Payments' : 'Pagos'}
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
              borderColor={demo.button ? `#${demo.button}` : getCssVar('--primary-buttons')}
              text='Credit'
              img={`${config.UrlBaseImg}demoLink/payment/card.svg`}
              borderRadius={typeof demo.border === 'number' ? demo.border : 8}
            />
            <PaymentBox
              text='Paypal'
              img={`${config.UrlBaseImg}demoLink/payment/paypal.svg`}
              borderRadius={typeof demo.border === 'number' ? demo.border : 8}
            />
            <PaymentBox
              text='Zelle'
              img={`${config.UrlBaseImg}demoLink/payment/zelle.svg`}
              borderRadius={typeof demo.border === 'number' ? demo.border : 8}
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
                backgroundColor: demo.button ? `#${demo.button} !important` : getCssVar('--primary-buttons'),
                color: `${getCssVar('--white')} !important`,
                borderRadius: `${typeof demo.border === 'number' ? demo.border : 8}px !important`,
                fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
              }
            }
          >
            {demo.language?.value === 'EN' ? 'Pay' : 'Pagar'}
          </Button>
        </Box>
    </Box>
  )
}

export default Custom
