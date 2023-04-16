import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainScreen from './screens/MainScreen'
import { CotizadorProvider } from './context/CotizadorProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CotizadorProvider>
   <MainScreen />
   </CotizadorProvider>
  </React.StrictMode>,
)
