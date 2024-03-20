import React from 'react';
import './userPages.css';
import back_arrow from '../Assets/left-arrow.svg';
import reset from '../Assets/reset-14414.svg';
import upArrow from '../Assets/arrow-up-2822.svg';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authentication");
        if (loggedInUser === 'true') {
            setauthenticated(loggedInUser);
        }else{
            navigate('/menu', { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function goToMenu() { //navigate to menu
        navigate('/menu', { replace: true })
    }

    const scrollToTop = (event) => {
        window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
    }

    if (authenticated === 'true'){
        return (
            <div className='user_wrapper orders_wrapper'>
                {/* Title and menu button - START */}
                <div className='user_title orders_title'>
                    <button onClick={goToMenu} className='back_button'>
                        <img src={back_arrow} className='left_arrow' alt="left arrow" />
                        <span className='back_label'>Menu</span>
                    </button>
                    <div className='summary_label'>Orders</div>
                </div>
                {/* Title and menu button - END */}

                {/* Orders section - START */}
                <div className='data_section'>
                    <div className='sec_row order_row'>
                        <div className='order_items'>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                        </div>
                        <div className='order_summary_section'>
                            <span className='order_time'>11/03/2024 2:23PM</span>
                            <span className='order_total'>Rs. 380</span>
                        </div>
                        <div className='reorder_but'>
                            <button><img src={reset} alt="reorder" /> Re-order</button>
                        </div>
                    </div>

                    <div className='sec_row order_row'>
                        <div className='order_items'>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                        </div>
                        <div className='order_summary_section'>
                            <span className='order_time'>11/03/2024 2:23PM</span>
                            <span className='order_total'>Rs. 380</span>
                        </div>
                        <div className='reorder_but'>
                            <button><img src={reset} alt="reorder" /> Re-order</button>
                        </div>
                    </div>

                    <div className='sec_row order_row'>
                        <div className='order_items'>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                            <div className='item_data'>
                                <span className='orders_flag'></span>
                                <span className='orders_qnt'>1 x </span>
                                <span className='orders_item_name'>Malai tikka Paneer Roll</span>
                            </div>
                        </div>
                        <div className='order_summary_section'>
                            <span className='order_time'>11/03/2024 2:23PM</span>
                            <span className='order_total'>Rs. 380</span>
                        </div>
                        <div className='reorder_but'>
                            <button><img src={reset} alt="reorder" /> Re-order</button>
                        </div>
                    </div>
                </div>
                {/* Orders section - END */}

                <div className="scroll-top" onClick={scrollToTop}>
                    <img src={upArrow} alt="" />
                </div>
            </div>
        )
    }
}

export default Orders;