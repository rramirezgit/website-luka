/* eslint-disable @typescript-eslint/indent */
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import nav from './nav.module.css'
import { useState } from 'react'
import config from 'const'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window_?: () => Window
  ButtonVariant?: 'text' | 'outlined' | 'contained'
  ButtonColor: 'primary' | 'white' | 'secondary'
}

const drawerWidth = 240

const options = [
  {
    id: '/about-us',
    name: 'About us'
  },
  {
    id: '/support',
    name: 'Support'
  },
  {
    id: '/sales',
    name: 'Sales'
  }
]

const Nav = ({ window_, ButtonVariant, ButtonColor }: Props): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navigate = useNavigate()

  const handleLogo = (): void => {
    if (location.pathname !== '/') {
      navigate('/')
    }
  }

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <List className={nav.list}>
        {options.map(op => {
          return (
            <ListItem key={op.id} disablePadding>
              <ListItemButton
                sx={{ textAlign: 'left' }}
                onClick={() => navigate(op.id)}
              >
                <ListItemText
                  primary={op.name}
                  className={nav.itemNav}
                  sx={{
                    '& span': {
                      color:
                        location.pathname === '/'
                          ? '#2f363e !important'
                          : location.pathname === op.id
                          ? '#0878FF !important'
                          : '#2f363e !important'
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <div className={nav['content-joinButton']}>
        <Button
          variant="contained"
          color="primary_a"
          className={nav.button}
          sx={{
            width: '198px',
            height: '45px'
          }}
          onClick={() => {
            window.open('https://business.lukapay.io/', '_self')
          }}
        >
          Sign up
        </Button>
      </div>
    </Box>
  )

  const container =
    window_ !== undefined ? () => window_().document.body : undefined

  return (
    <Box padding="0px 34px">
      <AppBar
        component="nav"
        color="inherit"
        position="sticky"
        sx={{ alignItems: 'center' }}
        classes={{ root: nav.content }}
      >
        <Toolbar
          sx={{
            width: '100%'
          }}
        >
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              height: { xs: '29.46px', sm: '56px' },
              width: {
                xs: '79.44',
                sm: '122px'
              },
              cursor: location.pathname !== '/' ? 'pointer' : 'default'
            }}
            onClick={handleLogo}
          >
            <Box
              component={'img'}
              className={nav.logo}
              sx={{
                cursor: 'pointer',
                width: {
                  xs: '80px',
                  sm: '122px'
                },
                objectFit: 'contain'
              }}
              src={`${config.UrlBaseImg}${
                ButtonColor === 'white' ? 'Logo-white.png' : 'Logo.svg'
              }`}
              alt="Logo-Luka"
              onClick={() => navigate('/')}
            ></Box>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}
          >
            <Box
              component={'img'}
              src={
                ButtonColor === 'white'
                  ? `${config.UrlBaseImg}menu-white.svg`
                  : `${config.UrlBaseImg}menu.svg`
              }
              alt="menu"
            />
          </IconButton>
          <Box
            className={nav['content-menu']}
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
          >
            {options.map(op => {
              return (
                <Button
                  key={op.id}
                  variant="text"
                  sx={{
                    margin: '0px 10px',
                    color:
                      location.pathname === '/'
                        ? 'white '
                        : location.pathname === op.id
                        ? 'primary'
                        : 'black',
                    fontSize: '16px'
                  }}
                  onClick={() => navigate(op.id)}
                >
                  {op.name}
                </Button>
              )
            })}
          </Box>
          <Button
            variant={ButtonVariant}
            color={ButtonColor}
            className={nav.button}
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
              width: '148px',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600',
              border:
                ButtonVariant === 'outlined' ? '2px solid #FFFFFF' : 'none'
            }}
            onClick={() => {
              window.open('https://business.lukapay.io/', '_self')
            }}
          >
            {'Sign up'}
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Nav
