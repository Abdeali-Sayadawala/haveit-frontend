import React from 'react';
import hamburger from '../Assets/icons8-hamburger-192.png'
import './Navigation.css';
// import NavigationScript from './NavigationScript.js';

const Navigation = () => {

    const toggleNav = () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("show");
    }

    const CloseNav = (event) => {
        const navbar = document.querySelector(".navbar");
        event.preventDefault();

        let position = event.offsetTop - 90;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: 'smooth',
          });
        navbar.classList.remove('show');
    }

    return (
        <div>
            <header className="header">
                <a href="/" className="logo">Have<span className="blue">It!</span></a>
                <nav className="navbar">
                    <a href="#" onClick={CloseNav}>Menu</a>
                    <a href="#address" onClick={CloseNav} >Address</a>
                    <a href="#contact" onClick={CloseNav} >Contact Us</a>
                </nav>
                <div className="hamburger" onClick={toggleNav}>
                    <img src={hamburger} alt="" />
                </div>
            </header>
        </div>
    );
};

export default Navigation