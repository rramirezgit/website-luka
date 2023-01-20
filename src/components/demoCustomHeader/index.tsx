import brush from 'assets/demoLink/brush.png'
import logoLuka from 'assets/footer/luka.png'
import tooltip from 'assets/demoLink/tooltip.png'
import { Box } from '@mui/material'
import styles from './customheader.module.css'

interface Props {
  customization: () => void
}

const DemoCustomHeader = ({ customization }: Props): JSX.Element => {
  return (
    <Box
      className={styles.container}
    >
      <Box
        component={'figure'}
        className={styles.figure}
      >
        <img src={logoLuka} alt='Logo' style={{ maxWidth: '100%' }} />
      </Box>
      <Box
        className={styles['custom-box']}
        onClick={customization}
      >
        <img src={brush} alt='Logo' style={{ width: '29px', height: '29px' }} />
        <Box
          className={styles['tooltip-box']}
        >
          <img src={tooltip} alt={'Personaliza'} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default DemoCustomHeader
