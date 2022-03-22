import { ShowTime } from './components/landing/ShowTime'
import { Nihongo } from './components/landing/Nihongo'
import { AveMaria } from './components/landing/AveMaria'
import { HoloStore } from './components/landing/HoloStore'

// import './assets/css/rootContainer.css'
import * as React from "react"
import { Routes, Route } from "react-router-dom"
import * as R from "ramda"


const App: React.FC = () => {

  const roots: [JSX.Element, string][] = [
    [<ShowTime />, "/"],
    [<HoloStore />, "/holo"],
    [<AveMaria />, "/ave"],
    [<Nihongo />, "/ng"]
  ]

  return (
    <Routes>
      {R.map(([elem, path]) =>
        <Route path={path} element={elem} />
        , roots
      )}
    </Routes>
  )
}

export default App