import { useState } from 'react'
// import Sidebar from './assignment/class/Sidebar/Sidebar'
// import Ticket from './assignment/class/Tickets/Ticket'

import Sidebar from './assignment-4/class/Sidebar/Sidebar'
import Ticket from './assignment-4/class/Tickets/Ticket'

import './app.scss';
import './variables.scss';
import Login from './assignment/class/Login/Login';
import Signup from './assignment/class/SignUp/Signup';
import Hover from './assignment-4/class/Hover/Hover';


function App() {
  return (
      <div className="App" style={{display: 'flex', height: '100%'}}>
        {/* <Sidebar />
        <Ticket /> */}
        <Hover />
        {/* <Login />
        <Signup /> */}
      </div>
  )
}

export default App
