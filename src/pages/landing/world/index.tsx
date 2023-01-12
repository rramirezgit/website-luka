import { Box, Typography } from '@mui/material'
import style from './world.module.css'
const World = (): JSX.Element => {
  return (
    <Box
      className={style.content}
      sx={{
        height: {
          xs: '800px',
          md: '1698px'
        },
        padding: {
          xs: '0 0 0 0',
          md: '129px 0 0 0'
        }
      }}
    >
      <Box className={style.info}>
        <Typography classes={{ root: style.title }}>
          A service made as
          <span className={style['title-blue']}> competitive </span>
          as it gets!
        </Typography>
        <Typography classes={{ root: style.subtitle }}>
          We empower your use cases, your operation, your business!
        </Typography>
      </Box>
      <Box className={style.worldImg}></Box>
    </Box>
  )
}

export default World
