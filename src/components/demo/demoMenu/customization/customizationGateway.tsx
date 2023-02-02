import { Box, Typography, TextField } from '@mui/material'
import Color from '../color'
import styles from './customization.module.css'
import SliderInput from '../sliderInput'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { changeButton } from 'redux/slices/demoSlice'
import brush from 'assets/demoLink/menu/brush.svg'
import setting from 'assets/demoLink/menu/setting.svg'

interface Props {
  type: 'mobile' | 'desktop'
}

const CustomizationGateway = ({ type }: Props): JSX.Element => {
  const dispatch = useDispatch()
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box
    >
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
          <Color label='Color del Botón' value={demo.button} onChange={(e: string) => { dispatch(changeButton(e)) }} />
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

export default CustomizationGateway
