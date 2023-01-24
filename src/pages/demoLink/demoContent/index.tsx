import { Box } from '@mui/material'
import DemoContentLayout from './demoContentLayout'
import DesktopContent from './desktopContent'
import MobileContent from './mobileContent'

interface DemoContentProps {
  mobileState: boolean
  desktopState: boolean
}

const DemoContent = ({ mobileState, desktopState }: DemoContentProps): JSX.Element => {
  if (mobileState && !desktopState) {
    return (
      <DemoContentLayout>
        <MobileContent />
      </DemoContentLayout>
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
