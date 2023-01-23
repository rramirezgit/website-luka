import styles from './demogateway.module.css'
import { Box, Typography } from '@mui/material'
import MenuGateway from 'components/demo/demoMenu/menuGateway'
import { useState } from 'react'
import DemoCustomHeader from 'components/demo/demoCustomHeader'
import DemoHeader from 'components/demo/demoHeader'
import DemoMenuResponsive from 'components/demo/demoMenu/demoMenuResponsive'
import DescriptionGateway from 'components/demo/demoMenu/description/descriptionGateway'
import CustomizationGateway from 'components/demo/demoMenu/customization/customizationGateway'
import DemoContent from './demoContent'

const DemoGateway = (): JSX.Element => {
  const [demoMobile, setDemoMobile] = useState(false)
  const [demoDesktop, setDemoDesktop] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const handleMobile = (): void => {
    setDemoMobile(true)
    setDemoDesktop(false)
  }
  const handleDesktop = (): void => {
    setDemoDesktop(true)
    setDemoMobile(false)
  }
  const handleModal = (): void => {
    setOpenModal(!openModal)
  }
  return (
    <Box
      className={styles.demogateway}
    >
      <Box
        sx={
          {
            display: {
              xs: 'none',
              md: 'block'
            }
          }
        }
      >
        <MenuGateway />
      </Box>
      <Box
        className={styles['content-container']}
        sx={
          {
            width: {
              xs: '100%',
              md: 'calc(100% - 400px)'
            }
          }
        }
      >
        <Box
          sx={
            {
              order: {
                xs: 1
              },
              display: {
                xs: 'block',
                md: 'none'
              }
            }
          }
        >
          <DemoCustomHeader customization={handleModal} />
        </Box>
        <Box
          sx={
            {
              order: {
                xs: 3,
                md: 1
              }
            }
          }
        >
          <DemoHeader
            mobileState={demoMobile}
            desktopState={demoDesktop}
            handleMobile={handleMobile}
            handleDesktop={handleDesktop}
          />
        </Box>
        <Box
          sx={
            {
              height: {
                xs: 'calc(100% - 210px)',
                md: 'calc(100% - 105px)'
              },
              order: {
                xs: 2,
                md: 2
              }
            }
          }
        >
          <DemoContent
            mobileState={demoMobile}
            desktopState={demoDesktop}
          />
        </Box>
      </Box>
      {
        openModal &&
          <DemoMenuResponsive close={handleModal}>
            <Box>
              <Box
                className={ styles.padding }
              >
                <Typography
                  classes={
                    {
                      root: styles.title
                    }
                  }
                >
                  Customize your link
                </Typography>
                <Box
                  sx={
                    {
                      marginBottom: '30px'
                    }
                  }
                >
                  <DescriptionGateway />
                </Box>
              </Box>
              <Box
                className={ styles.padding }
              >
                <CustomizationGateway />
              </Box>
            </Box>
          </DemoMenuResponsive>
      }
    </Box>
  )
}

export default DemoGateway
