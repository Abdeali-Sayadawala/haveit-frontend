import React from 'react';
import './PopupModal.css';
import PopupModalNotification from './PopupModalNotification';
import { useState } from "react";

const OtpPopModal = ({modal_ty}) => {

    const [notify_type, set_notify_type] = useState("otp_sent");

    function closeModal() {
        var backdrop = document.getElementById("modal_screen_blur");
        var number_modal = document.getElementById("otp_modal");
        var mnu_but = document.getElementById("nav_menu_but");
        var crt_but = document.getElementById("nav_cart_but");
        mnu_but.classList.add("Mui-selected");
        crt_but.classList.remove("Mui-selected");
        backdrop.style.display = "none";
        number_modal.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }

    function submitButton() {
        var input = document.getElementById("mobileNo").value;
        function checkNumber(num) {
            if (num.split("").length !== 10){
                return false;
            }
            if (!Number(num)) {
                return false;
            }
            return true;
        }

        var num_verify = false;
        if (checkNumber(input)){
            set_notify_type("otp_sent");
            num_verify = true;
        }else {
            set_notify_type("enter_number");
        }
        
        var notify_modal = document.getElementById("notify_modal");
        notify_modal.style.display = "flex";
        var submit_but = document.getElementById("mobile_no_submit");
        submit_but.disabled = true;

        setTimeout(() => {
            notify_modal.style.display = "none";
            submit_but.disabled = false;
            if (num_verify){
                closeModal();
            }
        }, 2000);
    }

    return (
        <div id='otp_modal' className='otp_modal'>
            <div className='modal_header'>
                <span className='header_text'>Verify OTP</span>
                <button onClick={closeModal} className='close_modal'>x</button>
            </div>
            <div className='modal_body'>
                <div className='otp_desc'>
                    <span>OTP has been sent to +91<span id='mob_num'></span> </span>
                    <div className='change_no'>Change Number ?</div>
                </div>
                <div className='body_text'>Enter OTP to verify</div>
                <input type="tel" className="form_control" id="otp_field"autoComplete="off"/>
                <button id='mobile_no_submit' onClick={submitButton}>Verify</button>
                <div className='resend_otp'>Resend OTP ?</div>
            </div>
            <PopupModalNotification notification_type = {notify_type} />
        </div>
    )
}

export default OtpPopModal;