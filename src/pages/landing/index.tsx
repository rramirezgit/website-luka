import Footer from 'components/footer'
import Gateway from './gateway'
import Home from './home'
import OurProducts from './ourProducts'
import PaymentLink from './paymentLink'
import World from './world'
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
      <World />
      <Footer />
    </>
  )
}

export default Landing
