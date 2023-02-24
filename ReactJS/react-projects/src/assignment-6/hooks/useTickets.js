import { useState } from "react";
import { toast } from "react-toastify";
import API_ENDPOINT from "../../api";

const useTickets = () => {
    const [singleTicket, setSingleTicket] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [ticketLoading, setTicketLoading] = useState(false);
    const [ticketAddLoading, setTicketAddLoading] = useState(false);

    const getTickets = async () => {
        setTicketLoading(true);
        await fetch(API_ENDPOINT.ticketArray)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setTickets(data)
                    setTicketLoading(false)
                }, 500)
            })
    }

    const getSingleTicket = async (id) => {
        await fetch(`${API_ENDPOINT.ticketArray}/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSingleTicket(data);
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
                setTicketAddLoading(false)
                toast.success('Ticket added successfully.')
            })
    }

    const deleteTicket = async (id) => {
        await fetch(`${API_ENDPOINT.ticketArray}/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then(() => {
                setTickets(
                    tickets.filter(ticket => ticket.id !== id)
                )
            }) 
    }

    return { tickets, ticketLoading, ticketAddLoading, getTickets, addTicket, deleteTicket, getSingleTicket, singleTicket }

}

export default useTickets;