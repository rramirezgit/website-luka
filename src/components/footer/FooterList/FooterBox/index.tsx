import { Box, Typography } from '@mui/material'
import { FooterBoxProps } from 'components/footer/footer.interface'

const FooterBox = ({ title, text }: FooterBoxProps): JSX.Element => {
  return (
    <Box
      sx={
        {
          marginBottom: title ? '35px' : '15px',
          cursor: title ? 'auto' : 'pointer'
        }
      }
    >
      <Typography
        sx={
          {
            fontSize: title ? '18px' : '14px',
            fontWeight: title ? 'bold' : '400'
          }
        }
      >
        {text}
      </Typography>
    </Box>
  )
}

export default FooterBox
