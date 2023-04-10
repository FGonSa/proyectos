import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DemoComponent from './components/DemoComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DemoComponent />
    <DemoComponent />
  </React.StrictMode>,
)
