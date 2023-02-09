import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import style from './card.module.css'

interface CardProps {
  image: string
  text: string
}

const Card = ({ image, text }: CardProps): JSX.Element => {
  return (
    <Box className={style.content}>
      <img className={style.image} src={image} alt={'img'} />

      <Typography className={style.text}>{text}</Typography>
    </Box>
  )
}

export default Card
