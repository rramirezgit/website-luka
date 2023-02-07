import { Box } from '@mui/material'
import Footer from 'components/footer'
import Nav from 'components/nav'
import SupportForm from './SupportForm'

const Support = (): JSX.Element => {
  return (
    <Box>
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
