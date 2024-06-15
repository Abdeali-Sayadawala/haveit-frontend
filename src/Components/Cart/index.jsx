import * as React from 'react';
import './CartDetailing.css';
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  function otpModalOpen(event) {
    if (localStorage.getItem("authentication") === 'true'){
      navigate('/checkout');
    }else{
      event.preventDefault();
      var backdrop = document.getElementById("modal_screen_blur");
      var number_modal = document.getElementById("number_modal");
      var num_input = document.getElementById("mobileNo");
      num_input.value = "";
      backdrop.style.display = "block";
      number_modal.classList.add("show");
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    }
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
      <div className='cart_details'>

        <div className="cart_label">Your Cart</div>

        <div className='order_ty_tab'>
          <button id="delivery_tab" className='tab_btn active' onClick={tabSelect}>
            <span className="tab_btn_label">Delivery</span>
          </button>
          <button id="pickup_tab" className='tab_btn 'onClick={tabSelect}>
            <span className="tab_btn_label">Pickup</span>
          </button>
        </div>

        <div className='cart_empty'> Your Cart is Empty</div>

        <div className='itemSummary'>
          <div className='itemWrapper'>
            <div className='itemCartInfo'>
              <div className='itemCartDesc'>
                <span className='itemCartCount'>1 X</span>
                <span className='itemCartName'>Regular Paneer Roll.</span>
              </div>
              <div className='itemCartCounter'>
                <div className="wrapper-cart">
                    <button className="plusminus minus" >-</button>
                    <input type="number" className="num_cart" value="0" readOnly />
                    <button className="plusminus plus" >+</button>
                </div>
              </div>
            </div>
            <div className='itemCartInfo'>
              <div className='itemCartDesc'>
                <span className='itemCartCount'>1 X</span>
                <span className='itemCartName'>Regular Paneer Roll.</span>
              </div>
              <div className='itemCartCounter'>
                <div className="wrapper-cart">
                    <button className="plusminus minus" >-</button>
                    <input type="number" className="num_cart" value="0" readOnly />
                    <button className="plusminus plus" >+</button>
                </div>
              </div>
            </div>
            <div className='itemCartInfo'>
              <div className='itemCartDesc'>
                <span className='itemCartCount'>1 X</span>
                <span className='itemCartName'>Regular Paneer Roll.</span>
              </div>
              <div className='itemCartCounter'>
                <div className="wrapper-cart">
                    <button className="plusminus minus" >-</button>
                    <input type="number" className="num_cart" value="0" readOnly />
                    <button className="plusminus plus" >+</button>
                </div>
              </div>
            </div>
            <div className='itemCartInfo'>
              <div className='itemCartDesc'>
                <span className='itemCartCount'>1 X</span>
                <span className='itemCartName'>Regular Paneer Roll.</span>
              </div>
              <div className='itemCartCounter'>
                <div className="wrapper-cart">
                    <button className="plusminus minus" >-</button>
                    <input type="number" className="num_cart" value="0" readOnly />
                    <button className="plusminus plus" >+</button>
                </div>
              </div>
            </div>
            <div className='itemCartInfo'>
              <div className='itemCartDesc'>
                <span className='itemCartCount'>1 X</span>
                <span className='itemCartName'>Regular Paneer Roll.</span>
              </div>
              <div className='itemCartCounter'>
                <div className="wrapper-cart">
                    <button className="plusminus minus" >-</button>
                    <input type="number" className="num_cart" value="0" readOnly />
                    <button className="plusminus plus" >+</button>
                </div>
              </div>
            </div>
            <div className='itemCartInfo'>
              <div className='itemCartDesc'>
                <span className='itemCartCount'>1 X</span>
                <span className='itemCartName'>Regular Paneer Roll.</span>
              </div>
              <div className='itemCartCounter'>
                <div className="wrapper-cart">
                    <button className="plusminus minus" >-</button>
                    <input type="number" className="num_cart" value="0" readOnly />
                    <button className="plusminus plus" >+</button>
                </div>
              </div>
            </div>
            <div className='itemCartInfo'>
              <div className='itemCartDesc'>
                <span className='itemCartCount'>1 X</span>
                <span className='itemCartName'>Regular Paneer Roll.</span>
              </div>
              <div className='itemCartCounter'>
                <div className="wrapper-cart">
                    <button className="plusminus minus" >-</button>
                    <input type="number" className="num_cart" value="0" readOnly />
                    <button className="plusminus plus" >+</button>
                </div>
              </div>
            </div>
            <div className='itemCartInfo'>
              <div className='itemCartDesc'>
                <span className='itemCartCount'>1 X</span>
                <span className='itemCartName'>Regular Paneer Roll.</span>
              </div>
              <div className='itemCartCounter'>
                <div className="wrapper-cart">
                    <button className="plusminus minus" >-</button>
                    <input type="number" className="num_cart" value="0" readOnly />
                    <button className="plusminus plus" >+</button>
                </div>
              </div>
            </div>
          </div>
          <div className='totalCheckout'>
            <div className='subtotalViewSection'>
              <span className='subTotalView'>Subtotal</span>
              <span className='subTotalAmt'>100 Rs.</span>
            </div>
            <button onClick={otpModalOpen} className='checkoutViewButton'>
              <span className='checkoutView'>Checkout</span>
            </button>
          </div>
        </div>

      </div>
  );
}

