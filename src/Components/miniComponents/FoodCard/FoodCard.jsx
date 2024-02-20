import React from 'react';
import './FoodCard.css';

const FoodCard = ({itemData}) => {

    const itemAdd = (event) => {
        const food_id = event.target.id.split('_')[1];
        const item_input = document.getElementById('fooditem_' + food_id).value;
        document.getElementById('fooditem_' + food_id).value = parseInt(item_input)+1;
        
    }

    const itemMinus = (event) => {
        const food_id = event.target.id.split('_')[1];
        const item_input = document.getElementById('fooditem_' + food_id).value;
        if (item_input > 0) {
            document.getElementById('fooditem_' + food_id).value = parseInt(item_input)-1;
          } else {
            document.getElementById('fooditem_' + food_id).value = 0;
          }
    }

    return (
        <div className="food-card">
        <div className="food-card_img">
            <img src="https://i.imgur.com/eFWRUuR.jpg" alt=""/>
            <a href="#!"><i className="fa fa-heart"></i></a>
        </div>
        <div className="food-card_content">
            <div className="food-card_title-section">
                <a href="#!" className="food-card_title">{itemData.item_name}</a>
            </div>
            <div className="food-card_bottom-section">
                <div className="space-between_desc">
                    <div className='description'>
                    {itemData.item_desc}
                    </div>
                    <div className="pull-right">
                        <span className="badge badge-success"></span>
                    </div>
                </div>
                <div className="space-between">
                    <div className="food-card_price">
                        <span>{itemData.item_price} Rs.</span>
                    </div>
                    <div className="wrapper">
                        <button id={'foodminus_'+itemData.item_id} className="plusminus minus" onClick={itemMinus} >-</button>
                        <input id={'fooditem_'+itemData.item_id} type="number" className="num" value="0" />
                        <button id={'foodadd_'+itemData.item_id} className="plusminus plus" onClick={itemAdd} >+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;
