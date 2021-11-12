import React,{Suspense} from 'react'
import {
  Routes, Route,useRoutes
} from "react-router-dom"

import routes from './router';


function App() {
  return (
    useRoutes(routes)
  )
}

export default App
