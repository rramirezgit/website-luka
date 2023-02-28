import { Box } from '@mui/material'
import config from 'const'
import style from './Laptop.module.css'

const Laptop = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          lg: '780px'
        },
        position: 'relative'
      }}
    >
      <Box
        className={style.laptop}
        sx={{
          position: 'relative',
          left: {
            xs: '0',
            lg: '-450px'
          },
          background: `url(${config.UrlBaseImg}paymentLink/laptop.svg) no-repeat`
        }}
      ></Box>
    </Box>
  )
}

export default Laptop
