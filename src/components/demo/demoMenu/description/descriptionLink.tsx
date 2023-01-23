import { Box, Typography } from '@mui/material'
import styles from './description.module.css'

const DescriptionLink = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
    >
      <Box
        className={styles['text-container']}
        sx={
          {
            marginBottom: '20px'
          }
        }
      >
        <Typography
          className={styles.text}
        >
          <span className={styles['blue-text']}>IN</span> <b>Paylink:</b> Receive and send payments, conveniently simple to everyone!
        </Typography>
      </Box>
      <Box
        className={styles['text-container']}
      >
        <Typography
          className={styles.text}
        >
          <span className={styles['blue-text']}>OUT</span> <b>Paylink:</b> Request and execute payments enabling local & international payments methods
        </Typography>
      </Box>
    </Box>
  )
}

export default DescriptionLink
