import { NavLink } from 'react-router-dom';
import './overviewCard.scss';

function OverviewCard({ text, number }) {
    return (
        <NavLink className="overview-card">
            <p className="overview-card__text">{ text }</p>
            <p className="overview-card__number">{ number }</p>
        </NavLink>
    )
}

export default OverviewCard;