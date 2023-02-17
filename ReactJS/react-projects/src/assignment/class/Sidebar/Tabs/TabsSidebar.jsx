import './tabs-sidebar.scss';

function TabsSidebar({ text, iconName }) {
  return (
    <div className="sidebar__tab">
      <span style={{display: 'inline-block', width: '16px', marginRight: '24px'}}>
        <i className={`icon icon-${iconName}`}></i>
      </span>
      <a href="#" className="sidebar__tab__link">{text}</a>
    </div>
  );
}

export default TabsSidebar;
