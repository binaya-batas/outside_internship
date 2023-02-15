import Header from "../Header/Header";
import Dashboard from "./Dashboard/Dashboard";

import avatar from'../../images/avatar.png'

import './ticket.scss';

function Ticket() {
    return (
        <div className="ticket">
            <Header text="Tickets" name="Jones Ferdinand" imgSrc={avatar} />
            <Dashboard />
        </div>
    )
}

export default Ticket;