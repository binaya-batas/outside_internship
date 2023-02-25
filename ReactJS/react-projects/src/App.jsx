import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Sidebar from './assignment-3/class/Sidebar/Sidebar'
import Ticket from './assignment-3/class/Tickets/Ticket'
import Login from './assignment-3/class/Login/Login';
import Signup from './assignment-3/class/SignUp/Signup';


import './app.scss';
import './variables.scss';


function App() {

  return (
      <div className="App" style={{ display: 'flex', height: '100%' }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<> <Sidebar /> <Ticket /> </>} />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <Signup /> } />
            <Route path="*" element={<h1>404 not found.</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
