import { Box, Typography } from '@mui/material'
import styles from './product.module.css'

const Product = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
    >
        <Box
          className={styles.image}
        ></Box>
        <Box>
            <Typography
              className={styles.text}
            >
              Coach
            </Typography>
            <Typography
              className={styles.text}
            >
              Leather Coach Bag
            </Typography>
            <Typography
              className={styles.text}
            >
              Qty- 1
            </Typography>
        </Box>
    </Box>
  )
}

export default Product
