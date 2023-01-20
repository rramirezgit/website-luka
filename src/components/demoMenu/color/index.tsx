import { Box, Typography, TextField } from '@mui/material'
import { getCssVar } from 'theme'
import styles from './color.module.css'

interface ColorProps {
  label: string
}

const Color = ({ label }: ColorProps): JSX.Element => {
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
            width: '55px',
            marginRight: '15px'
          }
        }
      >
        <TextField
          fullWidth
          variant='standard'
          placeholder='FFFFFF'
        />
      </Box>
      <Box
        sx={
          {
            width: '25px',
            height: '25px',
            backgroundColor: getCssVar('--primary-buttons'),
            borderRadius: '50%'
          }
        }
      ></Box>
    </Box>
  )
}

export default Color
