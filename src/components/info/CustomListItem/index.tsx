import { ListItem } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import customlistStyles from './customlist.module.css'

interface CustomInterface {
  text: String
}

const CustomListItem = ({ text }: CustomInterface): JSX.Element => {
  return (
    <ListItem
      className={customlistStyles['list-item']}
      sx={{
        fontWeight: {
          xs: 'bold',
          lg: '400'
        }
        // textAlign: 'justify'
      }}
    >
      <CircleIcon className={customlistStyles['list-decorator']} />
      {text}
    </ListItem>
  )
}

export default CustomListItem
