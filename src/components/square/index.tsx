import { Box } from '@mui/material'

interface SquareProps {
  color: string
  maxHeight: number
  maxWidth: number
  top?: string
  bottom?: string
  left?: string
  right?: string
}

const Square = (
  {
    color,
    maxHeight,
    maxWidth,
    top = 'initial',
    bottom = 'initial',
    left = 'initial',
    right = 'initial'
  }: SquareProps): JSX.Element => {
  return (
    <Box
      sx={
        {
          position: 'absolute',
          backgroundColor: color,
          top: top === 'initial' ? top : `${top}px`,
          bottom: bottom === 'initial' ? bottom : `${bottom}px`,
          left: left === 'initial' ? left : `${left}px`,
          right: right === 'initial' ? right : `${right}px`,
          zIndex: '5',
          width: {
            xs: `${maxWidth - 80}px`,
            sm: `${maxWidth - 30}px`,
            md: `${maxWidth}px`
          },
          height: {
            xs: `${maxHeight - 80}px`,
            sm: `${maxHeight - 60}px`,
            md: `${maxHeight}px`
          }
        }
      }
    ></Box>
  )
}

export default Square
