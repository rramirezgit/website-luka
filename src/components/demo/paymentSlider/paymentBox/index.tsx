import { Box, Typography } from '@mui/material'
import { getCssVar } from 'theme'

interface BoxProps {
  text: string
  img: string
  imgWidth?: number
  imgHeight?: number
  borderColor?: string
  borderRadius?: number
}

const PaymentBox = ({ text, img, imgWidth = 40, imgHeight = 20, borderColor = getCssVar('--box-gray'), borderRadius = 8 }: BoxProps): JSX.Element => {
  return (
    <Box
      sx={
        {
          border: `2px solid ${borderColor}`,
          width: '100px',
          minWidth: '100px',
          height: '55px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: `${borderRadius}px`,
          marginRight: '10px'
        }
      }
    >
      <Box
        component={'figure'}
        sx={
          {
            height: `${imgHeight}px`,
            width: `${imgWidth}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      >
        <img src={img} alt={text} style={{ maxHeight: '100%', maxWidth: '100%' }} />
      </Box>
      <Typography
        sx={
          {
            fontSize: '10px !important',
            fontWeight: '600',
            color: getCssVar('--gray-text-dark'),
            marginTop: '3px'
          }
        }
      >
        {text}
      </Typography>
    </Box>
  )
}

export default PaymentBox
