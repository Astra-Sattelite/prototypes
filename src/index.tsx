import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import "./assets/css/normalize.css"
import "./assets/css/root.css"
import {
  BrowserRouter as Router
} from "react-router-dom"


const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  root
)