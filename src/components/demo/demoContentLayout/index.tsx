import { Box, Typography } from '@mui/material'
import { getCssVar } from 'theme'
import './index.css'

interface LayoutProps {
  children: JSX.Element
}

const DemoContentLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box
      sx={
        {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    >
      <Box
        className='demo-content'
        sx={
          {
            height: 'calc(90% - 55px)',
            overflow: 'hidden',
            overflowY: 'auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      >
        {children}
      </Box>
      <Box
        sx={
          {
            marginTop: '25px'
          }
        }
      >
        <Typography
          sx={
            {
              fontSize: '20px',
              fontWeight: '600',
              color: getCssVar('--gray-text-dark'),
              cursor: 'pointer'
            }
          }
        >
          Clear All
        </Typography>
      </Box>
    </Box>
  )
}

export default DemoContentLayout
