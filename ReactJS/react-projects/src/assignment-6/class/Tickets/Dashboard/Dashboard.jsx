import { useState } from 'react'; 

import Header from '../../Header/Header';
import Details from '../Details/Details';
import HeaderTicket from '../HeaderTicket/HeaderTicket';



import './dashboard.scss';


function Dashboard({ tickets, addTicket, handleDeleteIcon, filterTicketsByPriority, ticketLoading, ticketAddLoading }) {
    const [priority, setPriority] = useState("all");

    function handlePriority(e) {
        setPriority(e.target.value)
    }

    return (
        <div className="ticket__dashboard">
            <HeaderTicket text="All Tickets" addTicket={addTicket} filterTickets={filterTicketsByPriority} handlePriority={handlePriority}/>
            <Details handleDeleteIcon={handleDeleteIcon} tickets={tickets} priority={priority} ticketLoading={ticketLoading} ticketAddLoading={ticketAddLoading} />
        </div>
    )
}

export default Dashboard;