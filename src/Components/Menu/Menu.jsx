import React from 'react';
import './Menu.css';
import pizza from '../Assets/pizza.jpg';
import rollups from '../Assets/rollups.png';
import FoodCard from '../miniComponents/FoodCard/FoodCard';
import PopupModal from '../miniComponents/popupModal/PopupModal';
import OtpPopModal from '../miniComponents/popupModal/OtpPopModal';
import SimpleBottomNavigation from '../miniComponents/bottomNavigation/SimpleBottomNavigation';
import upArrow from '../Assets/up-arrow.svg';

const Menu = () => {

    const scrollToTop = (event) => {
        window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
    }

    const foodData = [
        {
            catId: 473,
            catName: "Roll Ups",
            item: [{
                id: '1',
                name: 'Regular Roll Paneer Roll',
                desc: 'Popular Indian street food, filled with spices.',
                price: '135'
            },
            {
                id: '2',
                name: 'Regular Roll Chicken Roll',
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


    window.addEventListener("scroll", (e) => {
        const scrollTop = document.querySelector(".scroll-top");
        const scrollHeight = window.pageYOffset;

        if (scrollHeight > 300) {
            scrollTop.classList.add("show");
        } else {
            scrollTop.classList.remove("show");
        }
    });

    const scrollTo = (event) => {
        const cat_id = event.target.parentElement.id.split('_')[1];
        document.getElementById('menu_title_' + cat_id).scrollIntoView({top: "100", behaviour: 'smooth'});
    }

    return (
        <div className='main_class'>
            <div className='categories_label'>
                Categories
            </div>
            <div className="scroll">
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
            {foodData.map((foodObj) => (
                    <div key={'menu_title_key_'+foodObj.catId}><div className = 'menu_border' id={'menu_title_'+foodObj.catId}>
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
                    </div></div>
                )
            )}            
            <SimpleBottomNavigation />
            <div className="scroll-top" onClick={scrollToTop}>
                <img src={upArrow} alt="" />
            </div>  
            <PopupModal/>
            <OtpPopModal/>
        </div>
    );
};

export default Menu;