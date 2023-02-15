import Header from "../Header/Header";
import Dashboard from "./Dashboard/Dashboard";

import './ticket.scss';

function Ticket() {
    return (
        <div className="ticket">
            <Header text="Tickets" name="Jones Ferdinand" />
            <Dashboard />
        </div>
    )
}

export default Ticket;