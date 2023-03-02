import { Box, Typography } from '@mui/material'
import { getCssVar } from 'theme'

interface BoxProps {
  borderColor?: string
  img: string
  text: string
  borderRadius?: number
}

const PaymentBox = ({ borderColor = getCssVar('--box-gray'), img, text, borderRadius = 8 }: BoxProps): JSX.Element => {
  return (
    <Box
      sx={
        {
          border: `2px solid ${borderColor}`,
          width: '90px',
          minWidth: '90px',
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
            height: '20px',
            width: '40px',
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