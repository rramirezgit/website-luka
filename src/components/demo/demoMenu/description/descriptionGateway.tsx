import { Box, Typography } from '@mui/material'
import styles from './description.module.css'

const DescriptionGateway = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
    >
      <Box
        className={styles['text-container']}
      >
        <Typography
          className={styles.text}
        >
          B2B Payment gateway embedded solution. Manages multi currency and multi payment methods with an online conciliation dashboard.
        </Typography>
      </Box>
    </Box>
  )
}

export default DescriptionGateway
