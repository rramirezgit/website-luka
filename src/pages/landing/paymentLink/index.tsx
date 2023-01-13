import Info from 'components/info'
import TextAndImg from 'components/layaouts/TextAndImg'
import Laptop from './laptop'
import style from './paymentLink.module.css'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'

const PaymentLink = (): JSX.Element => {
  return (
    <Box position={'relative'}>
      <TextAndImg
        className={style.layout}
        heightSx={{
          xs: '1514px',
          lg: '989px'
        }}
        sxTwo={{
          padding: {
            xs: '98px 0px 0px',
            lg: '0px 30px 0px 0px'
          },
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {
          <Box
            className={style.laptop}
            sx={{
              display: {
                xs: 'none',
                lg: 'block'
              }
            }}
          >
            <Laptop />
          </Box>
        }
        <Info
          textList={[
            'Receive and send payments, conveniently simple to everyone!',
            'Request and execute payments enabling local & international payments methods',
            'Use the messaging channel best for your business: SMS, WhatsApp, Telegram, email, social media or your app.',
            'Make easy and friendly the way payments are experienced by your business users.',
            'Benefit from an easy to use web control panel to manage your payment links.'
          ]}
          tags={['INTEGRATION VIA API', 'GLOBAL REACH', 'MULTIPLE USE CASES']}
          titleBlue="Payment Link"
          title="In&Out"
          button={{
            text: 'View Demo',
            color: 'secondary',
            variant: 'outlined',
            onclick: () => {},
            sx: {
              display: {
                xs: 'none',
                lg: 'block'
              }
            }
          }}
          size={{
            xs: '85%',
            lg: '100%',
            xl: '570px'
          }}
        />
        {
          <Box
            className={style.laptopXS}
            sx={{
              display: {
                xs: 'block',
                lg: 'none'
              }
            }}
          >
            <Laptop />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                marginTop: '30px',
                display: {
                  xs: 'block',
                  lg: 'none'
                },
                width: '198px',
                left: '27%'
              }}
            >
              demo
            </Button>
          </Box>
        }
      </TextAndImg>
    </Box>
  )
}

export default PaymentLink
