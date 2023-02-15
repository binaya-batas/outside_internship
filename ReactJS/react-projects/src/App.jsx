import { useState } from 'react'
import Sidebar from './assignment/class/Sidebar/Sidebar'
import Ticket from './assignment/class/Tickets/Ticket'

import './app.scss';
import './variables.scss';


function App() {
  return (
    <div className="App" style={{display: 'flex', height: '100%'}}>
      <Sidebar />
      <Ticket />
    </div>
  )
}

export default App
