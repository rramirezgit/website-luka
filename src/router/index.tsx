import { createBrowserRouter, Navigate } from 'react-router-dom'
import Landing from 'pages/landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
])

export default router
