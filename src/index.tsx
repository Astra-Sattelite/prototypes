import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import "./assets/css/normalize.css"
import "./assets/css/root.css"

const container = document.getElementById('root');
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)