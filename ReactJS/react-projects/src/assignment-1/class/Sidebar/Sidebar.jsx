import { Outlet } from 'react-router-dom';
import HeaderSidebar from './LogoSection/LogoSidebar';
import MenuSidebar from './Menu/MenuSidebar';
import OptionSidebar from './Options/OptionSidebar';

import './sidebar.scss';

function Sidebar() {
    return (
            <div className="sidebar">
                <HeaderSidebar />
                <MenuSidebar />
                <OptionSidebar />
            </div>
    )
}

export default Sidebar;
