import React from 'react';
import './Menu.css';
import pizza from '../Assets/pizza.jpg';
import rollups from '../Assets/rollups.png';
import wArrow from '../Assets/arrow-white.svg';
import FoodCard from '../miniComponents/FoodCard/FoodCard';
import PopupModal from '../miniComponents/popupModal/PopupModal';
import OtpPopModal from '../miniComponents/popupModal/OtpPopModal';
import SimpleBottomNavigation from '../miniComponents/bottomNavigation/SimpleBottomNavigation';
import searchIcon from '../Assets/search-2907.svg';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    const rec_nav = React.useRef();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const element_id = searchParams.get('id');
        var scroll_element = document.getElementById(element_id);
        if (scroll_element){
            scroll_element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function scrollRec(direction){
        if (direction === 'left'){
            rec_nav.current.scrollLeft -= 200;
        }else{
            rec_nav.current.scrollLeft += 200;
        }
    }

    const foodData = [
        {
            catId: 473,
            catName: "Roll Ups",
            item: [{
                id: '1',
                name: 'Regular Paneer Roll',
                desc: 'Popular Indian street food, filled with spices.',
                price: '135'
            },
            {
                id: '2',
                name: 'Regular Chicken Roll',
                desc: 'Popular Indian street food, filled with spices.',
                price: '120'
            },
            {
                id: '3',
                name: 'Malai tikka Paneer Roll',
                desc: 'Typically made with cream/malai, serves a mouth melting delicacy',
                price: '140'
            },
            {
                id: '4',
                name: 'Malai tikka Chicken Roll',
                desc: 'Typically made with cream/malai, serves a mouth melting delicacy',
                price: '130'
            }]
        },
        {
            catId: 474,
            catName: "Pasta paradise",
            item: [{
                id: '5',
                name: 'Creamy Pasta',
                desc: 'Rich and creamy texture, roasted veggies, buttery, loaded with cheese.',
                price: '120'
            },
            {
                id: '6',
                name: 'Peri Peri Pasta',
                desc: 'Tossed in Peri Peri chilli sauce, Zesty and spicy, taste you will remember.',
                price: '110'
            },
            {
                id: '7',
                name: 'Pink Sauce Pasta',
                desc: "Pink Pasta also known as 'ROSA sauce', creamy tomato based pasta.",
                price: '120'
            },
            {
                id: '8',
                name: 'Italian Pasta',
                desc: 'Mix of tomato, alfredo, resto and italiano, flavour enhancer.',
                price: '130'
            },
            {
                id: '9',
                name: 'Hot and Spicy Pasta',
                desc: 'Fiery and spicy, chilli peppers, hot sauces, BOLD and FLAMING',
                price: '110'
            }]
        }
    ]

    const scrollTo = (event) => {
        const cat_id = event.target.parentElement.id.split('_')[1];
        document.getElementById('menu_title_' + cat_id).scrollIntoView({top: "100", behaviour: 'smooth'});
    }

    function selectFTy(event) {
        event.target.classList.toggle("active");
    }

    return (
        <div className='main_class'>
            <div className='categories_label'>
                Categories
            </div>
            <div className='scroll_wrapper'>
                <button onClick={() => scrollRec('left')} className='floating_arrow menu_page left'><img src={wArrow} alt="" /></button>
                <div className="scroll" ref={rec_nav}>
                    <div className="scroll__item" id='catItem_473' onClick={scrollTo}>
                        <div className='cat_gradient'></div>
                        <img src={pizza} alt="" />
                        <span>Roll Ups</span>
                    </div>
                    <div className="scroll__item" id='catItem_474' onClick={scrollTo}>
                        <div className='cat_gradient'></div>
                        <img src={pizza} alt="" />
                        <span>Pasta paradise</span>
                    </div>
                    <div className="scroll__item" id='catItem_475' onClick={scrollTo}>
                        <div className='cat_gradient'></div>
                        <img src={pizza} alt="" />
                        <span>Slice of Heaven</span>
                    </div>
                    <div className="scroll__item" id='catItem_476' onClick={scrollTo}>
                        <div className='cat_gradient'></div>
                        <img src={pizza} alt="" />
                        <span>Shakes</span>
                    </div>
                    <div className="scroll__item" id='catItem_477' onClick={scrollTo}>
                        <div className='cat_gradient'></div>
                        <img src={pizza} alt="" />
                        <span>The Sub Commander</span>
                    </div>
                    <div className="scroll__item" id='catItem_478' onClick={scrollTo}>
                        <div className='cat_gradient'></div>
                        <img src={pizza} alt="" />
                        <span>Clubhouse Cruncher</span>
                    </div>
                    <div className="scroll__item" id='catItem_479' onClick={scrollTo}>
                        <div className='cat_gradient'></div>
                        <img src={pizza} alt="" />
                        <span>Noodles Nirvana</span>
                    </div>
                    <div className="scroll__item" id='catItem_480' onClick={scrollTo}>
                        <div className='cat_gradient'></div>
                        <img src={pizza} alt="" />
                        <span>Sides</span>
                    </div>
                </div>
                <button onClick={() => scrollRec('right')} className='floating_arrow menu_page right'><img src={wArrow} alt="" /></button>
            </div>
            <div className='menu_actions'>
                <div className='type_action'>
                    <button onClick={selectFTy} id='veg_fil' className='type_btn'>Veg</button>
                    <button onClick={selectFTy} id='nveg_fil' className='type_btn'>Non-Veg</button>
                </div>
                <div className='search_action'>
                    <img src={searchIcon} alt="" />
                    <input type="text" name="search" id="src_bar" />
                </div>
            </div>
            {foodData.map((foodObj) => (
                    <div key={'menu_title_key_'+foodObj.catId}>
                        <div className = 'menu_border' id={'menu_title_'+foodObj.catId}>

                            <div className='menu_title'>
                                {foodObj.catName}
                            </div>

                            <img className='menu_title_icon' src={rollups} alt="" />

                        </div>
                        <div className='foodCard_wrapper'>

                            {foodObj.item.map((itemObj, itemIndex) => { 
                                if (localStorage.getItem("cartItems")){
                                    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
                                    var itemCartValue;
                                    if (cartItems.item[itemObj.id]){
                                        itemCartValue = cartItems.item[itemObj.id];
                                    }else{
                                        itemCartValue = 0;
                                    }
                                }else{
                                    itemCartValue = 0;
                                }                           
                                
                                return (
                                    <FoodCard key={'food_item_key_'+itemObj.id} itemData={{item_id: itemObj.id, item_name: itemObj.name, item_desc: itemObj.desc, item_price: itemObj.price, item_cart_value: itemCartValue}}/>
                                )
                            })}

                        </div>
                    </div>
                )
            )} 
            
            <div className='bottom_space'> </div>           
            <SimpleBottomNavigation />
            <PopupModal/>
            <OtpPopModal/>
        </div>
    );
};

export default Menu;