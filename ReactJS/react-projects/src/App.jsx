import { useState } from 'react'
import Sidebar from './session-1/class/Sidebar/Sidebar/Sidebar'
import Ticket from './session-1/class/Tickets/Ticket/Ticket'


function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Sidebar />
      <Ticket />
    </div>
  )
}

export default App
