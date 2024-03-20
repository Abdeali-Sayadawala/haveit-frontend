import React from 'react';
import './userPages.css';
import { useState, useEffect } from "react";
import back_arrow from '../Assets/left-arrow.svg';
import upArrow from '../Assets/arrow-up-2822.svg';
import addIcon from '../Assets/plus-white.svg';
import { useNavigate } from "react-router-dom";
import ConfirmationModal from './ConfirmationModal';
import AddressModal from './AddressModal';

const Address = () => {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);
    const [addr_ty, set_addr_ty] = useState('');

    function goToMenu() { //navigate to menu
        navigate('/menu', { replace: true })
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authentication");
        if (loggedInUser === 'true') {
            setauthenticated(loggedInUser);
        }else{
            navigate('/menu', { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollToTop = (event) => {
        window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
    }

    function cnfrmDel() {
        var backdrop = document.getElementById("modal_screen_blur");
        var confirm_modal = document.getElementById("confirm_modal");
        backdrop.style.display = "block";
        confirm_modal.classList.add("show");
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    }

    function openAddress(modal_ty) {
        if (modal_ty === "add_new") {
            set_addr_ty("new");
        }else if (modal_ty === "edit") {
            set_addr_ty("edit");
        }
        var backdrop = document.getElementById("modal_screen_blur");
        var confirm_modal = document.getElementById("addr_modal");
        backdrop.style.display = "block";
        confirm_modal.classList.add("fade_in");
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    }

    if (authenticated === 'true'){
        return (
            <div className='user_wrapper addr_wrapper'>
                {/* Title and menu button - START */}
                <div className='user_title addr_title'>
                    <button onClick={goToMenu} className='back_button'>
                        <img src={back_arrow} className='left_arrow' alt="left arrow" />
                        <span className='back_label'>Menu</span>
                    </button>
                    <div className='summary_label'>My Address</div>
                </div>
                {/* Title and menu button - END */}

                {/* Add Address section - START */}

                <div className='data_section'>
                    <div className='add_btn_sec'>
                        <button onClick={() => openAddress('add_new')}><img src={addIcon} alt="plus icon" /><span>Add new address</span></button>
                    </div>
                </div>

                {/* Add Address section - END */}

                {/* Orders section - START */}
                <div className='data_section addr_section'>
                    <div className='sec_row addr_row'>
                        <div className='addr_data_section'>
                            <div className='addr_title'>Home</div>
                            <div className='addr_data'>b1-203, Fatehsagar appt. Fatehgunj, Vadodara, Gujarat, 390002</div>
                            <div className='addr_phone'>Phone Number: +91 8487098079</div>
                        </div>
                        <div className='add_action_section'>
                            <button onClick={() => openAddress('edit')} className='addr_edit_btn'>Edit</button>
                            <button onClick={cnfrmDel} className='addr_del_btn'>Delete</button>
                        </div>
                    </div>
                    <div className='sec_row addr_row'>
                        <div className='addr_data_section'>
                            <div className='addr_title'>Home</div>
                            <div className='addr_data'>b1-203, Fatehsagar appt. Fatehgunj, Vadodara, Gujarat, 390002</div>
                            <div className='addr_phone'>Phone Number: +91 8487098079</div>
                        </div>
                        <div className='add_action_section'>
                            <button onClick={() => openAddress('edit')} className='addr_edit_btn'>Edit</button>
                            <button onClick={cnfrmDel} className='addr_del_btn'>Delete</button>
                        </div>
                    </div>
                    <div className='sec_row addr_row'>
                        <div className='addr_data_section'>
                            <div className='addr_title'>Home</div>
                            <div className='addr_data'>b1-203, Fatehsagar appt. Fatehgunj, Vadodara, Gujarat, 390002</div>
                            <div className='addr_phone'>Phone Number: +91 8487098079</div>
                        </div>
                        <div className='add_action_section'>
                            <button onClick={() => openAddress('edit')} className='addr_edit_btn'>Edit</button>
                            <button onClick={cnfrmDel} className='addr_del_btn'>Delete</button>
                        </div>
                    </div>
                    <div className='sec_row addr_row'>
                        <div className='addr_data_section'>
                            <div className='addr_title'>Home</div>
                            <div className='addr_data'>b1-203, Fatehsagar appt. Fatehgunj, Vadodara, Gujarat, 390002</div>
                            <div className='addr_phone'>Phone Number: +91 8487098079</div>
                        </div>
                        <div className='add_action_section'>
                            <button onClick={() => openAddress('edit')} className='addr_edit_btn'>Edit</button>
                            <button onClick={cnfrmDel} className='addr_del_btn'>Delete</button>
                        </div>
                    </div>                    
                </div>
                {/* Orders section - END */}

                <div className="scroll-top" onClick={scrollToTop}>
                    <img src={upArrow} alt="" />
                </div>
                <ConfirmationModal cnfm_type='addr_del' />
                <AddressModal modal_ty={addr_ty} />
            </div>
        )
    }
}

export default Address;