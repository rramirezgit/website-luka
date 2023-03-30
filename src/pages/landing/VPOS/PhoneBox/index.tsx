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
          src={`${config.UrlBaseImg}vpos/animation.svg`}
          alt={'Demo'}
          style={{
            maxWidth: '640px',
            width: '100%',
            height: '100%',
            maxHeight: '645px'
          }}
        />
      </Box>
      <Box
        component={'figure'}
        sx={{
          position: 'absolute',
          right: '43%',
          top: '-12%',
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
