import { Box } from '@mui/material'
// import Typography from '@mui/material/Typography'
// import { getCssVar } from 'theme'
import styles from './paycard.module.css'
import './index.css'

// interface Props {
//   type: 'card' | 'paypal'
// }

const PayCard = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
      id={'paycard-container'}
    >
      <Box
        className={styles['check-container']}
        id={'check-container'}
      >
        <Box
          className={styles['big-circle']}
          id={'big-circle'}
        >
          <Box
            className={styles['medium-circle']}
            id={'medium-circle'}
          >
            <Box
              className={styles['small-circle']}
              id={'small-circle'}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={
          {
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      >
        {/* <Typography
          id={'paycard-text'}
          sx={
            {
              fontweigth: 'bold',
              color: getCssVar('--white')
            }
          }
        >
          + Agregar nueva tarjeta
        </Typography> */}
      </Box>
    </Box>
  )
}

export default PayCard
