import TextAndImg from 'components/layaouts/TextAndImg'
import imgGateway from 'assets/gateway/gateway.png'
import Info from 'components/info'

const Gateway = (): JSX.Element => {
  return (
    <TextAndImg>
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
          onclick: () => {}
        }}
        size={{
          xs: '85%',
          lg: '400px',
          xl: '570px'
        }}
      />
      <img src={imgGateway} alt="paymentLink" />
    </TextAndImg>
  )
}

export default Gateway
