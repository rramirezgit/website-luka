import { Box, List, Typography } from '@mui/material'
import vposStyles from './vpos.module.css'
import CustomListItem from '../../../components/info/CustomListItem'
import phone3 from 'assets/vpos/vpos-phone-3.png'
import phone4 from 'assets/vpos/vpos-phone-4.png'
import vposFish from 'assets/vpos/vpos-img.png'
import Tags from 'components/tags'
import PhoneBox from './PhoneBox'
import Square from 'components/square'

const VPOS = (): JSX.Element => {
  return (
    <Box
      sx={
        {
          padding: {
            xs: '125px 25px',
            lg: '235px 105px'
          },
          width: '100%',
          position: 'relative'
        }
      }
    >
      <Box
        className={vposStyles.container}
        sx={{
          marginBottom: {
            xs: '60px !important',
            lg: '120px !important'
          },
          justifyContent: {
            xs: 'center !important',
            lg: 'space-between !important'
          }
        }}
      >
        <Box
          sx={{
            width: {
              xs: '85%',
              lg: '400px',
              xl: '570px'
            },
            minWidth: {
              xs: 'none',
              md: '400px'
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
                  xs: '40px',
                  lg: '54px'
                }
              }}
            >
              VPOS
            </Typography>
            <Typography
              className={vposStyles.title}
              sx={{
                fontSize: {
                  xs: '40px',
                  lg: '54px'
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
            width: '645px',
            display: {
              xs: 'none',
              lg: 'block'
            }
          }}
        >
          <PhoneBox />
        </Box>
      </Box>
      <Box
        className={vposStyles.container}
        sx={{
          flexDirection: {
            xs: 'column !important',
            lg: 'row !important'
          },
          alignItems: {
            xs: 'center !important',
            lg: 'flex-start !important'
          }
        }}
      >
        <Box
          className={vposStyles['big-box']}
          sx={{
            width: {
              xs: '100%',
              lg: '49%',
              xl: '620px'
            },
            marginBottom: {
              xs: '35px',
              xl: '0'
            },
            height: {
              xs: '155px',
              md: '200px',
              xl: '290px'
            },
            maxWidth: '620px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '45%',
              height: '100%'
            }}
          >
            <Box
              component={'figure'}
              sx={{
                height: {
                  xs: '35%',
                  sm: '50%'
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={vposFish}
                alt="Demo"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </Box>
            <Typography
              className={vposStyles['box-text']}
              sx={{
                textAlign: 'center',
                fontSize: {
                  xs: '12px',
                  sm: '14px',
                  xl: '20px'
                }
              }}
            >
              Accept contactless and QR Code payments in just a blink.
            </Typography>
          </Box>
          <Box
            component={'figure'}
            sx={{
              width: '45%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={phone4}
              alt="Demo"
              style={{ height: '100%', maxWidth: '100%' }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: {
              xs: '100%',
              lg: '49%',
              xl: '620px'
            },
            maxWidth: '620px'
          }}
        >
          <Box
            className={vposStyles['small-box']}
            sx={{
              width: '49%',
              height: {
                xs: '155px',
                md: '200px',
                xl: '290px'
              }
            }}
          >
            <Typography
              className={vposStyles['box-text']}
              sx={{
                fontSize: {
                  xs: '12px',
                  sm: '14px',
                  xl: '20px',
                  padding: '0 15px'
                }
              }}
            >
              Empower your business, enable your consumer to pay conveniently
              simple.
            </Typography>
          </Box>
          <Box
            className={vposStyles['small-box']}
            sx={{
              width: '49%',
              height: {
                xs: '155px',
                md: '200px',
                xl: '290px'
              },
              flexDirection: 'column',
              justifyContent: 'space-between !important'
            }}
          >
            <Typography
              className={vposStyles['box-text-2']}
              sx={{
                fontSize: {
                  xs: '10px !important',
                  sm: '14px !important'
                }
              }}
            >
              Enable onsite multicurrency payments beyond the use of
              credit/debit cards
            </Typography>
            <Box
              component={'figure'}
              sx={{
                height: '60%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}
            >
              <img
                src={phone3}
                alt="Demo"
                style={{ maxWidth: '90%', maxHeight: '100%' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Square color='#5AE1E230' bottom={'0'} left={'0'} maxHeight={180} maxWidth={130}/>
      <Square color='#0878FF20' top={'0'} right={'0'} maxHeight={180} maxWidth={130}/>
    </Box>
  )
}

export default VPOS
