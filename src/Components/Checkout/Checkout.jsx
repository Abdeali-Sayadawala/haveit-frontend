import React from 'react';
import './Checkout.css';
import back_arrow from '../Assets/left-arrow.svg';
import { useNavigate } from 'react-router-dom';
import upArrow from '../Assets/up-arrow.svg';

const Checkout = () => {

    const navigate = useNavigate();

    const scrollToTop = (event) => {
        window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
    }

    function goToMenu() {
        navigate('/menu', { replace: true })
    }

    function tabSelect(event) {
        const button = event.currentTarget;
    
        var slides = document.getElementsByClassName("tab_btn");
        for (var i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active")
        }
    
        button.classList.add("active");
      }

    return (
        <div className='main_class checkout_wrapper'>
            <div className='order_summary'>
                <button onClick={goToMenu} className='back_button'>
                    <img src={back_arrow} className='left_arrow' alt="left arrow" srcset="" />
                    <span className='back_label'>Menu</span>
                </button>
                <div className='summary_label'>Cart Summary</div>
            </div>
            <div className='items_wrapper'>
                <div className='cart_summary'>
                    <div className='checkout_section delivery_type_wrapper'>
                        <div className='section_label inner_label'>Order Type</div>
                        <div className='order_ty_tab checkout_ty_tab'>
                            <button id="delivery_tab" className='tab_btn active' onClick={tabSelect}>
                                <span className="tab_btn_label">Delivery</span>
                            </button>
                            <button id="pickup_tab" className='tab_btn 'onClick={tabSelect}>
                                <span className="tab_btn_label">Pickup</span>
                            </button>
                        </div>
                    </div>
                    <div className='section_label'>Cart Items</div>
                    <div className='checkout_section order_items_wrapper'></div>
                </div>
                <div className='cart_bill'>
                    <div className='section_label bill_label'>Billing Details</div>
                    <div className='checkout_section billing_section'></div>
                </div>
            </div>
            <div className="scroll-top" onClick={scrollToTop}>
                <img src={upArrow} alt="" />
            </div>
        </div>
    );
};

export default Checkout;