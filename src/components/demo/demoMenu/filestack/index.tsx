import { Box, Typography } from '@mui/material'
// import * as filestack from 'filestack-js'
// import { checkImgSquareSize } from './logic'
import plusImg from 'assets/demoLink/plus.png'
import styles from './filestack.module.css'

const Filestack = (): JSX.Element => {
//   const client = filestack.init('AccC2ft1wSQKG4AMZPjetz')
//   const handleClick = (): void => {
//     const picker = client.picker(
//       {
//         transformations: {
//           crop: {
//             aspectRatio: 1 / 1,
//             force: true
//           }
//         },
//         maxFiles: 1,
//         accept: ['image/*'],
//         fromSources: ['local_file_system'],
//         onFileCropped: async (file) => {
//           try {
//             await checkImgSquareSize(file)
//           } catch (e) {
//             picker.close()
//           }
//         },
//         onFileUploadFinished: file => {
//           console.log(file.url)
//         }
//       }
//     )
//   }
  return (
    <Box
      className={styles.container}
    >
      <Box
        component={'figure'}
        className={styles.figure}
      >
        <img src={plusImg} alt='Add' />
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
