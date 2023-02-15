import { useState } from 'react'
import Sidebar from './session-1/class/Sidebar/Sidebar'
import Ticket from './session-1/class/Tickets/Ticket'

import './app.scss';
import './variables.scss';


function App() {
  return (
    <div className="App" style={{display: 'flex', height: '100vh'}}>
      <Sidebar />
      <Ticket />
    </div>
  )
}

export default App
