import React from 'react';
import hamburger from '../Assets/icons8-hamburger-192.png';
import logopng from '../Assets/logo-png.png';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
// import NavigationScript from './NavigationScript.js';

const Navigation = () => {

    const toggleNav = () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("show");
    }

    const CloseNav = (event) => {
        const navbar = document.querySelector(".navbar");

        let position = event.offsetTop - 90;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: 'smooth',
          });
        navbar.classList.remove('show');

        return true;
    }

    return (
        <div>
            <header className="header">
                <a href="/" className="logo">
                    <img src={logopng} alt=""/>
                </a>
                <nav className="navbar">
                    <NavLink to="/menu" onClick={CloseNav}>Menu</NavLink>
                    <NavLink to="/address" onClick={CloseNav} >Address</NavLink>
                    <NavLink to="/contact" onClick={CloseNav} >Contact Us</NavLink>
                </nav>
                <div className="hamburger" onClick={toggleNav}>
                    <img src={hamburger} alt="" />
                </div>
            </header>
        </div>
    );
};

export default Navigation