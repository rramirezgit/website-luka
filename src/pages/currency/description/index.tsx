import { Box, Typography } from '@mui/material'
import coin from 'assets/currency/coin.svg'
import styles from './description.module.css'

const Description = (): JSX.Element => {
  return (
    <Box
      sx={
        {
          padding: {
            xs: '0 25px',
            sm: '0 50px',
            md: '0 105px'
          }
        }
      }
    >
      <Box
        className={styles.container}
        sx={
          {
            width: {
              xs: '100%'
            }
          }
        }
      >
        <Box
            className={styles['text-logo-container']}
          sx={
            {
              alignItems: {
                xs: 'flex-start',
                sm: 'center'
              },
              marginBottom: {
                xs: '20px',
                sm: '30px'
              },
              flexDirection: {
                xs: 'column',
                sm: 'row'
              }
            }
          }
        >
          <Box
            className={styles.logo}
            component={'figure'}
          >
            <img src={coin} alt='coin' style={{ height: '100%', width: '100%' }} />
          </Box>
          <Typography
            className={styles.title}
            sx={
              {
                fontSize: {
                  xs: '30px !important',
                  sm: '40px !important'
                }
              }
            }
          >Supported Currencies</Typography>
        </Box>
        <Box>
          <Typography
            className={styles.text}
            sx={
              {
                fontSize: {
                  xs: '12px !important',
                  sm: '16px !important'
                }
              }
            }
          >
            The following are the supported currencies. Currency availability may vary depending on your country of domicile or establishment terms & conditions.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Description