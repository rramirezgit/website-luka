import { Box, Typography } from '@mui/material'
import styles from './product.module.css'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'

const Product = (): JSX.Element => {
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box
      className={styles.container}
    >
        <Box
          className={styles.image}
          sx={
            {
              height: {
                xs: '20px',
                sm: '40px',
                lg: '50px'
              },
              width: {
                xs: '20px',
                sm: '40px',
                lg: '50px'
              }
            }
          }
        ></Box>
        <Box>
            <Typography
              className={styles.text}
              sx={
                {
                  fontSize: {
                    xs: '4px !important',
                    sm: '8px !important',
                    lg: '10px !important'
                  },
                  fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                }
              }
            >
              Coach
            </Typography>
            <Typography
              className={styles.text}
              sx={
                {
                  fontSize: {
                    xs: '4px !important',
                    sm: '8px !important',
                    lg: '10px !important'
                  },
                  fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                }
              }
            >
              Leather Coach Bag
            </Typography>
            <Typography
              className={styles.text}
              sx={
                {
                  fontSize: {
                    xs: '4px !important',
                    sm: '8px !important',
                    lg: '10px !important'
                  },
                  fontFamily: demo.font?.label ? `${demo.font?.label} !important` : 'Open Sans'
                }
              }
            >
              Qty- 1
            </Typography>
        </Box>
    </Box>
  )
}

export default Product
