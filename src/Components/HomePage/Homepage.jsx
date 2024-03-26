import * as React from 'react';
import './Homepage.css';
import {Link, useNavigate} from "react-router-dom";
import pizza from '../Assets/pizza.jpg';
import wArrow from '../Assets/arrow-white.svg';
import location_pointer from '../Assets/location-pointer-2961.svg';

export default function Homepage() {
    const rec_nav = React.useRef();
    const navigate = useNavigate();

    function addToCart() {
        navigate("/menu");
    }

    const RecFoodCard = () => {
        return (
            <div className='home_food_card'>
                <div className='food_card_image'>
                    <img src="https://i.imgur.com/eFWRUuR.jpg" alt=""/>
                </div>
                <div className='food_card_body'>
                    <div className='card_title'>
                        <span>Malai tikka Chicken Roll</span>
                    </div>
                    <div className='card_description'>
                        <span>Popular Indian street food, filled with spices.</span>
                    </div>
                    <div className='card_price'>
                        <span>Rs.120</span>
                    </div>
                    <div className='add_to_crt'>
                        <button onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }

    const CategoryCard = () => {
        return(
            <div className='home_cat_card'>
                <div className='cat_card_image'>
                    <Link to='/menu?id=menu_title_474'><img src={pizza} alt="" /></Link>
                </div>
                <div className='cat_carf_label'>
                <Link to='/menu?id=menu_title_474'><span>Roll ups</span></Link>
                </div>
            </div>
        )
    }

    function scrollRec(direction){
        if (direction === 'left'){
            rec_nav.current.scrollLeft -= 200;
        }else{
            rec_nav.current.scrollLeft += 200;
        }
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError,{
                enableHighAccuracy : true,
                timeout : 10000,
            });
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    function showPosition(position) {
        console.log(position);
        document.getElementById('location').innerHTML = position.coords.latitude+ ', '+position.coords.longitude
    }

    function showError(error)
    {
    switch(error.code) 
        {
        case error.PERMISSION_DENIED:
        // x.innerHTML="User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
        // x.innerHTML="Location information is unavailable."
        break;
        case error.TIMEOUT:
        // x.innerHTML="The request to get user location timed out."
        break;
        case error.UNKNOWN_ERROR:
        // x.innerHTML="An unknown error occurred."
        break;
        }
    }

    return(
        <div className='home_class'>
            <div className='section_card location_section'>
                <div className='location_header'>
                    <span>Set location to get  Ordering...</span>
                </div>
                <div className='location_body'>
                    <div className='location_btn'>
                        <button onClick={getLocation}><img src={location_pointer} alt="" />Use my current location</button>
                    </div>
                    <span id='location'></span>
                </div>
            </div>
            <div className='home_section_header'>Recomended</div>
            <div className='recom_section'>
                <button onClick={() => scrollRec('left')} className='floating_arrow left'><img src={wArrow} alt="" /></button>
                <div className='recom_scroll' ref={rec_nav}>
                    <RecFoodCard />
                    <RecFoodCard />
                    <RecFoodCard />
                    <RecFoodCard />
                    <RecFoodCard />
                    <RecFoodCard />
                    <RecFoodCard />
                    <RecFoodCard />
                    <RecFoodCard />
                </div>
                <button onClick={() => scrollRec('right')} className='floating_arrow right'><img src={wArrow} alt="" /></button>
            </div>
            <div className='home_section_header'>Categories</div>
            <div className='cat_section'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    );

}