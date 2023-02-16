import { Box } from '@mui/material'
import style from './TextAndImg.module.css'

interface TextAndImgProps {
  children: JSX.Element[]
  className?: string
  sxOne?: any
  sxTwo?: any
  flDirectionSx?: string
  heightSx: any
}

const TextAndImg = ({
  children,
  className = '',
  sxOne = {},
  sxTwo = {},
  heightSx,
  flDirectionSx = 'column'
}: TextAndImgProps): JSX.Element => {
  return (
    <Box
      className={`${style.content} ${className}`}
      sx={{
        height: heightSx
      }}
    >
      <Box
        className={style.box}
        sx={{
          flexDirection: {
            xs: flDirectionSx,
            lg: 'row'
          },
          width: '100%'
        }}
      >
        <Box sx={sxOne}>{children[0]}</Box>
        <Box sx={sxTwo}>{children[1]}</Box>
        {children[2] && children[2]}
      </Box>
    </Box>
  )
}

export default TextAndImg
