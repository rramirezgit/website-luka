import { Box, Typography } from '@mui/material'
import logoLuka from 'assets/footer/luka.png'
import { useNavigate } from 'react-router-dom'
import CustomizationGateway from './customization/customizationGateway'
import styles from './demomenu.module.css'
import DescriptionGateway from './description/descriptionGateway'

interface Props {
  type: 'mobile' | 'desktop'
}

const MenuGateway = ({ type }: Props): JSX.Element => {
  const navigate = useNavigate()
  const handleLogo = (): void => {
    navigate('/')
  }
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
            padding: '0 40px',
            cursor: 'pointer'
          }
        }
        onClick={handleLogo}
      >
        <img src={logoLuka} style={{ maxWidth: '100%' }} alt='Luka' />
      </Box>
      <Box
        className={styles['overflow-container-gateway']}
      >
        <Typography
          classes={
            {
              root: styles.title
            }
          }
        >
          Customize your gateway
        </Typography>
        <Box
          sx={
            {
              marginBottom: '28px'
            }
          }
        >
          <DescriptionGateway />
        </Box>
        <CustomizationGateway type={type} />
      </Box>
    </Box>
  )
}

export default MenuGateway
