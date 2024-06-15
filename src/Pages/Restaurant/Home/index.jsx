import React from "react";
import HomePage from "./HomePage";
import RestaurantFooter from "./RestaurantFooter";

const Home = () => {
    return(
        <div className='footer_wrapper'>
            <HomePage/>
            <RestaurantFooter />
        </div>
      )
}

export default Home;