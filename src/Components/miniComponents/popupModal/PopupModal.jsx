import React from 'react';
import './PopupModal.css';

const PopupModal = () => {

    function closeModal() {
        var backdrop = document.getElementById("modal_screen_blur");
        var number_modal = document.getElementById("number_modal");
        var mnu_but = document.getElementById("nav_menu_but");
        var crt_but = document.getElementById("nav_cart_but");
        mnu_but.classList.add("Mui-selected");
        crt_but.classList.remove("Mui-selected");
        backdrop.style.display = "none";
        number_modal.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
      }

    return (
        <div id='number_modal' className='modal'>
            <div className='modal_header'>
                <span className='header_text'>Login to Continue.</span>
                <button onClick={closeModal} className='close_modal'>x</button>
            </div>
            <div className='modal_body'>
                <div className='body_text'>Enter Mobile No.</div>
                <input type="tel" className="form_control" id="mobileNo" placeholder="10 Digit Mobile No" maxLength="10" autoComplete="off" pattern="[0-9]{10}" />
                <button>Send OTP</button>
            </div>
        </div>
    );
};

export default PopupModal;