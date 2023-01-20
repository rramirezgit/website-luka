import { Box, Typography, TextField } from '@mui/material'
import Color from '../color'
import styles from './customization.module.css'
import Filestack from '../filestack'
import SliderInput from '../sliderInput'

const Customization = (): JSX.Element => {
  return (
    <Box
    >
      <Box
        sx={
          {
            marginBottom: '60px'
          }
        }
      >
        <Typography
          classes={
            {
              root: styles.title
            }
          }
        >
          Tu Logo
        </Typography>
        <Box>
            <Filestack />
        </Box>
      </Box>
      <Box>
        <Typography
          classes={
            {
              root: styles.title
            }
          }
        >
          Formato
        </Typography>
        <Box
          className={styles['input-container']}
        >
          <Color label='Color de Fondo' />
        </Box>
        <Box
          className={styles['input-container']}
        >
          <Color label='Color del Botón' />
        </Box>
        <Box
          className={styles['input-container']}
        >
          <TextField
            fullWidth
            variant='standard'
            label={'Título'}
          />
        </Box>
        <Box
          className={styles['input-container']}
        >
          <TextField
            select
            fullWidth
            variant='standard'
            label={'Fuente'}
          />
        </Box>
        <Box
          className={styles['input-container']}
        >
          <TextField
            select
            fullWidth
            variant='standard'
            label={'Idioma'}
          />
        </Box>
        <Box
          className={styles['input-container']}
        >
          <SliderInput />
        </Box>
        <Typography
          classes={
            {
              root: styles.title
            }
          }
        >
          Configuración
        </Typography>
        <Box
          className={styles['input-container']}
        >
          <TextField
            select
            fullWidth
            variant='standard'
            label={'Tipo de Moneda'}
          />
        </Box>
        <Box
          className={styles['input-container']}
        >
          <TextField
            select
            fullWidth
            variant='standard'
            label={'Métodos de Pago'}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Customization
