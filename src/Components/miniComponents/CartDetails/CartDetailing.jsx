import * as React from 'react';
import './CartDetailing.css';

export default function BasicTabs() {

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
      </div>
  );
}

