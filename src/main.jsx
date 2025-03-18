import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Routes from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import ThemeProvider from './Providers/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <Routes />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
