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
import { routes } from 'router'
import { useState } from 'react'
import config from 'const'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const drawerWidth = 240

const options = ['Products', 'Developer', 'About us']

const Nav = (props: Props): JSX.Element => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <List className={nav.list}>
        {routes.map(({ id = '' }) => {
          if (!id) return null
          return (
            <ListItem key={id} disablePadding>
              <ListItemButton sx={{ textAlign: 'left' }}>
                <ListItemText primary={id} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <div className={nav['content-joinButton']}>
        <Button variant="contained" color="primary_a" className={nav.button}>
          Join
        </Button>
      </div>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box>
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
                xs: '100px',
                sm: '122px'
              }
            }}
          >
            <img
              className={nav.logo}
              src={`${config.UrlBaseImg}Logo-white.png`}
              alt="Logo-Luka"
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <img src={`${config.UrlBaseImg}menu.png`} alt="menu" />
          </IconButton>
          <Box
            className={nav['content-menu']}
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
          >
            {options.map(name => {
              return (
                <Button
                  key={name}
                  sx={{ margin: '0px 10px', color: 'white ', fontSize: '16px' }}
                >
                  {name}
                </Button>
              )
            })}
          </Box>
          <Button
            variant="contained"
            color="white"
            className={nav.button}
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
              width: '184px',
              height: '40px'
            }}
          >
            {'Sign in'}
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
