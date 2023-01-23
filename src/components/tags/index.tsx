import { Box, Typography } from '@mui/material'
import tagsCSS from './tags.module.css'

interface Props {
  tags: string[]
}

const Tags = ({ tags }: Props): JSX.Element => {
  return (
    <Box className={tagsCSS['tags-container']}>
      {tags.map((tag: string) => {
        return (
          <Box
            key={tag}
            className={tagsCSS['tag-container']}
            sx={{
              marginBottom: '20px'
            }}
          >
            <Typography className={tagsCSS.text}>{tag}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default Tags
