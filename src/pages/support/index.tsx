import { Box } from '@mui/material'
import Footer from 'components/footer'
import Nav from 'components/nav'
import Square from 'components/square'
import SupportForm from './SupportForm'
import { useEffect } from 'react'

const Support = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box
      sx={{
        position: 'relative'
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
      <Box
        sx={{
          display: {
            xs: 'none',
            lg: 'block'
          }
        }}
      >
        <Square
          color="#5AE1E230"
          top={'300'}
          right={'0'}
          maxHeight={200}
          maxWidth={600}
        />
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'block',
            lg: 'none'
          }
        }}
      >
        <Square
          color="#5AE1E230"
          top={'800'}
          left={'0'}
          maxHeight={200}
          maxWidth={400}
        />
      </Box>
    </Box>
  )
}

export default Support
