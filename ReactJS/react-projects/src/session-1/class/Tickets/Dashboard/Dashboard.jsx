import HeaderTicket from '../../Header/HeaderTicket';
import Details from '../Details/Details';

import './dashboard.scss';

function Dashboard() {
return (
        <div className="ticket__dashboard">
            <HeaderTicket text="All tickets" />
            <Details />
        </div>
    )
}

export default Dashboard;