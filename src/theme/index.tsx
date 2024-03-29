import { createTheme, ThemeProvider, useTheme } from '@mui/material'
import { ReactElement } from 'react'
import config from 'const'

interface ThemeProps {
  children?: ReactElement | ReactElement[]
}

declare module '@mui/material/styles' {
  interface Palette {
    green_luka?: Palette['primary']
    aqua_blue?: Palette['primary']
    primary_a?: Palette['primary']
    white?: Palette['primary']
  }
  interface PaletteOptions {
    green_luka?: Palette['primary']
    aqua_blue?: Palette['primary']
    primary_a?: Palette['primary']
    white?: Palette['primary']
  }
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
    carousel: true
  }
}

// Update the Button's color prop options
declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    green_luka: true
    aqua_blue: true
    primary_a: true
    white: true
  }
}

export const getCssVar = (name: string): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
}

const ThemeLuka = ({ children }: ThemeProps): JSX.Element => {
  const theme = useTheme()
  const themenew = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            [theme.breakpoints.down('sm')]: {
              paddingTop: '10px'
            }
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            [theme.breakpoints.down('sm')]: {
              padding: '20px 0px 0px 0px'
            },
            [theme.breakpoints.down('md')]: {
              padding: '30px 0px 0px 0px'
            },
            [theme.breakpoints.up('md')]: {
              padding: '40px 0px 0px 0px'
            },
            maxWidth: '1300px'
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRadius: '8px',
            backgroundColor: getCssVar('--bg-gray')
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none'
          }
        }
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            alignItems: 'flex-start'
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            height: '45px',
            width: '85px',
            padding: '12px 24px 12px 0'
          },
          track: {
            borderRadius: '10px'
          },
          switchBase: {
            '&.Mui-checked': {
              transform: 'translateX(40px)'
            },
            backgroundColor: 'transparent',
            padding: '7px 18px 9px 0px',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          },
          thumb: {
            backgroundImage: `url(${config.UrlBaseImg}demoLink/in.png)`,
            backgroundColor: getCssVar('--primary-buttons'),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30px',
            width: '30px',
            boxShadow: '1.5px 1.5px 1.5px rgba(51, 51, 51, 0.25)'
          }
        }
      },
      MuiAutocomplete: {
        styleOverrides: {
          inputRoot: {
            cursor: 'pointer'
          },
          input: {
            cursor: 'pointer'
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: '14px',
            '&:hover:before': {
              borderColor: `${getCssVar('--primary-buttons')} !important`,
              transition: 'none'
            },
            '&:hover:after': {
              borderColor: `${getCssVar('--primary-buttons')} !important`,
              transition: 'none'
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover fieldset': {
              borderColor: `${getCssVar('--primary-buttons')} !important`,
              transition: 'none',
              outline: 'none'
            },
            '&.Mui-error:hover fieldset': {
              borderColor: `${getCssVar('--error-state')} !important`,
              transition: 'none',
              outline: 'none'
            },
            '& fieldset': {
              borderColor: getCssVar('--light-gray')
            }
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          underline: {
            '&.Mui-focused:before': {
              borderColor: `${getCssVar('--primary-buttons')} !important`,
              transition: 'none'
            },
            '&.Mui-focused:after': {
              borderColor: `${getCssVar('--primary-buttons')} !important`,
              transition: 'none'
            },
            '&:before': {
              borderColor: getCssVar('--light-gray'),
              transition: 'none',
              outline: 'none'
            },
            '&:after': {
              borderColor: getCssVar('--light-gray'),
              transition: 'none'
            },
            '&:hover:not(.Mui-disabled):before': {
              borderColor: getCssVar('--primary-buttons'),
              transition: 'none'
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderColor: getCssVar('--primary-buttons'),
              transition: 'none'
            },
            '&.Mui-error:hover:before': {
              borderColor: `${getCssVar('--error-state')} !important`,
              transition: 'none',
              outline: 'none'
            },
            '&.Mui-error:hover:after': {
              borderColor: `${getCssVar('--error-state')} !important`,
              transition: 'none',
              outline: 'none'
            }
          }
        }
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            fontSize: '14px',
            backgroundColor: 'transparent',
            '&:focus': { backgroundColor: 'transparent' }
          }
        }
      },
      MuiSlider: {
        styleOverrides: {
          track: {
            backgroundColor: getCssVar('--gray-text')
          },
          rail: {
            backgroundColor: getCssVar('--bg-gray')
          },
          root: {
            height: '10px'
          },
          thumb: {
            height: '22px',
            width: '22px',
            '&:hover': {
              boxShadow: 'none'
            },
            '&.Mui-active': {
              boxShadow: 'none'
            },
            '&.Mui-focusVisible': {
              boxShadow: 'none'
            }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-error': {
              color: 'rgba(0, 0, 0, 0.6) !important'
            }
          }
        }
      }
    },
    palette: {
      primary: {
        light: getCssVar('--primary-buttons'),
        main: getCssVar('--primary-buttons'),
        dark: getCssVar('--primary-buttons'),
        contrastText: '#fff'
      },
      secondary: {
        light: getCssVar('--secondary'),
        main: getCssVar('--secondary'),
        dark: getCssVar('--secondary'),
        contrastText: '#fff'
      },
      green_luka: {
        light: getCssVar('--green-luka'),
        main: getCssVar('--green-luka'),
        dark: getCssVar('--green-luka'),
        contrastText: '#fff'
      },
      primary_a: {
        light: getCssVar('--primary-buttons-a'),
        main: getCssVar('--primary-buttons-a'),
        dark: getCssVar('--primary-buttons-a'),
        contrastText: getCssVar('--primary-buttons')
      },
      aqua_blue: {
        light: getCssVar('--aqua-blue'),
        main: getCssVar('--aqua-blue'),
        dark: getCssVar('--aqua-blue'),
        contrastText: '#fff'
      },
      white: {
        light: getCssVar('--white'),
        main: getCssVar('--white'),
        dark: getCssVar('--white'),
        contrastText: getCssVar('--primary-buttons')
      }
    },
    typography: {
      fontFamily: 'Open SansVariable'
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1900,
        carousel: 980
      }
    }
  })
  return <ThemeProvider theme={themenew}>{children}</ThemeProvider>
}

export default ThemeLuka
