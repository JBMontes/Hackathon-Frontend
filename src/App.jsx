
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/NavBar'
import HomePage from './HomePage';
import ContactPage from './Components/ContactPage'
import AboutPage from './Components/AboutPage'

import { useState } from 'react'
import LoginForm from './Components/LoginForm'



import 'src/App.css'
import FetchLocation from './Components/FetchLocation'
import LandingPage from '../Pages/Landing'
function App() {

  return (

    <>
      <Router>
        <Routes>
      < Route path='/login' element={<LoginForm/>}/>
      < Route path='/home' element={<LandingPage/>}/>
        <Route path="/" element={< HomePage />} />
        <Route path="/contact" element={< ContactPage />} />
        <Route path="/about" element={< AboutPage />} />
        </Routes>
      </Router>
      <div id="map">

    <FetchLocation />
      </div>
    </>
  )
}
export default App

