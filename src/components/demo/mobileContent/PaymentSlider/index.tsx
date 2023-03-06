import { Box } from '@mui/material'
import styles from './paymentslider.module.css'
import PayCard from './payCard'
import { useDraggable } from 'react-use-draggable-scroll'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { mobilePaymentMethods } from 'logic'

const PaymentSlider = (): JSX.Element => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref)
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        overflowX: 'auto',
        paddingLeft: '8px',
        cursor: 'grab',
        zIndex: 1
      }}
      {...events}
      ref={ref}
      draggable={true}
      className={styles.scroll}
    >
    {demo.currency?.value
      ? mobilePaymentMethods
        .find(method => method.label === demo.currency?.label)
        ?.methods.map((item, index) => (
          <PayCard
            type={item.type}
            key={index}
            label={item.label ?? ''}
            img={item.img ?? ''}
            width={item.width ?? 0}
            height={item.height ?? 0}
            shape={item.shape ?? ''}
            check={item.check ?? false}
          />
        ))
      : <>
        <PayCard type='card' check={true} />
        <PayCard type='other' check={false} />
      </>
    }
    </Box>
  )
}

export default PaymentSlider
