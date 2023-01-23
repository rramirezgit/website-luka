import { Box, Typography } from '@mui/material'
import logoLuka from 'assets/footer/luka.png'
import CustomizationGateway from './customization/customizationGateway'
import styles from './demomenu.module.css'
import DescriptionGateway from './description/descriptionGateway'

const MenuGateway = (): JSX.Element => {
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
        Customize your gateway
      </Typography>
      <Box
        sx={
          {
            padding: '0 30px',
            marginBottom: '28px'
          }
        }
      >
        <DescriptionGateway />
      </Box>
      <Box
        className={styles['overflow-container']}
      >
        <CustomizationGateway />
      </Box>
    </Box>
  )
}

export default MenuGateway
