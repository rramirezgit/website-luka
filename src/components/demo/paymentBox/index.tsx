import { Box, Typography } from '@mui/material'
import { getCssVar } from 'theme'

interface BoxProps {
  borderColor?: string
  img: string
  text: string
}

const PaymentBox = ({ borderColor = getCssVar('--box-gray'), img, text }: BoxProps): JSX.Element => {
  return (
    <Box
      sx={
        {
          border: `2px solid ${borderColor}`,
          width: '30%',
          height: {
            xs: '55px',
            xl: '60px'
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px'
        }
      }
    >
      <Box
        component={'figure'}
        sx={
          {
            height: '25px'
          }
        }
      >
        <img src={img} alt={text} style={{ maxHeight: '100%' }} />
      </Box>
      <Typography
        sx={
          {
            fontSize: {
              xs: '8px !important',
              xl: '10px !important'
            },
            fontWeight: '600',
            color: getCssVar('--gray-text-dark')
          }
        }
      >
        {text}
      </Typography>
    </Box>
  )
}

export default PaymentBox
