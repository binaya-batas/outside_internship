import './tabs-sidebar.scss';

function TabsSidebar({ text, iconName }) {
  return (
    <div className="sidebar__tab">
      <i className={`icon icon-${iconName}`}></i>
      <a href="#" className="sidebar__tab__link">{text}</a>
    </div>
  );
}

export default TabsSidebar;
