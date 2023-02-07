import { Box } from '@mui/material'
import Footer from 'components/footer'
import Nav from 'components/nav'
import CurrencyBlock from './currencyBlock'
import Description from './description'
import { useEffect } from 'react'

const Currency = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box>
      <Nav ButtonColor='primary' ButtonVariant='contained' />
      <Box
        sx={
          {
            marginBottom: {
              xs: '60px',
              sm: '100px'
            },
            marginTop: {
              xs: '40px',
              sm: '80px'
            }
          }
        }
      >
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
