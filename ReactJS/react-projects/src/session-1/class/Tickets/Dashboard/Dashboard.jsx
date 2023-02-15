import Header from '../../Header/Header';
import Details from '../Details/Details';

import './dashboard.scss';

function Dashboard() {
return (
        <div className="ticket__dashboard">
            <Header text="All tickets" />
            <Details />
        </div>
    )
}

export default Dashboard;