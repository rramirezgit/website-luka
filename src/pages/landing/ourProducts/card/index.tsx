import { Typography } from '@mui/material'
import placeholder from 'assets/placeholder.svg'
import cardCSS from './card.module.css'
import clsx from 'clsx'
import lukaCSS from 'styles/luka.module.css'
import { Box } from '@mui/system'
import { useState } from 'react'

interface Props {
  imageUrl?: string
  text: string
  title: string
  id: string
  key: string
}

const Card = ({ text, imageUrl, title, id }: Props): JSX.Element => {
  const [linked, setlinked] = useState(false)
  const handleClickScroll = (id: any): void => {
    setlinked(true)
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleMouseEvent = (event: string): void => {
    if (event === 'out') {
      const card = document.getElementById(`${id}-card`) as HTMLDivElement
      if (linked) {
        setlinked(false)
        setTimeout(() => {
          card.style.transform = 'scale(1)'
        }, 1000)
        return
      }
      card.style.transform = 'scale(1)'
      return
    }

    const card = document.getElementById(`${id}-card`) as HTMLDivElement
    card.style.transform = 'scale(1.05)'
  }

  return (
    <Box
      id={`${id}-card`}
      className={cardCSS.container}
      onMouseEnter={() => handleMouseEvent('enter')}
      onMouseLeave={() => handleMouseEvent('out')}
      sx={{
        height: '390px',
        width: {
          xs: '322px',
          lg: '350px'
        },
        minWidth: {
          xs: '322px',
          lg: '350px'
        }
      }}
    >
      <Box>
        <Box component={'figure'} className={cardCSS.figure}>
          <img
            className={cardCSS.img}
            src={imageUrl ?? placeholder}
            alt="Placeholder"
          />
        </Box>
        <Typography className={cardCSS.title}>{title}</Typography>
        <Typography className={cardCSS.paragraph}>{text}</Typography>
      </Box>
      <Typography
        className={clsx(cardCSS['paragraph--blue'], lukaCSS.pointer)}
        onClick={() => handleClickScroll(id)}
      >
        {'Learn more >'}
      </Typography>
    </Box>
  )
}

export default Card
