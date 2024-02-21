import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Address from './Components/Address/Address';
import Navigation from './Components/Navigation/Navigation';
import React from 'react';
import CartDetails from './Components/miniComponents/CartDetails/CartDetailing';

function App() {
  return (
    <div>
      <Navigation />
      <div className='main_wrapper'>
        <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/address" element={<Address />} />
            <Route path="*" element={<Menu />} />
        </Routes>
        <div className='cart_details'>
              <CartDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
