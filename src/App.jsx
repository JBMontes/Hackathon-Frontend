import { useState } from 'react'
import LoginForm from './Components/LoginForm'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './App.css'
import FetchLocation from './Components/FetchLocation'

function App() {

  return (
 <FetchLocation />
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
