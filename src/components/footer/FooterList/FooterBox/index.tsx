import { Box, Typography } from '@mui/material'
import { FooterBoxProps } from 'components/footer/footer.interface'
import { useNavigate } from 'react-router-dom'

const FooterBox = ({ title, text, id }: FooterBoxProps): JSX.Element => {
  const navigate = useNavigate()
  return (
    <Box
      sx={
        {
          marginBottom: title ? '35px' : '15px',
          cursor: title ? 'auto' : 'pointer'
        }
      }
      onClick={id ? () => navigate(id) : () => {}}
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
