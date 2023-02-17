import { useState } from 'react';
import Header from "../Header/Header";
import Dashboard from "./Dashboard/Dashboard";

import avatar from'../../images/avatar.png'
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';
import customer4 from '../../images/customer-4.png';
import customer5 from '../../images/customer-5.png';
import customer6 from '../../images/customer-6.png';
import customer7 from '../../images/customer-7.png';


import './ticket.scss';

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

function Ticket() {
    const [tickets, setTickets] = useState(ticketArray)
    const [searchInput, setSearchInput] = useState("")

    const handleDeleteIcon = (index) => {
        setTickets(current => 
            current.filter(ticket => {
                return ticket.id !== index;
            })    
        )
    }

    const handleSearchInput = (e) => {
        // const searchList = ticketArray.filter(ticket => (
        //     ticket.name.toLowerCase().includes(searchInput.toLowerCase())
        // ))

        // setTickets(searchList);
        setSearchInput(e.target.value);
    }

    return (
        <div className="ticket">
            <Header text="Tickets" name="Jones Ferdinand" imgSrc={avatar} handleSearchInput={handleSearchInput} />
            <Dashboard tickets={tickets} handleDeleteIcon={handleDeleteIcon} searchInput={searchInput} />

        </div>
    )
}

export default Ticket;