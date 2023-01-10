import { Box } from '@mui/material'

interface IconBoxProps {
  src: string
  alt: string
}

const IconBox = ({ src, alt }: IconBoxProps): JSX.Element => {
  return (
    <Box
      component={'figure'}
      sx={
        {
          marginRight: '20px'
        }
      }
    >
      <img src={src} alt={alt}/>
    </Box>
  )
}

export default IconBox
