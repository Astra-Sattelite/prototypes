import { Header } from './components/header/Header'
import { Content } from './components/content/Content'
import './assets/css/rootContainer.css'
import * as React from "react"
import { BrowserRouter as Router } from "react-router-dom"


const App: React.FC = () => {
  return (
    <div className="rootContainer">
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  )
}

export default App