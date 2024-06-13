import React from "react";
import { Outlet } from "react-router-dom";

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
  
function RestaurantPages() {
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

export default RestaurantPages;