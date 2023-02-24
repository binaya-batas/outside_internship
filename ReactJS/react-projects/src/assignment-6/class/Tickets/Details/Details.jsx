import { useContext, useState } from 'react';

import { SearchContext } from '../Ticket';

import Priority from "../Priority/Priority";



import { AiOutlineConsoleSql, AiOutlineDelete } from 'react-icons/ai';

import "./details.scss";
import { NavLink } from 'react-router-dom';


function Details({ tickets, handleDeleteIcon, priority, ticketLoading, ticketAddLoading, deleteTicket }) {
    return (
        <div className="ticket__details">
            <table className="ticket__details__table">
                <thead className="ticket__details__table__head">
                    <tr>
                        <th>Ticket Details</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="ticket__details__table__body">
                    <TableRow tickets={tickets} deleteTicket={deleteTicket} handleDeleteIcon={handleDeleteIcon} priority={priority} ticketLoading={ticketLoading} ticketAddLoading={ticketAddLoading} />
                </tbody>
            </table>
        </div>
    );
}

export default Details;

const TableRow = ({ tickets, handleDeleteIcon, priority, ticketLoading, deleteTicket, ticketAddLoading }) => {
    const search = useContext(SearchContext);

    return (
        <>
            {
                ticketLoading ? <div style={{textAlign: 'center'}}>Loading....</div> :
                    tickets.filter((ticket) => {
                        if (priority === "all") {
                            return true;
                        } else {
                            return ticket.btnText === priority;
                        }
                    })
                        .filter((ticket) => {
                            return ticket.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((ticket) => (
                            <tr key={ticket.id}>
                                <TableColumn name={ticket.name} time={ticket.timeStatus} imageDisplayStatus="" imageSrc={ticket.imgSrc} ticketid={ticket.id} />
                                <TableColumn name={ticket.customerName} time={ticket.date} imageDisplayStatus="hide-img" />
                                <TableColumn name={ticket.deadline} time={ticket.time} imageDisplayStatus="hide-img" />
                                <td>
                                    <Priority text={ticket.btnText} />
                                </td>
                                <td>
                                    <AiOutlineDelete style={{cursor: 'pointer'}} onClick={() => deleteTicket(ticket.id)} />
                                </td>
                            </tr>
                        ))
            }
        </>
    );
};

const TableColumn = ({ imageDisplayStatus, name, time, imageSrc, ticketid }) => {
    return (
        <td>
            <div style={{ display: 'flex' }}>
                <NavLink className="ticket-column__link" to={`/dashboard/ticket/${ticketid}`}>
                    <figure className={`figure ${imageDisplayStatus}`}>
                        <img src={imageSrc} alt="man-photo" />
                    </figure>
                </NavLink>

                <div className="">
                    <div className="ticket-column">
                            <div className="ticket-column__name">{name}</div>
                        <div className="ticket-column__date">{time}</div>
                    </div>
                </div>
            </div>
        </td>
    );
};

