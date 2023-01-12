import { Box } from '@mui/material'
import style from './TextAndImg.module.css'

interface TextAndImgProps {
  children: JSX.Element[]
  className?: string
}

const TextAndImg = ({
  children,
  className = ''
}: TextAndImgProps): JSX.Element => {
  return (
    <Box
      className={`${style.content} ${className}`}
      sx={{
        height: {
          xs: '100%',
          md: '1159px'
        }
      }}
    >
      <Box className={style.box}>
        <Box>{children[0]}</Box>
        <Box>{children[1]}</Box>
      </Box>
    </Box>
  )
}

export default TextAndImg
