import React from "react";
import { Outlet, Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import "./index.css";


function PartnerPages() { 
    const navigate = useNavigate();
  
    React.useEffect(() => {
      // authenticating before each admin page login
      if (localStorage.getItem("authentication") === 'false' || localStorage.getItem("authentication") === undefined) {
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
            <Navigation />
            <div id='admin_main'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
  }

export default PartnerPages;