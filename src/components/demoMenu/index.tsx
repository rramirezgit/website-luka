import { Box, Typography, Switch } from '@mui/material'
import logoLuka from 'assets/footer/luka.png'
import Customization from './customization'
import styles from './demomenu.module.css'
import Description from './description'

const DemoMenu = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
    >
      <Box
        component={'figure'}
        sx={
          {
            width: '165px',
            marginBottom: '50px',
            padding: '0 40px'
          }
        }
      >
        <img src={logoLuka} style={{ maxWidth: '100%' }} alt='Luka' />
      </Box>
      <Typography
        classes={
          {
            root: styles.title
          }
        }
        sx={
          {
            paddingLeft: '40px'
          }
        }
      >
        Customize your link
      </Typography>
      <Box
        sx={
          {
            padding: '0 30px'
          }
        }
      >
        <Description />
      </Box>
      <Box
        sx={
          {
            marginTop: '18px',
            marginBottom: '28px',
            paddingLeft: '20px'
          }
        }
      >
        <Switch />
      </Box>
      <Box
        className={styles['overflow-container']}
      >
        <Customization />
      </Box>
    </Box>
  )
}

export default DemoMenu
