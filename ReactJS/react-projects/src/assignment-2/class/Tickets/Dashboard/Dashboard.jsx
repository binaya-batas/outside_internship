import { useState } from 'react'; 

import Header from '../../Header/Header';
import Details from '../Details/Details';
import HeaderTicket from '../HeaderTicket/HeaderTicket';



import './dashboard.scss';


function Dashboard({ tickets, handleDeleteIcon, filterTicketsByPriority, searchInput }) {
    const [priority, setPriority] = useState("all");

    function handlePriority(e) {
        setPriority(e.target.value)
    }

    console.log(priority);
    return (
        <div className="ticket__dashboard">
            <HeaderTicket text="All Tickets" filterTickets={filterTicketsByPriority} handlePriority={handlePriority}/>
            <Details handleDeleteIcon={handleDeleteIcon} tickets={tickets} priority={priority} searchInput={searchInput} />
        </div>
    )
}

export default Dashboard;