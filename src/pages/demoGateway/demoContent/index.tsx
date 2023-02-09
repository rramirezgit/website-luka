import React, { Suspense } from 'react'
import { Box } from '@mui/material'
import MobileContent from 'components/demo/mobileContent'
import DemoContentLayout from 'components/demo/demoContentLayout'
import DesktopContent from './desktopContent'
import LoadingIcon from 'components/loading'

interface DemoContentProps {
  mobileState: boolean
  desktopState: boolean
}

const DemoContentLayoutLazy = React.lazy(async () => {
  return await Promise.all([
    import('components/demo/demoContentLayout'),
    new Promise(resolve => setTimeout(resolve, 2000))
  ]).then(([moduleExports]) => moduleExports)
})

const DemoContent = ({
  mobileState,
  desktopState
}: DemoContentProps): JSX.Element => {
  if (mobileState && !desktopState) {
    return (
      <Suspense
        fallback={
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <LoadingIcon
              size={7}
              border={0.6}
              firstColor={'#0878ff'}
              secondColor={'#0878ff'}
            />
          </Box>
        }
      >
        <DemoContentLayoutLazy>
          <MobileContent type="gateway" />
        </DemoContentLayoutLazy>
      </Suspense>
    )
  } else if (!mobileState && desktopState) {
    return (
      <DemoContentLayout>
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
