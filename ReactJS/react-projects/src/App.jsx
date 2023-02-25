import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Sidebar from './assignment-1/class/Sidebar/Sidebar'
import Ticket from './assignment-1/class/Tickets/Ticket'

import './app.scss';
import './variables.scss';

import { ToastContainer } from 'react-toastify';


function App() {

  return (
      <div className="App" style={{ display: 'flex', height: '100%' }}>
        <Sidebar />
        <Ticket />
      </div>
  )
}

export default App
