import React from "react";
import CloseIcon from '@mui/icons-material/Close';

import './Notification.css';

const Notification = ({show, message, type, onClose}) => {

    const closeNotification = () => {
        onClose();
    }

    return (
        <div id="notification_wrapper" className={"notification_wrapper " + (show ? 'show' : '')}>
            <div className={"message_section " + type}>
                {message}
            </div>
            <div className={"actions_section " + type}>
                <button onClick={closeNotification}>
                    <CloseIcon fontSize="medium" sx={{ color: "white" }} />
                </button>
            </div>
        </div>
    )
}

export default Notification;