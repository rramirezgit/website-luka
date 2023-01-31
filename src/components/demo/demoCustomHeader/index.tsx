import brush from 'assets/demoLink/brush.svg'
import logoLuka from 'assets/footer/luka.png'
import tooltip from 'assets/demoLink/tooltip.png'
import { Box, Typography } from '@mui/material'
import styles from './customheader.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import './index.css'

interface Props {
  customization: () => void
}

const DemoCustomHeader = ({ customization }: Props): JSX.Element => {
  return (
    <Box
      className={styles.container}
    >
      <Box
        className={styles['back-box']}
        id={'customheader-back-box'}
      >
        <ArrowBackIosIcon
          id={'customheader-back'}
        />
        <Typography
          className={styles['back-text']}
          id={'customheader-back-text'}
        >
          Back
        </Typography>
      </Box>
      <Box
        component={'figure'}
        className={styles.figure}
        id={'customheader-figure'}
      >
        <img src={logoLuka} alt='Logo' style={{ maxWidth: '100%' }} />
      </Box>
      <Box
        className={styles['custom-box']}
        id={'customheader-custom-box'}
        onClick={customization}
      >
        <img src={brush} alt='Logo' style={{ width: '100%', height: '100%' }} />
        <Box
          className={styles['tooltip-box']}
          id={'customheader-tooltip-box'}
        >
          <img src={tooltip} alt={'Personaliza'} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default DemoCustomHeader
