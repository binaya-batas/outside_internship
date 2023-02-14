import TabsSidebar from "../Tabs/TabsSidebar";

const menus = [
    {
        name: 'Overview',
    },
    {
        name: 'Tickets',
    },
    {
        name: 'Ideas',
    },
    {
        name: 'Contacts',
    },
    {
        name: 'Agents',
    },
    {
        name: 'Articles',
    }
]

function MenuSidebar() {
    return (
        <div className="sidebar__menu">
            {
                menus.map(menu => (
                    <TabsSidebar text={menu.name}/>
                ))
            }

        </div>
    )
}

export default MenuSidebar;