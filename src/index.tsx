import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeLuka from 'theme'
import { RouterProvider } from 'react-router-dom'
import router from 'router'
import 'theme/colors.css'
import 'styles/globals.css'
import '@fontsource/open-sans/variable.css'
import { Provider } from 'react-redux'
import store from 'redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeLuka>
        <RouterProvider router={router} />
      </ThemeLuka>
    </Provider>
  </React.StrictMode>
)
