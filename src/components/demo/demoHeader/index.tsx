import { Box } from '@mui/material'
import { getCssVar } from 'theme'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Typography from '@mui/material/Typography'
import desktop from 'assets/demoLink/monitor.svg'
import mobile from 'assets/demoLink/mobile.svg'
import styles from './demoheader.module.css'

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
          sx={
            {
              fontSize: '18px'
            }
          }
        />
        <Typography
          sx={
            {
              fontSize: '20px',
              fontWeight: '500'
            }
          }
        >
          Back
        </Typography>
      </Box>
      <Box
          className={styles['desktop-mobile']}
      >
        <Box
          component={'figure'}
          className={styles.figure}
          onClick={handleMobile}
        >
          <img
            src={mobile}
            alt='Mobile'
            style={
              {
                maxHeight: '100%',
                fill: mobileState ? '#0878ff' : getCssVar('--gray-text'),
                stroke: mobileState ? '#0878ff' : getCssVar('--gray-text')
              }
            }
          />
        </Box>
        <Box
          component={'figure'}
          className={styles.figure}
          onClick={handleDesktop}
        >
          <img
            src={desktop}
            alt='Mobile'
            style={
              {
                maxHeight: '100%',
                fill: desktopState ? getCssVar('--primary-buttons') : getCssVar('--gray-text'),
                stroke: desktopState ? getCssVar('--primary-buttons') : getCssVar('--gray-text')
              }
            }
          />
        </Box>
      </Box>
    </Box>
  )
}

export default DemoHeader
