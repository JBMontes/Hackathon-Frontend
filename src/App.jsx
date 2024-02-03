import { useState } from 'react'
import LoginForm from './Components/LoginForm'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <>
    <Router>
      <Routes>

        <Route path='/login' element={<LoginForm/>}/>




      </Routes>




    </Router>
    
    
    </>
  )
}

export default App
