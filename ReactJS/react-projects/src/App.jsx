import { useState } from 'react'
import Sidebar from './assignment/class/Sidebar/Sidebar'
import Ticket from './assignment/class/Tickets/Ticket'

import './app.scss';
import './variables.scss';
import Login from './assignment/class/Login/Login';


function App() {
  return (
    <div className="App" style={{display: 'flex', height: '100%'}}>
      <Sidebar />
      <Ticket />

      {/* <Login /> */}
    </div>
  )
}

export default App
