import { Box, Typography } from '@mui/material'
import cardCSS from './card.module.css'
import placeholder from 'assets/placeholder.svg'
import Tags from 'components/tags'

interface Props {
  id: string
  title: string
  tags: string[]
  text: string[]
  imageUrl: string
}

const Card = ({ id, title, tags, text, imageUrl }: Props): JSX.Element => {
  return (
    <Box
      id={id}
      className={cardCSS['card-container']}
      sx={{
        height: {
          xs: '350px',
          lg: '310px'
        },
        width: {
          xs: '322px',
          lg: '400px'
        },
        minWidth: '322px',
        zIndex: '99'
      }}
    >
      <Box
        component={'figure'}
        className={cardCSS.figure}
        sx={{
          top: {
            xs: '-30%',
            lg: '-40%'
          },
          left: '12%',
          height: {
            xs: '160px',
            lg: '200px'
          },
          width: {
            xs: '250px',
            lg: '300px'
          }
          // top: {
          //   xs: '-100px',
          //   lg: '-100px'
          // },
          // left: {
          //   xs: '70px',
          //   lg: '100px'
          // }
        }}
      >
        <img className={cardCSS.img} src={ imageUrl ?? placeholder } alt={title} />
      </Box>
      <Typography
        className={cardCSS.title}
      >
        {title}
      </Typography>
      <Tags tags={tags} />
      <ul>
        {
          text.map((t) => {
            return (
              <li
                key={crypto.randomUUID()}
                className={cardCSS['list-element']}
              >
                <Typography
                  className={cardCSS.text}
                >
                  {t}
                </Typography>
              </li>
            )
          })
        }
      </ul>
    </Box>
  )
}

export default Card
