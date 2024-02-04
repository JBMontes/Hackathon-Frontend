
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import ContactPage from '../Pages/ContactPage';
import AboutPage from '../Pages/AboutPage';

import { useState } from 'react'
import LoginForm from './Components/LoginForm'

import NavBar from './Components/NavBar';
import './App.css'
import FetchLocation from './Components/FetchLocation'
import LandingPage from '../Pages/Landing'
import CreateCard from '../Pages/Form';
import Feed from '../Pages/Feed';
import Single from '../Pages/Single';
function App() {

  return (

    <>
      <Router>
        <NavBar />
        <Routes>
      < Route path='/login' element={<LoginForm/>}/>
      < Route path='/' element={<LandingPage/>}/>
        <Route path="/contact" element={< ContactPage />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/form" element={<CreateCard/>}/>
        <Route path="/keypins" element={<Feed/>}/>
        <Route path="/keypins/:id" element={<Single />} />
        </Routes>
      </Router>
      <div id="map">

      </div>
    </>
  )
}
export default App

