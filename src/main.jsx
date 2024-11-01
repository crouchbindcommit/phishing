import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginComponent from './loginScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginComponent />
  </StrictMode>,
)
