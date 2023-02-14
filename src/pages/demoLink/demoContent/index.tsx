import { useState } from 'react'
import { Box } from '@mui/material'
import DemoContentLayout from 'components/demo/demoContentLayout'
import DesktopContent from './desktopContent'
import Skeleton from '@mui/material/Skeleton'
import MobileContent from 'components/demo/mobileContent'
import './index.css'

interface DemoContentProps {
  mobileState: boolean
  desktopState: boolean
}

const DemoContent = ({
  mobileState,
  desktopState
}: DemoContentProps): JSX.Element => {
  const [loading, setLoading] = useState(true)
  const handleLoad = (): void => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  if (mobileState && !desktopState) {
    return (
      <DemoContentLayout support="mobile">
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: '100%',
              opacity: loading ? 0 : 1
            }}
          >
            <MobileContent type="link" onLoad={handleLoad} />
          </Box>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              display: loading ? 'flex' : 'none',
              position: 'absolute',
              top: 0
            }}
          >
            <Box id={'lazycontent-container'}>
              <Skeleton
                id={'lazycontent-skeleton'}
                variant="rounded"
                animation={'wave'}
                width={'100%'}
                height={'100%'}
              />
            </Box>
          </Box>
        </Box>
      </DemoContentLayout>
    )
  } else if (!mobileState && desktopState) {
    return (
      <DemoContentLayout support="javascript">
        <DesktopContent />
      </DemoContentLayout>
    )
  } else {
    return (
      <DemoContentLayout>
        <Box>Default</Box>
      </DemoContentLayout>
    )
  }
}

export default DemoContent
