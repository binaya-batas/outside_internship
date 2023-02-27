import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Sidebar from './assignment-6/class/Sidebar/Sidebar';
import Overview from './assignment-6/class/Overview/Overview';
import SingleTicket from './assignment-6/class/Tickets/SingleTicket/SingleTicket';
import Ticket from './assignment-6/class/Tickets/Ticket';
import Login from './assignment-6/class/Login/Login';
import Signup from './assignment-6/class/SignUp/Signup';
import Hover from './assignment-4/class/Hover/Hover';
import ErrorPage from './assignment-6/class/Error/ErrorPage';


import './app.scss';
import './variables.scss';


function App() {

  return (
      <div className="App" style={{ display: 'flex', height: '100%' }}>
        <BrowserRouter>
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
        <ToastContainer />
      </div>
  )
}

export default App
