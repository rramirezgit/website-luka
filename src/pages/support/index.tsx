import { Box } from '@mui/material'
import Footer from 'components/footer'
import FormView from 'components/formView'
import Nav from 'components/nav'
import { useEffect, useState } from 'react'
import FormLayout from 'components/formView/formLayout'
import SupportForm from 'components/allForms/supportForm'

const Support = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
          <FormView pathAnimation={'Support_animacion.json'}>
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
