import { Box, Typography } from '@mui/material'
import * as filestack from 'filestack-js'
import styles from './filestack.module.css'
import { useDispatch } from 'react-redux'
import { changeImg } from 'redux/slices/demoSlice'
import config from 'const'

const Filestack = (): JSX.Element => {
  const dispatch = useDispatch()
  const client = filestack.init('AccC2ft1wSQKG4AMZPjetz')
  const handleClick = (): void => {
    const picker = client.picker({
      transformations: {
        crop: {
          aspectRatio: 1 / 1,
          force: true
        }
      },
      exposeOriginalFile: true,
      maxFiles: 1,
      accept: ['image/*'],
      fromSources: ['local_file_system'],
      onFileUploadFinished: file => {
        dispatch(changeImg(file.url))
      }
    })
    picker.open()
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <Box
      className={styles.container}
      onClick={handleClick}
    >
      <Box
        component={'figure'}
        className={styles.figure}
      >
        <img src={`${config.UrlBaseImg}demoLink/plus.svg`} alt='Add' />
      </Box>
      <Box>
        <Typography
          className={styles.title}
        >
          Upload File
        </Typography>
        <Typography
          className={styles.subtitle}
        >
          Add up to 2 GB
        </Typography>
      </Box>
    </Box>
  )
}

export default Filestack
