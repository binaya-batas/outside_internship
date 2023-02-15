import { useState } from 'react';
import Button from "../../Button/Button";

import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import customer4 from '../../../images/customer-4.png';
import customer5 from '../../../images/customer-5.png';
import customer6 from '../../../images/customer-6.png';
import customer7 from '../../../images/customer-7.png';

import { AiOutlineDelete } from 'react-icons/ai';

import "./details.scss";

const ticketArray = [
    {
        'id': 0,
        'name': 'Contact email not linked',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Tom Cruise',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'high',
        'btnColor': 'red',
        'imgSrc': customer1
    },
    {
        'id': 1,
        'name': 'Adding Images to Featured Posts',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Matt Damon',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'normal',
        'btnColor': 'green',
        'imgSrc': customer2
    },
    {
        'id': 2,
        'name': 'When will I be charged this month?',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Robert Downey',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'low',
        'btnColor': 'yellow',
        'imgSrc': customer3
    },
    {
        'id': 3,
        'name': 'Payment not going through',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Robert Downey',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'low',
        'btnColor': 'yellow',
        'imgSrc': customer4
    },
    {
        'id': 4,
        'name': 'Unable to add replies',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Robert Downey',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'normal',
        'btnColor': 'green',
        'imgSrc': customer5
    },
    {
        'id': 5,
        'name': 'Referral Bonus',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Robert Downey',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'low',
        'btnColor': 'yellow',
        'imgSrc': customer6
    },
    {
        'id': 6,
        'name': 'Downtime since last week',
        'timeStatus': 'Updated 1 day ago',
        'customerName': 'Robert Downey',
        'date': '24.05.2019',
        'deadline': 'May 26, 2019',
        'time': '6:30 PM',
        'btnText': 'high',
        'btnColor': 'red',
        'imgSrc': customer7
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
    const [tickets, setTickets] = useState(ticketArray)

    const handleDeleteIcon = (index) => {
        setTickets(current => 
            current.filter(ticket => {
                return ticket.id !== index;
            })    
        )
    }

    return (
        <>
            {
            tickets.map((ticket, index) => (
                <tr>
                    <TableColumn name={ticket.name} time={ticket.timeStatus} imageDisplayStatus="" imageSrc={ticket.imgSrc} />
                    <TableColumn name={ticket.customerName} time={ticket.date} imageDisplayStatus="hide-img" />
                    <TableColumn name={ticket.deadline} time={ticket.time} imageDisplayStatus="hide-img" />
                    <td>
                        <Button text={ticket.btnText} btnColor={ticket.btnColor} />
                    </td>
                    <td>
                        <AiOutlineDelete onClick={() => handleDeleteIcon(ticket.id)} style={{cursor: 'pointer'}} />
                    </td>
                </tr>
            ))
            }
        </>
    );
};

const TableColumn = ({ imageDisplayStatus, name, time, imageSrc }) => {
    return (
        <td>
            <div style={{ display: 'flex'}}>
                <figure className={`figure ${imageDisplayStatus}`}>
                    <img src={imageSrc} alt="man-photo" />
                </figure>
                <div className="">
                    <div className="ticket-column">
                        <div className="ticket-column__name">{ name }</div>
                        <div className="ticket-column__date">{ time }</div>
                    </div>
                </div>
            </div>
        </td>
    );
};

