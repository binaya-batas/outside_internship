import './tabs-sidebar.scss';

function TabsSidebar({ text }) {
  return (
    <div className="sidebar__tab">
      <i className="sidebar__tab__icons fa fa-facebook"></i>
      <a href="#" className="sidebar__tab__link">{text}</a>
    </div>
  );
}

export default TabsSidebar;
