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
          width: '30%',
          height: {
            xs: '45px',
            xl: '55px'
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: `${borderRadius}px`
        }
      }
    >
      <Box
        component={'figure'}
        sx={
          {
            height: {
              xs: '15px',
              sm: '25px'
            },
            marginBottom: {
              xs: '5px',
              sm: '0px'
            }
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
