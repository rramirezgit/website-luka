import { Box, Typography } from '@mui/material'
import styles from './product.module.css'

const Product = (): JSX.Element => {
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
                  }
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
                  }
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
                  }
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
