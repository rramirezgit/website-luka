import { useState } from 'react'
import styles from './demolink.module.css'
import { Box, Typography, Switch } from '@mui/material'
import DemoHeader from 'components/demo/demoHeader'
import DemoContent from './demoContent'
import DemoCustomHeader from 'components/demo/demoCustomHeader'
import DemoMenuResponsive from 'components/demo/demoMenu/demoMenuResponsive'
import MenuLink from 'components/demo/demoMenu/menuLink'
import DescriptionLink from 'components/demo/demoMenu/description/descriptionLink'
import CustomizationLink from 'components/demo/demoMenu/customization/customizationLink'

const DemoLink = (): JSX.Element => {
  const [demoMobile, setDemoMobile] = useState(true)
  const [demoDesktop, setDemoDesktop] = useState(false)
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
      className={styles.demolink}
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
        <MenuLink />
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
                  <DescriptionLink />
                </Box>
              </Box>
              <Box
                className={ styles.switch }
              >
                <Switch />
              </Box>
              <Box
                className={ styles.padding }
              >
                <CustomizationLink />
              </Box>
            </Box>
          </DemoMenuResponsive>
      }
    </Box>
  )
}

export default DemoLink
