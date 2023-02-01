import { Box, Typography, TextField } from '@mui/material'
import styles from './color.module.css'

interface ColorProps {
  label: string
  value: string
  onChange: (e: string) => void
}

const Color = ({ label, value, onChange }: ColorProps): JSX.Element => {
  const handleColor = (e: string): void => {
    if (e.length <= 8) {
      onChange(e)
    }
  }
  return (
    <Box
      className={styles.container}
    >
      <Typography
        className={styles.typography}
        sx={
          {
            marginRight: '20px'
          }
        }
      >
        { label }
      </Typography>
      <Typography
        className={styles.typography}
        sx={
          {
            marginRight: '8px'
          }
        }
      >
        #
      </Typography>
      <Box
        sx={
          {
            width: '65px',
            marginRight: '15px'
          }
        }
      >
        <TextField
          fullWidth
          value={value}
          variant='standard'
          placeholder='FFFFFF'
          onChange={(e) => handleColor(e.target.value)}
        />
      </Box>
      <Box
        sx={
          {
            width: '25px',
            height: '25px',
            background: `#${value}`,
            borderRadius: '50%'
          }
        }
      >
      </Box>
    </Box>
  )
}

export default Color
