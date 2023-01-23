import { Box, Typography } from '@mui/material'
import Slider from '@mui/material/Slider'
import styles from './slider.module.css'

const SliderInput = (): JSX.Element => {
  return (
    <Box>
      <Typography
        className={styles.title}
      >
        Round Border
      </Typography>
      <Box>
        <Slider
          aria-label='Border'
          valueLabelDisplay='off'
          step={1}
          size={'small'}
          min={0}
          max={20}
        />
      </Box>
      <Box
        sx={
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }
        }
      >
        <Typography
          className={styles.subtitle}
        >
          0%
        </Typography>
        <Typography
          className={styles.subtitle}
        >
          100%
        </Typography>
      </Box>
    </Box>
  )
}

export default SliderInput
