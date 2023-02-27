import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Sidebar from './assignment-5/class/Sidebar/Sidebar'
import Ticket from './assignment-5/class/Tickets/Ticket'
import Login from './assignment-5/class/Login/Login';
import Signup from './assignment-5/class/SignUp/Signup';
import Hover from './assignment-4/class/Hover/Hover';


import './app.scss';
import './variables.scss';


function App() {

  return (
      <div className="App" style={{ display: 'flex', height: '100%' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<><Sidebar /><Ticket /></>}>
            </Route>
            <Route path="*" element={<h1>Page not found.</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
