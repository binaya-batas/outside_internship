import { useState } from "react";
import API_ENDPOINT from '../../api';

const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [ticketLoading, setTicketLoading] = useState(false);
    const [ticketAddLoading, setTicketAddLoading] = useState(false);

    const getTickets = async () => {
        setTicketLoading(true);
        await fetch(API_ENDPOINT.ticketArray)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    const ticketArray = Object.keys(data).map((key) => ({
                        ...data[key],
                        nodeName: key,
                    }))
                    setTickets(ticketArray.reverse());
                    setTicketLoading(false)
                }, 500)
            })
    }

    const addTicket = async (formInfo) => {
        setTicketAddLoading(true);
        await fetch(API_ENDPOINT.ticketArray, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formInfo.name,
                timeStatus: formInfo.timeStatus,
                customerName: formInfo.customerName,
                date: formInfo.date,
                deadline: formInfo.deadline,
                time: formInfo.time,
                btnText: formInfo.btnText,
                imgSrc: formInfo.imgSrc

            })
        })
            .then((res) => res.json())
            .then((data) => {
                setTickets((existingTickets) => [data, ...existingTickets])
                console.log(tickets);
                setTicketAddLoading(false)
            })
    }

    return { tickets, ticketLoading, ticketAddLoading, getTickets, addTicket }

}

export default useTickets;