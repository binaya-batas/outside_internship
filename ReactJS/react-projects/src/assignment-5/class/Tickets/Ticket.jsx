import { createContext, useState, useEffect } from 'react';
import useTickets from '../../hooks/useTickets';

import Header from "../Header/Header";
import Dashboard from "./Dashboard/Dashboard";

import avatar from'../../images/avatar.png'

import './ticket.scss';
import AddTicket from './AddTicket/AddTicket';

export const SearchContext = createContext();


function Ticket() {
    const {tickets, ticketLoading, ticketAddLoading, getTickets, addTicket} = useTickets();
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        getTickets();
    }, [])
    
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
                <Dashboard tickets={tickets} addTicket={addTicket} handleDeleteIcon={handleDeleteIcon} ticketLoading={ticketLoading} ticketAddLoading={ticketAddLoading} />
            </div>
        </SearchContext.Provider>
    )
}

export default Ticket;