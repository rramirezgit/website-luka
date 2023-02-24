import { Box, TextField, MenuItem } from '@mui/material'
import { FooterSelectProps } from '../footer.interface'
import InputAdornment from '@mui/material/InputAdornment'
import config from 'const'

const FooterSelect = ({ options, value }: FooterSelectProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: '180px'
      }}
    >
      <TextField
        fullWidth
        select
        value={value}
        variant={'standard'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={`${config.UrlBaseImg}footer/location.png`} alt="flag" />
            </InputAdornment>
          ),
          disableUnderline: true
        }}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}

export default FooterSelect
