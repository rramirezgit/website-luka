import { createBrowserRouter, Navigate } from 'react-router-dom'
import Landing from 'pages/landing'

/**
 * routes.id is used to set menu items
 */

export const routes = [
  {
    path: '/',
    element: <Landing />,
    id: 'Home'
  },
  {
    path: '/About-us',
    element: <Landing />,
    id: 'About Us'
  },
  {
    path: '/Currency',
    element: <Landing />,
    id: 'Currency'
  },
  {
    path: '/products',
    element: <Landing />,
    id: 'Products'
  },
  {
    path: '/help',
    element: <Landing />,
    id: 'Help'
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]

const router = createBrowserRouter(routes)

export default router
