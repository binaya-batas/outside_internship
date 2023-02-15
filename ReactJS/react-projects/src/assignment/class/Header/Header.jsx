import { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import Modal from "react-modal";
import Button from "../Button/Button";

import "./header.scss";

const modalStyles = {
    content: {
        width: "400px",
        left: "200",
        textAlign: "center"
    },
};


const notificationStyles = {
    content: {
        width: "400px",
        left: "400",
    }
}

function Header({ text, name, imgSrc }) {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [notificationIsOpen, setNotificationIsOpen] = useState(false);

    const handleSearchIcon = () => {
        setShowSearchBar(!showSearchBar);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openNotification = () => {
        setNotificationIsOpen(true);
    }

    const closeNotification = () => {
        setNotificationIsOpen(false);
    }

    return (
        <div className="ticket__header">
            <div className="ticket__header__leftsection">{text}</div>
            <div className="ticket__header__rightsection">
                {showSearchBar && (
                    <input type="text" className="ticket__header__rightsection__input" />
                )}

                <div className="ticket__header__rightsection__icons">
                    <div className="" onClick={handleSearchIcon}>
                        <BiSearchAlt />
                    </div>
                    <div className="ticket__header__rightsection__notifications">
                        <div className="bell">
                            <i className="icon-notification" onClick={openNotification}></i>
                            <Modal isOpen={notificationIsOpen} style={notificationStyles}>
                                <button className="ticket__header__rightsection__button" onClick={closeNotification}>X</button>
                                Notifications
                            </Modal>
                        </div>
                    </div>
                </div>

                {name &&
                    <div className="ticket__header__rightsection__name">
                        <div className="" onClick={openModal}>
                            {name}
                        </div>
                        <Modal isOpen={modalIsOpen} style={modalStyles}>
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
                        <img src={imgSrc} alt="" srcset="" />
                    </figure>
                )}
            </div>
        </div>
    );
}

export default Header;
