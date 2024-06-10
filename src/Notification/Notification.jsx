import React from "react";
import CloseIcon from '@mui/icons-material/Close';

import './Notification.css';

const Notification = ({message, show}) => {
    return (
        <div id="notification_wrapper" className={"notification_wrapper " + show ? 'show': ''}>
            <div className="message_section">
                {show}
            </div>
            <div className="actions_section">
                <button>
                    <CloseIcon fontSize="medium" sx={{ color: "white" }} />
                </button>
            </div>
        </div>
    )
}

export default Notification;