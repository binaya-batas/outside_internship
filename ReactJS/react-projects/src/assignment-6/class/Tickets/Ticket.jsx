import { createContext, useState, useEffect } from 'react';
import useTickets from '../../hooks/useTickets';
import { Navigate } from 'react-router-dom';

import Header from "../Header/Header";
import Dashboard from "./Dashboard/Dashboard";

import avatar from'../../images/avatar.png'

import './ticket.scss';
import AddTicket from './AddTicket/AddTicket';

export const SearchContext = createContext();


function Ticket() {
    const {tickets, ticketLoading, ticketAddLoading, getTickets, addTicket, deleteTicket } = useTickets();
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

    const loggedIn = sessionStorage.getItem("activeUser");

    return (
        <SearchContext.Provider value={searchInput}>
            {
                loggedIn ?
                <div className="ticket">
                    <Header text="Tickets" imgSrc={avatar} handleSearchInput={handleSearchInput}/>
                    <Dashboard tickets={tickets} addTicket={addTicket} deleteTicket={deleteTicket} handleDeleteIcon={handleDeleteIcon} ticketLoading={ticketLoading} ticketAddLoading={ticketAddLoading} />
                </div>
                :
                <Navigate to="/login" />
            }
        </SearchContext.Provider>
    )
}

export default Ticket;