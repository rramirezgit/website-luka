import { Box, Typography } from '@mui/material'
import { getCssVar } from 'theme'
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
            justifyContent: 'center',
            flexDirection: 'column'
          }
        }
      >
        <Box
          id={'card-line'}
          sx={
            {
              height: '25px',
              width: '100%',
              backgroundColor: getCssVar('--gray-text-dark')
            }
          }
        ></Box>
        <Typography
          id={'paycard-text'}
          sx={
            {
              color: getCssVar('--gray-text-dark')
            }
          }
        >
          Seleccione tarjeta de crédito/débito
        </Typography>
      </Box>
    </Box>
  )
}

export default PayCard
