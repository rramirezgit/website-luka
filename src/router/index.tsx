import { createBrowserRouter, Navigate } from 'react-router-dom'
import Landing from 'pages/landing'
import DemoLink from 'pages/demoLink'

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
    path: '/demo-link',
    element: <DemoLink />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]

const router = createBrowserRouter(routes)

export default router
