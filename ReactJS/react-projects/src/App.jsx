import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";


// import Sidebar from './assignment/class/Sidebar/Sidebar'
// import Ticket from './assignment/class/Tickets/Ticket'

// import Sidebar from './assignment-4/class/Sidebar/Sidebar'
// import Ticket from './assignment-4/class/Tickets/Ticket'

// import Sidebar from './assignment-5/class/Sidebar/Sidebar'
// import Ticket from './assignment-5/class/Tickets/Ticket'

import Sidebar from './assignment-1/class/Sidebar/Sidebar'
import Ticket from './assignment-1/class/Tickets/Ticket'
import Overview from './assignment-6/class/Overview/Overview';

import Hover from './assignment-5/class/Hover/Hover';

import Login from './assignment-6/class/Login/Login';
import Signup from './assignment-6/class/SignUp/Signup';
import SingleTicket from './assignment-6/class/Tickets/SingleTicket/SingleTicket';

import './app.scss';
import './variables.scss';
import ErrorPage from './assignment-6/class/Error/ErrorPage';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
      <div className="App" style={{ display: 'flex', height: '100%' }}>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hover" element={<Hover />} />

            <Route path="/dashboard" element={<Sidebar />}>
              <Route index element={<Ticket />} />
              <Route
                path="/dashboard/overview"
                element={<Overview />}
              />
            </Route>
            <Route path="/dashboard/ticket" >
              <Route path=":ticketid" element={<SingleTicket />} />
            </Route>
            
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer /> */}

        <Sidebar />
        <Ticket />
      </div>
  )
}

export default App
