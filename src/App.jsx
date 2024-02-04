
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import ContactPage from '../Pages/ContactPage';
import AboutPage from '../Pages/AboutPage';

import { useState } from 'react'
import LoginForm from './Components/LoginForm'
import HomePage from '../Pages/Home';


import './App.css'
import FetchLocation from './Components/FetchLocation'
import LandingPage from '../Pages/Landing'
import CreateCard from '../Pages/Form';
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
        <Route path="/form" element={<CreateCard/>}/>
        </Routes>
      </Router>
      <div id="map">

    <FetchLocation />
      </div>
    </>
  )
}
export default App

