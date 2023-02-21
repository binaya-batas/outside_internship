import { createContext, useState, useEffect } from 'react';
import useTickets from '../../hooks/useTickets';

import Header from "../Header/Header";
import Dashboard from "./Dashboard/Dashboard";

import avatar from'../../images/avatar.png'
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';
import customer4 from '../../images/customer-4.png';
import customer5 from '../../images/customer-5.png';
import customer6 from '../../images/customer-6.png';
import customer7 from '../../images/customer-7.png';


import './ticket.scss';

export const SearchContext = createContext();


function Ticket() {
    const {tickets, ticketLoading, ticketAddLoading, getTickets} = useTickets();
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        getTickets();
    }, [])
    
    console.log(tickets);
    const handleDeleteIcon = (index) => {
        setTickets(current => 
            current.filter(ticket => {
                return ticket.id !== index;
            })    
        )
    }

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <SearchContext.Provider value={searchInput}>
            <div className="ticket">
                <Header text="Tickets" name="Jones Ferdinand" imgSrc={avatar} handleSearchInput={handleSearchInput}/>
                <Dashboard tickets={tickets} handleDeleteIcon={handleDeleteIcon} ticketLoading={ticketLoading} ticketAddLoading={ticketAddLoading} />
            </div>
        </SearchContext.Provider>
    )
}

export default Ticket;