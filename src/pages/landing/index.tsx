import Footer from 'components/footer'
import Gateway from './gateway'
import Home from './home'
import OurProducts from './ourProducts'
import PaymentLink from './paymentLink'
import Ready from './ready'
import VPOS from './VPOS'
import WhyUs from './whyUs'

const Landing = (): JSX.Element => {
  return (
    <>
      <Home />
      <OurProducts />
      <Gateway />
      <PaymentLink />
      <VPOS />
      <WhyUs />
      <Ready />
      <Footer />
    </>
  )
}

export default Landing
