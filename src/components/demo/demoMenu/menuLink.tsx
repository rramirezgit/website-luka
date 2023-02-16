import { Box, Typography } from '@mui/material'
import CustomizationLink from './customization/customizationLink'
import styles from './demomenu.module.css'
import DescriptionLink from './description/descriptionLink'
import { useNavigate } from 'react-router-dom'
import config from 'const'

interface Props {
  type: 'mobile' | 'desktop'
}

const MenuLink = ({ type }: Props): JSX.Element => {
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
        <img src={`${config.UrlBaseImg}Logo.svg`} style={{ maxWidth: '100%' }} alt='Luka' />
      </Box>
      <Box
        className={styles['overflow-container']}
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
              marginBottom: '40px'
            }
          }
        >
          <DescriptionLink />
        </Box>
        <CustomizationLink type={type} />
      </Box>
    </Box>
  )
}

export default MenuLink
