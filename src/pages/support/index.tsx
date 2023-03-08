import { Box } from '@mui/material'
import Footer from 'components/footer'
import FormView from 'components/formView'
import Nav from 'components/nav'
import { useEffect, useState } from 'react'
import FormLayout from 'components/formView/formLayout'
import SupportForm from 'components/allForms/supportForm'
import config from 'const'
import useScript from 'hooks/useScript'

const Support = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useScript({
    url: 'https://static.zdassets.com/ekr/snippet.js?key=7ac1d2a1-71dc-4700-87c8-15855cd8663e',
    id: 'ze-snippet'
  })
  return (
    <>
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
          <FormView image={`${config.UrlBaseImg}support/support.svg`}>
            <FormLayout
              title="Contact our support team"
              loading={loading}
              success={success}
              failure={failure}
              setFailure={setFailure}
            >
              <SupportForm
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
    </>
  )
}

export default Support
