import { Box, Typography } from '@mui/material'
import footerStyles from './footer.module.css'
import IconBox from './IconBox'
import { aboutUsArray, forDevelopersArray } from './footerArrays'
import FooterList from './FooterList'
// import FooterSelect from './FooterSelect'
import config from 'const'

interface FooterProps {
  disablePadding?: boolean
}

const Footer = ({ disablePadding = false }: FooterProps): JSX.Element => {
  // const location: string = 'United States'
  return (
    <Box
      sx={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        zIndex: '99'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1300px',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '50px',
          flexDirection: {
            xs: 'column',
            lg: 'row'
          },
          padding: disablePadding ? '0' : '0 35px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            component={'figure'}
            sx={{
              marginBottom: {
                xs: '20px',
                md: '35px'
              },
              width: {
                xs: '80px',
                md: '120px'
              }
            }}
          >
            <img
              alt="Logo"
              src={`${config.UrlBaseImg}Logo.svg`}
              style={{ maxWidth: '100%' }}
            />
          </Box>
          <Typography
            className={footerStyles.regular}
            sx={{
              width: {
                xs: '100%',
                lg: '350px'
              },
              marginBottom: '30px'
            }}
          >
            High level experience in web design and development knowledge,
            producing quality work
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px'
            }}
          >
            <IconBox
              src={`${config.UrlBaseImg}footer/instagram.svg`}
              alt="Instagram"
              url="https://www.instagram.com/lukapay/"
            />
            <IconBox
              src={`${config.UrlBaseImg}footer/twitter.svg`}
              alt="Twitter"
              url="https://twitter.com/Lukapay_"
            />
            <IconBox
              src={`${config.UrlBaseImg}footer/linkedin.svg`}
              alt="LinkedIn"
              url="https://www.linkedin.com/company/lukapay/"
            />
          </Box>
          {/* <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block'
              }
            }}
          >
            <FooterSelect options={countryArray} value={location} />
          </Box> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: {
              xs: 'space-evenly',
              lg: 'center'
            },
            marginTop: {
              xs: '40px',
              lg: '0'
            }
          }}
        >
          <Box>
            <FooterList texts={forDevelopersArray} />
          </Box>
          <Box>
            <FooterList texts={aboutUsArray} />
          </Box>
        </Box>
      </Box>
      <Typography>&copy; 2022 Luka Inc.</Typography>
    </Box>
  )
}

export default Footer
