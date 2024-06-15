import React from 'react';
import './ConfirmationModal.css';
import PopupModalNotification from '../popupModal/PopupModalNotification';

const ConfirmationModal = ({cnfm_type}) => {

    if (cnfm_type === "addr_del") {
        var notify_type = "addr_deleted";
        var header_text = "Delete this Address";
        var btn_text = "Delete";
        var btn_id = "addr_cnfrm_yes";
    }

    function closeCnfmModal() {
        var backdrop = document.getElementById("modal_screen_blur");
        var confirm_modal = document.getElementById("confirm_modal");
        backdrop.style.display = "none";
        confirm_modal.classList.remove("show");
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }

    function submitButton() {
        var notify_modal = document.getElementById("notify_add_del_modal");
        notify_modal.style.display = "flex";
        var submit_but = document.getElementById(btn_id);
        submit_but.disabled = true;

        setTimeout(() => {
            notify_modal.style.display = "none";
            submit_but.disabled = false;
            closeCnfmModal();
        }, 2000);
    }

    return (
        <div id='confirm_modal' className='base_modal'>
            <div className='modal_header'>
                <span className='header_text'>{header_text}</span>
                <button onClick={closeCnfmModal} className='close_modal'>x</button>
            </div>
            <div className='break_line'></div>
            <div className='modal_body'>
                <button id={btn_id} onClick={submitButton}>{btn_text}</button>
            </div>
            <PopupModalNotification notification_type = {notify_type} parent = 'addr_confirm_modal' />
        </div>
    );
};

export default ConfirmationModal;