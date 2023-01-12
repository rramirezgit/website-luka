import { Box } from '@mui/material'
import style from './Laptop.module.css'

const Laptop = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: '780px',
        position: 'relative'
      }}
    >
      <Box className={style.laptop}>
        <Box className={style.laptopInfo}></Box>
      </Box>
    </Box>
  )
}

export default Laptop
