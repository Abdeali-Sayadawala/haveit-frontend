import React from 'react';
import './FoodCard.css';

const FoodCard = () => {
    return (
        <div className="food-card">
        <div className="food-card_img">
            <img src="https://i.imgur.com/eFWRUuR.jpg" alt=""/>
            <a href="#!"><i className="fa fa-heart"></i></a>
        </div>
        <div className="food-card_content">
            <div className="food-card_title-section">
                <a href="#!" className="food-card_title">Double Cheese Potato Burger</a>
            </div>
            <div className="food-card_bottom-section">
                <div className="space-between_desc">
                    <div className='description'>
                        220 - 280 Kcal
                    </div>
                    <div className="pull-right">
                        <span className="badge badge-success"></span>
                    </div>
                </div>
                <div className="space-between">
                    <div className="food-card_price">
                        <span>250 Rs.</span>
                    </div>
                    <div class="wrapper">
                        <button class="plusminus minus" >-</button>
                        <input type="number" class="num" value="0" />
                        <button class="plusminus plus" >+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;
