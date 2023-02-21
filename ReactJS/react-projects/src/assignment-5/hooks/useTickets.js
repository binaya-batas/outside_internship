import { useState } from "react";

const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [ticketLoading, setTicketLoading] = useState(false);
    const [ticketAddLoading, setTicketAddLoading] = useState(false);

    const getTickets = async () => {
        setTicketLoading(true);
        await fetch("http://localhost:3000/ticketArray")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setTickets(data)
                    setTicketLoading(false)
                }, 2000)
            })
    }

    const addTicket = async (formInfo) => {
        setTicketAddLoading(true);
        await fetch("http://localhost:3000/ticketArray", {
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
                setTickets([...tickets, data])
                console.log(tickets);
                setTicketAddLoading(false)
            })
    }

    return { tickets, ticketLoading, ticketAddLoading, getTickets, addTicket }

}

export default useTickets;