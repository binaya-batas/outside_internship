import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Sidebar from './assignment-4/class/Sidebar/Sidebar'
import Ticket from './assignment-4/class/Tickets/Ticket'
import Login from './assignment-4/class/Login/Login';
import Signup from './assignment-4/class/SignUp/Signup';
import Hover from './assignment-4/class/Hover/Hover';


import './app.scss';
import './variables.scss';


function App() {

  return (
      <div className="App" style={{ display: 'flex', height: '100%' }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<> <Sidebar /> <Ticket /> </>} />
            <Route path='/hover' element={ <Hover /> } />
            <Route path="*" element={<h1>404 not found.</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
