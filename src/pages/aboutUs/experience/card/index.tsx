import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import style from './card.module.css'

interface CardProps {
  number: string
  color: string
  text: string
}

const Card = ({ number, color, text }: CardProps): JSX.Element => {
  return (
    <Box
      className={style.content}
      sx={{
        width: {
          xs: '100px',
          sm: '209px',
          md: '209px',
          lg: '209px'
        }
      }}
    >
      <Typography
        className={style.number}
        sx={{
          fontSize: {
            xs: '48.2921px',
            sm: '71.91px',
            lg: '71.91px'
          }
        }}
      >
        {number}
      </Typography>
      <hr
        className={style.line}
        style={{ border: `5.69737px solid ${color}` }}
      />
      <Typography
        className={style.text}
        sx={{
          fontSize: {
            xs: '15px',
            sm: '20px',
            lg: '20px'
          }
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default Card
