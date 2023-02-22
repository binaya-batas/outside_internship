import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

// import Sidebar from './assignment/class/Sidebar/Sidebar'
// import Ticket from './assignment/class/Tickets/Ticket'

// import Sidebar from './assignment-4/class/Sidebar/Sidebar'
// import Ticket from './assignment-4/class/Tickets/Ticket'

// import Sidebar from './assignment-5/class/Sidebar/Sidebar'
// import Ticket from './assignment-5/class/Tickets/Ticket'

import Sidebar from './assignment-6/class/Sidebar/Sidebar'
import Ticket from './assignment-6/class/Tickets/Ticket'

import Hover from './assignment-5/class/Hover/Hover';

import Login from './assignment-6/class/Login/Login';
import Signup from './assignment-6/class/SignUp/Signup';

import './app.scss';
import './variables.scss';


function App() {
  return (
      <div className="App" style={{display: 'flex', height: '100%'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hover" element={<Hover />} />
            <Route path="/tickets" element={<><Sidebar /> <Ticket /></>} />
            <Route path="*" element={<h1>Page not found.</h1>} />
          </Routes>
        </BrowserRouter>
        
        {/* <Sidebar />
        <Ticket /> */}
        {/* <Hover /> */}
        {/* <Login />
        <Signup /> */}
      </div>
  )
}

export default App
