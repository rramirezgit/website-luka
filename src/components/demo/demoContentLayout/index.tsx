import { Box, Typography } from '@mui/material'
import styles from './contentlayout.module.css'
import './index.css'

interface LayoutProps {
  children: JSX.Element
}

const DemoContentLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box
      className={styles.container}
    >
      <Box
        className={styles.content}
        id={'demo-content'}
      >
        {children}
      </Box>
      <Box
        sx={
          {
            marginTop: '25px'
          }
        }
      >
        <Typography
          className={styles.text}
        >
          Clear All
        </Typography>
      </Box>
    </Box>
  )
}

export default DemoContentLayout
