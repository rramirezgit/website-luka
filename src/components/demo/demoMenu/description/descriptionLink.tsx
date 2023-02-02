import { Box, Switch, Typography } from '@mui/material'
import styles from './description.module.css'

const DescriptionLink = (): JSX.Element => {
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
          <span className={styles['blue-text']}>Pay-IN</span><b>:</b> Receive payments, conveniently simple to everyone!
        </Typography>
      </Box>
      <Box
        className={styles['text-container']}
      >
        <Typography
          className={styles.text}
        >
          <span className={styles['blue-text']}>Pay-OUT</span><b>:</b> Send payments enabling local & international payments methods.
        </Typography>
      </Box>
      <Box
      >
        <Switch />
      </Box>
    </Box>
  )
}

export default DescriptionLink
