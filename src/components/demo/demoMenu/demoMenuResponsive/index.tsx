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
      id={'modal-display-container'}
      className={clsx(styles['modal-container'], styles['slide-in'])}
    >
      <Box
        className={styles.close}
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
        className={styles.wrapper}
      >
        {children}
      </Box>
    </Box>,
    element
  )
}

export default DemoMenuResponsive
