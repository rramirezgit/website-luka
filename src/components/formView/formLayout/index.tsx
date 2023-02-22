import { Box, Typography } from '@mui/material'
import styles from './formlayout.module.css'
import Loading from 'components/loading'
import { getCssVar } from 'theme'
import Lottie from 'lottie-react'
import animationData from 'assets/check.json'
import animationErrorData from 'assets/x.json'

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
            <Lottie
              animationData={animationData}
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
            <Lottie
              animationData={animationErrorData}
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
        </Box>
      )}
    </Box>
  )
}

export default FormLayout
