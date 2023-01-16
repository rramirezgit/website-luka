import { Box, Typography, Switch, TextField } from '@mui/material'
import logoLuka from 'assets/footer/luka.png'
import Color from './color'
import styles from './demomenu.module.css'
import Description from './description'
import Filestack from './filestack'
import SliderInput from './sliderInput'

const DemoMenu = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
    >
      <Box
        component={'figure'}
        sx={
          {
            width: '165px',
            marginBottom: '50px',
            padding: '0 40px'
          }
        }
      >
        <img src={logoLuka} style={{ maxWidth: '100%' }} alt='Luka' />
      </Box>
      <Typography
        classes={
          {
            root: styles.title
          }
        }
        sx={
          {
            paddingLeft: '40px'
          }
        }
      >
        Customize your link
      </Typography>
      <Box
        className={styles['overflow-container']}
      >
        <Description />
        <Box
          sx={
            {
              marginTop: '18px',
              marginBottom: '28px'
            }
          }
        >
          <Switch />
        </Box>
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
    </Box>
  )
}

export default DemoMenu
