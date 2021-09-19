import { Nihongo } from './components/landing/Nihongo'

import { AveMaria } from './components/landing/AveMaria'

import { ShowTime } from './components/landing/ShowTime'

import './assets/css/rootContainer.css'
import * as React from "react"
import {
    Switch
  , Route
} from "react-router-dom"


const App: React.FC = () => {

  return (
    <Switch>
      <Route exact path="/">
        <ShowTime />
      </Route>

      <Route path="/ave">
        <AveMaria />
      </Route>

      <Route path="/ng">
        <Nihongo />
      </Route>
    </Switch>
  )
}

export default App