import { Box } from '@mui/material'
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
          left: {
            xs: '0px',
            lg: '50%'
          },
          transform: {
            xs: 'none',
            lg: 'translateX(-50%)'
          },
          position: {
            xs: 'relative',
            lg: 'absolute'
          },
          top: {
            xs: '0px',
            lg: '50%'
          },
          height: {
            xs: '468px',
            lg: '1097.72px'
          }
        }}
      ></Box>
    </Box>
  )
}

export default Laptop
