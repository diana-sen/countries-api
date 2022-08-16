import { StrictMode } from 'react'
import { createRoot } from 'react'
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// styles
import './index.css'
// components
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
*/
