import Header from '../../Header/Header';
import Details from '../Details/Details';
import HeaderTicket from '../HeaderTicket/HeaderTicket';

import './dashboard.scss';

function Dashboard() {
return (
        <div className="ticket__dashboard">
            <HeaderTicket text="All Tickets" />
            <Details />
        </div>
    )
}

export default Dashboard;