import { Box, Typography } from '@mui/material'
import logoLuka from 'assets/footer/luka.png'
import CustomizationLink from './customization/customizationLink'
import styles from './demomenu.module.css'
import DescriptionLink from './description/descriptionLink'

interface Props {
  type: 'mobile' | 'desktop'
}

const MenuLink = ({ type }: Props): JSX.Element => {
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
