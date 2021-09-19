import { HeaderNihongo } from './components/header/HeaderNihongo'
import { Nihongo } from './components/landing/Nihongo'

import { HeaderAve } from './components/header/HeaderAve'
import { AveMaria } from './components/landing/AveMaria'

import { ShowTime } from './components/landing/ShowTime'

// import { HeaderCandy } from './components/header/HeaderCandy'

import CSS from 'csstype'
import './assets/css/rootContainer.css'
import * as React from "react"
import {
    Switch
  , Route
  , useLocation
} from "react-router-dom"


const App: React.FC = () => {

  const host: string = "http://localhost:3000/"

  const location = useLocation()

  const sw = (param: any): string => {
    switch(param) {
      case "/":
        return "radial-gradient(circle at 1.98% 74.02%,#E55D87,transparent 100%),radial-gradient(circle at 98.02% 35.97%,#5FC3E4,transparent 100%),radial-gradient(circle at 50% 50%,#0cc285,#0cc285 100%)"
      
      case ("/ave"):
        return "radial-gradient(circle, rgba(250,248,246,1) 0%, rgba(204,204,202,1) 50%, rgba(34,35,30,1) 100%)"

      case ("/ng"):
        return "#FFF3CB"

      default:
        return host
    }
  }

  const rootContainer: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minWidth: "500px",
    minHeight: "500px",
    background: sw(location.pathname),
    paddingBottom: "0px"
  }

  return (

    <div style={rootContainer}>
      <Switch>
        <Route exact path="/">
          <ShowTime />
        </Route>

        <Route path="/ave">
          <HeaderAve />
          <AveMaria />
        </Route>

        <Route path="/ng">
          <HeaderNihongo />
          <Nihongo />
        </Route>
      </Switch>
    </div>
  )
}

export default App