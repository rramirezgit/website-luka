import { Box, Typography } from '@mui/material'
import styles from './currencyblock.module.css'
import { countries } from 'logic'
import { getCssVar } from 'theme'
import Square from 'components/square'
import config from 'const'

const CurrencyBlock = (): JSX.Element => {
  return (
    <Box
      className={styles.container}
      sx={{
        padding: '0 35px'
      }}
    >
      <Box className={styles['gray-container']}>
        <Box
          className={styles.row}
          sx={{
            borderBottom: `0.9px solid ${getCssVar('--gray-text-o')}`,
            margin: {
              xs: '0 10px',
              sm: '0 50px'
            }
          }}
        >
          <Box
            className={styles['row-container']}
            sx={{
              width: '40%',
              justifyContent: {
                xs: 'flex-start',
                sm: 'center'
              },
              padding: {
                xs: '30px 0 30px 5px !important',
                sm: '30px 50px 30px 0 !important'
              }
            }}
          >
            <Typography
              className={styles.title}
              sx={{
                fontSize: { xs: '16px !important', sm: '20px !important' }
              }}
            >
              CODE
            </Typography>
          </Box>
          <Box
            className={styles['row-container']}
            sx={{
              width: '60%',
              justifyContent: {
                xs: 'flex-start',
                sm: 'center'
              },
              padding: {
                xs: '30px 0 30px 15px !important',
                sm: '30px 0px 30px 50px !important'
              }
            }}
          >
            <Typography
              className={styles.title}
              sx={{
                fontSize: { xs: '16px !important', sm: '20px !important' }
              }}
            >
              CURRENCY
            </Typography>
          </Box>
        </Box>
        {countries.map(country => (
          <Box className={styles.row} key={country.code}>
            <Box
              className={styles['row-container']}
              sx={{
                width: '40%',
                justifyContent: {
                  xs: 'flex-start',
                  sm: 'center'
                }
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: '40px',
                    sm: '55px'
                  },
                  height: {
                    xs: '25px',
                    sm: '35px'
                  },
                  marginRight: {
                    xs: '10px',
                    sm: '30px'
                  }
                }}
              >
                <img
                  src={`${config.UrlBaseImg}currencies/${country.code}.svg`}
                  style={{
                    borderRadius: '8px',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                  alt='Flag'
                />
              </Box>
              <Typography
                className={styles.text}
                sx={{
                  width: '55px',
                  fontSize: { xs: '16px !important', sm: '20px !important' }
                }}
              >
                {country.currency}
              </Typography>
            </Box>
            <Box
              className={styles['row-container']}
              sx={{
                width: '60%',
                justifyContent: {
                  xs: 'flex-start',
                  sm: 'center'
                }
              }}
            >
              <Typography
                className={styles['text-small']}
                sx={{
                  fontSize: { xs: '14px !important', md: '20px !important' }
                }}
              >
                {country.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <Square
          color="#5AE1E230"
          top={'600'}
          left={'0'}
          maxHeight={240}
          maxWidth={150}
        />
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <Square
          color="#0878FF20"
          top={'1100'}
          right={'0'}
          maxHeight={284}
          maxWidth={100}
        />
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <Square
          color="#5AE1E230"
          top={'2300'}
          left={'0'}
          maxHeight={240}
          maxWidth={140}
        />
      </Box>
    </Box>
  )
}

export default CurrencyBlock
