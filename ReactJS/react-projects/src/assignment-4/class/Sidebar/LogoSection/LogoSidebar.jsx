import logo from '../../../images/logo.png';

import './logo-sidebar.scss';

function HeaderSidebar() {
    return (
        <div className="sidebar__header">
            <div className="sidebar__header__img">
                <img src={logo} alt="logo" />
            </div>
            <div className="sidebar__header__title">
                Dashboard Kit
            </div>
        </div>
    )
}

export default HeaderSidebar;