import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeLuka from 'theme'
import { RouterProvider } from 'react-router-dom'
import router from 'router'
import 'theme/colors.css'
import 'styles/globals.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeLuka>
      <RouterProvider router={router} />
    </ThemeLuka>
  </React.StrictMode>
)
