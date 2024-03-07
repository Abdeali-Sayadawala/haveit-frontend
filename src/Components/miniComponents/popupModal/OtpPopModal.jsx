import React from 'react';
import { useNavigate } from "react-router-dom";
import './PopupModal.css';
import PopupModalNotification from './PopupModalNotification';
import { useState } from "react";

const OtpPopModal = ({modal_ty}) => {

    const [notify_type, set_otp_notify_type] = useState("otp_sent");
    const navigate = useNavigate();

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

    function otpModalOpen() {
        var backdrop = document.getElementById("modal_screen_blur");
        var number_modal = document.getElementById("number_modal");
        var num_input = document.getElementById("mobileNo");
        backdrop.style.display = "block";
        number_modal.classList.add("show");
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
        num_input.select();
      }

    function submitButton() {
        var input = document.getElementById("otp_field").value;
        function checkNumber(num) {
            if (num.split("").length !== 6){
                return false;
            }
            if (!Number(num)) {
                return false;
            }
            return true;
        }

        var num_verify = false;
        if (checkNumber(input)){
            set_otp_notify_type("otp_verified");
            num_verify = true;
        }else {
            set_otp_notify_type("otp_wrong");
        }
        
        var notify_otp_modal = document.getElementById("notify_otp_modal");
        notify_otp_modal.style.display = "flex";
        var submit_but = document.getElementById("otp_submit");
        submit_but.disabled = true;

        setTimeout(() => {
            notify_otp_modal.style.display = "none";
            submit_but.disabled = false;
            if (num_verify){
                closeModal();

                // redirect to checkout page
                navigate('/checkout');
            }
        }, 2000);

    }

    function enter_pressed(event) {
        if (event.key === 'Enter') {
            submitButton();
        }
    }

    function changeNumber() {
        closeModal();
        otpModalOpen();
    }

    function resendOtp() {
        set_otp_notify_type("otp_resent");
        var notify_otp_modal = document.getElementById("notify_otp_modal");
        var submit_but = document.getElementById("otp_submit");
        notify_otp_modal.style.display = "flex";
        submit_but.disabled = true;

        setTimeout(() => {
            notify_otp_modal.style.display = "none";
            submit_but.disabled = false;
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
                    <div className='change_no' onClick={changeNumber}>Change Number ?</div>
                </div>
                <div className='body_text'>Enter OTP to verify</div>
                <input type="tel" className="form_control" onKeyDown={enter_pressed} id="otp_field"autoComplete="off"/>
                <button id='otp_submit' onClick={submitButton}>Verify</button>
                <div className='resend_otp' onClick={resendOtp}>Resend OTP ?</div>
            </div>
            <PopupModalNotification notification_type = {notify_type} parent = 'otp_modal' />
        </div>
    )
}

export default OtpPopModal;