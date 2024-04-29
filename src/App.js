import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Navigation from './Components/Navigation/Navigation';
import React from 'react';
import CartDetails from './Components/miniComponents/CartDetails/CartDetailing';
import HomePage from './Components/HomePage/Homepage';
import FooterPage from './Components/HomePage/Footerpage';
import Checkout from './Components/Checkout/Checkout';
import Address from './Components/UserPages/Address';
import upArrow from './Components/Assets/arrow-up-2822.svg';
import Orders from './Components/UserPages/Orders';
import AdminHeader from './Components/Admin/Header/Header';
import AdminNavigation from './Components/Admin/Navigation/Navigation';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import AdminOrders from './Components/Admin/Orders/Orders';
import OrderPage from './Components/Admin/Orders/OrderPage';
import AdminProducts from './Components/Admin/Products/Products';

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

function HomeWrapper(){
  return(
    <div className='footer_wrapper'>
        <HomePage/>
        <FooterPage />
    </div>
  )
}

function UserPages() {
  const scrollToTop = (event) => {
      window.scrollTo({
              left: 0,
              top: 0,
              behavior: "smooth",
          });
  }

  window.addEventListener("scroll", (e) => {
      const scrollTop = document.querySelector(".scroll-top");
      const scrollHeight = window.pageYOffset;

      if (scrollHeight > 300) {
          scrollTop.classList.add("show");
      } else {
          scrollTop.classList.remove("show");
      }
  });


  return (
    <div id='user_pages'>
      <div id='modal_screen_blur' className="modal_screen_blur"></div>
      <Navigation />
      <Routes>
        <Route path="" element={<HomeWrapper />} />
        <Route path='/menu' element={<Mainwrapper />} />
        <Route path='/checkout' element={<CheckoutWrapper/>} />
        <Route path='/manage-address' element={<Address/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <div className="scroll-top" onClick={scrollToTop}>
          <img src={upArrow} alt="" />
      </div>
    </div>
  )
}

function AdminMain() {
  return (
    <div id='admin_main'>
      <AdminHeader />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/orders" element={<AdminOrders />}/>
        <Route path="/orders/:orderId" element={<OrderPage />}/>
        <Route path="/products" element={<AdminProducts />}/>
      </Routes>
    </div>
  )
}

function AdminPages() {

  const close_menu = () => {
    var backdrop = document.getElementById("modal_screen_blur");
    backdrop.style.display = "none";
    document.getElementById('admin_navigation').classList.toggle('show');
  }
  
  return (
    <div id='admin_page'>
      <div id='modal_screen_blur' onClick={close_menu} className="modal_screen_blur"></div>
      <AdminNavigation />
      <AdminMain />
    </div>
  )
}


function App() {
  return (
    <Routes>
        <Route path='/*' element={<UserPages />} />
        <Route path='/admin/*' element={<AdminPages />} />
    </Routes>
  );
}

export default App;
