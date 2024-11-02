import {getBySelector} from '@cloudwalker/dom-utils'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import {App} from './App'

ReactDOM.createRoot(getBySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
