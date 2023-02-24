import TabsSidebar from "../Tabs/TabsSidebar";
import './menu-sidebar.scss';

const menus = [
    {
        name: 'Overview',
        iconName: 'pie_chart',
        path: '/dashboard/overview'
    },
    {
        name: 'Tickets',
        iconName: 'ticket',
        path: '/dashboard'
    },
    {
        name: 'Ideas',
        iconName: 'bulb',
        path: '/dashboard/ideas'
    },
    {
        name: 'Contacts',
        iconName: 'group',
        path: '/dashboard/contacts'
    },
    {
        name: 'Agents',
        iconName: 'profile',
        path: '/dashboard/agents'
    },
    {
        name: 'Articles',
        iconName: 'book',
        path: '/dashboard/articles'
    }
]

function MenuSidebar() {
    return (
        <div className="sidebar__menu">
            {
                menus.map((menu, index) => (
                    <TabsSidebar key={index} text={menu.name} iconName={menu.iconName} path={menu.path} />
                ))
            }

        </div>
    )
}

export default MenuSidebar;