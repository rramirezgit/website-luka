import { createTheme, ThemeProvider, useTheme } from '@mui/material'
import { ReactElement } from 'react'

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

const getCssVar = (name: string): string => {
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
              padding: '20px 33.10px'
            },
            [theme.breakpoints.down('md')]: {
              padding: '30px 33.10px'
            },
            [theme.breakpoints.up('md')]: {
              padding: '40px 33.10px'
            }
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
        contrastText: getCssVar('--primary-buttoms')
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
    }
  })
  return <ThemeProvider theme={themenew}>{children}</ThemeProvider>
}

export default ThemeLuka
