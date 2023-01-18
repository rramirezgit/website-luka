import { Box } from '@mui/material'
import { getCssVar } from 'theme'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Typography from '@mui/material/Typography'
import desktop from 'assets/demoLink/monitor.svg'
import mobile from 'assets/demoLink/mobile.svg'

interface DemoHeaderProps {
  mobileState: boolean
  desktopState: boolean
  handleMobile: () => void
  handleDesktop: () => void
}

const DemoHeader = ({ mobileState, desktopState, handleMobile, handleDesktop }: DemoHeaderProps): JSX.Element => {
  return (
    <Box
      sx={
        {
          display: 'flex',
          alignItems: 'center',
          padding: '30px 60px',
          justifyContent: {
            xs: 'center',
            md: 'space-between'
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
        sx={
          {
            display: 'flex',
            alignItems: 'center',
            width: '100px',
            justifyContent: 'space-between'
          }
        }
      >
        <Box
          component={'figure'}
          sx={
            {
              height: '30px',
              cursor: 'pointer'
            }
          }
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
          sx={
            {
              height: '30px',
              cursor: 'pointer'
            }
          }
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
      <Box
        sx={
          {
            width: '180px',
            height: '45px',
            backgroundColor: getCssVar('--gray-text-dark'),
            borderRadius: '8px',
            display: {
              xs: 'none',
              md: 'block'
            }
          }
        }
      ></Box>
    </Box>
  )
}

export default DemoHeader
