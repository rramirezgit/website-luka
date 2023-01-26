import { Box } from '@mui/material'
import wifi from 'assets/vpos/wifi.svg'
import phone1 from 'assets/vpos/vpos-phone.svg'

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
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      >
        <img src={phone1} alt={'Demo'} style={{ maxWidth: '100%' }}/>
      </Box>
      <Box
        component={'figure'}
        sx={
          {
            position: 'absolute',
            right: '43%',
            top: '-9%',
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
