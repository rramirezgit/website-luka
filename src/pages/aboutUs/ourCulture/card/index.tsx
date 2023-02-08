import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import style from './card.module.css'

interface CardProps {
  title: string
  image: string
  text: string
}

const Card = ({ title, image, text }: CardProps): JSX.Element => {
  return (
    <Box className={style.content}>
      <img className={style.image} src={image} alt={'img'} />

      <Box className={style.contentTilte}>
        <hr className={style.line} />
        <Typography className={style.title}>{title}</Typography>
      </Box>

      <Typography className={style.text}>{text}</Typography>
    </Box>
  )
}

export default Card
