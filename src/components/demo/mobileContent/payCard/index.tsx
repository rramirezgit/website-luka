import { Box } from '@mui/material'
import styles from './paycard.module.css'
import Typography from '@mui/material/Typography'
import clsx from 'clsx'
import config from 'const'
import './index.css'

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
          backgroundImage: type === 'card' ? `url(${config.UrlBaseImg}demoLink/card/card.svg) !important` : 'none',
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
                  <img src={`${config.UrlBaseImg}demoLink/card/wifi.svg`} alt='Wireless' style={{ height: '100%', width: '100%' }} />
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
                  <img src={`${config.UrlBaseImg}demoLink/card/star.svg`} alt='Favorite' style={{ height: '100%', width: '100%' }} />
                </Box>
                <Box
                  component={'figure'}
                  className={styles.icons}
                  id={'big-icon'}
                >
                  <img src={`${config.UrlBaseImg}demoLink/card/visa.svg`} alt='Visa' style={{ height: '100%', width: '100%' }} />
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
                  <img src={`${config.UrlBaseImg}demoLink/card/paypal.svg`} alt='Paypal' style={{ height: '100%', width: '100%' }} />
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
