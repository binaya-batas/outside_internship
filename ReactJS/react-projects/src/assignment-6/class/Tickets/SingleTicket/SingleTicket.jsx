import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTickets from "../../../hooks/useTickets";

function SingleTicket({data}) {
    const {ticketid} = useParams();
    
    const {singleTicket, getSingleTicket} = useTickets();

    useEffect(() => {
        getSingleTicket(ticketid);
    }, [])

    console.log(singleTicket)

    return (
        <div className="" style={{textAlign: 'center', width: '100%', marginTop: '20px'}}>
            <img src={singleTicket.imgSrc} alt="" srcset="" height="200px" width="" />
            <p>Ticket id: {singleTicket.id}</p>
            <p>Ticket name: {singleTicket.name}</p>
        </div>
    )
}

export default SingleTicket;

