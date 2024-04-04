import React from 'react';
import './Header.css';
import menuIcon from '../../Assets/list-6246.svg';

const Header = ({notification_type, parent}) => {

    const show_nav = () => {
        var backdrop = document.getElementById("modal_screen_blur");
        backdrop.style.display = "block";
        document.getElementById('admin_navigation').classList.toggle('show');
    }

    return (
        <div className='admin_header'>
            <div className='main_mess'> <button onClick={show_nav}><img src={menuIcon} alt="" /></button> <span>Hi, Mustafa</span></div>
            <div className='action_bar'>
                <button>Profile</button>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Header;