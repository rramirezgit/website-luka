import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeLuka from 'theme'
import 'theme/colors.css'
import 'styles/globals.css'
import '@fontsource/open-sans/variable.css'
import { Provider } from 'react-redux'
import store from 'redux/store'
import Navigation from 'router/Navigation'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeLuka>
        <Navigation />
      </ThemeLuka>
    </Provider>
  </React.StrictMode>
)
