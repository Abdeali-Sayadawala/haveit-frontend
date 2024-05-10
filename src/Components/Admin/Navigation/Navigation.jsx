import React from 'react';
import './Navigation.css';
import hvit_logo from '../../Assets/logo-png.png'
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <div id='admin_navigation'>
            <div className='nav_logo'>
                <img src={hvit_logo} alt="" />
            </div>
            <div className='nav_body'>
                <NavLink className={"navigation_btn"} to='/admin/dashboard'>Dashboard</NavLink>
                <NavLink className={"navigation_btn"} to='/admin/orders'>Orders</NavLink>
                <NavLink className={"navigation_btn"} to='/admin/products'>Products</NavLink>
                <NavLink className={"navigation_btn"} to='/admin/catgories'>Categories</NavLink>
                <NavLink className={"navigation_btn"} to='/admin/customers'>Customers</NavLink>
            </div>
        </div>
    );
};

export default Navigation;