import TextAndImg from 'components/layaouts/TextAndImg'
import imgGateway from 'assets/gateway/gateway.svg'
import Info from 'components/info'
import style from './gateway.module.css'
import { Button } from '@mui/material'
import Square from 'components/square'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const Gateway = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = (): void => {
    navigate('demo-gateway')
  }
  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <TextAndImg
        heightSx={{
          xs: 'auto',
          sm: '1530px',
          lg: '1000px'
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
            lg: '400px',
            xl: '570px'
          }}
        />
        <img src={imgGateway} alt="paymentLink" className={style.img} />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            margin: '20px 0px 40px 0px',
            display: {
              xs: 'block',
              lg: 'none'
            },
            width: '198px'
          }}
          onClick={handleClick}
        >
          view demo
        </Button>
      </TextAndImg>
      <Square
        color="#5AE1E230"
        bottom={'0'}
        left={'0'}
        maxHeight={160}
        maxWidth={130}
      />
    </Box>
  )
}

export default Gateway
