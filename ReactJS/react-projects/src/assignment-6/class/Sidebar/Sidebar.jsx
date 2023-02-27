import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Button from '../Button/Button';
import HeaderSidebar from './LogoSection/LogoSidebar';
import MenuSidebar from './Menu/MenuSidebar';
import OptionSidebar from './Options/OptionSidebar';

import './sidebar.scss';

function Sidebar() {
    const navigate = useNavigate();

    const handleClick = (event) => {
        setTimeout(() => {
            event.preventDefault();
            toast.success("Logged out successfully.")
            sessionStorage.clear();
            navigate('/login');
        }, 1000)
    }

    return (
        <>
            <div className="sidebar">
                <HeaderSidebar />
                <MenuSidebar />
                <OptionSidebar />
                <Button onClick={handleClick} text="Logout"/>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar;
