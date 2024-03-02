import React from 'react';
import './PopupModal.css';
import checkMark from '../../Assets/check-mark-3281.svg';
import exclamation from '../../Assets/exclamation-mark-9767.svg';

const PopupModalNotification = ({notification_type}) => {
    var label = "";
    var icon = checkMark;
    if (notification_type === "otp_sent"){
        label = "OTP has been sent";
    }else if (notification_type === "enter_number") {
        label = "Please enter correct Mobile no.";
        icon = exclamation;
    }

    return (
        <div id='notify_modal' className='modal_notify'>
            <div className='body_icon'><img src={icon} alt='' /></div>
            <div className='body_text'>{label}</div>
        </div>
    );
};

export default PopupModalNotification;