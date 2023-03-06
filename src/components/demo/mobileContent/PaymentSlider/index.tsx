import { Box } from '@mui/material'
import styles from './paymentslider.module.css'
import PayCard from './payCard'
import { useDraggable } from 'react-use-draggable-scroll'
import { useRef } from 'react'

const PaymentSlider = (): JSX.Element => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref)
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
      <PayCard type="card" />
      <PayCard type="paypal" />
    </Box>
  )
}

export default PaymentSlider
