import HeaderSidebar from './Header/HeaderSidebar';
import MenuSidebar from './Menu/MenuSidebar';

import './sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <HeaderSidebar />
            <MenuSidebar />
        </div>
    )
}

export default Sidebar;
