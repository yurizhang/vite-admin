import React,{Suspense} from 'react'
import {
  Routes, Route
} from "react-router-dom"

import routes from './router2';


function App() {
  return (
    <Routes>
     
        {
          routes.map((item:any) => <Route key={item.key} path={item.path} element={<item.component />}></Route>)
        }
        
     
  </Routes>
  )
}

export default App
