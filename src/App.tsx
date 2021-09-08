import { Header } from './components/header/Header'
import { Nihongo } from './components/landing/Nihongo'

import { HeaderAve } from './components/header/HeaderAve'
import { AveMaria } from './components/landing/AveMaria'

// import { HeaderCandy } from './components/header/HeaderCandy'

import CSS from 'csstype'
import './assets/css/rootContainer.css'
import * as React from "react"
import { 
  BrowserRouter as Router
  , Switch
  , Route 
} from "react-router-dom"


const App: React.FC = () => {

  const host: string = "http://localhost:3000/"

  const sw = (param: string): string => {
    switch(param) {
      case host:
        return "radial-gradient(circle, rgba(250,248,246,1) 0%, rgba(204,204,202,1) 50%, rgba(34,35,30,1) 100%)"

      case (host + "ng"):
        return "#FFF3CB"

      default:
        return "#fff"
    }
  }

  const rootContainer: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minWidth: "500px",
    minHeight: "500px",
    background: sw(window.location.href),
  }

  return (
    <Router>
      <div style={rootContainer}>
        <Switch>
          <Route exact path="/">
            <HeaderAve />
            <AveMaria />
          </Route>

          <Route path="/ng">
            <Header />
            <Nihongo />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App