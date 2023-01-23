import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { getCssVar } from 'theme'
import styles from './paycard.module.css'
import './index.css'

const PayCard = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
      id={'paycard-container'}
      sx={
        {
          height: {
            xs: '70px',
            md: '120px'
          },
          minHeight: {
            xs: '70px',
            md: '120px'
          },
          width: {
            xs: '120px',
            md: '180px'
          },
          minWidth: {
            xs: '120px',
            md: '180px'
          }
        }
      }
    >
      <Box
        className={styles['check-container']}>
        <Box
            className={styles['big-circle']}
        >
            <Box
            className={styles['medium-circle']}
            >
            <Box
                className={styles['small-circle']}
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
        <Typography
          id={'paycard-text'}
          sx={
            {
              fontSize: {
                xs: '8px',
                md: '14px'
              },
              fontweigth: 'bold',
              color: getCssVar('--white')
            }
          }
        >
          + Agregar nueva tarjeta
        </Typography>
      </Box>
    </Box>
  )
}

export default PayCard
