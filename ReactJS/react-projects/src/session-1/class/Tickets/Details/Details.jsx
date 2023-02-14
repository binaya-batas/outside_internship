import Button from "../../Button/Button";

import "./details.scss";

const tickets = [
    {
        'name': 'Contact email not linked',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Tom Cruise',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'high',
        'btnColor': 'red'
    },
    {
        'name': 'Contact email not linked',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Tom Cruise',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'normal',
        'btnColor': 'green'
    },
    {
        'name': 'Contact email not linked',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Tom Cruise',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'low',
        'btnColor': 'yellow'
    },
];

function Details() {
    return (
        <div className="ticket__details">
            <table className="ticket__details__table">
                <thead className="ticket__details__table__head">
                    <tr>
                        <th>Ticket Details</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="ticket__details__table__body">
                    <TableRow />
                </tbody>
            </table>
        </div>
    );
}

export default Details;

const TableRow = () => {
    return (
        <>
            {
            tickets.map((ticket, index) => (
                <tr>
                    <TableCol name={ticket.name} time={ticket.timeStatus} />
                    <TableCol name={ticket.customerName} time={ticket.date} imgDisplayStatus="hide-img" />
                    <TableCol name={ticket.deadline} time={ticket.time} imgDisplayStatus="hide-img" />
                    <td>
                        <Button text={ticket.btnText} btnColor={ticket.btnColor} />
                    </td>
                    <td>
                        :
                    </td>
                </tr>
            ))
            }
        </>
    );
};

const TableCol = ({ imgDisplayStatus, name, time }) => {
    return (
        <td>
            <figure className={`${imgDisplayStatus}`}>
                <img src="" alt="" />
            </figure>
            <div className="">
                <div className="ticket-details">
                    <div className="ticket-details__name">{ name }</div>
                    <div className="ticket-details__date">{ time }</div>
                </div>
            </div>
        </td>
    );
};
