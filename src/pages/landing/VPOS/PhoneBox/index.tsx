import { Box } from '@mui/material'
import config from 'const'

const PhoneBox = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        justifyContent: 'space-between'
      }}
    >
      <Box
        component={'figure'}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={`${config.UrlBaseImg}vpos/vpos-phone.svg`}
          alt={'Demo'}
          style={{ maxWidth: '100%' }}
        />
      </Box>
      <Box
        component={'figure'}
        sx={{
          position: 'absolute',
          right: '43%',
          top: '-7%',
          width: '15%'
        }}
      >
        <img
          src={`${config.UrlBaseImg}vpos/wifi.svg`}
          alt={'Demo'}
          style={{ maxWidth: '100%' }}
        />
      </Box>
    </Box>
  )
}

export default PhoneBox
