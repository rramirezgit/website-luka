import ReactDOM from 'react-dom'
import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import styles from './menuresponsive.module.css'
import clsx from 'clsx'

interface Props {
  close: () => void
  children: JSX.Element
}

const DemoMenuResponsive = ({ close, children }: Props): React.ReactPortal => {
  const element = document.getElementById('modal') as HTMLElement
  const onCloseAnimation = (): void => {
    const container = document.getElementById('modal-display-container')
    if (container) {
      container.classList.add(styles['slide-out'])
    }
    setTimeout(() => {
      close()
    }, 400)
  }
  return ReactDOM.createPortal(
    <Box
      component={'div'}
      id={'modal-display-container'}
      className={clsx(styles['modal-container'], styles['slide-in'])}
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
          onClick={onCloseAnimation}
        />
      </Box>
      <Box
        sx={
          {
            width: '100%',
            height: 'calc(100% - 80px)',
            overflow: 'hidden',
            overflowY: 'auto'
          }
        }
      >
        {children}
      </Box>
    </Box>,
    element
  )
}

export default DemoMenuResponsive
