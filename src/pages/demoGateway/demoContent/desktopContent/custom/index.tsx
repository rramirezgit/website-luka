import { Box, Typography } from '@mui/material'
import styles from './custom.module.css'

const Custom = (): JSX.Element => {
  return (
    <Box>
        <Box>
            <Typography
              className={styles.title}
            >
              Payments
            </Typography>
        </Box>
    </Box>
  )
}

export default Custom
