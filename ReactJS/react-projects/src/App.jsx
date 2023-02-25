import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Sidebar from './assignment-2/class/Sidebar/Sidebar'
import Ticket from './assignment-2/class/Tickets/Ticket'

import './app.scss';
import './variables.scss';


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
