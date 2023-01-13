import TextAndImg from 'components/layaouts/TextAndImg'
import imgGateway from 'assets/gateway/gateway.png'
import Info from 'components/info'
import style from './gateway.module.css'
import { Button } from '@mui/material'

const Gateway = (): JSX.Element => {
  return (
    <TextAndImg
      heightSx={{
        xs: '1514px',
        lg: '1159px'
      }}
      sxOne={{
        padding: {
          xs: '99px 0px 0px',
          lg: '0px 0px 0px 63px'
        },
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Info
        textList={[
          'Making payments seamless, your way!',
          'Embed our solution and start processing multi currency payments with multiple payment methods.',
          'Make the gateway say and look what you want. Integrate the solution in just a blink through our APIs.',
          'Enjoy an easy to use web control panel to manage payment transactions'
        ]}
        titleBlue="Gateway"
        title="Multi Currency"
        button={{
          text: 'view demo',
          color: 'primary',
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
          lg: '400px',
          xl: '570px'
        }}
      />
      <img src={imgGateway} alt="paymentLink" className={style.img} />
      <Button
        variant="contained"
        color="secondary"
        sx={{
          marginTop: '30px',
          display: {
            xs: 'block',
            lg: 'none'
          },
          width: '198px'
        }}
      >
        view demo
      </Button>
    </TextAndImg>
  )
}

export default Gateway
