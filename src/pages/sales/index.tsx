import { Box } from '@mui/material'
import SalesForm from 'components/allForms/sales'
import Footer from 'components/footer'
import FormView from 'components/formView'
import Nav from 'components/nav'
import { useEffect } from 'react'
import sales from 'assets/sales/sales.png'

const Sales = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box
      sx={{
        overflowX: 'hidden'
      }}
    >
      <Nav ButtonColor="primary" ButtonVariant="contained" />
      <Box
        sx={{
          marginTop: '110px'
        }}
      >
        <FormView
          image={sales}
        >
          <SalesForm />
        </FormView>
      </Box>
      <Box
        sx={{
          marginTop: '160px',
          padding: '0 35px',
          paddingBottom: '50px'
        }}
      >
        <Footer />
      </Box>
    </Box>
  )
}

export default Sales
