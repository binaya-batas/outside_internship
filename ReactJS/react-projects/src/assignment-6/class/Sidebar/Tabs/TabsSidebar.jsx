import './tabs-sidebar.scss';
import { NavLink } from 'react-router-dom';

function TabsSidebar({ text, iconName, path }) {
  return (
    <div className="sidebar__tab">
      <span style={{display: 'inline-block', width: '16px', marginRight: '24px'}}>
        <i className={`icon icon-${iconName}`}></i>
      </span>
      <NavLink to={path} className="sidebar__tab__link">{text}</NavLink>
    </div>
  );
}

export default TabsSidebar;
