import { Box, Typography } from '@mui/material'
import styles from './details.module.css'
import Product from './product'

const Details = (): JSX.Element => {
  return (
    <Box
      sx={
        {
          display: {
            xs: 'flex',
            lg: 'block'
          },
          alignItems: {
            xs: 'center',
            lg: 'unset'
          },
          justifyContent: {
            xs: 'space-between',
            lg: 'unset'
          }
        }
      }
    >
      <Typography
        className={styles.title}
        sx={
          {
            fontSize: {
              xs: '12px',
              sm: '14px',
              lg: '20px'
            },
            marginBottom: {
              xs: '0',
              lg: '20px'
            }
          }
        }
      >
        Checkout
      </Typography>
      <Box
        className={styles.underline}
        sx={
          {
            display: {
              xs: 'none',
              lg: 'block'
            }
          }
        }
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
      <Box
        sx={
          {
            display: {
              xs: 'flex',
              lg: 'block'
            },
            alignItems: {
              xs: 'center',
              lg: 'unset'
            },
            justifyContent: {
              xs: 'space-between',
              lg: 'unset'
            }
          }
        }
      >
        <Box
          sx={
            {
              marginRight: {
                xs: '10px',
                sm: '20px',
                md: '20px',
                lg: '0'
              }
            }
          }
          id={'demogateway-product-1'}
        >
          <Product />
        </Box>
        <Box>
          <Product />
        </Box>
      </Box>
      <Box
        className={styles.underline}
        sx={
          {
            display: {
              xs: 'none',
              lg: 'block'
            }
          }
        }
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
        sx={
          {
            display: {
              xs: 'none',
              lg: 'flex'
            }
          }
        }
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
        sx={
          {
            display: {
              xs: 'none',
              lg: 'flex'
            }
          }
        }
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
        sx={
          {
            display: {
              xs: 'none',
              lg: 'flex'
            }
          }
        }
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
        sx={
          {
            display: {
              xs: 'none',
              lg: 'flex'
            }
          }
        }
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
