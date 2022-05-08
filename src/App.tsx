import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import * as R from "ramda"
import { roots } from "../roots"
import { useDispatch } from 'react-redux';
import { AppDispatch } from "./app/store"
import { setWindowWidth } from "./appSlice"

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleWindowSizeChange = () => {
    setTimeout(() => dispatch(setWindowWidth(window.innerWidth)), 500)
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

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