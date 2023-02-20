import { useState } from 'react';

import Modal from "react-modal";
import Input from '../../Input/Input';
import AddTicket from '../AddTicket/AddTicket';
import './header-ticket.scss';

function HeaderTicket({ text, filterTickets, handlePriority }) {
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const openAddModal = () => {
        setShowAddModal(true);
    }

    const closeAddModal = () => {
        setShowAddModal(false);
    }

    const modalStyles = {
        content: {
            width: '500px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    return (
        <div className="ticket__header dashboard-header">
            <div className="ticket__header__leftsection">{text}</div>
            <div className="ticket__header__rightsection">
                <div className="ticket__header__rightsection__icons" style={{ border: 'none', marginRight: '0px', paddingRight: '0px'}}>
                    <div className="add">
                        <div className="" onClick={openAddModal}>+</div>
                        <div className="" onClick={openAddModal}>Add Tickets</div>
                        <Modal isOpen={showAddModal} style={modalStyles}>
                            <button className="ticket__header__rightsection__button" onClick={closeAddModal}>X</button>
                            <AddTicket />
                        </Modal>
                    </div>
                    <div className="sort">
                        <i className="icon-sort"></i>
                        <div className="">Sort</div>
                    </div>
                    <div className="filter">
                        <i className="icon-filter" onClick={() => setShowFilterOptions(!showFilterOptions)}></i>
                        <div className="" onClick={() => setShowFilterOptions(!showFilterOptions)}>Filter</div>
                        {
                            showFilterOptions &&
                            <div className="filter__options">
                                <Input type="radio" checkboxName="high" text="High" handlePriority={handlePriority}/>
                                <Input type="radio" checkboxName="normal" text="Normal" handlePriority={handlePriority}/> 
                                <Input type="radio" checkboxName="low" text="Low" handlePriority={handlePriority}/>
                                <Input type="radio" checkboxName="all" text="Remove Filters" handlePriority={handlePriority}/> 
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTicket;