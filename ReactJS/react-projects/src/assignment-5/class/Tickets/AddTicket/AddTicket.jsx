import { useState } from 'react';
import useTickets from '../../../hooks/useTickets';
import InputField from '../../../../assignment/class/Login/InputField/InputField';
import Button from '../../../../assignment/class/Button/Button';
import './add-ticket.scss';

function AddTicket() {
    const { addTicket } = useTickets();

    const [formInfo, setFormInfo] = useState({
        name: '',
        timeStatus: '',
        customerName: '',
        date: '',
        deadline: '',
        time: '',
        btnText: '',
        imgSrc: ''
    })

    const handleChange = (e) => {
        const fieldName = e.target.name;
        setFormInfo(existingValues => ({
            ...existingValues,
            [fieldName]: fieldName === 'rememberMe'? !existingValues.rememberMe: e.target.value,
        }))
    }

    const handleAddTicket = (event) => {
        event.preventDefault();
        addTicket(formInfo);
    }

    return (
        <form className="add-ticket">
            <div className="add-ticket__title">
                Add Ticket
            </div>
            <InputField type="text" name="name" text="Name" onChange={handleChange} formInfo={formInfo.email} />
            <InputField type="text" name="timeStatus" text="Time Status" onChange={handleChange} formInfo={formInfo.timeStatus} />
            <InputField type="text" name="customerName" text="Customer Name" onChange={handleChange} formInfo={formInfo.customerName} />
            <InputField type="text" name="date" text="Date" onChange={handleChange} formInfo={formInfo.date} />
            <InputField type="text" name="deadline" text="Deadline" onChange={handleChange} formInfo={formInfo.deadline} />
            <InputField type="text" name="time" text="Time" onChange={handleChange} formInfo={formInfo.time} />
            <InputField type="text" name="btnText" text="Priority Level" onChange={handleChange} formInfo={formInfo.btnText} />
            <InputField type="text" name="imgSrc" text="Image" onChange={handleChange} formInfo={formInfo.imgSrc} />

            <Button text="Add Ticket" onClick={handleAddTicket} />
        </form>
    )
}

export default AddTicket;