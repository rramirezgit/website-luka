import { Box, Typography } from '@mui/material'
import styles from './contentlayout.module.css'
import ios from 'assets/demoLink/support/ios.svg'
import android from 'assets/demoLink/support/android.svg'
import js from 'assets/demoLink/support/js.svg'
import { useDispatch } from 'react-redux'
import './index.css'
import { resetState } from 'redux/slices/demoSlice'

interface LayoutProps {
  children: JSX.Element
  support?: 'javascript' | 'mobile'
}

const DemoContentLayout = ({ children, support }: LayoutProps): JSX.Element => {
  const dispatch = useDispatch()
  return (
    <Box
      className={styles.container}
    >
      <Box
        className={styles.content}
        id={'demo-content'}
      >
        {children}
      </Box>
      <Box
        className={styles['text-box']}
        onClick={() => dispatch(resetState())}
      >
        <Typography
          id={'contentlayout-text'}
          className={styles.text}
        >
          Clear All
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          display: {
            xs: 'none',
            sm: support ? 'flex' : 'none'
          },
          alignItems: 'center',
          justifyContent: 'center',
          right: '40px',
          bottom: {
            xs: '-85px',
            md: '20px'
          }
        }}
      >
        {
          support === 'mobile' &&
          <>
            <Box
              component={'figure'}
            >
              <img src={android} alt='Android' />
            </Box>
            <Box
              component={'figure'}
            >
              <img src={ios} alt='IOS' />
            </Box>
          </>
        }
        {
          support === 'javascript' &&
          <>
            <Box
              component={'figure'}
            >
              <img src={js} alt='Android' />
            </Box>
          </>
        }
      </Box>
    </Box>
  )
}

export default DemoContentLayout
