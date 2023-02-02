import { Box, Typography, TextField } from '@mui/material'
import Color from '../color'
import styles from './customization.module.css'
import SliderInput from '../sliderInput'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { changeButton } from 'redux/slices/demoSlice'

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

export default CustomizationGateway
