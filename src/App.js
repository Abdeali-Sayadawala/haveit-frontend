import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
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
import AdminHeader from './Components/Partner/Header/Header';
import AdminNavigation from './Components/Partner/Navigation/Navigation';
import Dashboard from './Components/Partner/Dashboard/Dashboard';
import AdminOrders from './Components/Partner/Orders/Orders';
import OrderPage from './Components/Partner/Orders/OrderPage';
import AdminProducts from './Components/Partner/Products/Products';
import PartnerLogin from './Components/Partner/Auth/Login';
import PartnerRegister from './Components/Partner/Auth/Register';
import ResetPassword from './Components/Partner/ResetPassword/ResetPassword';
import RegisterRestaurant from './Components/Restaurant/RegisterRestaurant';
import RestaurantInfo from './Components/Restaurant/RestaurantInfo';
import RestaurantDocs from './Components/Restaurant/RestaurantDocs';
import Review from './Components/Restaurant/Review';

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
  const navigate = useNavigate();

  useEffect(() => {
    // authenticating before each admin page login
    if (localStorage.getItem("authentication") === 'false' || localStorage.getItem("authentication") == undefined) {
      navigate('/partner/login');
    }
  }, []);

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
        <Route path='/partner/login' element={<PartnerLogin />} />
        <Route path='/partner/register' element={<PartnerRegister />} />
        <Route path='/partner/reset-password' element={<ResetPassword />} />
        <Route path='/partner/*' element={<AdminPages />} />
        <Route path='/partner/register-restaurant' element={<RegisterRestaurant />}>
          <Route path="res-info" element={<RestaurantInfo />}/>
          <Route path="res-docs" element={<RestaurantDocs />}/>
          <Route path="review" element={<Review />}/>
        </Route>
        <Route path='/*' element={<UserPages />} />
    </Routes>
  );
}

export default App;
