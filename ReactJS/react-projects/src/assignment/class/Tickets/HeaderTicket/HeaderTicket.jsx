import './header-ticket.scss';


function HeaderTicket({ text }) {
    return (
        <div className="ticket__header dashboard-header">
            <div className="ticket__header__leftsection">{text}</div>
            <div className="ticket__header__rightsection">
                <div className="ticket__header__rightsection__icons" style={{ border: 'none', marginRight: '0px', paddingRight: '0px'}}>
                    <div className="sort">
                        <i className="icon-sort"></i>
                        <div className="">Sort</div>
                    </div>
                    <div className="filter">
                        <i className="icon-filter"></i>
                        <div className="">Filter</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTicket;