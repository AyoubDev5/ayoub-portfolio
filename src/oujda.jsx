import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OujdaPage from './OujdaPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OujdaPage />
  </StrictMode>,
)
