import React from 'react';
import './Navigation.css';
import site_logo from '../../../Components/Assets/logo-png.png'
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <div id='admin_navigation'>
            <div className='nav_logo'>
                <img src={site_logo} alt="" />
            </div>
            <div className='nav_body'>
                <NavLink className={"navigation_btn"} to='/partner/dashboard'>Dashboard</NavLink>
                <NavLink className={"navigation_btn"} to='/partner/orders'>Orders</NavLink>
                <NavLink className={"navigation_btn"} to='/partner/products'>Products</NavLink>
                <NavLink className={"navigation_btn"} to='/partner/categories'>Categories</NavLink>
                <NavLink className={"navigation_btn"} to='/partner/users'>Users</NavLink>
                <NavLink className={"navigation_btn"} to='/partner/roles'>Roles</NavLink>
                <NavLink className={"navigation_btn"} to='/partner/stores'>Stores</NavLink>
            </div>
        </div>
    );
};

export default Navigation;