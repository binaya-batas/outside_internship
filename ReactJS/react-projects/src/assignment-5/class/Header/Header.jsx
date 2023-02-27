import { useContext, useState, useRef } from "react";

import Modal from "react-modal";
import Button from "../Tickets/Priority/Priority";
import Notification from "../Notification/Notification";


import { BiSearchAlt } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";

import "./header.scss";

const modalStyles = {
content: {
        width: "400px",
        top: "90px",
        left: "200",
        textAlign: "center"
    },
};


const notificationStyles = {
    content: {
        width: "400px",
        top: "90px",
        left: "500",
        textAlign: "center"
    }
}

const notifications = ['You need to check a ticket of Binaya.'];

function Header({ text, name, imgSrc, handleSearchInput }) {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [profileIsOpen, setProfileIsOpen] = useState(false);
    const [notificationIsOpen, setNotificationIsOpen] = useState(false);

    const inputRef = useRef();

    const handleSearchIcon = () => {
        setShowSearchBar(!showSearchBar);
        inputRef.current.focus();
    };

    const openModal = () => {
        setProfileIsOpen(true);
    };

    const closeModal = () => {
        setProfileIsOpen(false);
    };

    const toggleNotificationState = () => {
        setNotificationIsOpen(!notificationIsOpen)
    }

    return (
        <nav className="ticket__header">
            <div className="ticket__header__leftsection">{text}</div>
            <div className="ticket__header__rightsection">
                {showSearchBar && (
                    <input ref={inputRef} type="text" className="ticket__header__rightsection__input" onChange={handleSearchInput} />
                )}

                <div className="ticket__header__rightsection__icons">
                    <div className="" onClick={handleSearchIcon}>
                        <BiSearchAlt />
                    </div>
                    <div className="ticket__header__rightsection__notifications">
                        <div className="bell" style={{position: 'relative'}} >
                            <i className="icon-notification" onClick={toggleNotificationState}></i>
                            {notifications.length > 0 &&
                                <div className="blue-dot" style={{
                                    position: 'absolute',
                                    right: '0',
                                    top: '2px',
                                    height: '8px',
                                    width: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: 'blue',
                                }}></div>
                            }
                            {
                                notificationIsOpen && 
                                <div className="ticket__header__rightsection__notifications__popup"
                                    style={{
                                        border:'1.5px solid #F7F8FC',
                                        position: 'absolute',
                                        right: '0',
                                        top: '2px',
                                        height: '6px',
                                        width: '6px',
                                        borderRadius: '50%',
                                        backgroundColor: '#3751FF',
                                    }}
                                > 
                                    {notifications.map((notification, index) => (
                                        <Notification key={index} text={notification} />
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {name &&
                    <div className="ticket__header__rightsection__name">
                        <div className="" onClick={openModal}>
                            {name}
                        </div>
                        <Modal isOpen={profileIsOpen} style={modalStyles}>
                            <button className="ticket__header__rightsection__button" onClick={closeModal}>X</button>
                            <figure>
                                <img src={imgSrc} alt="avatar" className="ticket__header__rightsection__modal-image"/>
                                <figcaption>{ name }</figcaption>
                            </figure>
                        </Modal>
                    </div>
                }

                {imgSrc && (
                    <figure
                        className="ticket__header__rightsection__img"
                        onClick={openModal}
                    >
                        <img src={imgSrc} alt="profile-image" />
                    </figure>
                )}
            </div>
        </nav>
    );
}

export default Header;
