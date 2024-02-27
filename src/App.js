import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Address from './Components/Address/Address';
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
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/menu' element={<Mainwrapper />} />
      </Routes>
    </div>
  );
}

export default App;
