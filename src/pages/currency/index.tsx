import { Box } from '@mui/material'
import Footer from 'components/footer'
import CurrencyBlock from './currencyBlock'
import Description from './description'

const Currency = (): JSX.Element => {
  return (
    <Box>
      <Box sx={{ marginBottom: '100px' }} >
        <Description />
      </Box>
      <CurrencyBlock />
      <Footer />
    </Box>
  )
}

export default Currency
