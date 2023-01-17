import { Box } from '@mui/material'
import { getCssVar } from 'theme'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Typography from '@mui/material/Typography'
import desktop from 'assets/demoLink/monitor.svg'
import mobile from 'assets/demoLink/mobile.svg'

const DemoHeader = (): JSX.Element => {
  return (
    <Box
      sx={
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '30px 60px'
        }
      }
    >
      <Box
        sx={
          {
            display: 'flex',
            alignItems: 'center'
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
              height: '30px'
            }
          }
        >
          <img src={mobile} alt='Mobile' style={{ maxHeight: '100%' }} />
        </Box>
        <Box
          component={'figure'}
          sx={
            {
              height: '30px'
            }
          }
        >
          <img src={desktop} alt='Desktop' style={{ maxHeight: '100%' }} />
        </Box>
      </Box>
      <Box
        sx={
          {
            width: '180px',
            height: '45px',
            backgroundColor: getCssVar('--gray-text-dark'),
            borderRadius: '8px'
          }
        }
      ></Box>
    </Box>
  )
}

export default DemoHeader
