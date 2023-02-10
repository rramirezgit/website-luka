import React, { Suspense } from 'react'
import { Box } from '@mui/material'
import DemoContentLayout from 'components/demo/demoContentLayout'
import DesktopContent from './desktopContent'
import Skeleton from '@mui/material/Skeleton'
import './index.css'

interface DemoContentProps {
  mobileState: boolean
  desktopState: boolean
}

const MobileContentLazy = React.lazy(async () => {
  return await Promise.all([
    import('components/demo/mobileContent'),
    new Promise(resolve => setTimeout(resolve, 6000))
  ]).then(([moduleExports]) => moduleExports)
})

const DemoContent = ({
  mobileState,
  desktopState
}: DemoContentProps): JSX.Element => {
  if (mobileState && !desktopState) {
    return (
      <DemoContentLayout support='mobile'>
        <Suspense
          fallback={
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                id={'lazycontent-container'}
              >
                <Skeleton
                  id={'lazycontent-skeleton'}
                  variant='rounded'
                  animation={'wave'}
                  width={'100%'}
                  height={'100%'}
                />
              </Box>
            </Box>
          }
        >
          <MobileContentLazy type="gateway" />
        </Suspense>
      </DemoContentLayout>
    )
  } else if (!mobileState && desktopState) {
    return (
      <DemoContentLayout support='javascript'>
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
