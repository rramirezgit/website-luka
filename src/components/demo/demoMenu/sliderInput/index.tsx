import { Box, Typography } from '@mui/material'
import Slider from '@mui/material/Slider'
import styles from './slider.module.css'

interface SliderProps {
  value: number | number[]
  onChange: (e: number | number[]) => void
}

const SliderInput = ({ value, onChange }: SliderProps): JSX.Element => {
  const handleSlider = (e: number | number[]): void => {
    onChange(e)
  }
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
          value={value}
          step={1}
          size={'small'}
          min={0}
          max={20}
          onChange={(e, value) => handleSlider(value)}
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
