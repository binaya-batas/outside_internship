import Sidebar from '../Sidebar/Sidebar';
import OverviewCard from './OverviewCard/OverviewCard';
import Header from '../Header/Header';

import avatar from '../../images/avatar.png';
import './overview.scss';
import { Navigate } from 'react-router-dom';


function Overview() {
    const loggedIn = sessionStorage.getItem("activeUser");
    return (
        <>
        {
            loggedIn ?
            <div className="overview">
                <Header text="Overview" imgSrc={avatar}/>
                <div className="overview__top">
                    <OverviewCard text="Unresolved" number="60" />
                    <OverviewCard text="Overdue" number="32" />
                    <OverviewCard text="Open" number="07" />
                    <OverviewCard text="On hold" number="25" />
                </div>
            </div>
            :
            <Navigate to="/login" />
        }
        </>
    )
}

export default Overview;