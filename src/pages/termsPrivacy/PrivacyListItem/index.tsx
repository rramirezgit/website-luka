import { ListItem } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import styles from './privacylist.module.css'

interface CustomInterface {
  text: String
}

const PrivacyListItem = ({ text }: CustomInterface): JSX.Element => {
  return (
    <ListItem
      className={styles['list-item']}
      sx={{
        fontWeight: '400 !important',
        fontSize: {
          xs: '16px !important',
          md: '16px !important'
        }
      }}
    >
      <CircleIcon className={styles['list-decorator']} />
      {text}
    </ListItem>
  )
}

export default PrivacyListItem
