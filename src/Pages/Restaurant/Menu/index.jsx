import React from "react";
import MenuPage from "./MenuPage";
import Cart from "../../../Components/Cart";

const Menu = () => {
    return(
        <div className='main_wrapper'>
            <MenuPage />
            <Cart />
        </div>
      )
}

export default Menu;