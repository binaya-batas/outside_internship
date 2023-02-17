import TabsSidebar from '../Tabs/TabsSidebar';
import './option-sidebar.scss'

const options = [
    {
        name: 'Settings',
        iconName: 'settings'
    },
    {
        name: 'Subscription',
        iconName: 'badge'
    }
]

function OptionSidebar() {
    return (
        <div className="sidebar-option">
            {options.map(option => (
                <TabsSidebar text={option.name} iconName={option.iconName} />
            ))}
        </div>
    )
}

export default OptionSidebar;