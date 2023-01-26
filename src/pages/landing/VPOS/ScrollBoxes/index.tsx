import { Box, Typography } from '@mui/material'
import scrollStyles from './scrollboxes.module.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import phone3 from 'assets/vpos/vpos-phone-3.svg'
import phone4 from 'assets/vpos/vpos-phone-4.svg'
import phone5 from 'assets/vpos/vpos-phone-5.svg'
import vposFish from 'assets/vpos/vpos-img.svg'
import checkImg from 'assets/vpos/vpos-img-2.svg'
import { getCssVar } from 'theme'
import { useState } from 'react'

const ScrollBoxes = (): JSX.Element => {
  const [displayLeft, setDisplayLeft] = useState(false)
  const [displayRight, setDisplayRight] = useState(false)
  const handleDisplayOver = (): void => {
    const element = document.getElementById('vpos-scroll-container')
    if (element) {
      if (element.scrollLeft <= (element.scrollWidth - window.innerWidth) - 5) {
        setDisplayRight(true)
      } else {
        setDisplayRight(false)
      }
      if (element.scrollLeft >= 5) {
        setDisplayLeft(true)
      } else {
        setDisplayLeft(false)
      }
    }
  }
  const handleDisplayLeave = (): void => {
    setDisplayRight(false)
    setDisplayLeft(false)
  }
  const handleLeftScroll = (): void => {
    const element = document.getElementById('vpos-scroll-container')
    if (element) {
      element.scrollTo(
        {
          top: 0,
          left: 0,
          behavior: 'smooth'
        }
      )
    }
  }
  const handleRightScroll = (): void => {
    const element = document.getElementById('vpos-scroll-container')
    if (element) {
      element.scrollTo(
        {
          top: 0,
          left: element.scrollWidth,
          behavior: 'smooth'
        }
      )
    }
  }
  const handleStopScroll = (): void => {
    const element = document.getElementById('vpos-scroll-container')
    if (element) {
      element.scrollTo(
        {
          top: 0,
          left: element.scrollLeft,
          behavior: 'smooth'
        }
      )
      handleDisplayOver()
    }
  }
  return (
    <Box
      sx={
        {
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        }
      }
      onMouseOver={handleDisplayOver}
      onMouseLeave={handleDisplayLeave}
    >
      <Box
        sx={
          {
            position: 'absolute',
            top: {
              xs: '25%',
              lg: '35%'
            },
            left: '0px',
            cursor: 'pointer',
            display: {
              xs: displayLeft ? 'block' : 'none',
              xxl: 'none'
            }
          }
        }
        onPointerDown={handleLeftScroll}
        onPointerUp={handleStopScroll}
      >
        <ChevronLeftIcon
          sx={
            {
              fontSize: '100px',
              color: getCssVar('--gray-text-dark'),
              opacity: '0.4'
            }
          }
        />
      </Box>
      <Box
        sx={
          {
            position: 'absolute',
            top: {
              xs: '25%',
              lg: '35%'
            },
            right: '0px',
            cursor: 'pointer',
            display: {
              xs: displayRight ? 'block' : 'none',
              xxl: 'none'
            }
          }
        }
        onPointerDown={handleRightScroll}
        onPointerUp={handleStopScroll}
      >
        <ChevronRightIcon
          sx={
            {
              fontSize: '100px',
              color: getCssVar('--gray-text-dark'),
              opacity: '0.4'
            }
          }
        />
      </Box>
      <Box
        className={scrollStyles.container}
        id={'vpos-scroll-container'}
        sx={{
          flexDirection: 'row !important',
          alignItems: 'center !important',
          justifyContent: {
            xs: 'flex-start !important',
            xxl: 'center !important'
          },
          width: '100%',
          overflow: 'hidden',
          overflowX: 'auto',
          paddingBottom: '10px',
          '&::-webkit-scrollbar': {
            height: '0px'
          }
        }}
      >
        <Box
          sx={
            {
              display: 'flex',
              flexDirection: 'row !important',
              alignItems: 'center !important',
              justifyContent: 'space-evenly',
              width: {
                xs: '1450px',
                lg: '1880px'
              },
              minWidth: {
                xs: '1450px',
                lg: '1880px'
              }
            }
          }
        >
          <Box
            className={scrollStyles['big-box']}
            sx={{
              width: {
                xs: '450px',
                lg: '600px'
              },
              height: {
                xs: '220px',
                lg: '290px'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: {
                  xs: '220px',
                  lg: '290px'
                },
                height: {
                  xs: '220px',
                  lg: '290px'
                }
              }}
            >
              <Box
                component={'figure'}
                sx={{
                  height: '40%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}
              >
                <img
                  src={vposFish}
                  alt="Demo"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </Box>
              <Typography
                className={scrollStyles['box-text']}
                sx={{
                  textAlign: 'center',
                  fontSize: {
                    xs: '14px',
                    lg: '20px'
                  }
                }}
              >
                Accept contactless and QR Code payments in just a blink.
              </Typography>
            </Box>
            <Box
              component={'figure'}
              sx={{
                width: {
                  xs: '220px',
                  lg: '290px'
                },
                height: {
                  xs: '220px',
                  lg: '290px'
                },
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
                xs: '940px',
                lg: '1220px'
              }
            }}
          >
            <Box
              className={scrollStyles['small-box']}
              sx={{
                width: {
                  xs: '220px',
                  lg: '290px'
                },
                height: {
                  xs: '220px',
                  lg: '290px'
                },
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                className={scrollStyles['box-text']}
                sx={{
                  fontSize: {
                    xs: '16px',
                    lg: '20px'
                  },
                  padding: '0 10px'
                }}
              >
                Empower your business, enable your consumer to pay conveniently
                simple.
              </Typography>
            </Box>
            <Box
              className={scrollStyles['small-box']}
              sx={{
                width: {
                  xs: '220px',
                  lg: '290px'
                },
                height: {
                  xs: '220px',
                  lg: '290px'
                },
                flexDirection: 'column',
                justifyContent: 'space-between !important',
                alignItems: 'center'
              }}
            >
              <Box
                component={'figure'}
                sx={{
                  height: '60%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={phone5}
                  alt="Demo"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
              <Typography
                className={scrollStyles['box-text-2']}
                sx={{
                  fontSize: {
                    xs: '11px !important',
                    lg: '14px !important'
                  },
                  marginBottom: '30px !important',
                  paddingTop: '0px !important'
                }}
              >
                Use your Android/iOS mobile or tablet as a point of sales.
                No need to buy any hardware.
              </Typography>
            </Box>
            <Box
              className={scrollStyles['small-box']}
              sx={{
                width: {
                  xs: '220px',
                  lg: '290px'
                },
                height: {
                  xs: '220px',
                  lg: '290px'
                },
                flexDirection: 'column',
                justifyContent: 'space-between !important'
              }}
            >
              <Typography
                className={scrollStyles['box-text-2']}
                sx={{
                  fontSize: {
                    xs: '11px !important',
                    lg: '14px !important'
                  }
                }}
              >
                Enable onsite multicurrency payments beyond the use of
                credit/debit cards
              </Typography>
              <Box
                component={'figure'}
                sx={{
                  height: '80%',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={phone3}
                  alt="Demo"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
            </Box>
            <Box
              className={scrollStyles['small-box']}
              sx={{
                width: {
                  xs: '220px',
                  lg: '290px'
                },
                height: {
                  xs: '220px',
                  lg: '290px'
                },
                flexDirection: 'column',
                justifyContent: 'space-between !important',
                alignItems: 'center'
              }}
            >
              <Box
                component={'figure'}
                sx={{
                  height: {
                    xs: '70%',
                    lg: '80%'
                  },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={checkImg}
                  alt="Demo"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
              <Typography
                className={scrollStyles['box-text-2']}
                sx={{
                  fontSize: '14px !important',
                  marginBottom: '30px !important',
                  paddingTop: '0px !important'
                }}
              >
                Easy!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default ScrollBoxes
