import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react'
import NavBar from './Components/NavBar'
import HomePage from './HomePage';
import ContactPage from './Components/ContactPage'
import AboutPage from './Components/AboutPage'

import './App.css'

function App() {


  return (

    <div>
      <Router>
        <NavBar />
       <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/contact" element={< ContactPage />} />
        <Route path="/about" element={< AboutPage />} />
       </Routes>
      </Router>
    </div>
   )
}

export default App