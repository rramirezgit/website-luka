import { Box } from '@mui/material'
import wifi from 'assets/vpos/wifi.png'
import phone1 from 'assets/vpos/vpos-phone-1.png'
import phone2 from 'assets/vpos/vpos-phone-2.png'

const PhoneBox = (): JSX.Element => {
  return (
    <Box
      sx={
        {
          display: 'flex',
          position: 'relative',
          width: '100%',
          justifyContent: 'space-between'
        }
      }
        >
      <Box
        component={'figure'}
        sx={
          {
            width: '45%',
            display: 'flex',
            justifyContent: 'right'
          }
        }
      >
        <img src={phone1} alt={'Demo'} style={{ maxWidth: '100%' }}/>
      </Box>
      <Box
        component={'figure'}
        sx={
          {
            width: '45%'
          }
        }
      >
        <img src={phone2} alt={'Demo'} style={{ maxWidth: '100%' }}/>
      </Box>
      <Box
        component={'figure'}
        sx={
          {
            position: 'absolute',
            right: '43%',
            top: '-11%',
            width: '15%'
          }
        }
      >
        <img src={wifi} alt={'Demo'} style={{ maxWidth: '100%' }}/>
      </Box>
    </Box>
  )
}

export default PhoneBox
