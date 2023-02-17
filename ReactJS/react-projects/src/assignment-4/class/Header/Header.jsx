import { useContext, useState } from "react";

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
    

    const handleSearchIcon = () => {
        setShowSearchBar(!showSearchBar);
    };

    const openModal = () => {
        setProfileIsOpen(true);
    };

    const closeModal = () => {
        setProfileIsOpen(false);
    };

    const openNotification = () => {
        setNotificationIsOpen(true);
    }

    const closeNotification = () => {
        setNotificationIsOpen(false);
    }

    return (
        <nav className="ticket__header">
            <div className="ticket__header__leftsection">{text}</div>
            <div className="ticket__header__rightsection">
                {showSearchBar && (
                    <input type="text" className="ticket__header__rightsection__input" onChange={handleSearchInput} />
                )}

                <div className="ticket__header__rightsection__icons">
                    <div className="" onClick={handleSearchIcon}>
                        <BiSearchAlt />
                    </div>
                    <div className="ticket__header__rightsection__notifications">
                        <div className="bell" style={{position: 'relative'}} >
                            <i className="icon-notification" onClick={openNotification}></i>
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
                            <Modal isOpen={notificationIsOpen} style={notificationStyles}>
                                <button className="ticket__header__rightsection__button" onClick={closeNotification}>X</button>
                                Notifications
                                {notifications.map((notification, index) => (
                                    <Notification key={index} text={notification} />
                                ))}
                            </Modal>
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