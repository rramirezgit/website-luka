import { Box, List, Typography } from '@mui/material'
import vposStyles from './vpos.module.css'
import CustomListItem from './CustomListItem'
import wifi from 'assets/img/wifi.png'
import phone1 from 'assets/img/vpos-phone-1.png'
import phone2 from 'assets/img/vpos-phone-2.png'
import phone3 from 'assets/img/vpos-phone-3.png'
import phone4 from 'assets/img/vpos-phone-4.png'
import vposFish from 'assets/img/vpos-img.png'
import Tags from 'components/tags'

const VPOS = (): JSX.Element => {
  return (
    <Box
      sx={
        {
          padding: '235px 0',
          width: '100%'
        }
      }
    >
      <Box
        className={vposStyles.container}
        sx={
          {
            marginBottom: '120px !important'
          }
        }
      >
        <Box
          sx={
            {
              width: '570px'
            }
          }
        >
          <Box
            sx={
              {
                display: 'flex',
                marginBottom: '10px'
              }
            }
          >
            <Typography className={vposStyles['title-blue']}>
              VPOS
            </Typography>
            <Typography className={vposStyles.title}>
              Hardware Free
            </Typography>
          </Box>
          <Typography className={vposStyles.subtitle}>
            Download, sign up, receive payments, that’s it!
          </Typography>
          <List
            sx={
              {
                marginTop: '35px'
              }
            }
          >
            <CustomListItem
              text={'Receive and send payments, conveniently simple to everyone!'}
            />
            <CustomListItem
              text={'Request and execute payments enabling local & international payments methods'}
            />
            <CustomListItem
              text={'Use the messaging channel best for your business: SMS, WhatsApp, Telegram, email, social media or your app.'}
            />
            <CustomListItem
              text={'Make easy and friendly the way payments are experienced by your business users.'}
            />
            <CustomListItem
              text={'Benefit from an easy to use web control panel to manage your payment links.'}
            />
          </List>
          <Tags tags={['INTEGRATION VIA API', 'GLOBAL REACH', 'MULTIPLE USE CASES']} />
        </Box>
        <Box
          sx={
            {
              display: 'flex',
              position: 'relative',
              width: '645px',
              justifyContent: 'space-between'
            }
          }
        >
          <Box component={'figure'}>
            <img src={phone1} alt={'Demo'} />
          </Box>
          <Box component={'figure'}>
            <img src={phone2} alt={'Demo'} />
          </Box>
          <Box
            component={'figure'}
            sx={
              {
                position: 'absolute',
                right: '280px',
                top: '-80px'
              }
            }
          >
            <img src={wifi} alt={'Demo'} />
          </Box>
        </Box>
      </Box>
      <Box
        className={vposStyles.container}
      >
        <Box
          className={vposStyles['big-box']}
        >
          <Box
            sx={
              {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }
            }
          >
            <Box
              component={'figure'}
            >
              <img src={vposFish} alt='Demo' />
            </Box>
            <Typography
              className={vposStyles['box-text']}
              sx={
                {
                  textAlign: 'center'
                }
              }
            >
              Accept contactless and QR Code payments in just a blink.
            </Typography>
          </Box>
          <Box
            component={'figure'}
          >
            <img src={phone4} alt='Demo' />
          </Box>
        </Box>
        <Box
          sx={
            {
              width: '620px',
              display: 'flex',
              justifyContent: 'space-between'
            }
          }
        >
          <Box
            className={vposStyles['small-box']}
          >
            <Typography
              className={vposStyles['box-text']}
            >
              Empower your business, enable your consumer to pay conveniently simple.
            </Typography>
          </Box>
          <Box
            className={vposStyles['small-box']}
            sx={
              {
                flexDirection: 'column',
                justifyContent: 'space-between !important'
              }
            }
          >
            <Typography
              className={vposStyles['box-text-2']}
            >
              Enable onsite multicurrency payments beyond the use of credit/debit cards
            </Typography>
            <Box
              component={'figure'}
              sx={
                {
                  height: '197px'
                }
              }
            >
              <img src={phone3} alt='Demo' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default VPOS
