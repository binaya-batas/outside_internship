import { useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr';
import Modal from 'react-modal';

import './header.scss';


const modalStyles = {
    content: {
        width: '400px',
        left: '200'
    }
}
// Modal.setAppElement('#yourAppElement');

function Header({ text, name }) {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleSearchIcon = () => {
        setShowSearchBar(!showSearchBar);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    return (
        <div className="ticket__header">
            <div className="ticket__header__leftsection">
                {text}
            </div>
            <div className="ticket__header__rightsection">
                {showSearchBar && <input type="text" className='ticket__header__rightsection__input' /> }
                <div className="ticket__header__rightsection__icons" >
                    <div className="" onClick={handleSearchIcon}>
                        <BiSearchAlt />
                    </div>
                    <div className="ticket__header__rightsection__notifications">
                        <div className="bell">
                            <GrNotification />
                        </div>
                    </div>
                </div>
                <div className="ticket__header__rightsection__name">
                    <div className="bell" onClick={openModal}>
                        {name}
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        style={modalStyles}
                    >
                        <button onClick={closeModal}>X</button>
                        User Profile
                    </Modal>
                </div>
                <figure className="ticket__header__rightsection__img">
                    <img src="" alt="" srcset="" />
                </figure>
            </div>
        </div>
    )
}

export default Header;