import { Box, List, Typography } from '@mui/material'
import vposStyles from './vpos.module.css'
import CustomListItem from '../../../components/info/CustomListItem'
import Tags from 'components/tags'
import PhoneBox from './PhoneBox'
import Square from 'components/square'
import ScrollBoxes from './ScrollBoxes'
import cardsArray from '../ourProducts/ourProductsArray'

const VPOS = (): JSX.Element => {
  return (
    <Box
      id={cardsArray[2].id}
      sx={{
        padding: {
          xs: '70px 0 70px 0',
          lg: '150px 0 100px 0'
        },
        width: '100%',
        position: 'relative',
        cursor: 'default'
      }}
    >
      <Box
        className={vposStyles.container}
        sx={{
          marginBottom: {
            xs: '40px !important',
            lg: '60px !important'
          },
          justifyContent: {
            xs: 'center !important',
            lg: 'space-between !important'
          },
          maxWidth: '1370px',
          padding: '0 35px'
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              lg: '480px',
              xl: '570px'
            },
            minWidth: {
              xs: 'none',
              md: '400px',
              lg: '480px'
            },
            marginRight: {
              xs: '0',
              lg: '20px',
              xl: '0'
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              marginBottom: '10px',
              flexDirection: {
                xs: 'column',
                xl: 'row'
              }
            }}
          >
            <Typography
              className={vposStyles['title-blue']}
              sx={{
                fontSize: {
                  xs: '45px'
                }
              }}
            >
              VPOS
            </Typography>
            <Typography
              className={vposStyles.title}
              sx={{
                fontSize: {
                  xs: '45px'
                }
              }}
            >
              Hardware Free
            </Typography>
          </Box>
          <Typography className={vposStyles.subtitle}>
            Download, sign up, receive payments, that’s it!
          </Typography>
          <Box
            sx={{
              width: '100%',
              marginTop: '100px',
              display: {
                xs: 'block',
                lg: 'none'
              }
            }}
          >
            <PhoneBox />
          </Box>
          <List
            sx={{
              marginTop: '35px'
            }}
          >
            <CustomListItem
              text={
                'Receive and send payments, conveniently simple to everyone!'
              }
            />
            <CustomListItem
              text={
                'Request and execute payments enabling local & international payments methods'
              }
            />
            <CustomListItem
              text={
                'Use the messaging channel best for your business: SMS, WhatsApp, Telegram, email, social media or your app.'
              }
            />
            <CustomListItem
              text={
                'Make easy and friendly the way payments are experienced by your business users.'
              }
            />
            <CustomListItem
              text={
                'Benefit from an easy to use web control panel to manage your payment links.'
              }
            />
          </List>
          <Tags
            tags={['INTEGRATION VIA API', 'GLOBAL REACH', 'MULTIPLE USE CASES']}
          />
        </Box>
        <Box
          sx={{
            width: '640px',
            display: {
              xs: 'none',
              lg: 'block'
            }
          }}
        >
          <PhoneBox />
        </Box>
      </Box>
      <ScrollBoxes />
      <Square
        color="#5AE1E230"
        bottom={'0'}
        left={'0'}
        maxHeight={90}
        maxWidth={130}
      />
      <Square
        color="#0878FF20"
        top={'0'}
        right={'0'}
        maxHeight={180}
        maxWidth={130}
      />
    </Box>
  )
}

export default VPOS
