import { Box, Typography } from '@mui/material'
import styles from './details.module.css'
import Product from './product'

const Details = (): JSX.Element => {
  return (
    <Box>
      <Typography
        className={styles.title}
        sx={
          {
            fontSize: '20px',
            marginBottom: '20px'
          }
        }
      >
        Checkout
      </Typography>
      <Box
        className={styles.underline}
      >
        <Typography
          className={styles.title}
          sx={
            {
              fontSize: '14px'
            }
          }
        >
          Order Summary
        </Typography>
      </Box>
      <Box>
        <Product />
        <Product />
      </Box>
      <Box
        className={styles.underline}
      >
        <Typography
          className={styles.title}
          sx={
            {
              fontSize: '14px'
            }
          }
        >
          Order Details
        </Typography>
      </Box>
      <Box
        className={styles['price-container']}
      >
        <Typography
          className={styles.text}
        >
          Sub Total
        </Typography>
        <Typography
          className={styles.text}
        >
          $119.69
        </Typography>
      </Box>
      <Box
        className={styles['price-container']}
      >
        <Typography
          className={styles.text}
        >
          Discount
        </Typography>
        <Typography
          className={styles.text}
        >
          -$13.40
        </Typography>
      </Box>
      <Box
        className={styles['price-container']}
      >
        <Typography
          className={styles.text}
        >
          Delivery Fee
        </Typography>
        <Typography
          className={styles.text}
        >
          -$0.00
        </Typography>
      </Box>
      <Box
        className={styles['price-container']}
      >
        <Typography
          className={styles.text}
        >
          Grand Total
        </Typography>
        <Typography
          className={styles.text}
        >
          $106.29
        </Typography>
      </Box>
    </Box>
  )
}

export default Details
