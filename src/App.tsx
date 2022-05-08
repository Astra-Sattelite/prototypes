import React, { useCallback, useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import * as R from "ramda"
import { roots } from "../roots"
import { useDispatch } from 'react-redux'
import { AppDispatch } from "./app/store"
import { setWindowWidth } from "./appSlice"
import { throttle } from "lodash"

const App: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>()

  const setWindowSizeChange = () => {
    dispatch(setWindowWidth(window.innerWidth))
  }

  const throttleSetWindowSize = throttle(setWindowSizeChange, 500)

  useEffect(() => {
    window.addEventListener('resize', throttleSetWindowSize)
    return () => {
      window.removeEventListener('resize', throttleSetWindowSize)
    }
  }, [])

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