import { Box, Typography, Button } from '@mui/material'
import styles from './formlayout.module.css'
import Loading from 'components/loading'
import { getCssVar } from 'theme'
import { useNavigate } from 'react-router-dom'
import LottiePlayer from 'components/lottiePlayer'

interface Props {
  title: string
  children: JSX.Element
  loading: boolean
  success: boolean
  failure: boolean
  setFailure: (value: boolean) => void
}

const FormLayout = ({
  title,
  children,
  loading,
  success,
  failure,
  setFailure
}: Props): JSX.Element => {
  const navigate = useNavigate()
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>{title}</Typography>
      {!loading && !success && !failure && children}
      {loading && !success && !failure && (
        <Box
          className={styles.flex}
          sx={{
            height: 'calc(100% - 80px)'
          }}
        >
          <Loading
            border={8}
            firstColor={getCssVar('--primary-buttons')}
            secondColor={getCssVar('--primary-buttons')}
            size={100}
          />
          <Typography
            className={styles.text}
            sx={{
              marginTop: '20px'
            }}
          >
            Sending message...
          </Typography>
        </Box>
      )}
      {success && (
        <Box
          className={styles.flex}
          sx={{
            height: 'calc(100% - 120px)'
          }}
        >
          <Box component={'figure'} className={styles.figure}>
            <LottiePlayer
              path="check.json"
              loop={false}
              autoplay={true}
              className={styles.lottie}
              initialSegment={[0, 50]}
            />
          </Box>
          <Typography
            className={styles.text}
            sx={{
              marginBottom: '30px'
            }}
          >
            Message successfully sent
          </Typography>
          <Button
            variant={'contained'}
            sx={{
              width: '148px',
              height: '48px',
              fontSize: '16px',
              marginTop: '20px'
            }}
            onClick={() => navigate('/')}
          >
            Accept
          </Button>
        </Box>
      )}
      {failure && (
        <Box
          className={styles.flex}
          sx={{
            height: 'calc(100% - 120px)'
          }}
        >
          <Box component={'figure'} className={styles.figure}>
            <LottiePlayer
              path="x.json"
              loop={false}
              autoplay={true}
              className={styles.lottie}
              initialSegment={[0, 50]}
            />
          </Box>
          <Typography
            className={styles.text}
            sx={{
              marginBottom: '30px'
            }}
            onClick={() => {
              setFailure(false)
            }}
          >
            Failed to send message
          </Typography>
          <Button
            variant={'contained'}
            sx={{
              width: '148px',
              height: '48px',
              fontSize: '16px',
              marginTop: '20px'
            }}
            onClick={() => {
              setFailure(false)
            }}
          >
            Retry
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default FormLayout
