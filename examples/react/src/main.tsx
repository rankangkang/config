import React from 'react'
import ReactDOM from 'react-dom/client'

import { logger } from './util'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

logger.log('app started')
