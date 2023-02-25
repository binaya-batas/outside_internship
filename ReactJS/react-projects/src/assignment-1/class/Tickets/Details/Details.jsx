import { useReducer, useState } from 'react';
import Priority from "../Priority/Priority";



import { AiOutlineDelete } from 'react-icons/ai';

import "./details.scss";


function Details({ tickets, priority, searchInput }) {
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
                    <TableRow tickets={tickets} priority={priority} searchInput={searchInput} />
                </tbody>
            </table>
        </div>
    );
}

export default Details;

const TableRow = ({ tickets, priority, searchInput }) => {
    return (
        <>
            {
            tickets.filter((ticket) => {
                if (priority === "all") {
                    return true;
                } else {
                    return ticket.btnText === priority;
                }
            })
            .filter((ticket) => {
                return ticket.name.toLowerCase().includes(searchInput.toLowerCase());
            })
            .map((ticket, index) => (
                <tr key={index}>
                    <TableColumn name={ticket.name} time={ticket.timeStatus} imageDisplayStatus="" imageSrc={ticket.imgSrc} />
                    <TableColumn name={ticket.customerName} time={ticket.date} imageDisplayStatus="hide-img" />
                    <TableColumn name={ticket.deadline} time={ticket.time} imageDisplayStatus="hide-img" />
                    <td>
                        <Priority text={ticket.btnText} btnColor={ticket.btnColor} />
                    </td>
                    <td>
                        <AiOutlineDelete style={{cursor: 'pointer'}} />
                    </td>
                </tr>
            ))
            }
        </>
    );
};

const TableColumn = ({ imageDisplayStatus, name, time, imageSrc }) => {
    return (
        <td>
            <div style={{ display: 'flex'}}>
                <figure className={`figure ${imageDisplayStatus}`}>
                    <img src={imageSrc} alt="man-photo" />
                </figure>
                <div className="">
                    <div className="ticket-column">
                        <div className="ticket-column__name">{ name }</div>
                        <div className="ticket-column__date">{ time }</div>
                    </div>
                </div>
            </div>
        </td>
    );
};

