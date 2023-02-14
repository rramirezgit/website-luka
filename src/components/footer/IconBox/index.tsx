import { Box } from '@mui/material'

interface IconBoxProps {
  src: string
  alt: string
  url: string
}

const IconBox = ({ src, alt, url }: IconBoxProps): JSX.Element => {
  return (
    <Box
      component={'figure'}
      sx={
        {
          marginRight: '20px',
          cursor: 'pointer'
        }
      }
      onClick={() => window.open(url, '_blank')}
    >
      <img src={src} alt={alt}/>
    </Box>
  )
}

export default IconBox
