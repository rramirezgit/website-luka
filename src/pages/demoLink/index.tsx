import styles from './demolink.module.css'
import { Box } from '@mui/material'
import DemoMenu from 'components/demoMenu'
import DemoHeader from 'components/demoHeader'

const DemoLink = (): JSX.Element => {
  return (
    <Box
      className={styles.demolink}
    >
      <DemoMenu />
      <Box
        className={styles['content-container']}
        sx={
          {
            width: 'calc(100% - 400px)'
          }
        }
      >
        <DemoHeader />
        <Box>
          Contenido
        </Box>
      </Box>
    </Box>
  )
}

export default DemoLink
