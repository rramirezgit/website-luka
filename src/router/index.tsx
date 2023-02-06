import { createBrowserRouter, Navigate } from 'react-router-dom'
import Landing from 'pages/landing'
import DemoLink from 'pages/demoLink'
import DemoGateway from 'pages/demoGateway'
import Currency from 'pages/currency'
import Support from 'pages/support'

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
    path: '/about-us',
    element: <Landing />,
    id: 'About Us'
  },
  {
    path: '/currency',
    element: <Currency />,
    id: 'Currency'
  },
  {
    path: '/products',
    element: <Landing />,
    id: 'Products'
  },
  {
    path: '/support',
    element: <Support />,
    id: 'Help'
  },
  {
    path: '/demo-link',
    element: <DemoLink />
  },
  {
    path: '/demo-gateway',
    element: <DemoGateway />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]

const router = createBrowserRouter(routes)

export default router
