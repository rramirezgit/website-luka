import { Box, Typography } from '@mui/material'
import styles from './details.module.css'
import Product from './product'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'

const Details = (): JSX.Element => {
  const demo = useSelector((state: RootState) => state.demo)
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
            },
            fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
          }
        }
      >
        {demo.language?.value === 'EN' ? 'Checkout' : 'Carrito'}
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
              fontSize: '14px',
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {demo.language?.value === 'EN' ? 'Order Summary' : 'Resumen de la Orden'}
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
              fontSize: '14px',
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {demo.language?.value === 'EN' ? 'Order Details' : 'Detalles de la Orden'}
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
          sx={
            {
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {demo.language?.value === 'EN' ? 'Sub Total' : 'Sub Total'}
        </Typography>
        <Typography
          className={styles.text}
          sx={
            {
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {`${demo.currency?.value ? demo.currency?.value : '$'}119.69`}
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
          sx={
            {
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {demo.language?.value === 'EN' ? 'Discount' : 'Descuento'}
        </Typography>
        <Typography
          className={styles.text}
          sx={
            {
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {`-${demo.currency?.value ? demo.currency?.value : '$'}13.40`}
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
          sx={
            {
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {demo.language?.value === 'EN' ? 'Delivery Fee' : 'Costo del envío'}
        </Typography>
        <Typography
          className={styles.text}
          sx={
            {
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {`-${demo.currency?.value ? demo.currency?.value : '$'}0.00`}
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
          sx={
            {
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {demo.language?.value === 'EN' ? 'Grand Total' : 'Total'}
        </Typography>
        <Typography
          className={styles.text}
          sx={
            {
              fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
            }
          }
        >
          {`${demo.currency?.value ? demo.currency?.value : '$'}106,29`}
        </Typography>
      </Box>
    </Box>
  )
}

export default Details
