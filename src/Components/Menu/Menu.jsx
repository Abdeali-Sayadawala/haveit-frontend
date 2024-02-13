import React from 'react';
import './Menu.css';
import pizza from '../Assets/pizza.jpg';
import rollups from '../Assets/rollups.png';
import FoodCard from '../FoodCard/FoodCard';

const Menu = () => {
    return (
        <div>
            <div className='categories_label'>
                Categories
            </div>
            <div className="scroll">
                <div className="scroll__item">
                    <div className='cat_gradient'></div>
                    <img src={pizza} alt="" />
                    <span>Roll Ups</span>
                </div>
                <div className="scroll__item">
                    <div className='cat_gradient'></div>
                    <img src={pizza} alt="" />
                    <span>Pasta paradise</span>
                </div>
                <div className="scroll__item">
                    <div className='cat_gradient'></div>
                    <img src={pizza} alt="" />
                    <span>Slice of Heaven</span>
                </div>
                <div className="scroll__item">
                    <div className='cat_gradient'></div>
                    <img src={pizza} alt="" />
                    <span>Shakes</span>
                </div>
                <div className="scroll__item">
                    <div className='cat_gradient'></div>
                    <img src={pizza} alt="" />
                    <span>The Sub Commander</span>
                </div>
                <div className="scroll__item">
                    <div className='cat_gradient'></div>
                    <img src={pizza} alt="" />
                    <span>Clubhouse Cruncher</span>
                </div>
                <div className="scroll__item">
                    <div className='cat_gradient'></div>
                    <img src={pizza} alt="" />
                    <span>Noodles Nirvana</span>
                </div>
                <div className="scroll__item">
                    <div className='cat_gradient'></div>
                    <img src={pizza} alt="" />
                    <span>Sides</span>
                </div>
            </div>
            <div className = 'menu_border'>
                <div className='menu_title'>
                    Roll Ups
                </div>
                <img className='menu_title_icon' src={rollups} alt="" />
            </div> 
            <FoodCard />           
        </div>
    );
};

export default Menu;