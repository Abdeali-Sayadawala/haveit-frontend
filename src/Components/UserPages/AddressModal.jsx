import React from 'react';
import './userPages.css';
import PopupModalNotification from '../miniComponents/popupModal/PopupModalNotification';
import xBlue from '../Assets/x-10332-blue.svg';

const AddressModal = ({modal_ty}) => {

    var modal_header;
    var notify_type;
    var btn_id;
    var submit_txt;
    if (modal_ty === 'new') {
        modal_header = "Add new address";
        notify_type = "addr_add";
        btn_id = "add_addr";  
        submit_txt = "Add address" ;
    }else if (modal_ty === 'edit') {
        modal_header = "Edit address";
        notify_type = "addr_edit";
        btn_id = "edit_addr"; 
        submit_txt = "Edit address" ;  
    }

    function closeAddrModal() {
        var backdrop = document.getElementById("modal_screen_blur");
        var confirm_modal = document.getElementById("addr_modal");
        backdrop.style.display = "none";
        confirm_modal.classList.remove("fade_in");
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }

    function submitButton() {
        var notify_modal = document.getElementById("notify_addr_modal");
        notify_modal.style.display = "flex";
        var submit_but = document.getElementById(btn_id);
        submit_but.disabled = true;

        setTimeout(() => {
            notify_modal.style.display = "none";
            submit_but.disabled = false;
            closeAddrModal();
        }, 2000);
    }

    return (
        <div id='addr_modal' className='addr_modal'>
            <div className='addr_modal_header'> 
                <span>
                    {modal_header}
                </span>
                <button onClick={closeAddrModal} className='close_btn'><img src={xBlue} alt="close" /></button>
            </div>
            <div className='addr_modal_body'>
                <div className='body_element_wrapper'>
                    <div className='body_element'>
                        <span>Name</span>
                        <input type="text" className='addr_modal_input' placeholder='Enter Name' label='name' autoComplete='off'/>
                    </div>
                    <div className='body_element half'>
                        <span>Phone Number</span>
                        <div className='phone_section'>
                            <span>+91</span><input type="number" className='addr_modal_input phone' placeholder='Enter Phone Number' maxLength="10" label='phone' autoComplete='off'/>
                        </div>
                    </div>
                    <div className='body_element half'>
                        <span>Email Address (Optional)</span>
                        <input type="email" className='addr_modal_input' placeholder='Enter E-mail Address' label='email' autoComplete='off'/>
                    </div>
                    <div className='body_element'>
                        <span>Address</span>
                        <input type="text" className='addr_modal_input' placeholder='Flat/House No., Building, Colony' label='address' autoComplete='off'/>
                    </div>
                    <div className='body_element half'>
                        <span>Area (Optional)</span>
                        <input type="text" className='addr_modal_input' placeholder='E.g. Mazgaon, Mohammad Ali rd' label='area' autoComplete='off'/>
                    </div>
                    <div className='body_element half'>
                        <span>Landmark (Optional)</span>
                        <input type="text" className='addr_modal_input' placeholder='E.g. Near...' label='landmark' autoComplete='off'/>
                    </div>
                    <div className='body_element half'>
                        <span>Pin Code</span>
                        <input type="text" className='addr_modal_input' placeholder='Enter Pincode' label='pincode' autoComplete='off'/>
                    </div>
                    <div className='body_element half'>
                        <span>City</span>
                        <input type="text" className='addr_modal_input' placeholder='Enter City' label='city' autoComplete='off'/>
                    </div>
                    <div className='body_element half'>
                        <span>State</span>
                        <input type="text" className='addr_modal_input' placeholder='Enter State' label='state' autoComplete='off'/>
                    </div>
                </div>
            </div>
            <div className='add_modal_submit'>
                <button id={btn_id} onClick={submitButton}>{submit_txt}</button>
            </div>
            <PopupModalNotification notification_type = {notify_type} parent = 'addr_modal' />
        </div>
    );
};

export default AddressModal;