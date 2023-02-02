import { Box, Typography, TextField } from '@mui/material'
import Color from '../color'
import styles from './customization.module.css'
import SliderInput from '../sliderInput'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { changeBorder, changeButton, changeCurrency, changeFont, changeLanguage } from 'redux/slices/demoSlice'
import brush from 'assets/demoLink/menu/brush.svg'
import setting from 'assets/demoLink/menu/setting.svg'
import Autocomplete from '@mui/material/Autocomplete'
import { languages, fonts, currency } from 'logic'

interface Props {
  type: 'mobile' | 'desktop'
}

const CustomizationGateway = ({ type }: Props): JSX.Element => {
  const dispatch = useDispatch()
  const demo = useSelector((state: RootState) => state.demo)
  return (
    <Box>
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
            Format
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
          <Autocomplete
            disablePortal
            value={demo.font}
            disableClearable={true}
            onChange={(e, newValue) => { dispatch(changeFont(newValue === null ? { label: 'Open Sans', value: '2r565w54ar5' } : newValue)) }}
            options={fonts}
            renderInput={(params) => <TextField {...params} variant='standard' label="Fuente" />}
          />
        </Box>
        <Box
          className={styles['input-container']}
        >
          <Autocomplete
            disablePortal
            disableClearable={true}
            value={demo.language}
            onChange={(e, newValue) => { dispatch(changeLanguage(newValue === null ? { label: 'Inglés', value: 'EN' } : newValue)) }}
            options={languages}
            renderInput={(params) => <TextField {...params} variant='standard' label="Idioma" />}
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
          <SliderInput value={demo.border} onChange={(e) => { dispatch(changeBorder(e as number)) }} />
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
          <Autocomplete
            disablePortal
            disableClearable={true}
            value={demo.currency}
            onChange={(e, newValue) => { dispatch(changeCurrency(newValue === null ? { label: 'Dollars', value: '$' } : newValue)) }}
            options={currency}
            renderInput={(params) => <TextField {...params} variant='standard' label="Currency" />}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default CustomizationGateway
