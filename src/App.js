import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Address from './Components/Address/Address';
import Navigation from './Components/Navigation/Navigation';
import React from 'react';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/address" element={<Address />} />
          <Route path="*" element={<Menu />} />
       </Routes>
    </div>
  );
}

export default App;
