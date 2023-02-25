import TabsSidebar from "../Tabs/TabsSidebar";
import './menu-sidebar.scss';

const menus = [
    {
        name: 'Overview',
        iconName: 'pie_chart'
    },
    {
        name: 'Tickets',
        iconName: 'ticket'
    },
    {
        name: 'Ideas',
        iconName: 'bulb'
    },
    {
        name: 'Contacts',
        iconName: 'group'
    },
    {
        name: 'Agents',
        iconName: 'profile'
    },
    {
        name: 'Articles',
        iconName: 'book'
    }
]

function MenuSidebar() {
    return (
        <div className="sidebar__menu">
            {
                menus.map((menu, index) => (
                    <TabsSidebar key={index} text={menu.name} iconName={menu.iconName} />
                ))
            }

        </div>
    )
}

export default MenuSidebar;