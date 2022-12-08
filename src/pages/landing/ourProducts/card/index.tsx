import placeholder from 'assets/placeholder.svg'
import cardCSS from './card.module.css'
import clsx from 'clsx'

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
      <h1 className={cardCSS.title}>{title}</h1>
      <p className={cardCSS.paragraph}>{ text }</p>
      <p className={clsx(cardCSS.paragraph, cardCSS['paragraph--blue'])}>{'Learn more >'}</p>
    </div>
  )
}

export default Card
