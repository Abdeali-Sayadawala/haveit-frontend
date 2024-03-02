import React from 'react';
import logopng from '../Assets/logo-png.png';
import './Navigation.css';
import phone from '../Assets/phone-504.svg';
import location_pointer from '../Assets/location-pointer-2961.svg';
// import { NavLink } from 'react-router-dom';
// import NavigationScript from './NavigationScript.js';

const Navigation = () => {

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

    return (
        <div>
            <header className="header">
                <a href="/" className="logo">
                    <img src={logopng} alt=""/>
                </a>
                <div className='current_info'>
                    <div className='address_bar'>2, Rambhau Bhogle Marg, Anjeer Wadi, Mustafa Bazar, Mazgaon</div>
                    <div className='open_indication active'>Open</div>
                    <div className='close_indication'>Closed</div>
                </div>
                <nav className="navbar">
                    <a href="tel:9867164753" className='nav_icon call'><img src={phone} alt=''/></a>
                    <a href="https://www.google.com/maps/place/18%C2%B058'18.1%22N+72%C2%B050'25.8%22E/@18.9716972,72.8379132,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.9716921!4d72.8404881?entry=ttu" className='nav_icon location'><img src={location_pointer} alt=''/></a>
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