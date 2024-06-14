import React from 'react';
import './Checkout.css';
import back_arrow from '../../../Components/Assets/left-arrow.svg';
import { useNavigate } from 'react-router-dom';
import ddArrow from '../../../Components/Assets/arrow-232.svg';
import infinity from '../../../Components/Assets/Infinity-1s-200px.svg';
import addIcon from '../../../Components/Assets/plus-11969.svg';
import { useState, useEffect } from "react";

const CheckoutPage = () => {

    const navigate = useNavigate();

    const [address_txt, set_address_txt] = useState("Select Address"); // button text for address drop down menu
    const [pay_ty_txt, set_pay_ty_txt] = useState("Select Payment Method"); // button text for payment dropdown menu

    useEffect(() => {
        window.scrollTo(0, 0);
        const scrollTop = document.querySelector(".scroll-top");
        scrollTop.classList.remove("show");
      }, []);

    function goToMenu() { //navigate to menu
        navigate('/menu', { replace: true })
    }

    function tabSelect(event) {
        // select delivery type tab
        const button = event.currentTarget;
    
        var slides = document.getElementsByClassName("tab_btn");
        for (var i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active")
        }
        if (button.id === "pickup_tab"){
            document.getElementById('delivery_section').style.display = 'none';
            document.getElementById('pickup_section').style.display = 'flex';

            // hide payment type drop down
            document.getElementById('payment_button').style.display = 'none';
        }else if (button.id === "delivery_tab"){
            document.getElementById('pickup_section').style.display = 'none';
            document.getElementById('delivery_section').style.display = 'flex';

            // show payment type drop down
            document.getElementById('payment_button').style.display = 'block';
        }
        button.classList.add("active");
      }

    function dropDown(drpdn){
        // dropdown menu open function for address dropdown and paymnet dropdown
        if (drpdn === 'address'){
            document.getElementById('drpdn_loader').classList.toggle("show");
            document.getElementById('drpdn_arrow').style.display = 'none';
            setTimeout(() => {
                document.getElementById('drpdn_loader').classList.toggle("show");
                document.getElementById('drpdn_arrow').style.display = 'block';
                document.getElementById('address_content').classList.toggle("show");
                document.getElementById('drpdn_arrow').classList.toggle("rtoate180");
            }, 1000);
        }else if (drpdn === 'payment'){
            document.getElementById('drpdn_loader_payment').classList.toggle("show");
            document.getElementById('drpdn_arrow_payment').style.display = 'none';
            setTimeout(() => {
                document.getElementById('drpdn_loader_payment').classList.toggle("show");
                document.getElementById('drpdn_arrow_payment').style.display = 'block';
                document.getElementById('pay_types').classList.toggle("show");
                document.getElementById('drpdn_arrow_payment').classList.toggle("rtoate180");
            }, 1000);
        }
    }

    function selDrpdn(event){
        // on selecting value from drop down lists, respiective text areas would be changed on the selected value.
        var drp_type = event.target.id.split("_")[0];
        var drp_txt = event.target.innerHTML;

        if (drp_type === 'addr') {
            set_address_txt(drp_txt);
            document.getElementById('address_content').classList.toggle("show");
        }else if (drp_type === 'pay') {
            set_pay_ty_txt(drp_txt);
            document.getElementById('pay_types').classList.toggle("show");
        }

    }

    return (
        <div className='main_class checkout_wrapper'>
            <div className='order_summary'>
                <button onClick={goToMenu} className='back_button'>
                    <img src={back_arrow} className='left_arrow' alt="left arrow" />
                    <span className='back_label'>Menu</span>
                </button>
                <div className='summary_label'>Cart Summary</div>
            </div>
            <div className='items_wrapper'>
                <div className='cart_summary'>
                    <div className='checkout_section delivery_type_wrapper'> {/* checkout order type select section */}
                        <div className='section_label inner_label'>Order Type</div>

                        {/* delivery type tab change - START */}
                        <div className='order_ty_tab checkout_ty_tab'>
                            <button id="delivery_tab" className='tab_btn active' onClick={tabSelect}>
                                <span className="tab_btn_label">Delivery</span>
                            </button>
                            <button id="pickup_tab" className='tab_btn 'onClick={tabSelect}>
                                <span className="tab_btn_label">Pickup</span>
                            </button>
                        </div>
                        {/* delivery type tab change - END */}

                        <div id='delivery_section' className='delivery_section'>
                            {/* Dropdown button section - START */}
                            <div id='address_section' className='address'>
                                <button className="address_dropbtn" onClick={()=>dropDown('address')}> {address_txt} <div className='pos_abs'><img id='drpdn_loader' src={infinity} alt="" /><img id='drpdn_arrow' src={ddArrow} alt="" /></div> </button>
                                <div id='address_content' className="address_drop_cont">
                                    <div id='addr_001' onClick={selDrpdn} className='drop_item'>Address 1</div>
                                    <div id='addr_002' onClick={selDrpdn} className='drop_item'>Address 2</div>
                                    <div id='addr_003' onClick={selDrpdn} className='drop_item'>Address 3</div>
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
                    <div className='checkout_section order_items_wrapper'> {/* cart items summary section */}
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
                    <div className='section_label'>Sides</div>
                    <div className='checkout_section order_items_wrapper'> {/* Sides summary section */}
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
                    </div>
                </div>
                <div className='cart_bill'>
                    <div className='section_label bill_label'>Billing Details</div> {/* billing section */}
                    <div className='checkout_section billing_section'>
                        <table id='billing_table'>
                            <tbody>
                                <tr id="subtotal_tr">
                                    <td className='t_title'>Subtotal</td>
                                    <td className='t_value'>Rs. 100</td>
                                </tr>
                                <tr id="delivery_tr">
                                    <td className='t_title'>Delivery</td>
                                    <td className='t_value'>Rs. 20</td>
                                </tr>
                                <tr id="discount_tr">
                                    <td className='t_title'>Discount</td>
                                    <td className='t_value'>Rs. 50</td>
                                </tr>
                                <tr id="gst_tr">
                                    <td className='t_title'>GST</td>
                                    <td className='t_value'>Rs. 20</td>
                                </tr>
                                <tr id="grand_tr">
                                    <td className='t_title'>Grand Total</td>
                                    <td className='t_value'>Rs. 90</td>
                                </tr>
                            </tbody>
                        </table>
                        <div id='payment_type' className='payment_type'>
                            <button id='payment_button' className="payment_dropbtn" onClick={()=>dropDown('payment')}> {pay_ty_txt} <div className='pos_abs'><img id='drpdn_loader_payment' src={infinity} alt="" /><img id='drpdn_arrow_payment' src={ddArrow} alt="" /></div> </button>
                            <div id='pay_types' className="payment_types">
                                <div id='pay_001' onClick={selDrpdn} className='drop_item'>UPI</div>
                                <div id='pay_002' onClick={selDrpdn} className='drop_item'>COD</div>
                            </div>
                        </div>
                        <button className='pay_button' id='pay_button'> Pay </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;