import HeaderTicket from "../../Header/HeaderTicket";
import Dashboard from "../Dashboard/Dashboard";

import './ticket.scss';

function Ticket() {
    return (
        <div className="ticket">
            <HeaderTicket text="Tickets" name="Jones Ferdinand" />
            <Dashboard />
        </div>
    )
}

export default Ticket;