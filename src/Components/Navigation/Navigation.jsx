import React from 'react';
import logopng from '../Assets/logo-png.png';
import './Navigation.css';
import phone from '../Assets/phone-504.svg';
import location_pointer from '../Assets/location-pointer-2961.svg';
import user_icon from '../Assets/user-3297.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    const navigate = useNavigate();

    // const toggleNav = () => {
    //     const navbar = document.querySelector(".navbar");
    //     navbar.classList.toggle("show");
    // }

    // const CloseNav = (event) => {
    //     const navbar = document.querySelector(".navbar");

    //     let position = event.offsetTop - 90;
    //     window.scrollTo({
    //         left: 0,
    //         top: position,
    //         behavior: 'smooth',
    //       });
    //     navbar.classList.remove('show');

    //     return true;
    // }

    window.addEventListener('mouseup',function(event){
        var user_menu = document.getElementById('user_menu');
        var header_tag = this.document.getElementById('hvit_header');
        if(event.target !== user_menu && event.target !== header_tag){
            user_menu.classList.remove('show_menu');
        }
    });
    
    function logoutUser() {
        localStorage.setItem('authentication', false);
        navigate('/menu');
    }

    function cartOpen() {
        var backdrop = document.getElementById("modal_screen_blur");
        var number_modal = document.getElementById("number_modal");
        var num_input = document.getElementById("mobileNo");
        num_input.value = "";
        num_input.select();
        backdrop.style.display = "block";
        number_modal.classList.add("show");
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      }

    function open_user_menu() {
        if (localStorage.getItem("authentication") === 'true'){
            document.getElementById('user_menu').classList.toggle('show_menu');
        }else{
            cartOpen();
        }
    }

    return (
        <div>
            <header className="header" id='hvit_header'>
                <a href="/" className="logo">
                    <img src={logopng} alt=""/>
                </a>
                <div className='current_info'>
                    <div className='address_bar'>2, Rambhau Bhogle Marg, Anjeer Wadi, Mustafa Bazar, Mazgaon</div>
                    <div className='open_indication active'>Open</div>
                    <div className='close_indication'>Closed</div>
                </div>
                <nav className="navbar">
                    <a href="tel:9867164753"><button className='nav_icon call'><img src={phone} alt=''/></button></a>
                    <a href="https://www.google.com/maps/place/18%C2%B058'18.1%22N+72%C2%B050'25.8%22E/@18.9716972,72.8379132,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.9716921!4d72.8404881?entry=ttu"><button className='nav_icon location'><img src={location_pointer} alt=''/></button></a>
                    <button onClick={open_user_menu} className='nav_icon user'><img src={user_icon} alt=''/></button>
                    <div id='user_menu' className='user_menu'>
                        <div className='user_name'> <span>Welcome, </span> <br /> <span id='user_name'>Abdeali <div></div></span></div>
                        <NavLink to="/manage-address" ><div className='btn'>Address</div></NavLink>
                        <NavLink to="/orders" ><div className='btn'>Orders</div></NavLink>
                        <div onClick={logoutUser} className='btn'>Logout</div>
                    </div>
                    {/* <NavLink to="/menu" onClick={CloseNav}>Menu</NavLink>
                    <NavLink to="/address" onClick={CloseNav} >Address</NavLink>
                    <NavLink to="/contact" onClick={CloseNav} >Contact Us</NavLink> */}
                </nav>
                {/* <div className="hamburger" onClick={toggleNav}>
                    <img src={hamburger} alt="" />
                </div> */}
            </header>
        </div>
    );
};

export default Navigation