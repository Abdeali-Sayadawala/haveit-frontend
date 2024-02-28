import * as React from 'react';
import './CartDetailing.css';
import { useState, useEffect } from "react";

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
            <button className='checkoutViewButton'>
              <span className='checkoutView'>Checkout</span>
            </button>
          </div>
        </div>

      </div>
  );
}

