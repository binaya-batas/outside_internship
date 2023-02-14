import './header-ticket.scss'

function HeaderTicket({ text, name }) {
    return (
        <div className="ticket__header">
            <div className="ticket__header__leftsection">
                {text}
            </div>
            <div className="ticket__header__rightsection">
                <div className="ticket__header__rightsection__name">
                    {name}
                </div>
                <figure className="ticket__header__rightsection__img">
                    <img src="" alt="" srcset="" />
                </figure>
            </div>
        </div>
    )
}

export default HeaderTicket;