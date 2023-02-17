import './notifications.scss';

function Notification({ text }) {
    return (
        <div className="notification">
            <a href="#">
                { text }
            </a>
        </div>
    )
}

export default Notification;