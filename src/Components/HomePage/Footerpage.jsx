import * as React from 'react';
import './Homepage.css';
import logopng from '../Assets/logo-png.png';
import halal_icon from  '../Assets/Halal.png';
import fbIcon from '../Assets/facebook-5221.svg';
import igIcon from '../Assets/instagram-logo-8869.svg';

export default function Footerpage() {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='footer_main_section'>
                    <div className='f_brand_section'>
                        <div className='brand_logo'><img src={logopng} alt="" /></div>
                        <div className='hlh_logo'><img src={halal_icon} alt="" /></div>
                    </div>
                    <div className='f_data_section'>
                        <div className='footer_data'>
                            <div className='f_header'>Address</div>
                            <div className='f_body'>2, Rambhau Bhogle Marg, Anjeer Wadi, Mustafa Bazar, Mazgaon</div>
                        </div>
                        <div className='footer_data'>
                            <div className='f_header'>Contact Us</div>
                            <div className='f_body'>
                                <span>+91 9867164753</span>
                                <span>haveit@gmail.com</span>
                            </div>
                        </div>
                        <div className='footer_data'>
                            <div className='f_header'>Connect with Us</div>
                            <div className='f_body'>
                                <span><img src={igIcon} alt="" /><a href="https://www.instagram.com/haveit.ii/">Instagram</a></span>
                                {/* <span><img src={fbIcon} alt="" /><a href="https://www.instagram.com/haveit.ii/">Facebook</a></span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <span>Copyright Have It! Pvt Ltd</span>
            </div>
        </div>
    )
}