import { Box } from '@mui/material'
import styles from './paycard.module.css'
import card from 'assets/demoLink/card/card.svg'
import wifi from 'assets/demoLink/card/wifi.svg'
import star from 'assets/demoLink/card/star.svg'
import visa from 'assets/demoLink/card/visa.svg'
import paypal from 'assets/demoLink/card/paypal.svg'
import './index.css'
import Typography from '@mui/material/Typography'
import clsx from 'clsx'

interface Props {
  type: 'card' | 'paypal'
}

const PayCard = ({ type }: Props): JSX.Element => {
  return (
    <Box
      className={styles.container}
      id={'paycard-container'}
      sx={
        {
          backgroundImage: type === 'card' ? `url(${card}) !important` : 'none',
          backgroundRepeat: type === 'card' ? 'no-repeat !important' : 'none',
          backgroundPosition: type === 'card' ? 'center !important' : 'none',
          backgroundSize: type === 'card' ? '100% 100% !important' : 'none'
        }
      }
    >
      {
        type === 'card'
          ? <Box
              id={'paycard-container'}
              sx={
                {
                  position: 'relative'
                }
              }
            >
              <Box
                className={styles['float-container']}
                id={'check-container'}
              >
                <Box
                  component={'figure'}
                  className={styles.icons}
                  id={'small-icon'}
                >
                  <img src={wifi} alt='Wireless' style={{ height: '100%', width: '100%' }} />
                </Box>
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
                className={styles.content}
              >
                <Typography
                  className={styles['pay-text']}
                  id={'paycard-text'}
                >
                  **** 3507
                </Typography>
              </Box>
              <Box
                className={styles['float-container']}
                id={'icons-container'}
                sx={
                  {
                    bottom: '0px'
                  }
                }
              >
                <Box
                  component={'figure'}
                  className={styles.icons}
                  id={'small-icon'}
                >
                  <img src={star} alt='Favorite' style={{ height: '100%', width: '100%' }} />
                </Box>
                <Box
                  component={'figure'}
                  className={styles.icons}
                  id={'big-icon'}
                >
                  <img src={visa} alt='Visa' style={{ height: '100%', width: '100%' }} />
                </Box>
              </Box>
            </Box>
          : <Box
              id={'paycard-container'}
            >
              <Box
                sx={
                  {
                    padding: '10px 15px'
                  }
                }
              >
                <Box
                  component={'figure'}
                  className={styles.icons}
                  id={'paypal-icon'}
                >
                  <img src={paypal} alt='Paypal' style={{ height: '100%', width: '100%' }} />
                </Box>
                <Box>
                  <Typography
                    className={clsx(styles['paypal-text'], styles['paypal-title'])}
                    id={'paypal-title'}
                  >
                    Paypal
                  </Typography>
                  <Typography
                    className={styles['paypal-text']}
                    id={'paypal-text'}
                  >
                    Add User
                  </Typography>
                </Box>
              </Box>
            </Box>
      }
    </Box>
  )
}

export default PayCard
