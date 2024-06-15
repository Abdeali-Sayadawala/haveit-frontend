import React from 'react';
import './PopupModal.css';
import PopupModalNotification from './PopupModalNotification';
import { useState } from "react";
import xBlue from '../Assets/x-10332-blue.svg';

const PopupModal = () => {

    const [notify_type, set_notify_type] = useState("otp_sent");

    function closeModal() {
        var backdrop = document.getElementById("modal_screen_blur");
        var number_modal = document.getElementById("number_modal");
        var mnu_but = document.getElementById("nav_menu_but");
        var crt_but = document.getElementById("nav_cart_but");
        if (mnu_but){
            mnu_but.classList.add("Mui-selected");
            crt_but.classList.remove("Mui-selected");
        }
        backdrop.style.display = "none";
        number_modal.classList.remove("show");
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }

    function otpCartOpen() {
        var backdrop = document.getElementById("modal_screen_blur");
        var otp_modal = document.getElementById("otp_modal");
        var otp_input = document.getElementById("otp_field");
        otp_input.focus();
        backdrop.style.display = "block";
        otp_modal.classList.add("show");
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
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
            document.getElementById("mob_num").innerHTML = input;
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
                otpCartOpen();
            }
        }, 2000);
    }

    function enter_pressed(event) {
        if (event.key === 'Enter') {
            submitButton();
        }
    }

    return (
        <div id='number_modal' className='modal'>
            <div className='modal_header'>
                <span className='header_text'>Login to Continue</span>
                <button onClick={closeModal} className='close_btn'><img src={xBlue} alt="close" /></button>
            </div>
            <div className='modal_body'>
                <div className='body_text'>Enter Mobile No</div>
                <input type="tel" className="form_control" id="mobileNo" onKeyDown={enter_pressed} placeholder="10 Digit Mobile No" maxLength="10" autoComplete="off"/>
                <button id='mobile_no_submit' onClick={submitButton}>Send OTP</button>
            </div>
            <PopupModalNotification notification_type = {notify_type} parent = 'number_modal' />
        </div>
    );
    
};

export default PopupModal;