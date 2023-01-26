import { Box } from '@mui/material'
import { getCssVar } from 'theme'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Typography from '@mui/material/Typography'
import { ReactComponent as Desktop } from 'assets/demoLink/monitor.svg'
import { ReactComponent as Mobile } from 'assets/demoLink/mobile.svg'
import styles from './demoheader.module.css'
import './index.css'

interface DemoHeaderProps {
  mobileState: boolean
  desktopState: boolean
  handleMobile: () => void
  handleDesktop: () => void
}

const DemoHeader = ({ mobileState, desktopState, handleMobile, handleDesktop }: DemoHeaderProps): JSX.Element => {
  return (
    <Box
      className={styles.container}
      sx={
        {
          justifyContent: {
            xs: 'center',
            md: 'space-between'
          },
          width: {
            xs: '100%',
            md: 'calc(50% + 110px)'
          }
        }
      }
    >
      <Box
        sx={
          {
            alignItems: 'center',
            display: {
              xs: 'none',
              md: 'flex'
            }
          }
        }
      >
        <ArrowBackIosIcon
          className={styles.back}
        />
        <Typography
          className={styles['back-text']}
        >
          Back
        </Typography>
      </Box>
      <Box
          className={styles['desktop-mobile']}
          id={'desktop-mobile-box'}
      >
        <Box
          component={'figure'}
          className={styles.figure}
          onClick={handleMobile}
        >
          <Mobile
            stroke={ mobileState ? '#0878ff' : `${getCssVar('--gray-text')}` }
            strokeWidth={2}
          />
        </Box>
        <Box
          component={'figure'}
          className={styles.figure}
          onClick={handleDesktop}
        >
          <Desktop
            stroke={ desktopState ? '#0878ff' : `${getCssVar('--gray-text')}` }
            strokeWidth={2}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default DemoHeader
