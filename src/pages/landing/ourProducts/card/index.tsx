import { Typography } from '@mui/material'
import cardCSS from './card.module.css'
import clsx from 'clsx'
import lukaCSS from 'styles/luka.module.css'
import { Box } from '@mui/system'

interface Props {
  imageUrl?: string
  text: string
  title: string
  id: string
}

const Card = ({ text, imageUrl, title, id }: Props): JSX.Element => {
  return (
    <Box
      id={id}
      className={cardCSS.container}
    >
      <Box
        component={'figure'}
        className={cardCSS.figure}
      >
        <img id={`image-${id}`} className={cardCSS.img} src={ imageUrl } alt={title}/>
      </Box>
      <Typography
        className={cardCSS.title}
      >
        {title}
      </Typography>
      <Typography
        className={cardCSS.paragraph}
      >
        { text }
      </Typography>
      <Typography
        className={clsx(cardCSS.paragraph, cardCSS['paragraph--blue'], lukaCSS.pointer)}
      >
        {'Learn more >'}
      </Typography>
    </Box>
  )
}

export default Card
