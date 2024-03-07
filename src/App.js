import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Navigation from './Components/Navigation/Navigation';
import React from 'react';
import CartDetails from './Components/miniComponents/CartDetails/CartDetailing';
import HomePage from './Components/HomePage/Homepage';
import Checkout from './Components/Checkout/Checkout';

function Mainwrapper(){
  return(
    <div className='main_wrapper'>
        <Menu />
        <CartDetails />
    </div>
  )
}

function CheckoutWrapper(){
  return(
    <div className='main_wrapper'>
        <Checkout/>
    </div>
  )
}

function App() {
  return (
    <div>
      <div id='modal_screen_blur' className="modal_screen_blur"></div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/menu' element={<Mainwrapper />} />
        <Route path='/checkout' element={<CheckoutWrapper/>} />
      </Routes>
    </div>
  );
}

export default App;
