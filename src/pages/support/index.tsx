import { Box } from '@mui/material'
import Footer from 'components/footer'
import FormView from 'components/formView'
import Nav from 'components/nav'
// import SupportForm from './SupportForm'
import support from 'assets/support/support.svg'
import { useEffect } from 'react'
import SupportForm from 'components/allForms/support'

const Support = (): JSX.Element => {
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
          image={support}
        >
          <SupportForm />
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

export default Support
