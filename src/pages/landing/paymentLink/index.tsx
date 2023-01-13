import Info from 'components/info'
import TextAndImg from 'components/layaouts/TextAndImg'
import Laptop from './laptop'
import style from './paymentLink.module.css'

const PaymentLink = (): JSX.Element => {
  return (
    <TextAndImg className={style.layout}>
      <Laptop />
      <Info
        textList={[
          'Receive and send payments, conveniently simple to everyone!',
          'Request and execute payments enabling local & international payments methods',
          'Use the messaging channel best for your business: SMS, WhatsApp, Telegram, email, social media or your app.',
          'Make easy and friendly the way payments are experienced by your business users.',
          'Benefit from an easy to use web control panel to manage your payment links.'
        ]}
        tags={['integration via api', 'GLOBAL REACH', 'MULTIPLE USE CASES']}
        titleBlue="Payment Link"
        title="In&Out"
        button={{
          text: 'View Demo',
          color: 'secondary',
          variant: 'outlined',
          onclick: () => {}
        }}
        size={{
          xs: '85%',
          lg: '492px',
          xl: '570px'
        }}
      />
    </TextAndImg>
  )
}

export default PaymentLink
