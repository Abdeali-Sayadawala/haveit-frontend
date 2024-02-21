import React from 'react';
import './FoodCard.css';

const FoodCard = ({itemData}) => {

    const cartItemUpdate = (action, itemIdPrp) => {
        const badgeList = document.getElementsByClassName("MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorSuccess");
        var cartItems;
        var totalCount;
        if (localStorage.getItem('cartItems') === null) {
            cartItems = {item: {}, totalCount: 0};
            totalCount = 0;
        }else {
            cartItems = JSON.parse(localStorage.getItem('cartItems'));
            totalCount = cartItems.totalCount;
        }

        if (action === 'add') {
            if (cartItems.item[itemIdPrp] === undefined){
                cartItems.item[itemIdPrp] = 1;
            }else {
                cartItems.item[itemIdPrp] = cartItems.item[itemIdPrp] + 1;
            }
            totalCount = totalCount + 1;
            cartItems.totalCount = totalCount;
        }

        if (action === 'min') {
            if (cartItems.item[itemIdPrp] === undefined || cartItems.item[itemIdPrp] === 0){
                cartItems.item[itemIdPrp] = 0;
            }else{
                cartItems.item[itemIdPrp] = cartItems.item[itemIdPrp] - 1;
                totalCount = totalCount - 1;
                cartItems.totalCount = totalCount;
            }
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        badgeList[0].innerHTML = totalCount;
        if (totalCount === 0){
            badgeList[0].classList.add('MuiBadge-invisible');
        }else {
            badgeList[0].classList.remove('MuiBadge-invisible');
        }
        
    }

    const itemAdd = (event) => {
        const food_id = event.target.id.split('_')[1];
        const item_input = document.getElementById('fooditem_' + food_id).value;
        document.getElementById('fooditem_' + food_id).value = parseInt(item_input)+1;
        cartItemUpdate('add', food_id.toString());
    }

    const itemMinus = (event) => {
        const food_id = event.target.id.split('_')[1];
        const item_input = document.getElementById('fooditem_' + food_id).value;
        if (item_input > 0) {
            document.getElementById('fooditem_' + food_id).value = parseInt(item_input)-1;
            cartItemUpdate('min', food_id.toString());
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
