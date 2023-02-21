import { useState } from 'react'
// import Sidebar from './assignment/class/Sidebar/Sidebar'
// import Ticket from './assignment/class/Tickets/Ticket'

// import Sidebar from './assignment-4/class/Sidebar/Sidebar'
// import Ticket from './assignment-4/class/Tickets/Ticket'

import Sidebar from './assignment-5/class/Sidebar/Sidebar'
import Ticket from './assignment-5/class/Tickets/Ticket'

import './app.scss';
import './variables.scss';
import Hover from './assignment-5/class/Hover/Hover';

import Login from './assignment-5/class/Login/Login';
import Signup from './assignment-5/class/SignUp/Signup';


function App() {
  return (
      <div className="App" style={{display: 'flex', height: '100%'}}>
        {/* <Sidebar />
        <Ticket /> */}
        {/* <Hover /> */}
        <Login />
        <Signup />
      </div>
  )
}

export default App
