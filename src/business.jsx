import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BusinessPage from './BusinessPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BusinessPage />
  </StrictMode>,
)
