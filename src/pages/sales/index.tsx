import { Box } from '@mui/material'
import Footer from 'components/footer'
import FormView from 'components/formView'
import Nav from 'components/nav'
import { useEffect, useState } from 'react'
import FormLayout from 'components/formView/formLayout'
import SalesForm from 'components/allForms/salesForm'
import config from 'const'
import useScript from 'hooks/useScript'

const Sales = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  useScript({
    url: 'https://static.zdassets.com/ekr/snippet.js?key=7ac1d2a1-71dc-4700-87c8-15855cd8663e',
    id: 'ze-snippet'
  })
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
      <FormView image={`${config.UrlBaseImg}sales/sales.svg`}>
        <FormLayout
          title="Contact our sales team"
          loading={loading}
          success={success}
          failure={failure}
          setFailure={setFailure}
        >
          <SalesForm
            loading={loading}
            setLoading={setLoading}
            setSuccess={setSuccess}
            setFailure={setFailure}
          />
        </FormLayout>
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
