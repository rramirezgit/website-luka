import { Box } from '@mui/material'
import Footer from 'components/footer'
import Nav from 'components/nav'
import SupportForm from './SupportForm'
import { useEffect } from 'react'

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
      <Nav ButtonColor='primary' ButtonVariant='contained' />
      <Box
        sx={
          {
            marginTop: '110px'
          }
        }
      >
        <SupportForm />
      </Box>
      <Box
        sx={
          {
            marginTop: '160px',
            paddingBottom: '50px'
          }
        }
      >
        <Footer />
      </Box>
    </Box>
  )
}

export default Support
