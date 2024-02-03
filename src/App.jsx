import { useState } from 'react'
import LoginForm from './Components/LoginForm'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './App.css'
import FetchLocation from './Components/FetchLocation'
import LandingPage from '../Pages/Landing'
function App() {

  return (
    <>
      <Router>
        <Routes>
      <   Route path='/login' element={<LoginForm/>}/>
      <   Route path='/home' element={<LandingPage/>}/>
        </Routes>
      </Router>
      <div id="map">

    <FetchLocation />
      </div>
    </>
  )
}
export default App
