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
      <Box
        sx={
          {
            padding: {
              xs: '170px 0px 80px 0',
              md: '170px 0px 120px 0'
            }
          }
        }
      >
        <Footer />
      </Box>
    </Box>
  )
}

export default Currency
