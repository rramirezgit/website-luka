import { Box, Typography, TextField } from '@mui/material'
import Color from '../color'
import styles from './customization.module.css'
import Filestack from '../filestack'
import SliderInput from '../sliderInput'
import gallery from 'assets/demoLink/menu/gallery.svg'
import brush from 'assets/demoLink/menu/brush.svg'
import setting from 'assets/demoLink/menu/setting.svg'

interface Props {
  type: 'mobile' | 'desktop'
}

const CustomizationLink = ({ type }: Props): JSX.Element => {
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
        <Box
          className={styles['title-icon']}
        >
          <Box
            component={'figure'}
            className={styles['title-figure']}
          >
            <img src={gallery} alt='Logo' style={{ maxHeight: '100%', maxWidth: '100%' }} />
          </Box>
          <Typography
            classes={
              {
                root: styles.title
              }
            }
          >
            Tu Logo
          </Typography>
        </Box>
        <Box>
            <Filestack />
        </Box>
      </Box>
      <Box>
        <Box
          className={styles['title-icon']}
        >
          <Box
            component={'figure'}
            className={styles['title-figure']}
          >
            <img src={brush} alt='Logo' style={{ maxHeight: '100%', maxWidth: '100%' }} />
          </Box>
          <Typography
            classes={
              {
                root: styles.title
              }
            }
          >
            Formato
          </Typography>
        </Box>
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
          sx={
            {
              display: type === 'mobile' ? 'none' : 'block'
            }
          }
        >
          <SliderInput />
        </Box>
        <Box
          className={styles['title-icon']}
        >
          <Box
            component={'figure'}
            className={styles['title-figure']}
          >
            <img src={setting} alt='Logo' style={{ maxHeight: '100%', maxWidth: '100%' }} />
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
        </Box>
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

export default CustomizationLink
