import Info from 'components/info'
import TextAndImg from 'components/layaouts/TextAndImg'
import Laptop from './laptop'
import style from './paymentLink.module.css'
import { Button } from '@mui/material'

import Square from 'components/square'
import { useNavigate } from 'react-router-dom'
import cardsArray from '../ourProducts/ourProductsArray'
import Box from '@mui/material/Box'

const PaymentLink = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = (): void => {
    navigate('demo-link')
  }
  return (
    <Box position={'relative'} id={cardsArray[1].id}>
      <TextAndImg
        className={style.layout}
        heightSx={{
          xs: 'auto',
          lg: '989px'
        }}
        flDirectionSx="column-reverse"
        sxTwo={{
          padding: {
            xs: '0px 0px 0px',
            lg: '0px 30px 0px 0px'
          },
          display: 'flex',
          justifyContent: 'center'
        }}
      >
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
            height: '48px',
            fontSize: '20px'
          }}
          onClick={handleClick}
        >
          View Demo
        </Button>

        <Laptop />

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
            color: 'primary_a',
            variant: 'contained',
            onclick: handleClick,
            sx: {
              display: {
                xs: 'none',
                lg: 'block'
              },
              width: '144px',
              height: '48px',
              fontSize: '16px'
            }
          }}
          size={{
            xs: '85%',
            lg: '100%',
            xl: '570px'
          }}
        />
      </TextAndImg>
      <Square
        color="#0878FF20"
        bottom={'0'}
        right={'0'}
        maxHeight={140}
        maxWidth={130}
      />
      <Square
        color="#5AE1E230"
        top={'0'}
        left={'0'}
        maxHeight={160}
        maxWidth={130}
      />
    </Box>
  )
}

export default PaymentLink
