import { Typography } from '@mui/material'
import placeholder from 'assets/placeholder.svg'
import cardCSS from './card.module.css'
import clsx from 'clsx'
import lukaCSS from 'styles/luka.module.css'

interface Props {
  imageUrl?: string
  text: string
  title: string
  id: string
}

const Card = ({ text, imageUrl, title, id }: Props): JSX.Element => {
  return (
    <div id={id} className={cardCSS.container}>
      <figure>
        <img src={ imageUrl ?? placeholder } alt='Placeholder'/>
      </figure>
      <Typography className={cardCSS.title}>{title}</Typography>
      <Typography className={cardCSS.paragraph}>{ text }</Typography>
      <Typography className={clsx(cardCSS.paragraph, cardCSS['paragraph--blue'], lukaCSS.pointer)}>{'Learn more >'}</Typography>
    </div>
  )
}

export default Card
