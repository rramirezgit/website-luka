import { Box } from '@mui/material'
import { useDraggable } from 'react-use-draggable-scroll'
import { useRef } from 'react'
import PaymentBox from 'components/demo/paymentSlider/paymentBox'
import { paymentMethods } from 'logic'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { getCssVar } from 'theme'
import config from 'const'
import styles from './paymentslider.module.css'

const PaymentSlider = (): JSX.Element => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref)
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box
      {...events}
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowX: 'auto',
        cursor: 'grab'
      }}
      ref={ref}
      draggable={true}
      className={styles.payment}
    >
      {demo.currency?.value
        ? paymentMethods
          .find(method => method.label === demo.currency?.label)
          ?.methods.map((item, index) => (
            <PaymentBox
              key={index}
              borderColor={
                demo.button
                  ? index === 0
                    ? `#${demo.button}`
                    : getCssVar('--box-gray')
                  : getCssVar('--primary-buttons')
              }
              text={item.label}
              img={item.img}
              imgWidth={item.width}
              imgHeight={item.height}
              borderRadius={typeof demo.border === 'number' ? demo.border : 8}
            />
          ))
        : <>
          <PaymentBox
            borderColor={
              demo.button ? `#${demo.button}` : getCssVar('--primary-buttons')
            }
            text="Credit"
            img={`${config.UrlBaseImg}demoLink/payment/card.svg`}
            borderRadius={typeof demo.border === 'number' ? demo.border : 8}
          />
          <PaymentBox
            text="Paypal"
            img={`${config.UrlBaseImg}demoLink/payment/paypal.svg`}
            borderRadius={typeof demo.border === 'number' ? demo.border : 8}
          />
          <PaymentBox
            text="Zelle"
            img={`${config.UrlBaseImg}demoLink/payment/zelle.svg`}
            borderRadius={typeof demo.border === 'number' ? demo.border : 8}
          />
        </>
      }
    </Box>
  )
}

export default PaymentSlider
