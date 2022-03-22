import * as React from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import * as R from "ramda"
import { roots } from "../roots"

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        {R.map(([elem, path]) =>
          <Route path={path} element={elem} key={path} />
          , roots
        )}
      </Routes>
    </Router>
  )
}

export default App