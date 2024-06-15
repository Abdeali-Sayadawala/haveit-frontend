import React from 'react';
import './PopupModal.css';
import checkMark from '../Assets/check-mark-3281.svg';
import exclamation from '../Assets/exclamation-mark-9767.svg';

const PopupModalNotification = ({notification_type, parent}) => {
    var label = "";
    var icon = checkMark;
    var modal_id = 'notify_modal';

    if (parent === 'number_modal'){
        modal_id = 'notify_modal'
    }else if (parent === 'otp_modal') {
        modal_id = 'notify_otp_modal';
    }else if (parent === 'addr_confirm_modal') {
        modal_id = 'notify_add_del_modal';
    }else if (parent === 'addr_modal') {
        modal_id = 'notify_addr_modal';
    }

    if (notification_type === "otp_sent"){
        label = "OTP has been sent";
    }else if (notification_type === "enter_number") {
        label = "Please enter correct Mobile no.";
        icon = exclamation;
    }else if (notification_type === "otp_verified") {
        label = "OTP has been verified";
    }else if (notification_type === "otp_wrong") {
        label = "Incorrect OTP!";
        icon = exclamation;
    }else if (notification_type === "otp_resent"){
        label = "OTP has been re-sent";
    }else if (notification_type === "addr_deleted") {
        label = "Address deleted";
    }else if (notification_type === "addr_add") {
        label = "New address added";
    }else if (notification_type === "addr_edit") {
        label = "Address Edited";
    }

    return (
        <div id={modal_id} className='modal_notify'>
            <div className='body_icon'><img src={icon} alt='' /></div>
            <div className='body_text'>{label}</div>
        </div>
    );
};

export default PopupModalNotification;