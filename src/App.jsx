import React from "react"
import Sidebar from "./Component/Sidebar"
import Welcome from "./Component/Welcome"
import Band from "./Component/Band"
import Tour from "./Component/Tour"
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
    <Sidebar/>
   <Routes>
    <Route path='/' element={<Welcome/>}/>
    
    <Route path='band' element={<Band/>}/>
    
    <Route path='tour' element={<Tour/>}/>
    </Routes>
    </>
  )
}

export default App
