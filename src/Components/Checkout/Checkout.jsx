import React from 'react';
import './Checkout.css';
import back_arrow from '../Assets/left-arrow.svg';
import { useNavigate } from 'react-router-dom';
import upArrow from '../Assets/up-arrow.svg';
import ddArrow from '../Assets/arrow-232.svg';
import infinity from '../Assets/Infinity-1s-200px.svg';
import addIcon from '../Assets/plus-11969.svg';

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
        console.log(button.id);
        if (button.id === "pickup_tab"){
            document.getElementById('delivery_section').style.display = 'none';
            document.getElementById('pickup_section').style.display = 'flex';
        }else if (button.id === "delivery_tab"){
            document.getElementById('pickup_section').style.display = 'none';
            document.getElementById('delivery_section').style.display = 'flex';
        }
        button.classList.add("active");
      }

    function getAddress(){
        document.getElementById('drpdn_loader').classList.toggle("show");
        document.getElementById('drpdn_arrow').style.display = 'none';
        setTimeout(() => {
            document.getElementById('drpdn_loader').classList.toggle("show");
            document.getElementById('drpdn_arrow').style.display = 'block';
            document.getElementById('address_content').classList.toggle("show");
            document.getElementById('drpdn_arrow').classList.toggle("rtoate180");
        }, 1000);
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

                        <div id='delivery_section' className='delivery_section'>
                            {/* Dropdown button section - START */}
                            <div id='address_section' className='address'>
                                <button className="address_dropbtn" onClick={getAddress}>Select Address <div className='pos_abs'><img id='drpdn_loader' src={infinity} alt="" /><img id='drpdn_arrow' src={ddArrow} alt="" /></div> </button>
                                <div id='address_content' className="address_drop_cont">
                                    <div className='drop_item'>Link 1</div>
                                    <div className='drop_item'>Link 2</div>
                                    <div className='drop_item'>Link 3</div>
                                </div>
                            </div>
                            {/* Dropdown button section - END */}
                            <div id='addAddress' className='add_address'><img src={addIcon} alt="add" /></div>
                        </div>
                        <div id='pickup_section' className='pickup_section'>
                            <div className='add_txt'>
                            2, Rambhau Bhogle Marg, Anjeer Wadi, Mustafa Bazar, Mazgaon
                            </div>
                            <div className='get_dir'>
                                <a href="https://www.google.com/maps/place/18%C2%B058'18.1%22N+72%C2%B050'25.8%22E/@18.9716972,72.8379132,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.9716921!4d72.8404881?entry=ttu">
                                    <button>Get Directions</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='section_label'>Cart Items</div>
                    <div className='checkout_section order_items_wrapper'>
                        <div className='cart_items'>
                            <span className='item_name'>Regular Paneer Roll.</span>
                            <div className="wrapper_cart_sum">
                                <button className="plusminus minus" >-</button>
                                <input type="number" className="num_cart_sum" value="0" readOnly />
                                <button className="plusminus plus" >+</button>
                            </div>
                            <span className='item_price'>Rs. 135</span>
                        </div>
                        <div className='cart_items'>
                            <span className='item_name'>Regular Paneer Roll.</span>
                            <div className="wrapper_cart_sum">
                                <button className="plusminus minus" >-</button>
                                <input type="number" className="num_cart_sum" value="0" readOnly />
                                <button className="plusminus plus" >+</button>
                            </div>
                            <span className='item_price'>Rs. 135</span>
                        </div>
                        <div className='cart_items'>
                            <span className='item_name'>Regular Paneer Roll.</span>
                            <div className="wrapper_cart_sum">
                                <button className="plusminus minus" >-</button>
                                <input type="number" className="num_cart_sum" value="0" readOnly />
                                <button className="plusminus plus" >+</button>
                            </div>
                            <span className='item_price'>Rs. 135</span>
                        </div>
                        <div className='cart_items'>
                            <span className='item_name'>Regular Paneer Roll.</span>
                            <div className="wrapper_cart_sum">
                                <button className="plusminus minus" >-</button>
                                <input type="number" className="num_cart_sum" value="0" readOnly />
                                <button className="plusminus plus" >+</button>
                            </div>
                            <span className='item_price'>Rs. 135</span>
                        </div>
                        <div className='cart_items'>
                            <span className='item_name'>Regular Paneer Roll.</span>
                            <div className="wrapper_cart_sum">
                                <button className="plusminus minus" >-</button>
                                <input type="number" className="num_cart_sum" value="0" readOnly />
                                <button className="plusminus plus" >+</button>
                            </div>
                            <span className='item_price'>Rs. 135</span>
                        </div>
                        <div className='cart_items'>
                            <span className='item_name'>Malai tikka Chicken Roll</span>
                            <div className="wrapper_cart_sum">
                                <button className="plusminus minus" >-</button>
                                <input type="number" className="num_cart_sum" value="0" readOnly />
                                <button className="plusminus plus" >+</button>
                            </div>
                            <span className='item_price'>Rs. 135</span>
                        </div>
                        <div className='cart_items instructions'>
                            <input type="text" id='instr_inp' maxLength={'100'} placeholder='Please mention any instructions here...'/>
                        </div>
                    </div>
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