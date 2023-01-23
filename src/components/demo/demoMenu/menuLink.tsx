import { Box, Typography, Switch } from '@mui/material'
import logoLuka from 'assets/footer/luka.png'
import CustomizationLink from './customization/customizationLink'
import styles from './demomenu.module.css'
import DescriptionLink from './description/descriptionLink'

const MenuLink = (): JSX.Element => {
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
        <DescriptionLink />
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
        <CustomizationLink />
      </Box>
    </Box>
  )
}

export default MenuLink
