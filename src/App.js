import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Navigation from './Components/Navigation/Navigation';
import React from 'react';
import CartDetails from './Components/miniComponents/CartDetails/CartDetailing';
import HomePage from './Components/HomePage/Homepage';

function Mainwrapper(){
  return(
    <div className='main_wrapper'>
        <Menu />
        <CartDetails />
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
      </Routes>
    </div>
  );
}

export default App;
