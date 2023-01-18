import ReactDOM from 'react-dom'
import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import styles from './menuresponsive.module.css'

interface Props {
  close: () => void
}

const DemoMenuResponsive = ({ close }: Props): React.ReactPortal => {
  const element = document.getElementById('modal') as HTMLElement
  return ReactDOM.createPortal(
    <Box
      component={'div'}
      id={'modal-display-container'}
      className={styles['modal-container']}
      sx={
        {
          width: '100%',
          height: '100%'
        }
      }
    >
      <Box
        sx={
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            padding: '40px 30px 10px 30px'
          }
        }
      >
        <CloseIcon
          sx={
            {
              fontSize: '30px'
            }
          }
          onClick={close}
        />
      </Box>
      <Box
        sx={
          {
            width: '100%',
            height: 'calc(100% - 80px)',
            backgroundColor: 'red',
            overflow: 'hidden',
            overflowY: 'auto'
          }
        }
      >
      </Box>
    </Box>,
    element
  )
}

export default DemoMenuResponsive
