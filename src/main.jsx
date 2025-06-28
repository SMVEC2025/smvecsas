import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/main.scss'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/animate.css'
import './styles/css/apexcharts.css'

import './styles/css/font-awesome-pro.css'

import './styles/css/spacing.css'
import './styles/css/main.css'
import './styles/css/hover-reveal.css'
import './styles/css/flatpickr.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
