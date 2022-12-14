import { Box, Typography } from '@mui/material'
import lukaLogo from 'assets/footer/luka.png'
import linkedin from 'assets/footer/linkedin.png'
import youtube from 'assets/footer/youtube.png'
import instagram from 'assets/footer/instagram.png'
import twitter from 'assets/footer/twitter.png'
import footerStyles from './footer.module.css'
import IconBox from './IconBox'
import { aboutUseArray, countryArray, forDevelopersArray, productsArray, useCasesArray } from './footerArrays'
import FooterList from './FooterList'
import FooterSelect from './FooterSelect'

const Footer = (): JSX.Element => {
  const location: string = 'United States'
  return (
    <Box
      sx={
        {
          padding: '240px 0px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }
      }
    >
      <Box
        sx={
          {
            width: {
              xs: '100%',
              lg: '1200px'
            },
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '50px',
            flexDirection: {
              xs: 'column',
              lg: 'row'
            },
            padding: {
              xs: '0 25px',
              sm: '0 50px',
              md: '0 105px'
            }
          }
        }
      >
        <Box
          sx={
            {
              display: 'flex',
              flexDirection: 'column'
            }
          }
        >
          <Box
            component={'figure'}
            sx={
              {
                marginBottom: '35px'
              }
            }
          >
            <img src={lukaLogo} alt='Logo'/>
          </Box>
          <Typography
            className={footerStyles.regular}
            sx={
              {
                width: {
                  xs: '100%',
                  lg: '350px'
                },
                marginBottom: '30px'
              }
            }
          >
            High level experience in web design and development knowledge, producing quality work
          </Typography>
          <Box
            sx={
              {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px'
              }
            }
          >
            <IconBox src={instagram} alt='Instagram' />
            <IconBox src={youtube} alt='Youtube' />
            <IconBox src={twitter} alt='Twitter' />
            <IconBox src={linkedin} alt='LinkedIn' />
          </Box>
          <Box
            sx={
              {
                display: {
                  xs: 'none',
                  sm: 'block'
                }
              }
            }
          >
            <FooterSelect
              options={countryArray}
              value={location}
            />
          </Box>
        </Box>
        <Box
          sx={
            {
              display: 'flex',
              justifyContent: {
                xs: 'space-evenly',
                lg: 'center'
              },
              marginTop: {
                xs: '40px',
                lg: '0'
              }
            }
          }
        >
          <Box>
            <FooterList texts={productsArray} />
          </Box>
          <Box
            sx={
              {
                display: {
                  xs: 'none',
                  sm: 'block'
                }
              }
            }
          >
            <FooterList texts={useCasesArray} />
          </Box>
          <Box>
            <FooterList texts={forDevelopersArray} />
          </Box>
          <Box
            sx={
              {
                display: {
                  xs: 'none',
                  md: 'block'
                }
              }
            }
          >
            <FooterList texts={aboutUseArray} />
          </Box>
        </Box>
      </Box>
      <Typography>&copy; 2022 Luka Inc.</Typography>
    </Box>
  )
}

export default Footer
