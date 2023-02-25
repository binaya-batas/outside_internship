import { useState, useRef } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import Modal from "react-modal";
import Button from "../Tickets/Priority/Priority";
import Notification from "../Notification/Notification";

import "./header.scss";

const modalStyles = {
    content: {
        width: "400px",
        top: "90px",
        left: "200",
        textAlign: "center"
    },
};

const notifications = ['You need to check a ticket of Binaya.'];

function Header({ text, name, imgSrc, handleSearchInput }) {
    const [profileIsOpen, setProfileIsOpen] = useState(false);
    const [notificationIsOpen, setNotificationIsOpen] = useState(false);


    return (
        <nav className="ticket__header">
            <div className="ticket__header__leftsection">{text}</div>
            <div className="ticket__header__rightsection">

                <div className="ticket__header__rightsection__icons">
                    <div className="">
                        <BiSearchAlt />
                    </div>
                    <div className="ticket__header__rightsection__notifications">
                        <div className="bell" style={{position: 'relative'}} >
                            <i className="icon-notification"></i>
                            {notifications.length > 0 &&
                                <div className="blue-dot" style={{
                                    border:'1.5px solid #F7F8FC',
                                    position: 'absolute',
                                    right: '0',
                                    top: '2px',
                                    height: '6px',
                                    width: '6px',
                                    borderRadius: '50%',
                                    backgroundColor: '#3751FF',
                                }}></div>
                            }
                        </div>
                    </div>
                </div>

                {name &&
                    <div className="ticket__header__rightsection__name">
                        <div className="">
                            {name}
                        </div>
                    </div>
                }

                {imgSrc && (
                    <figure
                        className="ticket__header__rightsection__img"
                    >
                        <img src={imgSrc} alt="profile-img" />
                    </figure>
                )}
            </div>
        </nav>
    );
}

export default Header;
