import React from 'react';
import './Menu.css';
import pizza from '../Assets/pizza.jpg';
import rollups from '../Assets/rollups.png';
import FoodCard from '../miniComponents/FoodCard/FoodCard';
import SimpleBottomNavigation from '../miniComponents/bottomNavigation/SimpleBottomNavigation';
import upArrow from '../Assets/up-arrow.svg';
import CartDetails from '../miniComponents/CartDetails/CartDetailing';

const Menu = () => {

    const scrollToTop = (event) => {
        window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth",
            });
    }

    const [menu, setMenu] = React.useState("");

    const foodData = {
        473: {
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
        474: {
            catName: "Roll Ups",
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
    }

    React.useEffect(() => {
        
      }, []);

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
            <div className = 'menu_border' id='menu_title_473'>
                <div className='menu_title'>
                    Roll Ups
                </div>
                <img className='menu_title_icon' src={rollups} alt="" />
            </div>
            <div className='foodCard_wrapper'>
                <FoodCard itemData={{item_id: '1', item_name: 'Regular Roll Paneer Roll', item_desc: 'Popular Indian street food, filled with spices.', item_price: '135'}}/>   
                <FoodCard itemData={{item_id: '2', item_name: 'Regular Roll Chicken Roll', item_desc: 'Popular Indian street food, filled with spices.', item_price: '120'}}/>
                <FoodCard itemData={{item_id: '3', item_name: 'Malai tikka Paneer Roll', item_desc: 'Typically made with cream/malai, serves a mouth melting delicacy', item_price: '140'}}/>   
                <FoodCard itemData={{item_id: '4', item_name: 'Malai tikka Chicken Roll', item_desc: 'Typically made with cream/malai, serves a mouth melting delicacy', item_price: '130'}}/>
            </div>
            <div className = 'menu_border' id='menu_title_474'>
                <div className='menu_title'>
                    Pasta Paradise
                </div>
                <img className='menu_title_icon' src={rollups} alt="" />
            </div>
            <div className='foodCard_wrapper'>
                <FoodCard itemData={{item_id: '5', item_name: 'Creamy Pasta', item_desc: 'Rich and creamy texture, roasted veggies, buttery, loaded with cheese.', item_price: '120'}}/>   
                <FoodCard itemData={{item_id: '6', item_name: 'Peri Peri Pasta', item_desc: 'Tossed in Peri Peri chilli sauce, Zesty and spicy, taste you will remember.', item_price: '110'}}/>
                <FoodCard itemData={{item_id: '7', item_name: 'Pink Sauce Pasta', item_desc: "Pink Pasta also known as 'ROSA sauce', creamy tomato based pasta", item_price: '120'}}/>   
                <FoodCard itemData={{item_id: '8', item_name: 'Italian Pasta', item_desc: 'Mix of tomato, alfredo, resto and italiano, flavour enhancer.', item_price: '130'}}/>
                <FoodCard itemData={{item_id: '9', item_name: 'Hot and Spicy Pasta', item_desc: 'Fiery and spicy, chilli peppers, hot sauces, BOLD and FLAMING', item_price: '110'}}/>
            </div>
            <SimpleBottomNavigation />
            <div className="scroll-top" onClick={scrollToTop}>
                <img src={upArrow} alt="" />
            </div> 
            
                     
        </div>
    );
};

export default Menu;